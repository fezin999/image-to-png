'use client';

import { useState, useCallback, useRef } from 'react';
import JSZip from 'jszip';
import {
  convertImageToPNG,
  convertPNGToFormat,
  formatFileSize,
  isValidImageFile,
  type ConversionOptions,
  type ConversionResult,
} from '@/lib/imageConverter';

interface ConverterProps {
  sourceFormat?: string;
  targetFormat?: string;
  unlimitedMode?: boolean;
  showBranding?: boolean;
}

interface ConversionState {
  file: File;
  status: 'pending' | 'converting' | 'completed' | 'error';
  progress: number;
  result?: ConversionResult;
  error?: string;
  preview?: string;
}

export default function Converter({ sourceFormat, targetFormat = 'png', unlimitedMode = false, showBranding = true }: ConverterProps) {
  const [conversions, setConversions] = useState<ConversionState[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [options, setOptions] = useState<ConversionOptions>({
    quality: 'high',
    maintainAspectRatio: true,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [conversionCount, setConversionCount] = useState(0);
  const [showLimitModal, setShowLimitModal] = useState(false);
  const MAX_CONVERSIONS = unlimitedMode ? 999 : 5;

  const handleFiles = useCallback(async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const fileArray = Array.from(files);
    const validFiles = fileArray.filter(isValidImageFile);

    if (validFiles.length === 0) {
      alert('Please select valid image files');
      return;
    }

    // Check current active conversions
    const activeConversions = conversions.filter(c => c.status !== 'completed' && c.status !== 'error').length;
    const availableSlots = MAX_CONVERSIONS - activeConversions;

    // If user tries to add more than available slots
    if (validFiles.length > availableSlots) {
      setShowLimitModal(true);
      // Take only the first available files
      validFiles.splice(availableSlots);
      
      if (validFiles.length === 0) {
        return;
      }
    }

    const newConversions: ConversionState[] = validFiles.map((file) => ({
      file,
      status: 'pending',
      progress: 0,
      preview: URL.createObjectURL(file),
    }));

    setConversions((prev) => [...prev, ...newConversions]);

    // Process each file
    for (let i = 0; i < validFiles.length; i++) {
      const file = validFiles[i];
      const conversionIndex = conversions.length + i;

      setConversions((prev) => {
        const updated = [...prev];
        updated[conversionIndex] = { ...updated[conversionIndex], status: 'converting', progress: 50 };
        return updated;
      });

      try {
        let result: ConversionResult;
        
        if (sourceFormat === 'png') {
          // Convert PNG to other format
          result = await convertPNGToFormat(file, targetFormat, options);
        } else {
          // Convert to PNG
          result = await convertImageToPNG(file, options);
        }

        setConversions((prev) => {
          const updated = [...prev];
          updated[conversionIndex] = {
            ...updated[conversionIndex],
            status: 'completed',
            progress: 100,
            result,
          };
          return updated;
        });

        setConversionCount((prev) => prev + 1);
      } catch (error) {
        setConversions((prev) => {
          const updated = [...prev];
          updated[conversionIndex] = {
            ...updated[conversionIndex],
            status: 'error',
            error: error instanceof Error ? error.message : 'Conversion failed',
          };
          return updated;
        });
      }
    }
  }, [conversions.length, options, sourceFormat, targetFormat]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      handleFiles(e.dataTransfer.files);
    },
    [handleFiles]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleFiles(e.target.files);
    },
    [handleFiles]
  );

  const handleDownload = (conversion: ConversionState) => {
    if (!conversion.result) return;

    const link = document.createElement('a');
    link.href = conversion.result.url;
    link.download = conversion.result.fileName;
    link.click();
  };

  const handleDownloadAll = () => {
    const completedConversions = conversions.filter((c) => c.status === 'completed' && c.result);
    
    if (completedConversions.length === 0) return;

    completedConversions.forEach((conversion, index) => {
      if (conversion.result) {
        setTimeout(() => {
          const link = document.createElement('a');
          link.href = conversion.result!.url;
          link.download = conversion.result!.fileName;
          link.click();
        }, index * 100); // Small delay between downloads
      }
    });
  };

  const handleDownloadAsZip = async () => {
    const completedConversions = conversions.filter((c) => c.status === 'completed' && c.result);
    
    if (completedConversions.length === 0) return;

    try {
      const zip = new JSZip();
      
      // Add each converted image to the ZIP
      for (const conversion of completedConversions) {
        if (conversion.result) {
          const response = await fetch(conversion.result.url);
          const blob = await response.blob();
          zip.file(conversion.result.fileName, blob);
        }
      }
      
      // Generate ZIP file
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      
      // Download ZIP
      const link = document.createElement('a');
      link.href = URL.createObjectURL(zipBlob);
      link.download = `converted-images-${Date.now()}.zip`;
      link.click();
      
      // Cleanup
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error('Error creating ZIP:', error);
      alert('Failed to create ZIP file. Please try downloading individually.');
    }
  };

  const handleClear = () => {
    conversions.forEach((conversion) => {
      if (conversion.preview) URL.revokeObjectURL(conversion.preview);
      if (conversion.result) URL.revokeObjectURL(conversion.result.url);
    });
    setConversions([]);
  };

  const completedCount = conversions.filter((c) => c.status === 'completed').length;

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Upload Area */}
      <div
        className={`relative border-4 border-dashed rounded-2xl p-12 text-center transition-all ${
          isDragging
            ? 'border-primary bg-primary/5 scale-105'
            : 'border-gray-300 hover:border-primary hover:bg-gray-50'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileInput}
          className="hidden"
        />

        <div className="flex flex-col items-center gap-4">
          <div className="p-4 bg-primary/10 rounded-full">
            <svg
              className="w-12 h-12 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </div>

          <div>
            <p className="text-xl font-semibold text-gray-700 mb-2">
              {isDragging ? 'Drop your images here' : 'Drag & drop images'}
            </p>
            <p className="text-sm text-gray-500 mb-4">or</p>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Browse Files
            </button>
          </div>

          <div className="text-xs text-gray-500 space-y-1">
            <p>Supports: JPEG, PNG, WEBP, GIF, BMP, TIFF, SVG, ICO, HEIC, AVIF, and more</p>
            {!unlimitedMode && (
              <p className="font-medium">Maximum {MAX_CONVERSIONS} simultaneous conversions</p>
            )}
          </div>
        </div>
      </div>

      {/* Conversion List */}
      {conversions.length > 0 && (
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">
              Conversions ({completedCount}/{conversions.length})
            </h3>
            <div className="flex gap-2">
              {completedCount > 0 && (
                <>
                  <button
                    onClick={handleDownloadAll}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                  >
                    Download All
                  </button>
                  <button
                    onClick={handleDownloadAsZip}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Download as ZIP
                  </button>
                </>
              )}
              <button
                onClick={handleClear}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
              >
                Clear All
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {conversions.map((conversion, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-4"
              >
                <div className="flex items-center gap-4">
                  {/* Preview */}
                  {conversion.preview && (
                    <div className="flex-shrink-0">
                      <img
                        src={conversion.preview}
                        alt={conversion.file.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    </div>
                  )}

                  {/* File Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 truncate">
                      {conversion.file.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {formatFileSize(conversion.file.size)}
                    </p>

                    {/* Status */}
                    <div className="mt-2">
                      {conversion.status === 'pending' && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          <span className="text-sm">Waiting...</span>
                        </div>
                      )}

                      {conversion.status === 'converting' && (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-blue-600">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            <span className="text-sm">Converting...</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full transition-all"
                              style={{ width: `${conversion.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}

                      {conversion.status === 'completed' && conversion.result && (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-green-600">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-sm font-medium">Completed!</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>Format: {conversion.result.format.toUpperCase()}</span>
                            <span>Size: {formatFileSize(conversion.result.newSize)}</span>
                            {conversion.result.compressionRatio && (
                              <span className="text-green-600 font-medium">
                                {Math.round((1 - conversion.result.compressionRatio) * 100)}% smaller
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {conversion.status === 'error' && (
                        <div className="flex items-center gap-2 text-red-600">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          <span className="text-sm">{conversion.error}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Download Button */}
                  {conversion.status === 'completed' && (
                    <button
                      onClick={() => handleDownload(conversion)}
                      className="flex-shrink-0 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
                    >
                      Download
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Limit Warning Modal */}
      {showLimitModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Conversion Limit Reached
                </h3>
                <p className="text-gray-600 mb-4">
                  You can only convert up to {MAX_CONVERSIONS} images at a time. We've selected the first {MAX_CONVERSIONS} images from your selection.
                </p>
                <button
                  onClick={() => setShowLimitModal(false)}
                  className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
