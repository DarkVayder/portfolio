# Portfolio

Rabiu Muhammad — personal portfolio. React + TypeScript + Vite + Tailwind CSS, prerendered to static HTML.

## Scripts

```bash
npm run dev       # start dev server
npm run build     # type-check, build, then prerender every route to static HTML
npm run preview   # serve the production build
npm run lint      # run eslint
npm test          # run vitest (content, routing and prerender checks)
npm run cv        # regenerate public/Rabiu_Muhammad_CV.pdf from cv/cv.html (needs Edge or Chrome)
```

## Structure

- `src/data` — all editable content (profile, facts, principles, experience, projects, tech stack)
- `src/sections` — home page sections
- `src/pages` — routes: home, `/privacy`, 404
- `src/routes.ts` — route table with per-page title and description
- `scripts/prerender.mjs` — renders each route into `dist/` after the client build

## Editing content

- **Portrait:** save a square photo as `src/assets/headshot.jpg` (640×640 is plenty). The hero picks it up automatically and renders without one if the file is missing.
- **Measured results:** each project in `src/data/projects.ts` takes an optional `outcomes` array. Add real numbers there and an "Outcome" block appears on that case study.
- **Experience:** entries with `highlights` render in full; entries without render as a compact row under "Also".

## Deployment

Deploys to Vercel from `vercel.json`. Canonical links, `og:image` and `sitemap.xml` need the site's absolute URL: Vercel supplies it at build time, or set `SITE_URL` yourself (for example `SITE_URL=https://example.com npm run build`).

The site sets no cookies, loads no third-party resources and runs no analytics. Keep `/privacy` in step if that changes.
