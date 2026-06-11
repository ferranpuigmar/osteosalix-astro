import SVG from 'react-inlinesvg';
import type { LogoData } from '@/server/types';

interface Props {
  logo: LogoData;
}

export function HeaderLogo({ logo }: Props) {
  return (
    <div className="logo relative z-20">
      <a href="/" aria-label="Osteosalix" className="flex items-center gap-2.5 no-underline">
        <SVG src={logo.logo} className="size-8 text-logo-light" />
        <span className="text-[24px] leading-none tracking-[1px] font-['Avenir'] font-medium">
          <span className="text-logo-dark">{logo.textStart}</span><span className="text-brand-primary">{logo.textEnd}</span>
        </span>
      </a>
    </div>
  );
}
