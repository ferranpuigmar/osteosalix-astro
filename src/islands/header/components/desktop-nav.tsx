import { useRef, useState, useCallback, useEffect } from 'react';
import { useClickOutside } from '../hooks';
import { NavLink } from './nav-link';
import { ChevronArrow } from './chevron-arrow';
import { DesktopSubmenu } from './desktop-submenu';
import type { MenuGroup } from '@/server/repositories/types';

interface Props {
  navigation: MenuGroup[];
  pathname: string;
}

export function DesktopNav({ navigation, pathname }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const closeSubmenu = useCallback((forceCollapse: boolean) => {
    if (forceCollapse) setOpenIndex(null);
  }, []);

  const navRef = useRef<HTMLDivElement>(null);
  useClickOutside(navRef, closeSubmenu);

  useEffect(() => {
    console.log('openIndex: ', openIndex);
  }, [openIndex]);

  return (
    <div ref={navRef} className="hidden lg:flex items-center">
      <ul className="flex items-center gap-12">
        {navigation.map((group, index) => {
          const hasSubmenu = group.submenuItem.length > 0;
          const isOpen = openIndex === index;
          const isActive = pathname === group.menuItem.link || group.submenuItem.some((s) => pathname === s.link);

          return (
            <li key={group.menuItem.id} className="relative">
              {hasSubmenu ? (
                <div className="flex flex-col items-center">
                  <button
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    onMouseEnter={() => setOpenIndex(index)}
                  >
                    <span
                      className={`no-underline text-[15px] transition-colors duration-300 ${
                        isActive ? 'text-primary font-medium' : 'text-primary hover:text-brand-primary'
                      }`}
                    >
                      {group.menuItem.title}
                    </span>
                    <ChevronArrow isOpen={isOpen} />
                  </button>
                  <DesktopSubmenu
                    items={group.submenuItem}
                    isOpen={isOpen}
                    pathname={pathname}
                    onNavigate={() => setOpenIndex(null)}
                  />
                </div>
              ) : (
                <NavLink href={group.menuItem.link} isActive={isActive}>
                  {group.menuItem.title}
                </NavLink>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
