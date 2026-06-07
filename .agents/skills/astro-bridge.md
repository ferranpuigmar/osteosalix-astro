# Astro Bridge Pattern

Cada island React se monta desde un componente `.astro` que actúa como bridge:

```astro
---
// src/components/Header.astro
import IslandReact from '@/islands/Header/index';
const pathname = Astro.url.pathname;
---

<IslandReact pathname={pathname} client:load />
```

## Directivas client

| Directiva | Cuándo usar |
|---|---|
| `client:load` | Islands que afectan layout/UX visible de inmediato (header, nav) |
| `client:idle` | Islands no críticos (formularios, analytics) |
| `client:visible` | Islands que solo se ven al hacer scroll (lazy) |

## Diferencia clave .astro vs .tsx

| | `.astro` | `.tsx` (React) |
|---|---|---|
| Render | Build time (HTML estático) | Cliente (hydration) |
| Imports | Puede importar `astro:assets` | No puede |
| Uso | Todo lo que no necesita interactividad | Todo lo que necesita estado/cliente JS |

Los componentes `.astro` NO pueden importarse dentro de un `.tsx`. La comunicación es unidireccional: `.astro` → pasa props → `.tsx`.
