# The Software Lab

The Software Lab is a Dehradun-based software engineering and digital growth company serving institutions and businesses across India.

The site is being migrated from a Vite single-page React app to Next.js App Router, TypeScript and Tailwind CSS. The legacy implementation remains in `src/` as a reference while route content is moved into `app/`.

## Run locally

**Prerequisites:** Node.js 20+

```bash
pnpm install
pnpm dev
```

The app serves at `http://localhost:3000`.

```bash
pnpm build   # production build
pnpm start   # serve the production build
pnpm lint    # TypeScript check
```

## App Router layout

- `app/layout.tsx` — global layout, navigation, footer and business schema
- `app/page.tsx` — homepage
- `app/sitemap.ts` and `app/robots.ts` — generated search-crawler endpoints
- `components/` — shared navigation, footer, JSON-LD and audit CTA components
- `lib/seo-config.ts` — canonical host, metadata helper and route SEO data
- `src/` — original Vite implementation retained as a migration reference

The sitemap's blog slugs are registered in `lib/seo-config.ts`; keep them aligned with published blog content.

## Business details

Public business details are used in the footer and structured data. Update the address and contact information in `components/Footer.tsx`, `components/JsonLd.tsx` and `components/FloatingAuditCta.tsx` together if they change.
