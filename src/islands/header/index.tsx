import { useScrollHeader, useMobileMenu } from './hooks';
import { HeaderLogo } from './components/header-logo';
import { DesktopNav } from './components/desktop-nav';
import { PhoneButton } from './components/phone-button';
import { MenuToggle } from './components/menu-toggle';
import { MobileMenu } from './components/mobile-menu';
import type { LogoData, MenuGroup } from '@/server/domain/models';

interface Props {
  pathname: string;
  navigation: MenuGroup[];
  logo: LogoData;
  whatsappNumber: string;
}

export default function HeaderIsland({ pathname, navigation, logo, whatsappNumber }: Props) {
  const headerWithScroll = useScrollHeader();
  const { isOpen, toggle, close } = useMobileMenu();
  const isHomePage = pathname === '/';
  const scrolled = headerWithScroll || !isHomePage;

  const headerClass = scrolled
    ? 'bg-[var(--bg-canvas)] fixed'
    : 'bg-transparent absolute';

  return (
    <>
      <header
        className={`h-[60px] lg:h-[90px] flex justify-center items-center top-0 z-20 w-full transition-all duration-300 ${headerClass}`}
      >
        <div className="layout-wrapper h-full flex items-center justify-between">
          <HeaderLogo logo={logo} />
          <div className="flex items-center gap-12">
            <DesktopNav navigation={navigation} pathname={pathname} />
            <PhoneButton whatsappNumber={whatsappNumber} />
          </div>
        </div>
        <MobileMenu navigation={navigation} pathname={pathname} isOpen={isOpen} onClose={close} />
      </header>
      <MenuToggle isOpen={isOpen} onClick={toggle} />
    </>
  );
}
