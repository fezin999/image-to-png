'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

export default function FAQ({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 pr-4">
                {faq.question}
              </h3>
              <svg
                className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            
            {openIndex === index && (
              <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Format-specific FAQ generators
export function generateFormatFAQs(format: string, targetFormat: string = 'png'): FAQItem[] {
  const formatUpper = format.toUpperCase();
  const targetUpper = targetFormat.toUpperCase();
  const isReverse = format === 'png';
  
  if (isReverse) {
    return [
      {
        question: `How do I convert PNG to ${targetUpper}?`,
        answer: `Converting PNG to ${targetUpper} is simple: 1) Click the upload area or drag and drop your PNG file, 2) Wait for the automatic conversion (happens instantly in your browser), 3) Click the download button to save your ${targetUpper} file. No registration or software installation required.`,
      },
      {
        question: `Is it free to convert PNG to ${targetUpper}?`,
        answer: `Yes, our PNG to ${targetUpper} converter is completely free with no hidden costs, no file size limits, and no watermarks. You can convert as many files as you need without any restrictions.`,
      },
      {
        question: `Is my file uploaded to your servers?`,
        answer: `No! All conversions happen 100% in your browser using client-side JavaScript. Your files never leave your device, ensuring complete privacy and security. This also makes the conversion faster since there's no upload/download time.`,
      },
      {
        question: `What's the difference between PNG and ${targetUpper}?`,
        answer: `PNG (Portable Network Graphics) is a lossless format that supports transparency, making it ideal for logos and graphics. ${targetUpper === 'JPEG' || targetUpper === 'JPG' ? 'JPEG is a lossy format optimized for photographs with smaller file sizes but no transparency support.' : targetUpper === 'WEBP' ? 'WEBP is a modern format that offers better compression than both PNG and JPEG while supporting transparency.' : `${targetUpper} has its own characteristics depending on the specific use case.`}`,
      },
      {
        question: `Can I convert multiple PNG files at once?`,
        answer: `Yes! Our tool supports batch conversion. Simply select multiple PNG files at once or drag and drop them all together. Each file will be converted individually and you can download them one by one or all at once.`,
      },
      {
        question: `Will converting PNG to ${targetUpper} reduce quality?`,
        answer: `${targetUpper === 'JPEG' || targetUpper === 'JPG' ? 'JPEG uses lossy compression, so there will be some quality loss. However, we offer quality settings (High, Medium, Compressed) to control the trade-off between file size and quality.' : 'Quality depends on the target format and compression settings you choose. We offer multiple quality presets to suit your needs.'}`,
      },
      {
        question: `What happens to transparency when converting PNG?`,
        answer: `${targetUpper === 'JPEG' || targetUpper === 'JPG' ? 'JPEG does not support transparency. Transparent areas in your PNG will be replaced with a white background.' : targetUpper === 'WEBP' ? 'WEBP supports transparency just like PNG, so your transparent areas will be preserved.' : 'This depends on whether the target format supports transparency. Some formats preserve it, others replace it with a solid color.'}`,
      },
      {
        question: `Can I use this converter on mobile?`,
        answer: `Absolutely! Our converter is fully responsive and works on all devices including smartphones and tablets (iOS and Android). The touch-friendly interface makes it easy to select and convert images on mobile.`,
      },
    ];
  }
  
  return [
    {
      question: `How do I convert ${formatUpper} to PNG?`,
      answer: `Converting ${formatUpper} to PNG is simple with our free online tool: 1) Click the upload area or drag and drop your ${formatUpper} file, 2) Wait for the automatic conversion (it happens instantly in your browser), 3) Click the download button to save your PNG file. The entire process takes just seconds and requires no registration.`,
    },
    {
      question: `Is it free to convert ${formatUpper} to PNG?`,
      answer: `Yes! Our ${formatUpper} to PNG converter is 100% free with no hidden fees, no file size limits, and unlimited conversions. You can convert as many ${formatUpper} files to PNG as you need without any restrictions or watermarks.`,
    },
    {
      question: `Are my files uploaded to your servers?`,
      answer: `No, your files are never uploaded! All conversions happen 100% in your browser using client-side processing. Your ${formatUpper} files never leave your device, ensuring complete privacy and security. This also makes the conversion faster since there's no upload or download time to our servers.`,
    },
    {
      question: `Why should I convert ${formatUpper} to PNG?`,
      answer: `PNG is ideal when you need lossless quality, transparency support, or working with graphics and logos. Unlike JPEG, PNG doesn't lose quality through compression. Convert ${formatUpper} to PNG when you need to preserve image quality, maintain transparent backgrounds, or prepare images for professional printing or web design.`,
    },
    {
      question: `Can I convert multiple ${formatUpper} files at once?`,
      answer: `Yes! Our tool supports batch conversion. Simply select multiple ${formatUpper} files at once (Ctrl/Cmd + Click) or drag and drop them all together. Each file will be converted to PNG individually, and you can download them one by one or use the "Download All" button.`,
    },
    {
      question: `Will the quality be preserved when converting ${formatUpper} to PNG?`,
      answer: `Yes! PNG is a lossless format, which means it preserves the quality of your original ${formatUpper} image perfectly. We offer quality settings (High, Medium, Compressed) that affect file size while maintaining excellent visual quality. The High quality setting (100%) ensures zero quality loss.`,
    },
    {
      question: `What's the maximum file size I can convert?`,
      answer: `There is no file size limit! Since conversion happens in your browser, you can convert ${formatUpper} files of any size. However, very large files may take longer to process depending on your device's capabilities.`,
    },
    {
      question: `Do I need to install any software?`,
      answer: `No installation required! Our ${formatUpper} to PNG converter works entirely in your web browser. It's compatible with Chrome, Firefox, Safari, Edge, and all modern browsers on Windows, Mac, Linux, iOS, and Android.`,
    },
    {
      question: `Can I resize images while converting to PNG?`,
      answer: `Yes! We offer optional resize functionality. You can specify custom width and height values, and the tool will automatically maintain aspect ratio (unless you disable this option). This is useful for creating thumbnails or optimizing images for web use.`,
    },
    {
      question: `Is it safe to use this converter?`,
      answer: `Absolutely! Since all processing happens in your browser and files never leave your device, it's completely safe and private. We don't store, view, or have any access to your ${formatUpper} files. There's no data collection or privacy concerns.`,
    },
    {
      question: `How long does conversion take?`,
      answer: `Conversion is almost instant! Since everything happens in your browser, most ${formatUpper} files convert to PNG in under a second. Larger files or batch conversions may take a few seconds longer, but there's no waiting for uploads or downloads.`,
    },
    {
      question: `Can I use the converted PNG files commercially?`,
      answer: `Yes! The converted files are yours to use however you wish, including for commercial purposes. We don't add watermarks or impose any usage restrictions. However, make sure you have the rights to the original ${formatUpper} images you're converting.`,
    },
  ];
}
