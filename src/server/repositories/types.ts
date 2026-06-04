import type { IHomeRepository } from './interfaces/home';
import type { INavigationRepository } from './interfaces/navigation';
import type { IServicesRepository } from './interfaces/services';
import type { ILegalRepository } from './interfaces/legal';
import type { IPagesRepository } from './interfaces/pages';

export interface RepositoryProvider {
  home: IHomeRepository;
  navigation: INavigationRepository;
  services: IServicesRepository;
  legal: ILegalRepository;
  pages: IPagesRepository;
}

export interface MenuItem {
  id: string;
  title: string;
  link: string;
}

export interface MenuGroup {
  menuItem: MenuItem;
  submenuItem: MenuItem[];
}

export interface HomeData {
  heroSection: {
    title: string;
    subtitle: string;
    bgImageUrl: string;
    imagotypeUrl: string;
  };
  center: {
    title: string;
    subtitle: string;
    content: string;
    button: {
      title: string;
      link: string;
    };
    image: string;
  };
  services: {
    title: string;
    service: {
      id: string;
      title: string;
      link: string;
      image: string;
    }[];
  };
  highlightedContent: {
    content: string;
    link: string;
    position: 'left' | 'right';
    image: string;
  }[];
}

export interface LegalEntry {
  slug: string;
  title: string;
  description: string;
  label: string;
}

export interface PageEntry {
  slug: string;
  title: string;
  description: string;
  titleImage?: string;
  contentImage?: string;
}

export interface ServiceEntry {
  slug: string;
  title: string;
  description: string;
  titleImage?: string;
  contentImage?: string;
  order?: number;
}
