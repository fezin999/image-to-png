import { Metadata } from 'next';
import Converter from '@/components/Converter';
import FAQ, { generateFormatFAQs } from '@/components/FAQ';
import RelatedTools, { Breadcrumbs } from '@/components/RelatedTools';
import { HeaderAd, InContentAd, BottomAd } from '@/components/AdUnit';
import { 
  generateConverterMetadata, 
  generateFAQSchema, 
  generateWebApplicationSchema,
  generateHowToSchema,
  generateBreadcrumbSchema,
  SUPPORTED_FORMATS 
} from '@/lib/seoConfig';

interface PageProps {
  params: {
    format: string;
  };
}

export async function generateStaticParams() {
  return SUPPORTED_FORMATS.map((format) => ({
    format,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const format = params.format.toLowerCase();
  return generateConverterMetadata('png', format);
}

export default function PNGToFormatPage({ params }: PageProps) {
  const format = params.format.toLowerCase();
  const formatUpper = format.toUpperCase();
  
  const faqs = generateFormatFAQs('png', format);
  const faqSchema = generateFAQSchema(faqs);
  const webAppSchema = generateWebApplicationSchema('png');
  const howToSchema = generateHowToSchema('png');
  const breadcrumbItems = [
    { name: 'Home', url: 'https://jpeg-to-png-converter.com' },
    { name: `PNG to ${formatUpper}`, url: `https://jpeg-to-png-converter.com/png-to-${format}` },
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header Ad */}
      <HeaderAd />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: `PNG to ${formatUpper}`, url: `/png-to-${format}` }]} />

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Convert PNG to {formatUpper} Free Online
          </h1>
          <p className="text-xl text-gray-600">
            Fast, secure, 100% client-side PNG to {formatUpper} converter. No upload required, unlimited conversions.
          </p>
        </div>

        {/* Converter */}
        <Converter sourceFormat="png" targetFormat={format} />

        {/* In-Content Ad #1 */}
        <InContentAd className="mt-12" />

        {/* How to Convert Section */}
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            How to Convert PNG to {formatUpper}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              Converting PNG files to {formatUpper} format is quick and easy with our free online converter. 
              Whether you need to reduce file size, ensure compatibility, or meet specific format requirements, 
              our tool makes the conversion process simple and secure. Follow these steps:
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">1</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Select Your PNG File</h3>
                    <p className="text-gray-600">
                      Click the upload area or drag and drop your PNG file. Multiple files can be selected 
                      for batch conversion. Files are processed entirely in your browser for maximum security.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">2</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Choose Quality Settings</h3>
                    <p className="text-gray-600">
                      Before uploading, you can select quality settings: High (100%), Medium (85%), or Compressed (60%). 
                      Higher quality maintains better image fidelity but results in larger file sizes.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">3</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Download {formatUpper} File</h3>
                    <p className="text-gray-600">
                      Conversion happens instantly. Click download to save your {formatUpper} file. 
                      For multiple files, use the "Download All" button to get all converted files at once.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* In-Content Ad #2 */}
        <InContentAd className="mt-12" />

        {/* Why Convert Section */}
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Why Convert PNG to {formatUpper}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(format === 'jpeg' || format === 'jpg') && (
              <>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Smaller File Sizes
                  </h3>
                  <p className="text-gray-600">
                    JPEG uses efficient lossy compression, resulting in much smaller file sizes. 
                    Perfect for websites and email attachments where file size matters.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Better for Photos
                  </h3>
                  <p className="text-gray-600">
                    JPEG is optimized for photographic images with many colors and gradients. 
                    It provides excellent quality at smaller file sizes for photos.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    Universal Support
                  </h3>
                  <p className="text-gray-600">
                    JPEG is the most widely supported image format across all platforms, 
                    devices, and applications.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Faster Loading
                  </h3>
                  <p className="text-gray-600">
                    Smaller JPEG files load faster on websites and in applications, 
                    improving user experience and page speed.
                  </p>
                </div>
              </>
            )}
            {format === 'webp' && (
              <>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Superior Compression
                  </h3>
                  <p className="text-gray-600">
                    WEBP offers 25-35% smaller file sizes compared to PNG while maintaining similar quality. 
                    Ideal for modern websites and applications.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    Transparency Support
                  </h3>
                  <p className="text-gray-600">
                    Like PNG, WEBP supports alpha channel transparency, but with much better compression efficiency.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Modern Standard
                  </h3>
                  <p className="text-gray-600">
                    WEBP is the modern image format recommended by Google for web performance and SEO optimization.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Faster Page Loads
                  </h3>
                  <p className="text-gray-600">
                    Smaller file sizes mean faster page load times, improving Core Web Vitals and user experience.
                  </p>
                </div>
              </>
            )}
            {format === 'gif' && (
              <>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Animation Support
                  </h3>
                  <p className="text-gray-600">
                    GIF supports simple animations, making it perfect for memes, short clips, and animated graphics.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    Wide Compatibility
                  </h3>
                  <p className="text-gray-600">
                    GIF is one of the oldest image formats and is supported everywhere, including email and social media.
                  </p>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Features of Our PNG to {formatUpper} Converter
          </h2>
          <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">Quality Control</h3>
                  <p className="text-sm text-gray-600">Choose from High, Medium, or Compressed quality settings</p>
                </div>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">Batch Conversion</h3>
                  <p className="text-sm text-gray-600">Convert multiple PNG files to {formatUpper} simultaneously</p>
                </div>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">Resize Options</h3>
                  <p className="text-sm text-gray-600">Optionally resize images during conversion</p>
                </div>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">100% Client-Side</h3>
                  <p className="text-sm text-gray-600">All processing happens in your browser for maximum privacy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* In-Content Ad #3 */}
        <InContentAd className="mt-12" />

        {/* Related Tools */}
        <section className="mt-20">
          <RelatedTools currentFormat="png" currentTarget={format} />
        </section>

        {/* FAQ Section */}
        <section className="mt-20">
          <FAQ faqs={faqs} />
        </section>

        {/* Bottom Ad */}
        <BottomAd />
      </div>
    </>
  );
}
