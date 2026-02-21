# EdenCORP — Luminous Garden

## 1. Vision

A cinematic, dark-mode marketing website for EdenCORP — an EdTech startup building AI-powered campus infrastructure. The aesthetic is "Ethereal Cyber-Organic" — premium, futuristic, and alive with deep blacks, glassmorphism, golden accents, and subtle bioluminescent effects. First product is **PRISM** — a serverless, AI-driven student success engine.

## 2. Stitch Project

- **Project ID:** `10014081437017169570`
- **Device:** Desktop
- **Theme:** Dark mode, Space Grotesk, gold accent (#f9d406), round corners

## 3. Design System (Unified)

- **Background:** `#0A0A0A` (void)
- **Surfaces:** Glassmorphism — `rgba(15, 20, 25, 0.4)`, `backdrop-blur(16px)`, `border: 1px solid rgba(255,215,0,0.08)`
- **Accent:** Gold `#FFD700`
- **Headings:** Space Grotesk Bold
- **Body:** Inter Regular/Medium
- **Code/Mono:** Space Mono
- **Effects:** Golden glow on hover, particle dots, frosted glass cards, scroll-triggered reveals
- **Tailwind Config:** Unified superset across all pages — `gold`/`primary` → `#FFD700`, `void`/`background-dark` → `#0A0A0A`, `obsidian`/`surface` → `#0F1419`

## 4. Sitemap

- [x] `index.html` — Homepage (The Greenhouse) — Hero orb, problem section, solution bento grid
- [x] `orchard.html` — Orchard (Product Suite) — PRISM as flagship, 5 Coming Soon cards
- [x] `prism.html` — PRISM Deep Dive — Serverless pivot, AI tutoring, placement engine, campus dashboard mockup
- [x] `about.html` — About (The Roots) — Origin timeline (2024-founded), philosophy, team roles, targets
- [x] `contact.html` — Contact (The Gateway) — Contact form with glassmorphism inputs, budget slider

## 5. Shared Components

All 5 pages share these unified elements (built via `rebuild.py`):

- **Navbar:** Floating pill (`glass-panel rounded-full`) — stylized gold-gradient "EdenCORP" text logo — links: Home / Orchard / PRISM / About / Contact
- **Mobile Nav:** Hamburger menu → slide-out drawer, works on all pages
- **Footer:** Stylized EdenCORP logo, © 2026, links to About / Contact / Privacy / Terms
- **Tailwind Config:** Single unified config with all color tokens
- **Theme Toggle:** Dark/light mode switch (pill toggle with sun/moon icons), localStorage persistence (`eden-theme`)
- **CSS:** Unified glass-panel, scrollbar, reveal animations, page transitions (fade-in/out), button press feedback, light mode overrides
- **Scripts:** IntersectionObserver reveals, mobile nav toggle, smooth page-to-page transitions, theme toggle

## 6. Completed

- [x] Cross-page navigation consistency (Home/Orchard/PRISM/About/Contact on all 5 pages)
- [x] PRISM page rewritten with real pitch deck content
- [x] Orchard: fake products replaced with Coming Soon placeholders
- [x] About: timeline, stats, and team updated for new startup reality
- [x] About page generated via Stitch and integrated
- [x] **Full visual unification** — all 5 pages rebuilt with shared navbar, footer, Tailwind config, glass styles, body classes, scrollbar
- [x] **Mobile hamburger menu** — working slide-out drawer on all pages
- [x] **Scroll-triggered reveal animations** — IntersectionObserver fade-in/slide-up on all pages
- [x] **Unified footer** — consistent across all pages
- [x] **Build script** — `rebuild.py` for reproducible page rebuilds
- [x] **Backups** — originals saved in `site/backup/`
- [x] **Stylized logo** — gold-gradient "EdenCORP" text logo replacing hive icon (nav + footer)
- [x] **Page transitions** — CSS fade-in on load + JS fade-out on navigate for smooth page-to-page flow
- [x] **Responsive typography** — heading scales (text-4xl/sm:text-6xl/md:text-8xl) on home, PRISM, about
- [x] **Hero orb responsive** — scales from 280px → 400px → 600px across breakpoints
- [x] **Hero CTA wired** — "Enter Ecosystem" now links to orchard.html
- [x] **Button press feedback** — `active:scale(0.97)` micro-interaction on all pages
- [x] **Contact slider fix** — budget fill bar uses specific ID selector instead of generic class
- [x] **React components stored** — `AnimatedLogo.tsx` + `RadialOrbitalTimeline.tsx` for future Next.js
- [x] **Dark/light theme toggle** — replaced "Start Trial" with functional toggle (pill switch, sun/moon icons, localStorage, light mode CSS overrides)
- [x] **React ThemeToggle stored** — `ThemeToggle.tsx` for future Next.js

## 7. Roadmap

- [ ] Next.js migration (use stored React components: AnimatedLogo, RadialOrbitalTimeline, ThemeToggle)
- [ ] PRISM page: add demo video or interactive walkthrough
- [ ] Contact form: add form submission handler
- [ ] Privacy & Terms pages (linked from footer)
- [ ] Micro-interactions: nav link hover underlines, card hover lifts
