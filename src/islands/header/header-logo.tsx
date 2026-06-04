import { siteConfig } from '@/data/site-config';

export function HeaderLogo() {
  return (
    <div className="logo relative z-20">
      <a href="/" aria-label={siteConfig.companyName}>
        <img src='/images/logo-white.svg' alt={siteConfig.companyName} width={140} height={20} />
      </a>
    </div>
  );
}
