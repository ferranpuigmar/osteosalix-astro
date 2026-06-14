interface Props {
  logoSvg: string;
  textStart: string;
  textEnd: string;
}

export function HeaderLogo({ logoSvg, textStart, textEnd }: Props) {
  return (
    <div className="logo relative z-20">
      <a href="/" aria-label="Osteosalix" className="flex items-center gap-2.5 no-underline">
        <span className="size-8 text-logo-light inline-flex items-center justify-center shrink-0" dangerouslySetInnerHTML={{ __html: logoSvg }} />
        <span className="text-[24px] leading-none tracking-[1px] font-['Avenir'] font-medium">
          <span className="text-logo-dark">{textStart}</span><span className="text-brand-primary">{textEnd}</span>
        </span>
      </a>
    </div>
  );
}
