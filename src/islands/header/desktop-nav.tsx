import { useRef, useState, useCallback } from 'react';
import { useClickOutside } from './hooks';
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

  const submenuRef = useRef<HTMLDivElement>(null);
  useClickOutside(submenuRef, closeSubmenu);

  return (
    <div ref={submenuRef} className="hidden md:flex items-center">
      <ul className="flex items-center">
        {navigation.map((group, index) => {
          const hasSubmenu = group.submenuItem.length > 0;
          const isOpen = openIndex === index;
          const isActive = pathname === group.menuItem.link || group.submenuItem.some((s) => pathname === s.link);

          return (
            <li key={group.menuItem.id} className="mx-3 relative">
              {hasSubmenu ? (
                <div className="flex flex-col items-center">
                  <button
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    onMouseEnter={() => setOpenIndex(index)}
                  >
                    <NavLink href={group.menuItem.link} isActive={isActive}>
                      {group.menuItem.title}
                    </NavLink>
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
