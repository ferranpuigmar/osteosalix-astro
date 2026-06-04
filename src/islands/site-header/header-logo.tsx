import { siteConfig } from '@/data/site-config';

interface Props {
  scrolled: boolean;
}

export function HeaderLogo({ scrolled }: Props) {
  const logoSrc = scrolled ? siteConfig.logoDark.url : siteConfig.logo.url;
  return (
    <a href="/" className="flex items-center" aria-label={siteConfig.companyName}>
      <img
        src={logoSrc}
        alt={siteConfig.logo.alt}
        width={siteConfig.logo.width}
        height={siteConfig.logo.height}
      />
    </a>
  );
}
