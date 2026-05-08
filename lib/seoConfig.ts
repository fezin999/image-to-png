import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
}

export const SUPPORTED_FORMATS = [
  'jpeg', 'jpg', 'png', 'webp', 'gif', 'bmp', 'tiff', 'tif', 'svg', 'ico', 
  'heic', 'heif', 'avif', 'jxl', 'jp2', 'jpx', 'apng', 'dib', 'cur', 'psd'
];

export function generateConverterMetadata(
  sourceFormat: string,
  targetFormat: string = 'png'
): Metadata {
  const isReverse = sourceFormat === 'png';
  const format = isReverse ? targetFormat : sourceFormat;
  const formatUpper = format.toUpperCase();
  const direction = isReverse ? `PNG to ${formatUpper}` : `${formatUpper} to PNG`;
  
  return {
    title: `${direction} Converter - Free Online Tool | 100% Secure & Fast`,
    description: `Convert ${direction.toLowerCase()} free online. Fast, secure, no upload required. 100% client-side processing. Batch conversion supported. Best ${format} image converter 2026.`,
    keywords: [
      `${format} to ${targetFormat}`,
      `convert ${format} to ${targetFormat}`,
      `${format} to ${targetFormat} converter`,
      `free ${format} converter`,
      `online ${format} converter`,
      `${format} to ${targetFormat} online`,
      `${format} to ${targetFormat} free`,
      `image converter`,
      `convert image to ${targetFormat}`,
      `batch ${format} converter`,
    ],
    openGraph: {
      title: `${direction} Converter - Free Online Tool`,
      description: `Convert ${direction.toLowerCase()} for free. Fast, secure, no upload required.`,
      type: 'website',
      url: `https://jpeg-to-png-converter.com/${sourceFormat}-to-${targetFormat}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${direction} Converter - Free Online`,
      description: `Convert ${direction.toLowerCase()} for free. Fast & secure.`,
    },
    alternates: {
      canonical: `https://jpeg-to-png-converter.com/${sourceFormat}-to-${targetFormat}`,
    },
  };
}

export function generateBlogMetadata(slug: string, title: string, description: string): Metadata {
  return {
    title: `${title} | PNG Converter Blog`,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://jpeg-to-png-converter.com/blog/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://jpeg-to-png-converter.com/blog/${slug}`,
    },
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateWebApplicationSchema(format: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `${format.toUpperCase()} to PNG Converter`,
    description: `Free online tool to convert ${format.toUpperCase()} images to PNG format. Fast, secure, and 100% client-side processing.`,
    url: `https://jpeg-to-png-converter.com/${format}-to-png`,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Free conversion',
      'No upload required',
      '100% client-side processing',
      'Batch conversion support',
      'No file size limits',
      'Maintain image quality',
    ],
  };
}

export function generateHowToSchema(format: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Convert ${format.toUpperCase()} to PNG`,
    description: `Step-by-step guide to convert ${format.toUpperCase()} images to PNG format online for free.`,
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Upload your image',
        text: `Click the upload area or drag and drop your ${format.toUpperCase()} file.`,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Wait for conversion',
        text: 'The conversion happens instantly in your browser.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Download PNG',
        text: 'Click the download button to save your converted PNG file.',
      },
    ],
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
