import { MetadataRoute } from 'next';
import { SUPPORTED_FORMATS } from '@/lib/seoConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jpeg-to-png-converter.com';
  
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];

  // Add all [format]-to-png routes
  SUPPORTED_FORMATS.forEach((format) => {
    routes.push({
      url: `${baseUrl}/${format}-to-png`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });
  });

  // Add all png-to-[format] routes
  SUPPORTED_FORMATS.forEach((format) => {
    routes.push({
      url: `${baseUrl}/png-to-${format}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });
  });

  // Add blog posts
  const blogSlugs = [
    'png-vs-jpeg-which-format-to-use',
    'why-png-is-better-for-logos',
    'how-to-optimize-images-for-web',
  ];

  blogSlugs.forEach((slug) => {
    routes.push({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  return routes;
}
