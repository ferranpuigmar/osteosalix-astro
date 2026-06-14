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
- `server/repositories/` — swappable data source implementations (Strapi via GraphQL)
- `server/services/` — imports from `server/repositories/`, exposes business logic functions
- `pages/api/*` — imports from `server/services/`, re-exports those functions AND exposes HTTP GET endpoints
- Pages import data functions from `pages/api/*` for SSG build-time data
- HTTP clients can also consume `pages/api/*` endpoints at runtime

## Strapi GraphQL
- Query URL: `http://localhost:1337/graphql`
- Requires `Authorization: Bearer 1234567890abcdef` header (API token created by seed)
- Generated types in `src/server/infrastructure/graphql/generated.ts`
- Queries in `src/server/infrastructure/graphql/queries/`

## Images from Strapi
- Use `assetUrl(path?)` from `@/server/infrastructure/strapi-url.ts` — prepends `STRAPI_URL` to relative paths
- Use `inlineSvg(url)` from same file to fetch SVG content at build time (for SSR-friendly SVGs)
- `<Image>` from `astro:assets` requires a valid src — handle empty/null URLs gracefully (conditional render or placeholder)

## Header logo
- Logo SVG comes from Strapi (header single type → logo media field)
- Fetched in `header.astro` SSR via `inlineSvg(logoUrl)`, passed as `logoSvg` string prop to React `<HeaderIsland>`
- React component renders via `dangerouslySetInnerHTML` (not `react-inlinesvg`, which returns null during SSR)

## Import aliases
- `@/*` maps to `src/*` (configured in tsconfig.json)

## Typography
- All text rendering MUST use `<Text>` component from `@/components/shared/text.astro`
- Props: `size` (required, from `TypographySize`), `color` (optional, from `TypographyColor`), `tag` (optional override), `class` (optional extra Tailwind classes)
- For richtext content that may contain block elements (e.g. CKEditor output), use `tag="div"`
- For responsive sizes, override within `class` (e.g. `class="text-[26px] lg:text-5xl"`)
- DO NOT use raw `<h1>`, `<h2>`, `<p>`, `<span>`, etc. with manual Tailwind typography classes
