'use client';

interface RelatedTool {
  title: string;
  description: string;
  url: string;
  icon: string;
}

interface RelatedToolsProps {
  currentFormat?: string;
  currentTarget?: string;
}

export default function RelatedTools({ currentFormat, currentTarget = 'png' }: RelatedToolsProps) {
  const allTools: RelatedTool[] = [
    {
      title: 'JPEG to PNG',
      description: 'Convert JPEG images to PNG format with transparency support',
      url: '/jpeg-to-png',
      icon: '🖼️',
    },
    {
      title: 'JPG to PNG',
      description: 'Convert JPG files to PNG format quickly and easily',
      url: '/jpg-to-png',
      icon: '📸',
    },
    {
      title: 'WEBP to PNG',
      description: 'Convert modern WEBP images to PNG format',
      url: '/webp-to-png',
      icon: '🌐',
    },
    {
      title: 'GIF to PNG',
      description: 'Convert animated or static GIF files to PNG',
      url: '/gif-to-png',
      icon: '🎬',
    },
    {
      title: 'BMP to PNG',
      description: 'Convert Windows bitmap images to PNG',
      url: '/bmp-to-png',
      icon: '💾',
    },
    {
      title: 'TIFF to PNG',
      description: 'Convert high-quality TIFF images to PNG',
      url: '/tiff-to-png',
      icon: '📄',
    },
    {
      title: 'SVG to PNG',
      description: 'Convert scalable vector graphics to PNG raster images',
      url: '/svg-to-png',
      icon: '🎨',
    },
    {
      title: 'ICO to PNG',
      description: 'Convert icon files to PNG images',
      url: '/ico-to-png',
      icon: '🔷',
    },
    {
      title: 'HEIC to PNG',
      description: 'Convert iPhone HEIC photos to PNG format',
      url: '/heic-to-png',
      icon: '📱',
    },
    {
      title: 'PNG to JPEG',
      description: 'Convert PNG images to JPEG format',
      url: '/png-to-jpeg',
      icon: '🔄',
    },
    {
      title: 'PNG to JPG',
      description: 'Convert PNG to JPG with customizable quality',
      url: '/png-to-jpg',
      icon: '🔃',
    },
    {
      title: 'PNG to WEBP',
      description: 'Convert PNG to modern WEBP format for better compression',
      url: '/png-to-webp',
      icon: '⚡',
    },
  ];

  // Filter out current tool and show related ones
  const currentUrl = currentFormat === 'png' 
    ? `/png-to-${currentTarget}`
    : `/${currentFormat}-to-${currentTarget}`;
  
  const relatedTools = allTools
    .filter(tool => tool.url !== currentUrl)
    .slice(0, 6);

  return (
    <div className="w-full max-w-6xl mx-auto" id="tools">
      <h2 className="text-3xl font-bold text-center mb-4">
        Related Image Conversion Tools
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Explore our other free image format converters
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedTools.map((tool, index) => (
          <a
            key={index}
            href="#converter"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('converter')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="block bg-white rounded-xl p-6 border border-gray-200 hover:border-primary hover:shadow-lg transition-all group cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl group-hover:scale-110 transition-transform">
                {tool.icon}
              </span>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors mb-2">
                  {tool.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <a
          href="#converter"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('converter')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className="inline-block text-primary hover:text-primary-dark font-semibold underline cursor-pointer"
        >
          Back to converter →
        </a>
      </div>
    </div>
  );
}

// Breadcrumb component for SEO
export function Breadcrumbs({ items }: { items: Array<{ name: string; url: string }> }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && (
            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
          {index === items.length - 1 ? (
            <span className="font-medium text-gray-900">{item.name}</span>
          ) : (
            <a href={item.url} className="hover:text-primary transition-colors">
              {item.name}
            </a>
          )}
        </div>
      ))}
    </nav>
  );
}
