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
      image: string;
    }[];
  };
  philosophy: {
    textureUrl: string;
  };
}

export const homeData: HomeData = {
  heroSection: {
    badge: 'Osteopatía y fisioterapia en Sant Cugat y Terrassa',
    title: 'Cuidamos de ti de forma integral',
    description: 'Un espacio dedicado a tu salud donde combinamos técnicas manuales y un enfoque holístico para devolverte el equilibrio que necesitas.',
    bgOverlayUrl: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?fm=jpg&q=80&w=1440&auto=format&fit=crop',
    heroImageUrl: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?fm=jpg&q=80&w=1080&auto=format&fit=crop',
  },
  center: {
    label: 'Sobre nosotros',
    title: '<h2><strong>Un enfoque diferente<br />para tu bienestar</strong></h2>',
    content: '<p>Desde 2018, en Osteosalix combinamos experiencia y formación continua para ofrecerte el mejor tratamiento. Creemos en la capacidad natural del cuerpo para sanarse cuando se le dan las condiciones adecuadas.</p>',
    values: [
      { title: 'Trato cercano', icon: 'heart' },
      { title: 'Profesionales', icon: 'shield-check' },
    ],
    button: {
      title: 'Contactar',
      link: '#contactar',
    },
    image: 'https://images.unsplash.com/photo-1741522509438-a120c0bb5e88?fm=jpg&q=80&w=1080&auto=format&fit=crop',
    image2: 'https://images.unsplash.com/photo-1668422550557-f096364b72b4?fm=jpg&q=80&w=1080&auto=format&fit=crop',
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
