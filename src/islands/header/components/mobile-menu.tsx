import { useState, useEffect } from 'react';
import { navigate } from 'astro:transitions/client';
import { MdClose } from 'react-icons/md';
import { ChevronArrow } from './chevron-arrow';
import type { MenuGroup } from '@/server/types';

interface Props {
  navigation: MenuGroup[];
  pathname: string;
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ navigation, pathname, isOpen, onClose }: Props) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href="/"]');
      if (anchor && isOpen) onClose();
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [isOpen, onClose]);

  const handleAnchorLink = (link: string) => {
    navigate(link);
    onClose();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-[var(--bg-canvas)] p-4 flex flex-col items-start pt-20 z-50 transition-transform duration-300 lg:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <style>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        <ul className="w-full pb-10">
        {navigation.map((group, idx) => {
          const hasSubmenu = group.submenuItem.length > 0;
          const isSubmenuOpen = openSubmenu === group.id;
          const isAnchor = (group.link ?? '').startsWith('#') || (group.link ?? '').startsWith('/#');

          return (
            <li key={group.id} className={`w-full pb-2 flex flex-col ${!isOpen ? 'opacity-0' : ''}`}
              style={{
                animation: isOpen
                  ? `fadeSlideIn 0.3s ease-out ${idx * 0.1}s both`
                  : undefined
              }}
            >
              {hasSubmenu ? (
                <>
                  <button
                    className="flex items-center justify-center w-full gap-2 cursor-pointer"
                    onClick={() => setOpenSubmenu(isSubmenuOpen ? null : group.id)}
                  >
                    <span className="text-lg text-primary">{group.title}</span>
                    {isSubmenuOpen ? <MdClose size={20} className="text-primary" /> : <ChevronArrow />}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isSubmenuOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      {group.submenuItem.map((item, i) => (
                        <a
                          key={item.id}
                          href={item.link}
                          onClick={onClose}
                          className={`text-sm py-2 transition-colors duration-300 ${
                            pathname === item.link
                              ? 'text-brand-primary font-semibold'
                              : 'text-secondary hover:text-brand-primary'
                          }`}
                          style={{
                            animation: isSubmenuOpen
                              ? `fadeSlideIn 0.3s ease-out ${i * 0.08}s both`
                              : undefined
                          }}
                        >
                          {item.title}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : isAnchor ? (
                <button
                  className="text-lg text-primary w-full text-center py-4"
                  onClick={() => handleAnchorLink(group.link ?? '')}
                >
                  {group.title}
                </button>
              ) : (
                <a
                  href={group.link ?? '#'}
                  className="text-lg text-primary w-full text-center py-4 no-underline"
                  onClick={onClose}
                >
                  {group.title}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
