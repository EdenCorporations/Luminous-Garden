---
pass: 7
page: all
action: polish-and-features
stitch_project: 10014081437017169570
---

# Pass 7 — Polish & Advanced Features

## What Was Completed (Pass 6)
- ✅ Next.js 16 project initialized (App Router, TypeScript, Tailwind v4, Turbopack)
- ✅ Full design system migrated to globals.css with @theme inline tokens
- ✅ Root layout with Inter / Space Grotesk / Space Mono fonts via next/font
- ✅ Navbar component (lucide icons, active route highlight, mobile hamburger, NO theme toggle — dark only)
- ✅ Footer component (EdenCORP gradient logo, ©2026, nav links)
- ✅ ScrollReveal component (IntersectionObserver for .reveal elements)
- ✅ shadcn/ui components: Badge, Button, Card (CVA + Radix Slot)
- ✅ Hero restored to original orb simulation implementation (static CSS orb layers)
- ✅ EcosystemOrbital component (RadialOrbitalTimeline adapted — replaces old bento grid)
- ✅ Homepage: HeroSection (orb simulation + hero content) + ProblemSection + EcosystemOrbital
- ✅ Orchard page: PRISM flagship card (LIVE) + 5 Coming Soon cards + filter bar + search
- ✅ PRISM page: 3-step narrative timeline + sticky dashboard mockup with terminal/graph/stats
- ✅ About page: hero/timeline/philosophy/stats/team sections
- ✅ Contact page: glassmorphism form with reactive budget slider
- ✅ Theme toggle removed everywhere — dark mode only
- ✅ All 5 routes build successfully (static prerender)

## Stored Components (for future use)
- `components/AnimatedLogo.tsx` — Decrypt/scramble text animation + rotating gradient SVG arcs
- `components/RadialOrbitalTimeline.tsx` — Orbital node graph showing phases with expandable cards

## Project Structure
```
app/                          # Next.js 16 project
  src/
    app/
      globals.css             # Design system (Tailwind v4 @theme inline)
      layout.tsx              # Root layout + fonts + Navbar/Footer/ScrollReveal
      page.tsx                # Home (Hero + Problem + EcosystemOrbital)
      orchard/page.tsx        # Product catalog
      prism/page.tsx          # PRISM deep dive
      about/page.tsx          # Origin story + team
      contact/page.tsx        # Contact form
    components/
      Navbar.tsx              # Floating pill nav
      Footer.tsx              # Footer
      ScrollReveal.tsx        # Scroll reveal observer
      EcosystemOrbital.tsx    # Orbital timeline (homepage)
      sections/
        Hero.tsx              # Homepage hero
        Problem.tsx           # "Weed of Inefficiency" section
      ui/
        badge.tsx             # shadcn Badge
        button.tsx            # shadcn Button
        card.tsx              # shadcn Card
    lib/
      utils.ts                # cn() utility
```

## Design System (carry forward)
- BG: #0A0A0A (void), Surfaces: glassmorphism rgba(15,20,25,0.4) blur-16px
- Accent: Gold #FFD700, Headings: Space Grotesk Bold, Body: Inter, Mono: Space Mono
- Nav: Floating pill — stylized gold-gradient EdenCORP + Home / Orchard / PRISM / About / Contact
- Dark mode only (no theme toggle)
- Tailwind v4 with @theme inline (no tailwind.config.ts)

## Tasks
- [ ] Implement AnimatedLogo with framer-motion in navbar
- [ ] Add page transition animations (framer-motion AnimatePresence)
- [ ] PRISM page: add demo video placeholder or interactive walkthrough
- [ ] Contact form: integrate form handler (Formspree, Vercel, or custom API)
- [ ] Create Privacy Policy & Terms of Service pages
- [ ] Nav link hover underline micro-interactions
- [ ] Performance: lazy-load assets, optimize for Core Web Vitals
- [ ] SEO: add Open Graph meta, robots.txt, sitemap.xml
- [ ] Add loading.tsx and error.tsx for each route

## Constraints
- Keep ALL existing design and animations intact
- No fake content — PRISM is the only real product
- Startup is brand new — no testimonials or inflated stats
- Dark mode only — no theme toggle
