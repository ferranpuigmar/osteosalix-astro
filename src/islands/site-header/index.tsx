import { useScrollState, useMobileMenu } from './hooks';
import { HeaderLogo } from './header-logo';
import { PhoneDesktop } from './phone-button';
import { MenuToggle } from './menu-toggle';
import { DesktopNav } from './nav/desktop-nav';
import { MobileMenu } from './nav/mobile-menu';
import type { MenuGroup } from '@/server/repositories/types';

interface Props {
  pathname: string;
  navigation: MenuGroup[];
}

export default function HeaderIsland({ pathname, navigation }: Props) {
  const headerWithScroll = useScrollState();
  const { isOpen: isMobileOpen, toggle: toggleMobile, close: closeMobile } = useMobileMenu();
  const isHomePage = pathname === '/';
  const scrolled = headerWithScroll || !isHomePage;

  const headerClass = scrolled ? 'bg-white fixed' : 'bg-transparent absolute';
  const logoScrolled = scrolled;

  return (
    <header
      className={`top-0 left-0 w-full z-50 transition-all duration-300 h-16 lg:h-20 flex justify-center items-center ${headerClass} ${!scrolled ? 'text-white' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between w-full">
        <HeaderLogo scrolled={logoScrolled} />
        <DesktopNav navigation={navigation} pathname={pathname} scrolled={scrolled} />
        <div className="flex items-center gap-4">
          <PhoneDesktop scrolled={scrolled} />
          <MenuToggle isOpen={isMobileOpen} onClick={toggleMobile} scrolled={scrolled} />
        </div>
      </div>
      <MobileMenu navigation={navigation} pathname={pathname} isOpen={isMobileOpen} onClose={closeMobile} />
    </header>
  );
}
