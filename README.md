# 🖼️ Image to PNG Converter

Convert any image format to PNG instantly in your browser. 100% client-side processing with automatic metadata removal.

## ✨ Features

- 🚀 **100% Client-Side** - No server uploads, all processing in browser
- 🔒 **Privacy First** - Files never leave your device
- 🧹 **Auto Metadata Removal** - Strips EXIF, GPS, AI markers, etc.
- ⚡ **Lightning Fast** - Instant conversion with Canvas API
- 📦 **Batch Processing** - Convert up to 5 images simultaneously
- 📥 **Multiple Download Options** - Individual, All, or ZIP download
- 📱 **Mobile Friendly** - Works on all devices
- 🎨 **20+ Formats Supported** - JPEG, PNG, WEBP, GIF, BMP, TIFF, SVG, HEIC, AVIF, and more

## 🚀 Deploy to Netlify

### Option 1: One-Click Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/YOUR_USERNAME/YOUR_REPO)

### Option 2: Manual Deploy

1. **Build the project:**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy to Netlify:**
   - Connect your repository
   - Build command: `npm run build`
   - Publish directory: `.next`
   - The `netlify.toml` file is already configured

### Option 3: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Image Processing:** Canvas API (native browser)
- **ZIP Creation:** JSZip
- **Hosting:** Netlify (recommended)

## 📋 How It Works

1. **Upload** - User selects image files (drag & drop or click)
2. **Convert** - Browser Canvas API processes images client-side
3. **Clean** - Automatically removes ALL metadata (EXIF, IPTC, XMP, AI markers)
4. **Download** - User downloads clean PNG files

**Important:** All processing happens in the browser. No data is sent to any server.

## 🔧 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Environment Variables

No environment variables needed! The app is 100% client-side.

## 📊 Performance

- **Core Web Vitals:** Optimized for perfect scores
- **Bundle Size:** Minimal dependencies
- **CDN:** Served globally via Netlify's CDN
- **Offline:** Works offline after first load (PWA ready)

## 🔐 Privacy & Security

- ✅ No server uploads
- ✅ No analytics (optional)
- ✅ No cookies required
- ✅ All processing client-side
- ✅ Automatic metadata stripping
- ✅ HTTPS enforced

## 📝 Metadata Removal

All converted images automatically have these removed:

- **EXIF Data:** Camera info, GPS coordinates, timestamps
- **IPTC Data:** Copyright, keywords, author information  
- **XMP Data:** Adobe metadata, editing history
- **AI Markers:** Midjourney, DALL-E, Stable Diffusion identifiers
- **Thumbnails:** Embedded preview images
- **Color Profiles:** ICC profiles (optional)

## 🎯 SEO Optimized

- Dynamic meta tags for each conversion route
- Schema.org structured data (FAQ, WebApplication)
- Sitemap.xml and robots.txt configured
- Optimized for "format to PNG" keywords
- Blog articles for long-tail SEO

## 💰 Monetization

AdSense placeholders included in:
- `components/AdUnit.tsx` - Banner ads
- `InContentAd` - In-content ads
- `BottomAd` - Bottom sticky ads

Replace placeholder IDs with your AdSense publisher ID.

## 📄 License

MIT License - Free for personal and commercial use

## 🤝 Contributing

Contributions welcome! Please open an issue or PR.

## 🔗 Links

- [Live Demo](https://your-domain.netlify.app)
- [Documentation](https://your-domain.netlify.app/docs)
- [Report Bug](https://github.com/YOUR_USERNAME/YOUR_REPO/issues)

---

Made with ❤️ for privacy-conscious users who need clean, metadata-free images.
