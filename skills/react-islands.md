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
