# Project Structure

```
src/
├── components/   → .astro (server-rendered, static)
├── islands/      → .tsx (React, con client:* hydration)
│   └── NombreIsland/
│       ├── types.ts        → interfaces y tipos
│       ├── schema.ts       → Zod schema (si aplica)
│       ├── hooks.ts        → hooks personalizados del island
│       ├── fields/         → componentes de formulario atómicos
│       ├── nav/            → componentes de navegación
│       └── index.tsx       → componente principal (orquestador)
├── data/          → configuración, navegación, contenido
├── layouts/
├── pages/
├── content/       → MDX collections
└── styles/

skills/            → documentación segmentada del proyecto
```

### Reglas de directorio

- Cada island es **autónomo**: sus tipos, esquema, lógica y presentación viven dentro de la carpeta. No depende de nada fuera excepto librerías y `src/data/`.
- `src/components/` solo contiene `.astro`. Si necesitas un componente React, va en `src/islands/`.
- Las subcarpetas dentro de un island (`fields/`, `nav/`) describen el contexto del subcomponente.
