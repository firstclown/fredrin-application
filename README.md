# fredrin-application

Joseph Erickson's application page for a Forward Deployed Engineer role — a single static page built with Next.js (App Router, TypeScript). No database, no API routes, no environment variables; deploys on Vercel with default settings.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
```

## Build

```bash
npm run build
npm start       # serve the production build
```

## Layout

- `app/globals.css` — design tokens (colors, fonts) and shared layout helpers
- `components/Nav.tsx` — sticky terminal-style nav
- `components/Hero.tsx`, `Projects.tsx`, `Fit.tsx`, `Contact.tsx` — one file per page section
- `components/ui/` — shared primitives: `Terminal`, `SectionLabel`, `Chip`, `StatTile`
