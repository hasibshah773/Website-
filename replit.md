# Dream Look Makeover by Barsha - Beauty Salon Website

## Overview
A modern, elegant, and feminine beauty salon website for Dream Look Makeover by Barsha — a professional beauty parlour and makeup studio in Barishal, Bangladesh.

## Business Details
- **Name:** Dream Look Makeover by Barsha
- **Type:** Beauty Parlour / Makeup Studio
- **Location:** College Row, 1st Lane, Barishal, Bangladesh
- **Phone:** +8801739631389

## Tech Stack
- **Frontend:** React + TypeScript, Wouter (routing), TanStack Query, Tailwind CSS, Shadcn/UI
- **Backend:** Express.js + Node.js
- **Build:** Vite
- **Forms:** React Hook Form + Zod validation

## Pages
1. **Home** (`/`) - Hero, intro, featured services, why choose us, gallery preview, testimonials, CTA
2. **About** (`/about`) - Story, Barsha's profile, mission/vision, milestones
3. **Services** (`/services`) - 7 services: Bridal Makeup, Party Makeup, Engagement, Facial, Hair, Mehendi, Skincare
4. **Gallery** (`/gallery`) - Image gallery with category filters and lightbox
5. **Booking** (`/booking`) - Appointment booking form with validation
6. **Contact** (`/contact`) - Contact methods, location map, FAQs

## API Endpoints
- `POST /api/appointments` - Create a new appointment booking
- `GET /api/appointments` - Get all appointments

## Design
- **Color Palette:** Soft pink, rose gold, white, and nude tones (hue 340)
- **Typography:** Playfair Display (headings), Open Sans (body)
- **Features:** Responsive design, WhatsApp floating button, lightbox gallery, mobile menu

## Images
All images are AI-generated and stored in `client/public/images/`:
- `hero-bridal.png` - Hero section background
- `about-barsha.png` - About page / intro section
- `service-bridal.png`, `service-party.png`, `service-facial.png`, `service-hair.png`, `service-mehendi.png`, `service-engagement.png` - Service images
- `gallery-1.png` through `gallery-6.png` - Gallery images

## Storage
Currently using in-memory storage (MemStorage). Appointments are stored in memory and reset on server restart.

## Running
```bash
npm run dev
```
Server starts on port 5000.
