import type { MenuItem } from '@/server/repositories/types';

interface Props {
  items: MenuItem[];
  pathname: string;
}

export function DesktopSubmenu({ items, pathname }: Props) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
      <div className="bg-white rounded-lg shadow-xl py-2 min-w-[200px]">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className={`block px-4 py-2 text-sm tracking-wider transition-colors duration-300 ${
              pathname === item.link
                ? 'text-primary-dark font-semibold'
                : 'text-gray-700 hover:text-primary-dark hover:bg-gray-50'
            }`}
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
}
