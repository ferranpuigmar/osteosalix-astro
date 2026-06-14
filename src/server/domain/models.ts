export interface MenuItem {
  id: string;
  title: string;
  link: string;
}

export interface MenuGroup {
  id: string;
  title: string;
  link: string | null;
  submenuItem: MenuItem[];
}

export interface LogoData {
  textStart: string;
  logo: string;
  textEnd: string;
}

export interface HomeData {
  heroSection: {
    badge: string;
    title: string;
    description: string;
    bgOverlayUrl: string;
    heroImageUrl: string;
  };
  center: {
    label: string;
    title: string;
    content: string;
    values: {
      icon: string;
      title: string;
    }[];
    button: {
      title: string;
      link: string;
    };
    image: string;
    image2: string;
  };
  services: {
    title: string;
    subtitle: string;
    service: {
      id: string;
      title: string;
      description: string;
      link: string;
      cardImage: string;
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
}

export interface MethodStep {
  num: string;
  title: string;
  description: string;
}

export interface ServiceEntry {
  slug: string;
  title: string;
  description: string;
  cardImage?: string;
  titleImage?: string;
  order?: number;
  descriptionHtml?: string;
  treatments?: Array<{ icon: string; title: string; description: string }>;
  ctaTitle?: string;
  ctaDescription?: string;
  methodSteps?: MethodStep[];
}
