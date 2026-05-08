import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Image Conversion Blog - Tips, Guides & Best Practices',
  description: 'Learn about image formats, conversion techniques, optimization tips, and best practices for web images. Expert guides on PNG, JPEG, WEBP, and more.',
};

const blogPosts = [
  {
    slug: 'png-vs-jpeg-which-format-to-use',
    title: 'PNG vs JPEG: Which Format Should You Use in 2026?',
    excerpt: 'A comprehensive comparison of PNG and JPEG image formats, their advantages, use cases, and when to choose each format for optimal results.',
    date: '2026-05-01',
    readTime: '8 min read',
    category: 'Guides',
  },
  {
    slug: 'why-png-is-better-for-logos',
    title: 'Why PNG is Better Than JPEG for Logos and Graphics',
    excerpt: 'Discover why professional designers always choose PNG for logos, icons, and graphics. Learn about transparency, quality, and best practices.',
    date: '2026-04-28',
    readTime: '6 min read',
    category: 'Design',
  },
  {
    slug: 'how-to-optimize-images-for-web',
    title: '10 Best Practices for Optimizing Images for Web Performance',
    excerpt: 'Improve your website speed and Core Web Vitals with these essential image optimization techniques. Complete guide for 2026.',
    date: '2026-04-25',
    readTime: '10 min read',
    category: 'Performance',
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Image Conversion Blog</h1>
        <p className="text-xl text-gray-600 mb-12">
          Expert guides, tips, and best practices for image formats and conversion
        </p>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg hover:border-primary transition-all group"
            >
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                  {post.category}
                </span>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-4 text-primary font-semibold flex items-center gap-2">
                Read more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
