interface Props {
  href: string;
  isActive?: boolean;
  children: React.ReactNode;
}

export function NavLink({ href, isActive, children }: Props) {
  return (
    <a
      href={href}
      className={`no-underline text-[15px] transition-colors duration-300 ${
        isActive ? 'text-primary font-medium' : 'text-primary hover:text-brand-primary'
      }`}
    >
      {children}
    </a>
  );
}
