import { useState, useEffect, useCallback, type RefObject } from 'react';

export function useScrollHeader() {
  const [headerWithScroll, setHeaderWithScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderWithScroll(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return headerWithScroll;
}

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const toggle = useCallback(() => setIsOpen((v) => !v), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (window.innerWidth >= 768) close();
  }, [close]);

  useEffect(() => {
    if (isMobile) {
      document.documentElement.style.overflow = isOpen ? 'hidden' : '';
    }
    return () => { document.documentElement.style.overflow = ''; };
  }, [isOpen, isMobile]);

  return { isOpen, toggle, close, isMobile };
}

export function useClickOutside(ref: RefObject<HTMLElement | null>, handler: (force: boolean) => void) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      handler(true);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
