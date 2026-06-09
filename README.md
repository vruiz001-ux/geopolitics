# Geopolitics

A modern news platform inspired by the editorial structure of premium news organizations like Semafor, built as an original product. Original reporting on the people, institutions, and forces shaping the global order.

## Features

- **Editorial homepage** with a hero story, secondary features, a latest-news rail, and topic sections.
- **Structured article template** that breaks every story into labeled sections: The Facts, Why It Matters, Reporter's Analysis, Another View, Global Perspective, What's Next, and Sources.
- **Six category sections**: Politics, Business, Technology, Climate, World, Media.
- **Newsletter system** with multi-select signup, validation, and confirmation state.
- **Search** with overlay (anywhere) and a dedicated page with highlighted results.
- **Author profiles** with bio, social links, expertise, and full article list.
- **Responsive** at 320px, 375px, 768px, 1024px, and 1440px.
- **Accessible**: skip link, focus trap on the mobile menu, ARIA labels, semantic HTML, visible focus states.

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (transitions)
- Lucide React (icons)

## Getting started

```bash
npm install
npm run dev
```

The app runs on [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/                  Next.js App Router routes
    page.tsx            Homepage
    article/[slug]/     Article template
    category/[slug]/    Category pages
    newsletters/        Newsletter signup
    authors/[slug]/     Author profiles
    search/             Search page
    about/              About page
  components/           Reusable UI
  data/                 Mock content (articles, authors, etc.)
  lib/                  Helpers & types
```

## Data model

All mock content lives in `src/data/`. The shape mirrors what a CMS would return so swapping in Sanity, Strapi, Payload, or another headless source is a matter of replacing the helpers in `src/lib/data.ts`. See `src/lib/types.ts` for the schema.

## Design

- Warm paper background (`#F6F1E7`), deep ink text, single bold accent in burnt orange.
- Serif headlines (Source Serif 4) paired with a clean sans (Inter).
- Editorial grid with strong dividers, restrained motion, and clear typographic hierarchy.

## Notes

- All article content is fictional. Images are pulled from Unsplash for demonstration.
- Brand identity is original and does not derive from any specific publication.
