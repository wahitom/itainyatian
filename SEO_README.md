# Itaai Nyatian – SEO Optimisation Guide

## What Was Done

### 1. `index.html` – Base HTML SEO
- Full `<title>` and `<meta name="description">` with keywords
- Open Graph tags (Facebook/LinkedIn sharing previews)
- Twitter Card tags
- `<link rel="canonical">` to prevent duplicate content
- `<meta name="robots" content="index, follow">`
- JSON-LD structured data: `RealEstateAgent` schema with contact info, hours, area served
- Web app manifest link, favicon links, theme-color
- `<link rel="preconnect">` for external resources (performance)

### 2. `src/components/seo/SEO.jsx` – Per-Page Meta Tags
- Reusable component using `react-helmet-async`
- Injects unique `<title>`, `<meta description>`, `<meta keywords>`, canonical URL
- Open Graph + Twitter Card per page
- Accepts per-page JSON-LD structured data

### 3. `src/main.jsx` – HelmetProvider
- Wrapped app with `<HelmetProvider>` to enable `react-helmet-async`

### 4. Per-Page SEO (all 4 pages)
| Page | Title | Schema Type |
|------|-------|-------------|
| Home | Real Estate & Property in Nairobi, Kenya | WebPage |
| Properties | Houses, Land & Plots in Kenya | CollectionPage |
| About Us | Trusted Real Estate in Nairobi, Kenya | AboutPage |
| Contact Us | Get in Touch with Itaai Nyatian | ContactPage |

### 5. `public/robots.txt`
- Allows all crawlers
- Points to sitemap

### 6. `public/sitemap.xml`
- All 4 pages listed with priority, changefreq, lastmod
- Submit this to Google Search Console after deployment

### 7. `public/site.webmanifest`
- PWA manifest for mobile browser installs

### 8. `vercel.json`
- SPA rewrites (fixes 404 on page refresh)
- Security headers (X-Frame-Options, X-Content-Type-Options, etc.)
- Aggressive asset caching (1 year for /assets/)

### 9. `vite.config.js` – Performance (Core Web Vitals)
- Manual code splitting: vendor / router / bootstrap / icons bundles
- esbuild minification
- Dependency pre-bundling optimisation

### 10. `src/index.css` – Accessibility & CWV
- `scroll-behavior: smooth`
- `font-smoothing` for readability
- `:focus-visible` styles for keyboard navigation
- `img { max-width: 100%; height: auto }` prevents layout shift (CLS)
- `.sr-only` utility class for screen-reader text

### 11. Content & Semantic HTML (across all components)
- **Removed all Lorem Ipsum** – replaced with real, keyword-rich content
- **H1 on every page** – correct heading hierarchy (H1 → H2 → H3)
- **Descriptive `alt` text** on every image including location + brand
- **`loading="lazy"`** on below-fold images; `fetchpriority="high"` on hero
- **`<section>` + `aria-labelledby`** on every major section
- **Skip-to-main-content** link in Header (accessibility + screen readers)
- **Fixed broken link** `/about` → `/aboutus` in WhyChooseUs
- **`<article>` tags** for property cards in HomeCarousel
- **`<main id="main-content">`** wrapper on every page
- **404 page** with `noindex` meta tag

### 12. `src/pages/NotFound.jsx`
- Proper 404 page (replaces plain `<div>404 - Not Found</div>`)
- `<meta name="robots" content="noindex, nofollow">`
- Link back to home

---

## After Deploying to Vercel

1. **Update your domain** – Replace `https://itaainyatian.vercel.app` in these files with your actual domain:
   - `index.html` (canonical, og:url, JSON-LD)
   - `src/components/seo/SEO.jsx` (BASE_URL constant)
   - `public/sitemap.xml` (all `<loc>` URLs)

2. **Google Search Console**
   - Add your site at https://search.google.com/search-console
   - Submit `https://yourdomain.com/sitemap.xml`
   - Request indexing for each page

3. **Replace placeholder favicon** – Add real favicon files to `/public/`:
   - `favicon-32x32.png`
   - `favicon-16x16.png`
   - `apple-touch-icon.png`
   - `og-image.jpg` (1200×630px recommended)

4. **Google Analytics (optional)** – Add GA4 script to `index.html` `<head>` for tracking

5. **Google Business Profile** – Register at https://business.google.com for local SEO
