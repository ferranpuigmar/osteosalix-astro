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
    subtitle: 'Tratamientos que te transforman',
    service: [
      {
        id: '1',
        title: 'Osteopatía',
        description: 'Tratamiento integral que restablece el equilibrio del cuerpo.',
        link: '/servicios/osteopatia',
        image: '/images/servicio-osteopatia.jpg',
      },
      {
        id: '2',
        title: 'Fisioterapia',
        description: 'Rehabilitación y terapia física para recuperar tu movilidad.',
        link: '/servicios/fisioterapia',
        image: '/images/servicio-fisioterapia.jpg',
      },
      {
        id: '3',
        title: 'Osteopatía Pediátrica',
        description: 'Cuidado especializado para bebés y niños con técnicas suaves.',
        link: '/servicios/osteopatia-pediatrica',
        image: '/images/servicio-pediatrica.jpg',
      },
      {
        id: '4',
        title: 'Osteopatía Ginecológica',
        description: 'Especialidad enfocada en la salud femenina y bienestar pélvico.',
        link: '/servicios/osteopatia-ginecologica',
        image: '/images/servicio-ginecologica.jpg',
      },
    ],
  },
  philosophy: {
    textureUrl: 'https://images.unsplash.com/photo-1702094680205-3cd48dadbe53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzA1NzkyMTZ8&ixlib=rb-4.1.0&q=80&w=1080',
  },
};
