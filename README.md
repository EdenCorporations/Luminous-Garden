# EdenCORP — Luminous Garden

The official EdenCORP website. Built with Next.js 16, Tailwind CSS v4, and deployed on Vercel.

## Stack

- **Next.js 16** — App Router, Turbopack
- **Tailwind CSS v4** — `@theme inline` design tokens
- **Lucide React** — Icon library
- **EmailJS** — Client-side email delivery

## Development

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env.local` with your EmailJS credentials:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Deployment

Push to `main` — Vercel auto-deploys.
