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
- **Theme:** Light (warm off-white bg, dark navy sections, teal/gradient accents)
- **Fonts:** Comfortaa (headings) + Poppins (body) — Google Fonts

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
- Background: `#FAF9F5` (warm off-white — page bg)
- Foreground: `#161D1D` (dark teal-charcoal — text on light)
- Surface: `#000321` (deep navy — dark section bg)
- Primary: `#6EA7C4` (teal — accents, nav links, checkmarks)
- Primary-foreground: `#175681` (dark teal — CTA button text)
- Secondary: `#222639` (navy-purple — cards on dark sections)
- Secondary-foreground: `#F4F2F2` (off-white — text on dark)
- Muted-foreground: `#8893A8` (blue-gray — secondary text)
- CTA gradient: pink (#D16BA5) → purple → teal (#5FFBF1)

See `DESIGN.md` for full design system.
