# Rotary Silver Jubilee Trust, Sangli - Official Website

A modern, production-ready website built for The Rotary Silver Jubilee Trust, Sangli - a charitable organization serving society since 1974.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Authentication**: NextAuth.js (Admin Panel)
- **Database**: PostgreSQL with Prisma ORM
- **Fonts**: Inter (body) + Playfair Display (headings)

## 📋 Features

### Public Pages
- ✅ **Home Page** - Hero section, about snapshot, landmark projects showcase
- ✅ **About Us** - Vision, mission, values, and history
- ✅ **Trustees** - Board members and office bearers with contact info
- ✅ **Projects** - Comprehensive project portfolio with impact metrics
- ✅ **Compliance** - Statutory information, certificates, CSR eligibility
- ✅ **Contact** - Contact form with validation, Google Maps integration

### Admin Panel (Protected)
- 🔐 Secure login with NextAuth.js
- 📊 Dashboard for content management
- 📝 CRUD operations for projects, trustees, and announcements
- 📄 Document upload and management
- 👥 Role-based access control

### Design Features
- 🎨 Professional NGO aesthetic with Rotary Blue color scheme
- 📱 Fully responsive (mobile-first design)
- ♿ Accessible (ARIA labels, keyboard navigation)
- 🔍 SEO optimized (meta tags, Open Graph)
- ⚡ Performance optimized (next/image, lazy loading)
- 🎭 Smooth animations and transitions
- 🌙 Clean, trustworthy UI/UX

## 🏗️ Project Structure

```
rotary-trust-website/
├── app/
│   ├── about/page.tsx
│   ├── admin/page.tsx
│   ├── compliance/page.tsx
│   ├── contact/page.tsx
│   ├── projects/page.tsx
│   ├── trustees/page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── ui/ (shadcn components)
├── lib/
│   └── utils.ts
├── public/
│   └── (static assets)
├── .env.example
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL (for admin panel database)

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Setup environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your configuration

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🎨 Color Palette

- **Primary (Rotary Blue)**: `oklch(0.35 0.15 260)`
- **Secondary (Silver)**: `oklch(0.92 0.005 260)`
- **Accent (Gold)**: `oklch(0.75 0.15 85)`

## 📄 Key Information

### Trust Details
- **Name**: The Rotary Silver Jubilee Trust, Sangli
- **Founded**: 12 November 1974
- **Registered**: Bombay Public Trust Act
- **Regd. No.**: BOM/259/Sangli
- **PAN**: AAATR1683A
- **TAN**: KLPT02123C
- **GST**: 27AAATR1683A2ZQ

### Contact
- **Address**: 1622/E, Ganesh Nagar, Rotary Complex, Sangli – 416 416, Maharashtra, India
- **Phone**: +91 98220 43518
- **Email**: info@rotarytrustsangli.org

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Configure environment variables
4. Deploy

```bash
npm run build
```

## 🔐 Admin Access

The admin panel is located at `/admin`. For production, implement NextAuth.js with proper authentication.

## 📞 Support

For technical support or inquiries:
- Email: info@rotarytrustsangli.org
- Phone: +91 98220 43518

## 📄 License

© 2025 The Rotary Silver Jubilee Trust, Sangli. All Rights Reserved.

---

**Built for social service and community development**
