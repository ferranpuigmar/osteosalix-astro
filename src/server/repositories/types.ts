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
    badge: string;
    title: string;
    description: string;
    bgImageUrl: string;
    bgOverlayUrl: string;
    heroImageUrl: string;
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
    subtitle: string;
    service: {
      id: string;
      title: string;
      description: string;
      link: string;
      image: string;
    }[];
  };
  philosophy: {
    textureUrl: string;
  };
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
  descriptionHtml?: string;
  treatments?: Array<{ icon: string; title: string; description: string }>;
  ctaTitle?: string;
  ctaDescription?: string;
  methodSteps?: Array<{ num: string; title: string; description: string }>;
}
