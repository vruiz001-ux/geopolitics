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

## Editing content (CMS)

All content lives as JSON files in `content/` — articles, authors, categories, newsletters, and tags. The code in `src/` is the frame; the CMS only ever touches `content/`, so editors cannot break the design.

**Edit in the browser:** open [`/admin`](https://geopolitics-vruiz001.netlify.app/admin) on the live site. Sign in with a GitHub personal access token (Settings → Developer settings → Fine-grained tokens → grant read/write on this repo's Contents). Every save commits to `main`, which triggers an automatic redeploy via GitHub Actions — your change is live in ~2 minutes.

**Edit locally:** run `npx @sveltia/cms-server` in one terminal and `npm run dev` in another, then open `http://localhost:3000/admin/index.html` and pick "Work with local repository". Or just edit the JSON files in `content/` directly.

The data layer reads `content/` at build time in `src/lib/data.ts`. Swapping in Sanity, Strapi, or Payload later means replacing those helpers only. See `src/lib/types.ts` for the schema.

## Deployment

The Netlify site is linked to this GitHub repo: every push to `main` (including CMS saves) triggers an automatic build and deploy. Manual deploy: `npx netlify-cli deploy --build --prod`.

## Design

- Warm paper background (`#F6F1E7`), deep ink text, single bold accent in burnt orange.
- Serif headlines (Source Serif 4) paired with a clean sans (Inter).
- Editorial grid with strong dividers, restrained motion, and clear typographic hierarchy.

## Notes

- All article content is fictional. Images are pulled from Unsplash for demonstration.
- Brand identity is original and does not derive from any specific publication.
