interface Props {
  href: string;
  isActive?: boolean;
  children: React.ReactNode;
}

export function NavLink({ href, isActive, children }: Props) {
  return (
    <a
      href={href}
      className={`no-underline text-sm tracking-wider uppercase transition-colors duration-300 ${
        isActive ? 'text-primary-main' : 'text-gray hover:text-primary-dark'
      }`}
    >
      {children}
    </a>
  );
}
