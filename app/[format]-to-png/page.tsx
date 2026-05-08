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
  return generateConverterMetadata(format, 'png');
}

export default function FormatToPNGPage({ params }: PageProps) {
  const format = params.format.toLowerCase();
  const formatUpper = format.toUpperCase();
  
  const faqs = generateFormatFAQs(format, 'png');
  const faqSchema = generateFAQSchema(faqs);
  const webAppSchema = generateWebApplicationSchema(format);
  const howToSchema = generateHowToSchema(format);
  const breadcrumbItems = [
    { name: 'Home', url: 'https://jpeg-to-png-converter.com' },
    { name: `${formatUpper} to PNG`, url: `https://jpeg-to-png-converter.com/${format}-to-png` },
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
        <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: `${formatUpper} to PNG`, url: `/${format}-to-png` }]} />

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Convert {formatUpper} to PNG Free Online
          </h1>
          <p className="text-xl text-gray-600">
            Fast, secure, 100% client-side {formatUpper} to PNG converter. No upload required, unlimited conversions.
          </p>
        </div>

        {/* Converter */}
        <Converter sourceFormat={format} targetFormat="png" />

        {/* In-Content Ad #1 */}
        <InContentAd className="mt-12" />

        {/* How to Convert Section */}
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            How to Convert {formatUpper} to PNG
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              Converting {formatUpper} files to PNG format is incredibly simple with our free online tool. 
              PNG (Portable Network Graphics) is a lossless image format that's perfect for graphics, logos, 
              and images that require transparency. Follow these easy steps to convert your {formatUpper} images to PNG:
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Upload Your {formatUpper} File</h3>
                    <p className="text-gray-600">
                      Click the upload area above or simply drag and drop your {formatUpper} file. 
                      You can select multiple files at once for batch conversion. Our tool supports 
                      files of any size and works directly in your browser.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Automatic Conversion</h3>
                    <p className="text-gray-600">
                      The conversion happens instantly in your browser. No waiting for uploads or downloads 
                      from servers. Your {formatUpper} file is converted to PNG format in seconds using 
                      advanced client-side processing.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Download Your PNG File</h3>
                    <p className="text-gray-600">
                      Once conversion is complete, click the download button to save your PNG file. 
                      If you converted multiple files, you can download them individually or all at once.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <p className="text-gray-600 leading-relaxed">
              That's it! Your {formatUpper} file is now converted to PNG format and ready to use. 
              The entire process happens securely in your browser, ensuring your files remain private.
            </p>
          </div>
        </section>

        {/* In-Content Ad #2 */}
        <InContentAd className="mt-12" />

        {/* Why Convert Section */}
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Why Convert {formatUpper} to PNG?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Lossless Quality
              </h3>
              <p className="text-gray-600">
                PNG uses lossless compression, meaning no quality is lost during conversion. 
                Perfect for images that need to maintain crisp, sharp details.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                Transparency Support
              </h3>
              <p className="text-gray-600">
                PNG supports alpha channel transparency, making it ideal for logos, icons, 
                and graphics that need transparent backgrounds.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                Universal Compatibility
              </h3>
              <p className="text-gray-600">
                PNG is supported by all web browsers, image editors, and operating systems. 
                It's a safe choice for sharing and publishing images online.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                Professional Standard
              </h3>
              <p className="text-gray-600">
                PNG is the preferred format for professional graphic design, web development, 
                and digital publishing workflows.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Our {formatUpper} to PNG Converter?
          </h2>
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">100% Free Forever</h3>
                  <p className="text-sm text-gray-600">No hidden fees, no subscriptions, unlimited conversions</p>
                </div>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">No Registration Required</h3>
                  <p className="text-sm text-gray-600">Start converting immediately without creating an account</p>
                </div>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">Private & Secure</h3>
                  <p className="text-sm text-gray-600">Files processed locally in your browser, never uploaded</p>
                </div>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">Lightning Fast</h3>
                  <p className="text-sm text-gray-600">Instant conversion with no waiting or delays</p>
                </div>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">Batch Processing</h3>
                  <p className="text-sm text-gray-600">Convert multiple {formatUpper} files simultaneously</p>
                </div>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">Cross-Platform</h3>
                  <p className="text-sm text-gray-600">Works on Windows, Mac, Linux, iOS, and Android</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* In-Content Ad #3 */}
        <InContentAd className="mt-12" />

        {/* PNG vs Format Comparison */}
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            PNG vs {formatUpper}: Which Format Should You Use?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">PNG</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">{formatUpper}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">Compression</td>
                  <td className="px-6 py-4">Lossless</td>
                  <td className="px-6 py-4">{format === 'jpeg' || format === 'jpg' ? 'Lossy' : format === 'webp' ? 'Lossy/Lossless' : 'Varies'}</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Transparency</td>
                  <td className="px-6 py-4">✅ Yes</td>
                  <td className="px-6 py-4">{format === 'jpeg' || format === 'jpg' ? '❌ No' : format === 'webp' || format === 'gif' ? '✅ Yes' : 'Varies'}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Best For</td>
                  <td className="px-6 py-4">Graphics, logos, screenshots</td>
                  <td className="px-6 py-4">{format === 'jpeg' || format === 'jpg' ? 'Photographs' : format === 'webp' ? 'Web images' : format === 'gif' ? 'Simple animations' : 'Various uses'}</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">File Size</td>
                  <td className="px-6 py-4">Medium to Large</td>
                  <td className="px-6 py-4">{format === 'jpeg' || format === 'jpg' ? 'Small to Medium' : format === 'webp' ? 'Very Small' : 'Varies'}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Browser Support</td>
                  <td className="px-6 py-4">Universal</td>
                  <td className="px-6 py-4">{format === 'webp' ? 'Modern browsers' : 'Universal'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Related Tools */}
        <section className="mt-20">
          <RelatedTools currentFormat={format} currentTarget="png" />
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
