import type { MenuItem } from '@/server/repositories/types';

interface Props {
  items: MenuItem[];
  isOpen: boolean;
  pathname: string;
  onNavigate: () => void;
}

export function DesktopSubmenu({ items, isOpen, pathname, onNavigate }: Props) {
  return (
    <ul
      className={`bg-white absolute w-[230px] top-[calc(100%+10px)] left-1/2 -translate-x-1/2 shadow-md rounded-br-md overflow-hidden transition-all duration-300 origin-top ${
        isOpen
          ? 'scale-y-100 opacity-100 pointer-events-auto'
          : 'scale-y-0 opacity-0 pointer-events-none'
      }`}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <li key={item.id}>
            <a
              href={item.link}
              onClick={onNavigate}
              className={`block text-center text-sm tracking-wider text-gray py-3 px-4 transition-colors duration-300 hover:text-primary-dark hover:bg-gray-50 ${
                !isLast ? "relative before:content-[''] before:absolute before:left-[5%] before:bottom-0 before:w-[90%] before:h-px before:bg-primary-main before:opacity-40" : ''
              } ${pathname === item.link ? 'text-primary-dark font-semibold' : 'text-gray'}`}
            >
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
