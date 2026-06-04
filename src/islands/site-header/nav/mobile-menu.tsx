import { ChevronArrow } from './chevron-arrow';
import type { MenuGroup } from '@/server/repositories/types';
import { useState } from 'react';

interface Props {
  navigation: MenuGroup[];
  pathname: string;
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ navigation, pathname, isOpen, onClose }: Props) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <div
      className={`fixed inset-0 top-16 bg-white z-40 transition-transform duration-300 md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <nav className="flex flex-col p-6 gap-4 pt-10">
        {navigation.map((group) => {
          const hasSubmenu = group.submenuItem.length > 0;
          const isSubmenuOpen = openSubmenu === group.menuItem.id;

          return (
            <div key={group.menuItem.id}>
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => {
                  if (hasSubmenu) {
                    setOpenSubmenu(isSubmenuOpen ? null : group.menuItem.id);
                  } else {
                    onClose();
                    if (group.menuItem.link) {
                      window.location.href = group.menuItem.link;
                    }
                  }
                }}
              >
                <span
                  className={`text-sm tracking-wider uppercase transition-colors duration-300 ${
                    pathname === group.menuItem.link
                      ? 'text-primary-main'
                      : 'text-gray hover:text-primary-dark'
                  }`}
                >
                  {group.menuItem.title}
                </span>
                {hasSubmenu && <ChevronArrow isOpen={isSubmenuOpen} scrolled />}
              </div>
              {hasSubmenu && (
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isSubmenuOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="flex flex-col gap-2 pl-4 mt-2 border-l border-gray/20">
                    {group.submenuItem.map((item) => (
                      <a
                        key={item.id}
                        href={item.link}
                        onClick={onClose}
                        className={`text-sm tracking-wider transition-colors duration-300 ${
                          pathname === item.link
                            ? 'text-primary-main'
                            : 'text-gray hover:text-primary-dark'
                        }`}
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
