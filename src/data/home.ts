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

export const homeData: HomeData = {
  heroSection: {
    title: 'Osteosalix',
    subtitle: 'Osteopatía y fisioterapia en Sant Cugat del Vallés',
    bgImageUrl: '/images/hero-bg.jpg',
    imagotypeUrl: '/images/imagotip.svg',
  },
  center: {
    title: '<p>El centro</p>',
    subtitle: '<h2><strong>Profesionales especializados en osteopatía y fisioterapia en Sant Cugat del Vallés</strong></h2>',
    content: '<p>En Osteosalix combinamos osteopatía y fisioterapia para ofrecerte un tratamiento integral y personalizado. Nuestro enfoque busca la causa de tus molestias, no solo aliviar los síntomas.</p><p>Te ayudamos a recuperar tu bienestar a través de técnicas manuales suaves y efectivas, adaptadas a tus necesidades específicas.</p>',
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
