/**
 * Performance optimization utilities
 * Helps achieve perfect Core Web Vitals scores
 */

/**
 * Preload critical resources
 */
export function preloadCriticalResources() {
  if (typeof window === 'undefined') return;

  // Preload fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.as = 'font';
  fontLink.type = 'font/woff2';
  fontLink.crossOrigin = 'anonymous';
  document.head.appendChild(fontLink);
}

/**
 * Lazy load images observer
 */
export function setupLazyLoading() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach((img) => {
    imageObserver.observe(img);
  });
}

/**
 * Debounce function for performance
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for scroll events
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Report Web Vitals to analytics
 */
export function reportWebVitals(metric: any) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }
}

/**
 * Optimize image loading
 */
export function optimizeImageLoading() {
  if (typeof window === 'undefined') return;

  // Add loading="lazy" to images below the fold
  const images = document.querySelectorAll('img:not([loading])');
  images.forEach((img) => {
    const rect = img.getBoundingClientRect();
    if (rect.top > window.innerHeight) {
      img.setAttribute('loading', 'lazy');
    }
  });
}

/**
 * Prefetch resources on hover
 */
export function setupPrefetchOnHover() {
  if (typeof window === 'undefined') return;

  const links = document.querySelectorAll('a[href^="/"]');
  links.forEach((link) => {
    link.addEventListener('mouseenter', function (this: HTMLAnchorElement) {
      const href = this.getAttribute('href');
      if (href) {
        const linkElement = document.createElement('link');
        linkElement.rel = 'prefetch';
        linkElement.href = href;
        document.head.appendChild(linkElement);
      }
    }, { once: true });
  });
}
