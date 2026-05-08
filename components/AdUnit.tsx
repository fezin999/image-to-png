'use client';

import { useEffect, useRef } from 'react';

interface AdUnitProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  style?: React.CSSProperties;
  className?: string;
}

export default function AdUnit({ slot, format = 'auto', style, className = '' }: AdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize AdSense ad
    try {
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div ref={adRef} className={`ad-container ${className}`} style={style}>
      {/* Placeholder for Google AdSense */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
      
      {/* Fallback placeholder during development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <p className="text-gray-500 font-semibold">Ad Placeholder</p>
          <p className="text-sm text-gray-400 mt-2">Slot: {slot}</p>
          <p className="text-sm text-gray-400">Format: {format}</p>
        </div>
      )}
    </div>
  );
}

// Specific ad components for common placements
export function HeaderAd() {
  return (
    <div className="w-full flex justify-center my-4">
      <AdUnit
        slot="header-leaderboard"
        format="horizontal"
        className="max-w-[728px] h-[90px]"
      />
    </div>
  );
}

export function SidebarAd() {
  return (
    <div className="sticky top-24">
      <AdUnit
        slot="sidebar-half-page"
        format="vertical"
        className="w-[300px] min-h-[600px]"
      />
    </div>
  );
}

export function InContentAd({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full flex justify-center my-8 ${className}`}>
      <AdUnit
        slot="in-content-rectangle"
        format="rectangle"
        className="w-[336px] h-[280px]"
      />
    </div>
  );
}

export function BottomAd() {
  return (
    <div className="w-full flex justify-center my-8">
      <AdUnit
        slot="bottom-leaderboard"
        format="horizontal"
        className="max-w-[728px] h-[90px]"
      />
    </div>
  );
}
