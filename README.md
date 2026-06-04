# Osteosalix — Astro + MDX

Adaptación de la web de Osteosalix (Next.js + Strapi) a Astro con contenido en MDX.

## Stack

- **Astro 5** — Framework web
- **MDX** — Contenido en archivos Markdown con JSX
- **Tailwind CSS v4** — Estilos utilitarios
- **Content Collections** — Tipado seguro del contenido
- **Despliegue estático** (con endpoint API opcional para el formulario)

## Estructura

```
src/
├── content/
│   ├── config.ts          # Esquema de colecciones
│   ├── pages/             # Páginas SEO (genéricas)
│   ├── services/          # Páginas de servicios
│   └── legal/             # Páginas legales
├── data/
│   ├── site-config.ts     # Configuración global (logo, teléfono, email, etc.)
│   ├── navigation.ts      # Menú de navegación
│   └── home.ts            # Datos de la página de inicio
├── layouts/
│   ├── BaseLayout.astro   # Layout principal (header + footer)
│   └── ContentPage.astro  # Layout para páginas de contenido legal
├── components/            # Componentes reutilizables
├── pages/                 # Rutas de la web
│   ├── index.astro        # Página de inicio
│   ├── [slug].astro       # Páginas SEO dinámicas
│   ├── servicios/
│   │   └── [slug].astro   # Páginas de servicio
│   └── legal/
│       └── [slug].astro   # Páginas legales
├── styles/
│   └── globals.css        # Tailwind + estilos globales
└── lib/
    └── utils.ts           # Utilidades
```

## Contenido MDX

Los archivos MDX usan **frontmatter** para los metadatos y el cuerpo del MDX para el HTML.

### Ejemplo de servicio (`src/content/services/osteopatia.mdx`):

```mdx
---
title: '<h1>Osteopatía</h1>'
description: 'Recupera tu bienestar con nuestras sesiones de osteopatía...'
titleImage: '/images/hero-osteopatia.jpg'
contentImage: '/images/content-osteopatia.jpg'
order: 1
---

Contenido en **Markdown** aquí...
```

### Añadir una página nueva:

1. Crear el archivo `.mdx` en la colección correspondiente
2. Añadir las imágenes en `public/images/`
3. Si es un servicio nuevo, añadirlo también en `src/data/home.ts` (sección `services.service`)
4. Si es una página SEO nueva, añadir la entrada en `src/data/home.ts` (sección `highlightedContent`)
5. Si es una página legal, se genera automáticamente

## Imágenes

Coloca las imágenes en `public/images/`. Las rutas de referencia en los MDX y en los datos son relativas a `/images/`.

Necesitarás al menos:

| Archivo | Descripción |
|---|---|
| `imagotip.svg` | Logotipo |
| `hero-bg.jpg` | Fondo del hero |
| `el-centro.jpg` | Imagen de la sección "El centro" |
| `servicio-osteopatia.jpg` | Imagen del servicio |
| `servicio-fisioterapia.jpg` | ... |
| `servicio-pediatrica.jpg` | ... |
| `servicio-ginecologica.jpg` | ... |
| `hero-osteopatia.jpg` | Cabecera de página de servicio |
| `hero-fisioterapia.jpg` | ... |
| `hero-pediatrica.jpg` | ... |
| `hero-ginecologica.jpg` | ... |
| `content-*.jpg` | Imágenes de contenido |
| `destacado-1.jpg` | Imagen destacada |
| `destacado-2.jpg` | ... |
| `bg-map.jpg` | Fondo de la sección del mapa |

## Fuentes

Copia los archivos de la fuente `mobile-sans` desde el proyecto original a `public/fonts/`:

- `mobile_sans-webfont.woff2`
- `mobile_sans-webfont.woff`
- `mobile_sans-webfont.ttf`
- `mobile_sans-webfont.svg`

## Formulario de contacto

El formulario de contacto funciona con un endpoint API de Astro (`src/pages/api/contact.ts`). 
Para usarlo en producción necesitas:

1. **Opción A (recomendada para estático):** Usa [Formspree](https://formspree.io). Crea una cuenta, obtén tu endpoint y añádelo en `src/data/site-config.ts`:
   ```ts
   formEndpoint: 'https://formspree.io/f/xxxxxxxx',
   ```

2. **Opción B (SSR):** Despliega con un adapter de Node (`@astrojs/node`) y configura la variable de entorno `GMAIL_TOKEN` con la contraseña de aplicación de Gmail.

## Scripts

```bash
npm run dev      # Desarrollo
npm run build    # Build estático
npm run preview  # Vista previa del build
```

## Despliegue

Al ser un sitio estático, puedes desplegarlo en cualquier hosting estático:

```bash
npm run build
# Sube la carpeta dist/ a tu hosting
```

Si necesitas el formulario de contacto funcional, usa Formspree (opción A) o despliega con un adapter de Node.
