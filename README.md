# EdenCORP

Eden is a custom workflow automation agency for organizations with manual work. We design and build automations for any workflow, including websites, spreadsheets, integrations, and executive dashboards. Each project starts with a discussion of the current process and its goals. We then define the scope, milestones, price, and support in an individual proposal. There is no fixed public price or checkout.

**Discuss a project:** [Email Eden](mailto:edencorp-org@mail.tin.computer) at edencorp-org@mail.tin.computer. Tell us which workflow you want to improve and what takes time today.

Eden was founded in 2025 and is based in Chennai, India. No entity is registered for Eden.

## Website source

Luminous Garden is the EdenCORP website source. Website: https://www.edencorp.org/. The public domain's current routing is being checked, so email is the direct inquiry path.

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

Publishing this repository does not confirm that the public domain serves this build. Check the deployment and domain assignment before treating a change as live.
