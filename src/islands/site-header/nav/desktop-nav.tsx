import { useRef } from 'react';
import { useClickOutside } from '../hooks';
import { NavLink } from './nav-link';
import { ChevronArrow } from './chevron-arrow';
import { DesktopSubmenu } from './desktop-submenu';
import type { MenuGroup } from '@/server/repositories/types';
import { useState } from 'react';

interface Props {
  navigation: MenuGroup[];
  pathname: string;
  scrolled: boolean;
}

export function DesktopNav({ navigation, pathname, scrolled }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setOpenIndex(null));

  return (
    <nav ref={ref} className="hidden md:flex items-center gap-8">
      {navigation.map((group, index) => {
        const isActive = pathname === group.menuItem.link || group.submenuItem.some((s) => pathname === s.link);
        const hasSubmenu = group.submenuItem.length > 0;
        const isOpen = openIndex === index;

        return (
          <div
            key={group.menuItem.id}
            className="relative group"
            onMouseEnter={() => hasSubmenu && setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer">
              <NavLink href={group.menuItem.link} isActive={isActive} scrolled={scrolled}>
                {group.menuItem.title}
              </NavLink>
              {hasSubmenu && <ChevronArrow isOpen={isOpen} scrolled={scrolled} />}
            </div>
            {hasSubmenu && (
              <DesktopSubmenu items={group.submenuItem} pathname={pathname} />
            )}
          </div>
        );
      })}
    </nav>
  );
}
