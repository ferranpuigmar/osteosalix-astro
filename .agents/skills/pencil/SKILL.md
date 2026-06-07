---
name: pencil
description: Convenciones aprendidas al traducir nodos de Pencil a código web (Tailwind, CSS, HTML). Usar cuando se trabaja con el archivo .pen de este proyecto para implementar diseños en Astro/Tailwind.
---

# Convenciones Pencil → Web

## Gradientes lineales (`gradientType: "linear"`)

### Convención de rotación

| Rotation en Pencil | Dirección CSS equivalente |
|--------------------|--------------------------|
| `0°`               | `to bottom` (top → bottom) |
| `90°`              | `to left` (right → left) |
| `180°`             | `to top` (bottom → top) |
| `270°`             | `to right` (left → right) |

> **Regla clave:** `rotation: 90` = `to left` en CSS. La parte opaca/oscura del stop en posición 0 arranca desde la **derecha**.

### Ejemplo: horizFade (PJtYy) — rotation 90

```json
{
  "colors": [
    { "color": "#F7F5F2FF", "position": 0 },
    { "color": "#F7F5F2E0", "position": 0.4 },
    { "color": "#F7F5F200", "position": 0.7 }
  ],
  "rotation": 90
}
```

```html
<!-- Tailwind: to-left, stop en posición 0 empieza por la derecha -->
<div class="absolute inset-0 bg-gradient-to-l from-[#F7F5F2] from-0% via-[#F7F5F2]/88 via-40% to-[#F7F5F2]/0 to-70%" />
```

### Ejemplo: heroBg (EnIjz) — rotation 180

```json
{
  "colors": [
    { "color": "#8A9F86", "position": 0 },
    { "color": "#9DAF99", "position": 0.5 },
    { "color": "#F7F5F2", "position": 1 }
  ],
  "rotation": 180
}
```

```html
<!-- Tailwind: to-top, stop en posición 0 empieza por abajo -->
<div class="absolute inset-0 bg-gradient-to-t from-[#8A9F86] via-[#9DAF99] via-50% to-[#F7F5F2]" />
```

## Opacidad de frame vs. opacidad de fill

- `opacity` en el nodo raíz → `opacity-[x]` en Tailwind (sobre el elemento completo).
- `fill.opacity` dentro del fill → opacidad solo del fondo, usar `/x` en la clase de color.

## Orden de capas (z-order)

El array `children` de Pencil va de **abajo hacia arriba**: el primer hijo es el más al fondo, el último es el más encima.

En HTML/CSS replicar con DOM order (último en el DOM = encima) o con `z-index`.

## Radius orgánico

`cornerRadius: [120, 20, 120, 20]` → `rounded-tl-[120px] rounded-tr-[20px] rounded-br-[120px] rounded-bl-[20px]`

## Colores con alpha en Tailwind

No usar hex con alpha (`#F7F5F2E0`) en clases arbitrarias de Tailwind — no genera CSS.  
Usar el modificador `/` con el valor decimal: `bg-[#F7F5F2]/88`.

## SVG path fill con variable CSS

```html
<path class="fill-[var(--bg-canvas)]" ... />
```
