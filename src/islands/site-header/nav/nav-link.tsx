interface Props {
  href: string;
  isActive?: boolean;
  children: React.ReactNode;
  scrolled: boolean;
}

export function NavLink({ href, isActive, children, scrolled }: Props) {
  const inactiveColor = scrolled
    ? 'text-gray hover:text-primary-dark'
    : 'text-white hover:text-primary-main';

  return (
    <a
      href={href}
      className={`text-sm tracking-wider uppercase transition-colors duration-300 ${
        isActive ? 'text-primary-main' : inactiveColor
      }`}
    >
      {children}
    </a>
  );
}
