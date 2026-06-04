import { useScrollHeader, useMobileMenu } from './hooks';
import { HeaderLogo } from './header-logo';
import { DesktopNav } from './desktop-nav';
import { PhoneButton } from './phone-button';
import { MenuToggle } from './menu-toggle';
import { MobileMenu } from './mobile-menu';
import type { MenuGroup } from '@/server/repositories/types';

interface Props {
  pathname: string;
  navigation: MenuGroup[];
}

export default function HeaderIsland({ pathname, navigation }: Props) {
  const headerWithScroll = useScrollHeader();
  const { isOpen, toggle, close } = useMobileMenu();
  const isHomePage = pathname === '/';
  const scrolled = headerWithScroll || !isHomePage;

  const headerClass = scrolled
    ? 'bg-white fixed shadow-md'
    : 'bg-transparent absolute';

  return (
    <>
      <header
        className={`h-16 lg:h-20 flex justify-center items-center top-0 z-20 w-full transition-all duration-300 ${headerClass}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:pr-6 pr-14 h-full flex items-center justify-between w-full">
          <HeaderLogo />
          <div className="flex items-center gap-4">
            <DesktopNav navigation={navigation} pathname={pathname} />
            <PhoneButton />
          </div>
        </div>
        <MobileMenu navigation={navigation} pathname={pathname} isOpen={isOpen} onClose={close} />
      </header>
      <MenuToggle isOpen={isOpen} onClick={toggle} />
    </>
  );
}
