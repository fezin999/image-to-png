import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://jpeg-to-png-converter.com'),
  title: {
    default: "Free Image to PNG Converter - Convert JPEG, JPG, WEBP to PNG Online",
    template: "%s | Free PNG Converter"
  },
  description: "Convert any image format to PNG online for free. Fast, secure, 100% client-side processing. Support for JPEG, JPG, WEBP, GIF, BMP, TIFF, SVG, HEIC, ICO. No upload required.",
  keywords: ["image converter", "png converter", "jpeg to png", "jpg to png", "webp to png", "convert image to png", "free image converter", "online png converter", "batch image converter"],
  authors: [{ name: "PNG Converter Team" }],
  creator: "PNG Converter",
  publisher: "PNG Converter",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jpeg-to-png-converter.com',
    title: 'Free Image to PNG Converter - Convert Any Image to PNG',
    description: 'Convert images to PNG online for free. Fast, secure, no upload required. Support for all major formats.',
    siteName: 'PNG Converter',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Image to PNG Converter',
    description: 'Convert any image to PNG for free. Fast & secure.',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://adservice.google.com" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
        
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-white">
          <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
              <a href="/" className="text-2xl font-bold text-primary flex items-center gap-2">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                PNG Converter
              </a>
              <div className="flex gap-6 items-center">
                <a href="/blog" className="text-gray-600 hover:text-primary transition">Blog</a>
                <a href="/#tools" className="text-gray-600 hover:text-primary transition">Tools</a>
                <a href="/#faq" className="text-gray-600 hover:text-primary transition">FAQ</a>
              </div>
            </nav>
          </header>
          
          <main className="flex-1">
            {children}
          </main>
          
          <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                  <h3 className="text-white font-bold text-lg mb-4">PNG Converter</h3>
                  <p className="text-sm">Convert any image format to PNG for free. Fast, secure, and 100% client-side processing.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-4">Popular Tools</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="/jpeg-to-png" className="hover:text-primary transition">JPEG to PNG</a></li>
                    <li><a href="/jpg-to-png" className="hover:text-primary transition">JPG to PNG</a></li>
                    <li><a href="/webp-to-png" className="hover:text-primary transition">WEBP to PNG</a></li>
                    <li><a href="/gif-to-png" className="hover:text-primary transition">GIF to PNG</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-4">Reverse Conversion</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="/png-to-jpeg" className="hover:text-primary transition">PNG to JPEG</a></li>
                    <li><a href="/png-to-jpg" className="hover:text-primary transition">PNG to JPG</a></li>
                    <li><a href="/png-to-webp" className="hover:text-primary transition">PNG to WEBP</a></li>
                    <li><a href="/png-to-gif" className="hover:text-primary transition">PNG to GIF</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-4">Legal</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="/privacy" className="hover:text-primary transition">Privacy Policy</a></li>
                    <li><a href="/terms" className="hover:text-primary transition">Terms of Service</a></li>
                    <li><a href="/contact" className="hover:text-primary transition">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-800 pt-8 text-center text-sm">
                <p>&copy; 2026 PNG Converter. All rights reserved. Your files are processed locally in your browser and never uploaded to any server.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
