import { siteConfig } from '@/data/site-config';

interface Props {
  scrolled: boolean;
}

export function PhoneDesktop({ scrolled }: Props) {
  return (
    <a
      href={`tel:${siteConfig.phone}`}
      className={`hidden md:flex items-center gap-2 text-sm transition-colors ${
        scrolled ? 'text-gray hover:text-primary-dark' : 'text-white hover:text-primary-light'
      }`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z" />
      </svg>
      {siteConfig.phone}
    </a>
  );
}
