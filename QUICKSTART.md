# ⚡ Quick Start Guide

Get your PNG Converter site running in 5 minutes!

## 1. Install Dependencies (2 minutes)

```bash
cd /home/fezinn/Documentos/JpegToPng
npm install
```

## 2. Configure Environment (1 minute)

Create `.env.local` file:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your IDs (you can do this after launch):
- Get Google Analytics ID from: https://analytics.google.com
- Get AdSense ID from: https://adsense.google.com

## 3. Run Development Server (30 seconds)

```bash
npm run dev
```

Visit: http://localhost:3000

## 4. Test the Converter (1 minute)

1. Open http://localhost:3000
2. Drag and drop an image (any format)
3. Click download to save the converted PNG
4. Test with multiple images (batch conversion)

## 5. Build for Production (30 seconds)

```bash
npm run build
npm start
```

## Next Steps

### Before Deployment:
1. Update domain name in all files (search for "jpeg-to-png-converter.com")
2. Add your Google Analytics and AdSense IDs
3. Test on mobile devices
4. Run Lighthouse audit

### Deploy to Vercel:
```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git push

# Go to vercel.com and import your repo
# Deploy in 2 minutes!
```

### After Deployment:
1. Submit sitemap to Google Search Console
2. Share on social media
3. Submit to tool directories
4. Start creating backlinks

## File Structure Overview

```
Key Files to Know:
├── app/page.tsx                 → Homepage (edit hero text here)
├── components/Converter.tsx     → Main converter component
├── lib/imageConverter.ts        → Conversion logic
├── lib/seoConfig.ts            → SEO settings
└── app/layout.tsx              → Analytics & Ads setup
```

## Common Customizations

### Change Brand Colors
Edit `tailwind.config.ts`:
```typescript
primary: {
  DEFAULT: '#10b981', // Your color here
}
```

### Add New Format
Edit `lib/seoConfig.ts`:
```typescript
export const SUPPORTED_FORMATS = [
  'jpeg', 'jpg', 'webp', 'gif', 'bmp', 'tiff', 'svg', 'ico', 'heic',
  'your-new-format' // Add here
];
```

### Update SEO Title
Edit `app/layout.tsx`:
```typescript
title: {
  default: "Your Custom Title Here",
  template: "%s | Your Brand"
}
```

## Testing Checklist

- [ ] Homepage loads and looks good
- [ ] Can upload and convert an image
- [ ] Download works
- [ ] Mobile responsive (test on phone)
- [ ] All links work (check footer)
- [ ] FAQ accordion opens/closes
- [ ] Related tools links work

## Troubleshooting

**Images not converting?**
- Check browser console (F12) for errors
- Try different image format
- Ensure file is valid image file

**Build errors?**
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

**TypeScript errors?**
```bash
# Check types
npm run lint
```

## Resources

- 📖 Full README: `README.md`
- 🚀 Deployment Guide: `DEPLOYMENT.md`
- 💬 Need help? Create an issue on GitHub

---

**You're all set! 🎉**

Start converting images at http://localhost:3000

Deploy to make it live for the world! 🌍
