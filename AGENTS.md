# Project conventions

## File naming
- All files MUST use **kebab-case** (e.g. `hero-banner.astro`, `contact-form.astro`, `desktop-nav.tsx`)
- Exceptions: `[slug].astro` / `[slug].ts` (Astro dynamic route params), `index.{astro,tsx,ts}` (entry points), `config.ts`, `schema.ts`, `types.ts`, `hooks.ts`
- Directory names also kebab-case: `contact-form/`, `server/`

## Architecture
```
src/
  server/           ← backend (build-time only)
    services/       ← business logic
    repositories/   ← data access (interfaces + implementations)
  pages/api/        ← HTTP endpoints + re-exports for SSG
  pages/            ← Astro route pages
  components/       ← Astro components (templates), grouped by context
    layout/         ← structural shells (header, footer, layout-wrapper, container)
    home/           ← home page sections (hero-banner, introduction, services, philosophy-banner)
    centers/        ← center-related (centros-section, center-card, center-hero, center-services, gallery-carousel)
    shared/         ← reused across contexts (service-card, hero-header, contact-section)
  layouts/          ← Astro layout components
  islands/          ← React interactive islands
  content/          ← MDX content collections
  styles/           ← global CSS
```

## Layers
- `server/repositories/` — swappable data source implementations (MDX now, Strapi later)
- `server/services/` — imports from `server/repositories/`, exposes business logic functions
- `pages/api/*` — imports from `server/services/`, re-exports those functions AND exposes HTTP GET endpoints
- Pages import data functions from `pages/api/*` for SSG build-time data
- HTTP clients can also consume `pages/api/*` endpoints at runtime

## Import aliases
- `@/*` maps to `src/*` (configured in tsconfig.json)
