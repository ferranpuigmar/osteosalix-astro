import { siteConfig } from '@/data/site-config';
import LogoIcon from '@/images/logo-icon.svg?react';

export function HeaderLogo() {
  return (
    <div className="logo relative z-20">
      <a href="/" aria-label={siteConfig.companyName} className="flex items-center gap-2.5 no-underline">
        <LogoIcon className="size-8 text-logo-light" />
        <span className="text-[24px] leading-none tracking-[1px] font-['Avenir'] font-medium">
          <span className="text-logo-dark">osteo</span><span className="text-brand-primary">salix</span>
        </span>
      </a>
    </div>
  );
}
