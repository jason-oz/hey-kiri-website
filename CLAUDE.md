# Hey Kiri — Brand Strategist Website

## Project Overview
Website rebuild for HeyKIRI (heykiri.io) — brand strategist for founders, solopreneurs, and small teams. Free build, top quality, HCD standards.

## Client
- **Name:** Kiri (Jason's friend)
- **Business:** HeyKIRI — brand strategy and identity design
- **Domain:** heykiri.io
- **Phone:** (469) 649-7788 (Texas)
- **Email:** hello@heykiri.io
- **Location:** US-based

## Tech Stack
- **Framework:** Eleventy v3 + Tailwind CSS v4
- **Hosting:** Vercel (not yet deployed)
- **Theme:** Dark (near-black background, warm gold accent)
- **Font:** Inter (Google Fonts)

## Pages (5)
1. **Home** — Hero, HeyKIRI Protocol (4-phase process), "Is this for you?" qualifier, values, CTA
2. **About** — Headshot placeholder + bio (needs real content from Kiri)
3. **Services** — Full 4-phase Protocol breakdown with deliverables per phase
4. **FAQ** — 6 questions with accordion + FAQPage JSON-LD schema
5. **Contact** — Phone/email/social + booking calendar embed placeholder

Plus: Privacy, Terms, 404, sitemap, robots.txt

## Build Commands
```bash
npm run dev    # Dev server (Eleventy --serve + Tailwind watch)
npm run build  # Production build
```

## Content Status
All copy is drafted based on research of the current heykiri.io site. Needs:
- [ ] Kiri's real bio / headshot photo
- [ ] Kiri's logo file (currently showing broken image)
- [ ] Social profile URLs (Facebook, Instagram, LinkedIn, TikTok, YouTube)
- [ ] Booking calendar embed URL (Calendly, Cal.com, or similar)
- [ ] GA4 tracking ID (optional)
- [ ] OG share image (1200x630px)
- [ ] Content review + brand voice polish from Kiri

## Deploy Checklist
1. Get logo + headshot from Kiri → place in `src/assets/images/`
2. Update social URLs in `src/_data/site.json`
3. Add booking calendar embed code to `src/contact.njk`
4. Create GitHub repo: `jason-oz/hey-kiri-website`
5. `git push` to GitHub
6. Import to Vercel, set `SITE_URL=https://heykiri.io`
7. Point heykiri.io DNS to Vercel

## Design Tokens
- Background: `hsl(240 10% 6%)` (near-black)
- Foreground: `hsl(0 0% 95%)` (off-white)
- Primary: `hsl(38 90% 55%)` (warm gold)
- Surface: `hsl(240 8% 10%)` (dark card bg)
- Secondary: `hsl(240 8% 14%)` (darker section bg)
