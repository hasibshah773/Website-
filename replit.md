# Dream Look Makeover by Barsha - Beauty Salon Website

## Overview
A modern, elegant, and feminine beauty salon website for Dream Look Makeover by Barsha — a professional beauty parlour and makeup studio in Barishal, Bangladesh.

## Business Details
- **Name:** Dream Look Makeover by Barsha
- **Type:** Beauty Parlour / Makeup Studio
- **Location:** College Row, 1st Lane, Barishal, Bangladesh
- **Phone:** +8801739631389
- **Facebook:** https://www.facebook.com/share/1B4SnLU7Zp/
- **WhatsApp:** https://wa.me/8801739631389

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Frontend:** React + TypeScript, TanStack Query, Tailwind CSS, Shadcn/UI
- **Routing:** Next.js App Router (file-based routing)
- **API:** Next.js Route Handlers (`src/app/api/`)
- **Forms:** React Hook Form + Zod validation
- **Build:** Next.js (SWC compiler)
- **Deployment:** Vercel-ready (Next.js native)

## Project Structure
```
src/
  app/
    layout.tsx           - Root layout with Navbar, Footer, Providers
    page.tsx             - Home page
    about/page.tsx       - About page
    services/page.tsx    - Services page
    gallery/page.tsx     - Gallery (client component, lightbox)
    booking/page.tsx     - Booking form (client component)
    contact/page.tsx     - Contact page
    not-found.tsx        - 404 page
    api/
      appointments/route.ts  - Appointment booking API
  components/
    Navbar.tsx           - Client component (scroll-aware, path-aware)
    Footer.tsx           - Footer with WhatsApp floating button
    providers.tsx        - Client QueryClient + TooltipProvider wrapper
    ui/                  - Shadcn UI components
  hooks/
    use-toast.ts
    use-mobile.tsx
  lib/
    queryClient.ts       - TanStack Query setup
    utils.ts             - clsx/twMerge utility
  styles/
    globals.css          - Tailwind base + CSS variables (hue 340 rose-pink theme)
public/
  images/                - All real client photos (10 real-*.png) + hero/service images
shared/
  schema.ts              - Shared types and Zod schemas
```

## Pages
1. **Home** (`/`) - Hero, intro, featured services, why choose us, gallery preview, testimonials, CTA
2. **About** (`/about`) - Story, Barsha's portrait, mission/vision, milestones timeline
3. **Services** (`/services`) - 8 services: Bridal Makeup, Party Makeup, Engagement, Facial, Hair Styling, Mehendi, Skincare, Hair Spa & Rebonding
4. **Gallery** (`/gallery`) - Real client photos with category filters (Bridal/Party/Hair) and lightbox
5. **Booking** (`/booking`) - Appointment booking form with validation, contact info sidebar
6. **Contact** (`/contact`) - Contact methods, Google Maps embed, FAQs

## API Endpoints
- `POST /api/appointments` - Create a new appointment booking (in-memory storage)
- `GET /api/appointments` - Get all appointments

## Design System
- **Color Palette:** Soft pink/rose (hue 340), rose-gold, white, nude — `--primary: 340 75% 48%`
- **Typography:** Playfair Display (font-display, headings), Open Sans (body)
- **Features:** Responsive design, sticky transparent→solid navbar, WhatsApp floating button, lightbox gallery, mobile hamburger menu
- **Dark mode:** Configured but not toggled (light mode default)

## Pricing
- Party Makeup: from ৳750
- Engagement Makeup: from ৳2,000
- Bridal Makeup: from ৳3,500

## Images
Real client photos stored in `public/images/`:
- `hero-bridal.png` — Hero background
- `real-barsha-portrait.png` — Makeup artist portrait
- `real-bridal-red.png`, `real-bridal-red-after.png`, `real-bridal-elegant.png`, `real-bridal-lavender.png` — Bridal looks
- `real-gold-glitter.png`, `real-party-barsha.png`, `real-party-clients.png` — Party looks
- `real-hair-flowers.png`, `real-hair-styling.png`, `real-hair-spa.png` — Hair services
- `service-*.png` — Service card images

## Running
```bash
next dev -p 5000
```
The workflow "Start application" runs `next dev -p 5000`.

## Deployment (Vercel)
Push to GitHub. Vercel auto-detects Next.js. `vercel.json` is configured with `{"framework": "nextjs"}`.
