# DESIGN.md — HeyKIRI

## Overview

HeyKIRI is a brand strategy and identity design practice for founders, solopreneurs, and small teams. The visual language is light, modern, and tech-forward — communicating clarity and creative intelligence. The palette alternates between warm off-white sections (with a subtle tech circuit SVG pattern) and deep navy full-bleed sections. Accent color is a pink-to-purple-to-teal gradient used on CTAs and key highlights. There is no gold, no dark theme — the site feels airy, professional, and forward-thinking.

**Aesthetic keywords:** light, modern, tech-forward, airy, gradient accents
**Target feel:** "A strategist who sees what others miss — intelligent, creative, approachable"

---

## Colors

### Brand / Accent

| Token | Hex | RGB | Role |
|---|---|---|---|
| `primary` | `#6EA7C4` | rgb(110, 167, 196) | Teal accent. Nav links, active states, icon highlights, checkmarks. |
| `primary-foreground` | `#175681` | rgb(23, 86, 129) | Dark teal. Text on light teal/gradient backgrounds (CTA button text). |
| `accent-pink` | `#D16BA5` | rgb(209, 107, 165) | Gradient start (pink). Used only in CTA gradient. |
| `accent-purple` | `#9A9AE1` | rgb(154, 154, 225) | Gradient midpoint. Used only in CTA gradient. |
| `accent-teal` | `#69BFF8` | rgb(105, 191, 248) | Gradient end (light blue). Used only in CTA gradient. |

### Light palette (page background)

| Token | Hex | RGB | Role |
|---|---|---|---|
| `background` | `#FAF9F5` | rgb(250, 249, 245) | Page background. Warm off-white. |
| `foreground` | `#161D1D` | rgb(22, 29, 29) | Primary heading/body text on light backgrounds. Near-black teal. |
| `muted-foreground` | `#8893A8` | rgb(136, 147, 168) | Secondary text, descriptions, eyebrow labels, helper text. Blue-gray. |
| `border` | `#E5E5E5` | — | Subtle borders on light backgrounds. |

### Dark palette (navy sections)

| Token | Hex | RGB | Role |
|---|---|---|---|
| `surface` | `#000321` | rgb(0, 3, 33) | Deep navy. Full-width dark section backgrounds (values bar, who we work with, why choose us). |
| `secondary` | `#222639` | rgb(34, 38, 57) | Navy-purple. Card backgrounds inside dark sections. |
| `secondary-foreground` | `#F4F2F2` | rgb(244, 242, 242) | Off-white text on dark cards/sections. |

### Special

| Token | Hex | Role |
|---|---|---|
| `cta-bg` | `#BFFBFF` | rgb(191, 251, 255) | Light teal/cyan. CTA button base background (visible through gradient). |
| `light-purple` | `#EDE7FB` | rgb(237, 231, 251) | Light purple tint. Used sparingly for soft highlight areas. |

### CTA Gradient

The signature gradient used on primary CTA buttons:

```css
background: linear-gradient(to right top, #D16BA5, #C777B9, #BA83CA, #AA8FD8, #9A9AE1, #8AA7EC, #79B3F4, #69BFF8, #52CFFE, #41DFFF, #46EEFA, #5FFBF1);
background-color: #BFFBFF; /* fallback */
```

This gradient flows from pink → purple → blue → teal → cyan. Used ONLY on the "Hey KIRI..." CTA buttons. Never applied to text, headings, or decorative elements.

---

## Typography

### Font Stack

| Role | Font | Fallback | Source |
|---|---|---|---|
| Headings | Comfortaa | ui-sans-serif, system-ui, sans-serif | Google Fonts |
| Body / UI | Poppins | ui-sans-serif, system-ui, sans-serif | Google Fonts |

Comfortaa is a rounded geometric font — gives headings a modern, friendly, tech-forward feel. Poppins handles all body text, UI labels, and secondary content.

### Scale

| Level | Tailwind | Font | Weight | Usage |
|---|---|---|---|---|
| Display | `text-4xl md:text-6xl` | Comfortaa | 500 (medium) | Hero headline (`h1`) |
| H1 | `text-3xl md:text-5xl` | Comfortaa | 500 | Page hero titles |
| H2 | `text-2xl md:text-4xl` | Comfortaa | 500 | Section headings |
| H3 | `text-lg md:text-xl` | Comfortaa | 500 | Card titles, subsection headings |
| Eyebrow | `text-sm` | Poppins | 500 | `tracking-widest uppercase` — above section headings |
| Body | `text-base` | Poppins | 400 | Paragraphs, descriptions |
| Body large | `text-lg md:text-xl` | Poppins | 400 | Hero subheadline |
| Small | `text-sm` | Poppins | 400 | Card body text |
| Caption | `text-xs` | Poppins | 400 | Footer copyright |

### Patterns

- **Section eyebrow:** `text-sm uppercase tracking-widest text-muted-foreground font-medium mb-3` — always above section H2
- **Hero headline:** Comfortaa, Display size, `font-medium leading-tight`
- **Section heading:** Comfortaa, H2 size, `font-medium mb-4`
- **Card title:** Comfortaa, H3 size, `font-medium mb-2`
- **Body text on light bg:** `text-foreground` (dark)
- **Body text on dark bg:** `text-secondary-foreground` (off-white)
- **Muted/descriptive text:** `text-muted-foreground` (blue-gray)

---

## Components

### Buttons

| Variant | Background | Text | Border | Radius | Padding | Hover |
|---|---|---|---|---|---|---|
| Primary (CTA) | CTA gradient | `text-primary-foreground` (#175681) | none | `rounded-full` | `px-8 py-4` | `hover:brightness-110 hover:shadow-lg` |
| Ghost/Outline | transparent | `text-foreground` | `border border-border` | `rounded-full` | `px-8 py-4` | `hover:bg-white/50` |

Primary CTA buttons display the pink-to-teal gradient. Both variants use `font-semibold transition-all min-h-[44px] flex items-center justify-center`.

The CTA label on the live site is `"Hey KIRI..."` with a microphone icon (not "Book a Discovery Call").

### Cards (dark)

Cards on dark sections use the navy-purple `bg-secondary` (#222639):

| Property | Value |
|---|---|
| Background | `bg-secondary` (#222639) |
| Border | `border border-white/10` |
| Radius | `rounded-xl` |
| Padding | `p-8` |
| Text color | `text-secondary-foreground` (#F4F2F2) |

### Cards (light)

Cards on light backgrounds use white with subtle border:

| Property | Value |
|---|---|
| Background | `bg-white` |
| Border | `border border-border` |
| Radius | `rounded-xl` |
| Padding | `p-8` |

### Navigation

| State | Styles |
|---|---|
| Default | Transparent background |
| Scrolled | `bg-background/95 backdrop-blur-xl border-b border-border` |
| Active link | `text-primary font-semibold` (#6EA7C4) |
| Inactive link | `text-muted-foreground hover:text-primary` |
| CTA button | CTA gradient, `rounded-full px-6 py-2.5` |

### FAQ Accordion

| Property | Value |
|---|---|
| Item background | `bg-secondary` (#222639) on dark bg, or `bg-white` on light bg |
| Border | `border border-white/10` (dark) or `border-border` (light) |
| Radius | `rounded-xl` |
| Chevron | `text-muted-foreground`, rotates 180deg on open |

### Protocol Cards (2x2 grid)

Dark navy-purple cards with teal-outlined numbered circles:

| Property | Value |
|---|---|
| Background | `bg-secondary` (#222639) |
| Number circle | `border-2 border-primary text-primary` — teal circle with teal number |
| Grid | `md:grid-cols-2 gap-6` (2x2 layout) |
| Card title | Comfortaa, `text-secondary-foreground` |
| Card body | `text-muted-foreground text-sm` |

### Qualifier List (Who We Work With)

On dark navy background:

| Property | Value |
|---|---|
| Section bg | `bg-surface` (#000321) |
| "Good fit" checkmark | `text-primary` (teal) |
| "Not a fit" cross | `text-red-400` or `text-muted-foreground` |
| List text | `text-secondary-foreground` |

### Values Bar

Horizontal bar on dark background with icon + label:

| Property | Value |
|---|---|
| Background | `bg-surface` (#000321) |
| Layout | Horizontal `flex gap-12 justify-center` |
| Icon | SVG or emoji, teal or white |
| Title | Comfortaa, `text-secondary-foreground font-medium` |

---

## Elevation

| Level | Usage | Implementation |
|---|---|---|
| None | Standard sections | Background contrast between light/dark |
| Subtle | Cards | `bg-secondary` on `bg-surface`, or `bg-white` on `bg-background` |
| Frosted | Nav on scroll | `bg-background/95 backdrop-blur-xl` |

No box-shadows on cards. Elevation is communicated through background color contrast.

---

## Spacing & Layout

| Token | Value | Usage |
|---|---|---|
| Section padding | `py-20 px-6` | Standard section vertical + horizontal |
| Section padding (hero) | `pt-32 pb-20 px-6` | Hero (accounts for fixed nav) |
| Container (wide) | `max-w-6xl mx-auto` | Protocol grid, values, most sections |
| Container (narrow) | `max-w-4xl mx-auto` | Hero text, CTA sections |
| Card gap | `gap-6` | Between cards in grid |
| Heading-to-body | `mb-4` | H2 to paragraph |
| Eyebrow-to-heading | `mb-3` | Eyebrow label to H2 |

---

## Background Pattern

Light sections feature a subtle tech circuit SVG pattern overlaid on `bg-background` (#FAF9F5). The pattern uses thin lines in muted blue/purple tones (matching the gradient palette) at very low opacity (~5-10%). This creates a "tech-forward" feel without overwhelming the content.

Implementation: CSS `background-image` with an inline SVG or external SVG file, `background-repeat: repeat`, low opacity.

---

## Section Rhythm

Pages alternate between light (warm off-white) and dark (deep navy) full-bleed sections:

| Section | Background |
|---|---|
| Hero | `bg-background` (#FAF9F5) with circuit pattern overlay |
| Values bar | `bg-surface` (#000321) |
| Protocol | `bg-background` (#FAF9F5) |
| Who we work with | `bg-surface` (#000321) |
| Testimonials | `bg-background` (#FAF9F5) |
| Why choose us | `bg-surface` (#000321) |
| FAQ | `bg-background` (#FAF9F5) |
| Final CTA | Gradient card on `bg-background` |

The contrast between #FAF9F5 and #000321 is dramatic and intentional. Never use two light or two dark sections adjacent.

---

## Scroll Animations

Same pattern as before — `animate-on-scroll` with `translateY(32px)` entrance, staggered via `data-delay`. Never animate above-the-fold hero content.

---

## Do's and Don'ts

### Do

- Use the CTA gradient only on primary action buttons ("Hey KIRI..."). It's the signature visual element.
- Alternate `bg-background` (light) and `bg-surface` (dark navy) between adjacent sections.
- Use Comfortaa for all headings. Use Poppins for all body/UI text.
- Use `text-primary` (teal #6EA7C4) for accent elements: checkmarks, active nav, icon highlights.
- Use `rounded-full` on CTA buttons (pill shape). Use `rounded-xl` on cards.
- Keep dark section cards in `bg-secondary` (#222639) — slightly lighter than the section background for depth.
- Use the circuit pattern SVG only on light background sections, at very low opacity.

### Don't

- Don't use any gold/amber/warm colors. The palette is cool: teal, navy, purple, pink gradient.
- Don't use Inter. The fonts are Comfortaa (headings) and Poppins (body).
- Don't apply the CTA gradient to text, headings, or decorative elements — buttons only.
- Don't use `font-bold` or `font-extrabold` on headings — Comfortaa uses `font-medium` (500).
- Don't add box-shadows to cards. Elevation is through background color contrast.
- Don't use a dark page background. The base is warm off-white (#FAF9F5).
- Don't reuse colors from Peak Physio or any other HCD client project.
