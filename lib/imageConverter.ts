export interface ConversionOptions {
  quality: 'high' | 'medium' | 'compressed';
  width?: number;
  height?: number;
  maintainAspectRatio?: boolean;
}

export interface ConversionResult {
  blob: Blob;
  url: string;
  fileName: string;
  originalSize: number;
  newSize: number;
  format: string;
}

const QUALITY_MAP = {
  high: 1.0,
  medium: 0.85,
  compressed: 0.6,
};

/**
 * Convert image file to PNG format
 * IMPORTANT: This function automatically removes ALL metadata from images:
 * - EXIF data (camera settings, date/time, GPS location)
 * - IPTC data (copyright, keywords, author)
 * - XMP data (Adobe metadata, AI generation markers)
 * - Thumbnail images embedded in EXIF
 * - Color profiles and ICC data
 * 
 * The output is a clean PNG with only pixel data, no metadata whatsoever.
 */
export async function convertImageToPNG(
  file: File,
  options: ConversionOptions = { quality: 'high' }
): Promise<ConversionResult> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const img = new Image();
      
      img.onload = () => {
        try {
          // Create canvas
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          
          if (!ctx) {
            throw new Error('Could not get canvas context');
          }
          
          // Calculate dimensions
          let { width, height } = img;
          
          if (options.width || options.height) {
            if (options.maintainAspectRatio !== false) {
              const aspectRatio = width / height;
              
              if (options.width && !options.height) {
                width = options.width;
                height = width / aspectRatio;
              } else if (options.height && !options.width) {
                height = options.height;
                width = height * aspectRatio;
              } else if (options.width && options.height) {
                width = options.width;
                height = options.height;
              }
            } else {
              width = options.width || width;
              height = options.height || height;
            }
          }
          
          canvas.width = width;
          canvas.height = height;
          
          // Draw image on canvas (this automatically strips ALL metadata)
          // Including: EXIF, IPTC, XMP, AI generation data, GPS, camera info, etc.
          ctx.drawImage(img, 0, 0, width, height);
          
          // Convert to PNG blob (clean, metadata-free)
          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error('Failed to convert image'));
                return;
              }
              
              const url = URL.createObjectURL(blob);
              const fileName = file.name.replace(/\.[^/.]+$/, '') + '.png';
              
              resolve({
                blob,
                url,
                fileName,
                originalSize: file.size,
                newSize: blob.size,
                format: 'png',
              });
            },
            'image/png',
            QUALITY_MAP[options.quality]
          );
        } catch (error) {
          reject(error);
        }
      };
      
      img.onerror = () => {
        reject(new Error('Failed to load image'));
      };
      
      if (e.target?.result) {
        img.src = e.target.result as string;
      }
    };
    
    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };
    
    reader.readAsDataURL(file);
  });
}

/**
 * Convert PNG to another format
 */
export async function convertPNGToFormat(
  file: File,
  targetFormat: string,
  options: ConversionOptions = { quality: 'high' }
): Promise<ConversionResult> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const img = new Image();
      
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          
          if (!ctx) {
            throw new Error('Could not get canvas context');
          }
          
          let { width, height } = img;
          
          if (options.width || options.height) {
            if (options.maintainAspectRatio !== false) {
              const aspectRatio = width / height;
              
              if (options.width && !options.height) {
                width = options.width;
                height = width / aspectRatio;
              } else if (options.height && !options.width) {
                height = options.height;
                width = height * aspectRatio;
              } else if (options.width && options.height) {
                width = options.width;
                height = options.height;
              }
            } else {
              width = options.width || width;
              height = options.height || height;
            }
          }
          
          canvas.width = width;
          canvas.height = height;
          
          // For JPEG, fill with white background (no transparency)
          if (targetFormat === 'jpeg' || targetFormat === 'jpg') {
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, width, height);
          }
          
          // Draw image (strips all metadata automatically)
          ctx.drawImage(img, 0, 0, width, height);
          
          const mimeType = targetFormat === 'jpg' ? 'image/jpeg' : `image/${targetFormat}`;
          
          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error('Failed to convert image'));
                return;
              }
              
              const url = URL.createObjectURL(blob);
              const fileName = file.name.replace(/\.[^/.]+$/, '') + `.${targetFormat}`;
              
              resolve({
                blob,
                url,
                fileName,
                originalSize: file.size,
                newSize: blob.size,
                format: targetFormat,
              });
            },
            mimeType,
            QUALITY_MAP[options.quality]
          );
        } catch (error) {
          reject(error);
        }
      };
      
      img.onerror = () => {
        reject(new Error('Failed to load image'));
      };
      
      if (e.target?.result) {
        img.src = e.target.result as string;
      }
    };
    
    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };
    
    reader.readAsDataURL(file);
  });
}

/**
 * Format file size for display
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Validate if file is an image
 */
export function isValidImageFile(file: File): boolean {
  const validTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
    'image/webp',
    'image/bmp',
    'image/tiff',
    'image/svg+xml',
    'image/x-icon',
    'image/vnd.microsoft.icon',
    'image/heic',
    'image/heif',
    'image/avif',
    'image/jxl',
    'image/jp2',
    'image/jpx',
    'image/apng',
    'image/x-ms-bmp',
    'image/x-bmp',
    'image/vnd.adobe.photoshop',
  ];
  
  return validTypes.includes(file.type) || /\.(jpe?g|png|gif|webp|bmp|tiff?|svg|ico|heic|heif|avif|jxl|jp2|jpx|apng|dib|cur|psd)$/i.test(file.name);
}

/**
 * Get file extension from filename
 */
export function getFileExtension(filename: string): string {
  const ext = filename.split('.').pop()?.toLowerCase() || '';
  return ext === 'jpg' ? 'jpeg' : ext;
}
