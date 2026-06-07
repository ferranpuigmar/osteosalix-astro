# React Islands

## index.tsx (orquestador)

Solo contiene:
- Estado global del island (`useState`, `useReducer`)
- Llamadas a hooks del island
- **Composición** de subcomponentes (JSX mínimo, todo delegado)

```tsx
// ✅ Bien
export default function Header({ pathname = '/' }: Props) {
  const { scrolled, isHome } = useScrollHeader(pathname);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <>
      <header className={headerCls}>
        <HeaderLogo />
        <DesktopNav submenuOpen={submenuOpen} onToggle={() => setSubmenuOpen(v => !v)} />
        <MenuToggle />
      </header>
      <MobileMenu />
    </>
  );
}
```

## Subcomponentes

- Props siempre tipadas con `interface Props`
- Son **puros** (no tienen estado propio a menos que sea estrictamente local)
- Exportación con nombre (`export function`, no `export default`)

## Estructura de carpetas

Si un island tiene más de un archivo (subcomponentes, hooks, utilidades), todo se organiza en carpetas:

```
src/islands/<nombre-isla>/
├── index.tsx              ← entry point (único default export)
├── hooks.ts               ← hooks compartidos del island (opcional)
└── components/
    ├── <subcomponente>.tsx
    ├── <otro>.tsx
    └── ...
```

Ejemplo: un island `header/` con 8 subcomponentes queda así:

```
src/islands/header/
├── index.tsx
├── hooks.ts
└── components/
    ├── header-logo.tsx
    ├── desktop-nav.tsx
    ├── desktop-submenu.tsx
    ├── nav-link.tsx
    ├── chevron-arrow.tsx
    ├── phone-button.tsx
    ├── menu-toggle.tsx
    └── mobile-menu.tsx
```

Reglas:
- `index.tsx` es el **único default export** del island
- Todo lo demás (componentes, subcomponentes) dentro de `components/`
- Los hooks compartidos pueden quedar en `hooks.ts` a nivel del island o dentro de `components/` si son específicos de un componente
- Las importaciones entre componentes de `components/` usan paths relativos (`./chevron-arrow`)

```tsx
interface Props {
  label: string;
  registration: UseFormRegisterReturn;
  error?: string;
}

export function FormField({ label, registration, error }: Props) {
  return (
    <div>
      <label>{label}</label>
      <input {...registration} />
      {error && <p>{error}</p>}
    </div>
  );
}
```

## Convenciones CSS

- Clases Tailwind como constantes fuera del componente: `const btnCls = '...'`
- NO mezclar Tailwind con CSS modules
- NO usar estilos inline excepto para valores dinámicos (`style={{ color: '...' }}`)
