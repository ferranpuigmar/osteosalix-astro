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

export const homeData: HomeData = {
  heroSection: {
    badge: 'Osteopatía y fisioterapia en Sant Cugat',
    title: 'Cuidamos de ti de forma integral',
    description: 'Un espacio dedicado a tu salud donde combinamos técnicas manuales y un enfoque holístico para devolverte el equilibrio que necesitas.',
    bgImageUrl: '/images/hero-bg.jpg',
    bgOverlayUrl: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?fm=jpg&q=80&w=1440&auto=format&fit=crop',
    heroImageUrl: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?fm=jpg&q=80&w=1080&auto=format&fit=crop',
  },
  center: {
    title: '<p>El centro</p>',
    subtitle: '<h2><strong>Profesionales especializados en osteopatía y fisioterapia en Sant Cugat del Vallés</strong></h2>',
    content: '<p>Desde 2018, en Osteosalix combinamos experiencia y formación continua para ofrecerte el mejor tratamiento. Creemos en la capacidad natural del cuerpo para sanarse cuando se le dan las condiciones adecuadas.</p>',
    button: {
      title: 'Contactar',
      link: '#contactar',
    },
    image: '/images/el-centro.jpg',
  },
  services: {
    title: 'Nuestros servicios',
    service: [
      {
        id: '1',
        title: 'Osteopatía',
        link: '/servicios/osteopatia',
        image: '/images/servicio-osteopatia.jpg',
      },
      {
        id: '2',
        title: 'Fisioterapia',
        link: '/servicios/fisioterapia',
        image: '/images/servicio-fisioterapia.jpg',
      },
      {
        id: '3',
        title: 'Osteopatía pediátrica',
        link: '/servicios/osteopatia-pediatrica',
        image: '/images/servicio-pediatrica.jpg',
      },
      {
        id: '4',
        title: 'Osteopatía ginecológica',
        link: '/servicios/osteopatia-ginecologica',
        image: '/images/servicio-ginecologica.jpg',
      },
    ],
  },
  highlightedContent: [
    {
      content: '<p>Especialistas en osteopatía pediátrica y ginecológica en el Vallés Occidental</p>',
      link: '/especialistas-en-osteopatia-pediatrica-y-ginecologica-en-el-valles-occidental',
      position: 'left',
      image: '/images/destacado-1.jpg',
    },
    {
      content: '<p>Fisioterapeuta en Sant Cugat del Vallès: tu bienestar es nuestra prioridad</p>',
      link: '/fisioterapeuta-en-sant-cugat-del-valles',
      position: 'right',
      image: '/images/destacado-2.jpg',
    },
  ],
};
