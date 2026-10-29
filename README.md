# CampusPe – Landing Page (Next.js + React)

Responsive implementation of the CampusPe landing page from Figma.
Stack: **Next.js 14 (App Router) · React 18 · plain CSS** (no UI/CSS framework).

## Run locally (VS Code)

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production check
```
Requires Node 18.17+ and an internet connection on first run (Google Fonts are fetched by `next/font`).

## Deploy

1. **GitHub**
   ```bash
   git init && git add . && git commit -m "CampusPe landing page"
   git branch -M main
   git remote add origin https://github.com/<you>/campuspe-landing.git
   git push -u origin main
   ```
2. **Vercel** → *Add New → Project* → import the repo → framework is auto-detected (Next.js) → *Deploy*.
   No environment variables are needed.

## Project structure

```
app/                 layout, home page, [slug] placeholder pages, /api/waitlist
components/ui/       Button, Chip, Eyebrow, Reveal, Logo, Phone, Icons  (reusable)
components/sections/ Navbar, Hero, StatsStrip, Partners, OpportunityDiscovery,
                     ResumeUpload, FeatureStack (+ForColleges / ForEmployers),
                     AppShowcase, DownloadApp, SupportCta, Footer
lib/data.js          all copy / list content in one place
styles/              globals.css (tokens, buttons, pills) · components.css (sections)
```

## What's interactive

* **Every CTA** has hover, keyboard-focus (`:focus-visible`) and active/pressed states (`.btn--*` in `globals.css`).
* **Hero:** cursor-reactive parallax on the four floating cards + soft spotlight following the pointer, floating/twinkle idle animations, role cards lift on hover. All disabled under `prefers-reduced-motion`.
* **Navigation:** sticky navbar (turns frosted on scroll), anchor links with smooth scrolling, mobile drawer, Login / Sign Up routes. Every footer/CTA link resolves – pages not in the design render a friendly "Coming soon" page (`app/[slug]`).
* **Join Waitlist** opens an accessible modal (Esc / backdrop to close, validation, success state) that POSTs to `/api/waitlist` (currently logs – connect your CRM/email tool there).
* **Opportunity feed** tabs filter the list. **Resume upload** supports click + drag-and-drop, validates type (PDF/DOC/DOCX) and size (10 MB) and animates the 4-step pipeline. **App carousel** supports auto-play (pauses on hover/focus), dots, click-to-focus, arrow keys and swipe.

## Responsiveness
Designed at 1440 px and verified by layout logic for 1280 / 1024 / 768 / 390 px breakpoints (3-col → 1-col cards, floating hero cards become a row, nav → drawer, footer grid collapses, carousel scales).

## Visual issues found in the Figma and fixed
* Hero floating cards sat at negative x-offsets (-101/-107 px) and would be clipped below 1440 px → now anchored to the container and reflowed into a row on smaller screens.
* The faded "campus" illustration overlapped the third bullet of the College card → moved behind the content and shifted right.
* Inconsistent widths: hiring card 366 px vs 365 px, buttons 305/309/310 px → equal grid columns, full-width buttons.
* Typos: "courses,fees" (missing space), "connection.Your career" (missing space) and the footer line "2026 CampusPe…" (missing ©, no separators) → fixed. The sample feed text "global exposer…" in the design is a typo of "exposure"; it is corrected in `lib/data.js`.
* Low-contrast micro labels (`#94a3b8` at 10 px) darkened where they carry information.

## Replace placeholders with real Figma exports
The sandbox this was generated in had no network access, so **raster artwork could not be downloaded**. The following are drawn with CSS/SVG as stand-ins; export them from Figma (right-click → Export, 2×) and drop them in:

| Placeholder | File to add | Where to use |
|---|---|---|
| CampusPe logo (wordmark) | `public/assets/logo.png` | `components/ui/Logo.js` |
| Partner logos (GINSERV, Startup Karnataka …) | `public/partners/*.png` | set `logo` in `lib/data.js → PARTNERS` |
| App screenshots (5 phones + 2 tilted) | `public/assets/app-*.png` | pass `src` to `<Phone>` in `AppShowcase.js` / `DownloadApp.js` |
| Google Play / App Store badges | `public/assets/*.svg` | `Store` in `DownloadApp.js` |

Partner names beyond the first two are placeholders – the Figma shows logos only.
