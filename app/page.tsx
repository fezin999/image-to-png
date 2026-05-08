import Converter from '@/components/Converter';
import FAQ, { generateFormatFAQs } from '@/components/FAQ';
import RelatedTools from '@/components/RelatedTools';
import { HeaderAd, InContentAd, BottomAd } from '@/components/AdUnit';
import { generateFAQSchema, generateWebApplicationSchema } from '@/lib/seoConfig';

export default function Home() {
  const faqs = [
    {
      question: 'Is this image converter really free?',
      answer: 'Yes! Our image to PNG converter is 100% free with no hidden costs, no file limits, no watermarks, and unlimited conversions. All processing happens in your browser, so there are no server costs to pass on to you.',
    },
    {
      question: 'How does client-side conversion work?',
      answer: 'Client-side conversion means all image processing happens directly in your web browser using JavaScript. Your files never leave your device - they are not uploaded to any server. This ensures maximum privacy, security, and speed.',
    },
    {
      question: 'What image formats can I convert to PNG?',
      answer: 'We support all major image formats including JPEG, JPG, WEBP, GIF, BMP, TIFF, SVG, ICO, and HEIC. Simply drag and drop your image or click to upload, and we\'ll handle the conversion automatically.',
    },
    {
      question: 'Can I convert multiple images at once?',
      answer: 'Absolutely! Our batch conversion feature allows you to select and convert multiple images simultaneously. Just drag and drop all your files or select multiple files when uploading.',
    },
    {
      question: 'Are there any file size limits?',
      answer: 'No! Since conversion happens in your browser, there are no file size restrictions. However, very large files may take longer to process depending on your device\'s capabilities.',
    },
    {
      question: 'Will my images be stored or shared?',
      answer: 'Never! Your images are processed entirely in your browser and never uploaded to our servers. We have zero access to your files, ensuring complete privacy and security. Once you close the browser tab, everything is gone.',
    },
    {
      question: 'What quality settings should I use?',
      answer: 'For most use cases, "High (100%)" quality is recommended to preserve maximum image quality. Use "Medium (85%)" for a good balance between quality and file size. "Compressed (60%)" is best when you need smaller files and can accept some quality reduction.',
    },
    {
      question: 'Do I need to install any software?',
      answer: 'No installation required! Our converter works entirely in your web browser. It\'s compatible with all modern browsers including Chrome, Firefox, Safari, and Edge on Windows, Mac, Linux, iOS, and Android.',
    },
    {
      question: 'How do I convert images on mobile?',
      answer: 'Our tool is fully mobile-responsive! On your smartphone or tablet, simply tap the upload area to select images from your photo library or take a new photo. The conversion process works exactly the same as on desktop.',
    },
    {
      question: 'Can I resize images during conversion?',
      answer: 'Yes! Our converter includes optional resize functionality. Just enter your desired width and/or height in the options panel before uploading. We automatically maintain aspect ratio unless you specify otherwise.',
    },
  ];

  const faqSchema = generateFAQSchema(faqs);
  const webAppSchema = generateWebApplicationSchema('image');

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />

      {/* Header Ad */}
      <HeaderAd />

      {/* Hero Section */}
      <section id="converter" className="bg-gradient-to-b from-primary/10 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Convert Any Image to PNG
              <span className="block text-primary mt-2">Free & Secure</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Fast, secure, 100% client-side image conversion. No upload required.
              Support for JPEG, JPG, WEBP, GIF, BMP, TIFF, SVG, ICO, HEIC.
              <span className="block mt-2 text-purple-600 font-semibold">✨ Automatically removes all metadata (EXIF, GPS, AI markers)</span>
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">100% Free</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">100% Secure</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                <span className="font-semibold">20M+ Conversions</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Instant Conversion</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Auto Metadata Cleanup</span>
              </div>
            </div>
          </div>

          {/* Converter */}
          <Converter />
        </div>
      </section>

      {/* In-Content Ad #1 */}
      <InContentAd />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Why Choose Our PNG Converter?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            The most advanced, secure, and user-friendly image conversion tool available online
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">100% Private & Secure</h3>
              <p className="text-gray-600">
                Your files never leave your device. All conversion happens in your browser with zero server uploads.
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl p-8">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-gray-600">
                Instant conversion with no waiting. Process thousands of images without any delays.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Batch Conversion</h3>
              <p className="text-gray-600">
                Convert multiple images at once. Save time with our efficient batch processing.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">High Quality Output</h3>
              <p className="text-gray-600">
                Preserve image quality with our advanced conversion algorithms. Multiple quality presets available.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Mobile Friendly</h3>
              <p className="text-gray-600">
                Works perfectly on all devices. Convert images on your phone, tablet, or computer.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Advanced Options</h3>
              <p className="text-gray-600">
                Customize quality settings, resize images, and adjust compression levels to fit your needs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-100 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-2 right-2">
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">NEW</span>
              </div>
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Auto Metadata Removal</h3>
              <p className="text-gray-600">
                Automatically strips EXIF, GPS, AI generation markers, and all metadata. Clean, private images.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metadata Removal Feature - Highlight */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Automatic Metadata Removal
            </h2>
            <p className="text-xl mb-6 text-white/90">
              Your privacy matters. All converted images are automatically cleaned.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-left">
              <h3 className="text-2xl font-bold mb-4 text-center">What Gets Removed:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold">EXIF Data</p>
                    <p className="text-sm text-white/80">Camera settings, date/time, GPS location</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold">AI Generation Markers</p>
                    <p className="text-sm text-white/80">Midjourney, DALL-E, Stable Diffusion tags</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold">IPTC & XMP</p>
                    <p className="text-sm text-white/80">Copyright, keywords, author information</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold">Embedded Thumbnails</p>
                    <p className="text-sm text-white/80">Hidden preview images and color profiles</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white/10 rounded-xl">
                <p className="text-sm text-white/90">
                  <strong>Result:</strong> Clean PNG files with only pixel data. Perfect for sharing online without revealing sensitive information or AI generation indicators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-Content Ad #2 */}
      <InContentAd />

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            How to Convert Images to PNG
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Simple 3-step process to convert any image format to PNG in seconds
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Upload Images</h3>
                <p className="text-gray-600">
                  Click the upload area or drag and drop your image files. Supports multiple files at once.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Auto Convert</h3>
                <p className="text-gray-600">
                  Conversion happens instantly in your browser. No waiting, no uploads to servers.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Download PNG</h3>
                <p className="text-gray-600">
                  Click download to save your converted PNG files. Download individually or all at once.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Formats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Supported Image Formats
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Convert from any of these formats to PNG with just a few clicks
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {['JPEG', 'JPG', 'WEBP', 'GIF', 'BMP', 'TIFF', 'SVG', 'ICO', 'HEIC', 'HEIF', 'AVIF', 'JXL', 'JP2', 'APNG', 'TIF'].map((format) => (
              <div
                key={format}
                className="bg-gradient-to-br from-gray-50 to-gray-100 hover:from-primary/10 hover:to-primary/20 rounded-xl p-6 text-center font-bold text-lg transition-all hover:scale-105 hover:shadow-lg border border-gray-200 cursor-default"
              >
                {format}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-Content Ad #3 */}
      <InContentAd />

      {/* Related Tools */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <RelatedTools />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* Bottom Ad */}
      <BottomAd />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Convert Your Images?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join millions of users who trust our free, secure, and lightning-fast image converter
          </p>
          <a
            href="#top"
            className="inline-block bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
          >
            Start Converting Now - It's Free!
          </a>
        </div>
      </section>
    </>
  );
}
