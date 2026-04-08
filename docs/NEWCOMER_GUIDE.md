# Newcomer Guide

## What this repo is
This is a content-driven personal portfolio built with **Next.js App Router**, **React**, **TypeScript**, and **Tailwind CSS v4**. Most pages are rendered from static data files in `src/data` and mapped into reusable UI sections/components.

## High-level architecture
- `app/`: Route-level pages, metadata, and SEO files (`sitemap.ts`, `robots.ts`).
- `src/components/`: Reusable UI and page sections.
  - `layout/`: global shell pieces (navbar/footer)
  - `sections/`: homepage-focused content blocks
  - `ui/`: shared wrappers and primitives
- `src/data/`: content model for about/skills/portfolio/insights/contact.
- `public/`: static assets (images, PDFs, SVG diagram).

## Runtime model
- `app/layout.tsx` is the global shell and metadata source.
- Each route page imports data and components, then renders static content.
- Detail routes (`/portfolio/[slug]`, `/insights/[slug]`) find content by `slug` and call `notFound()` when missing.
- `Navbar` and `ScrollNavigation` are client components; most other components are server-rendered by default.

## Main flows
1. Home page composes sections from `src/components/sections/*`.
2. Listing pages (`/portfolio`, `/insights`) map arrays from `src/data/*` to cards.
3. Detail pages read route params and locate matching content in `src/data/*`.
4. Global navigation/footer wrap all pages from the root layout.

## Important conventions
- Prefer adding/changing content in `src/data/*` instead of hardcoding text into page files.
- Keep route files in `app/` mostly orchestration-focused (compose components + data).
- Use `Metadata` exports in page/layout files for SEO consistency.
- Keep reusable styling patterns in components; avoid large repeated JSX blocks.

## Quick start
```bash
npm install
npm run dev
npm run lint
npm run build
```

## Good next learning tasks
1. Add explicit TypeScript types/interfaces for `caseStudies` and `insights`.
2. Implement `generateStaticParams` and/or stronger typed params for dynamic routes.
3. Move inline arrays in some section files into `src/data` for consistency.
4. Replace `<img>` in portfolio detail with `next/image` where appropriate.
5. Add tests (component smoke tests and route-level rendering checks).
6. Improve README with architecture notes and contributor workflow.
