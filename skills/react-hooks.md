# Custom Hooks

## Reglas

- Cada hook tiene una **única responsabilidad**
- Usar `useCallback` para funciones pasadas como props (evita re-renders)
- Hacer **cleanup** de event listeners en el return de `useEffect`
- Devolver objetos planos: `return { open, toggle, close }`

## Patrones del proyecto

### Scroll header

```tsx
export function useScrollHeader(pathname: string) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrolled, isHome: pathname === '/' };
}
```

### Click outside

```tsx
export function useClickOutside<T extends HTMLElement>(cb: () => void) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) cb();
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [cb]);

  return ref;
}
```

### Mobile menu (body scroll lock)

```tsx
export function useMobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => { document.documentElement.style.overflow = ''; };
  }, [open]);

  return { open, toggle: () => setOpen(v => !v), close: () => setOpen(false) };
}
```

Los hooks se importan dentro del island correspondiente (ej. `src/islands/Header/hooks.ts`).
