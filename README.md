# TopScore AI Landing Page

A modern, professional landing page for TopScore AI - Kenya's #1 AI-powered education platform supporting CBC, IGCSE & KCSE learners.

## 🚀 Features

- **Modern UI/UX**: Built with Nuxt 4, TailwindCSS 4, and Motion-V for smooth animations
- **SEO Optimized**: Complete with sitemap, robots.txt, and structured data
- **PWA Ready**: Progressive Web App manifest for mobile app-like experience
- **Accessibility**: ARIA labels and keyboard navigation support
- **Performance**: Optimized with Vite pre-bundling and font preconnect
- **Responsive**: Fully responsive design for all devices
- **Dark Mode**: Color mode support with system preference detection

## 🛠️ Tech Stack

- **Framework**: Nuxt 4 (Vue 3)
- **Styling**: TailwindCSS 4
- **Animations**: Motion-V
- **Icons**: Lucide Vue Next
- **Components**: Reka UI (shadcn/ui inspired)
- **Firebase**: Analytics and Firestore integration
- **Fonts**: Google Fonts (Outfit, Inter, Newsreader, JetBrains Mono)

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Generate static site
pnpm generate

# Preview production build
pnpm preview
```

## 🔧 Environment Variables

Create a `.env` file based on `.env.example`:

```env
# Firebase Configuration
NUXT_FIREBASE_API_KEY=your_firebase_api_key
NUXT_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NUXT_FIREBASE_PROJECT_ID=your_project_id
NUXT_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NUXT_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NUXT_FIREBASE_APP_ID=your_app_id

# Analytics
NUXT_GA_MEASUREMENT_ID=your_ga_measurement_id

# Site Configuration
NUXT_PUBLIC_SITE_URL=https://topscoreapp.ai
NUXT_PUBLIC_APP_URL=https://app.topscoreapp.ai
```

## 📁 Project Structure

```
app/
├── assets/
│   └── css/
│       └── globals.css          # Global styles and theme configuration
├── components/
│   ├── ui/                      # Reusable UI components
│   ├── Hero.vue                 # Hero section with animated cards
│   ├── Nav.vue                  # Navigation component
│   ├── Footer.vue               # Footer component
│   └── ...                      # Other page sections
├── composables/
│   ├── useLocale.ts             # i18n composable
│   └── useJsonLd.ts             # JSON-LD structured data
├── lib/
│   ├── firebase.ts              # Firebase configuration
│   └── utils.ts                 # Utility functions (cn helper)
├── pages/
│   ├── index.vue                # Home page
│   └── ...                      # Other pages
├── plugins/
│   └── firebase.client.ts       # Firebase client plugin
└── error.vue                    # Custom error page
```

## 🎨 Design System

### Colors
- **Primary**: `#4f46e5` (Deep Indigo)
- **Secondary**: `#0ea5e9` (Sky Blue)
- **Accent**: `#f43f5e` (Rose)
- **Surface**: `#fcfcfd`

### Typography
- **Display**: Outfit (headings, logos)
- **Body**: Inter (body text)
- **Serif**: Newsreader (quotes, emphasis)
- **Mono**: JetBrains Mono (code, technical)

### Components
- Button variants (primary, secondary, outline)
- Card components with glass morphism
- Accordion for FAQs
- Dialog/Sheet for modals
- Input components

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build command
pnpm generate

# Publish directory
.nuxt/dist/public
```

### Static Hosting
```bash
# Generate static files
pnpm generate

# Upload .nuxt/dist/public to your hosting provider
```

## 🔒 Security

- Security headers configured in Nitro
- CSP headers for content protection
- X-Frame-Options to prevent clickjacking
- Referrer-Policy for privacy

## 📊 Analytics

- Google Analytics integration
- Firebase Analytics
- Custom event tracking for user interactions

## 🌐 SEO

- Dynamic sitemap generation
- robots.txt configuration
- Structured data (JSON-LD) for:
  - Organization
  - WebSite
  - SoftwareApplication
- Open Graph tags
- Twitter Card tags
- Canonical URLs

## 📱 PWA

- Manifest for installable web app
- Apple touch icons
- Mobile web app capable
- Theme color configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

Copyright © 2026 TopScore AI. All rights reserved.

## 📞 Contact

- **Website**: https://topscoreapp.ai
- **Email**: admin@topscoreapp.ai
- **Phone**: +254 717 273 230
- **WhatsApp**: +254 717 273 230

## 🙏 Acknowledgments

- Built with [Nuxt](https://nuxt.com)
- Styled with [TailwindCSS](https://tailwindcss.com)
- Icons by [Lucide](https://lucide.dev)
- Animations by [Motion-V](https://motion-v.dev)
