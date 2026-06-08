export interface CenterService {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface CenterData {
  slug: string;
  name: string;
  subtitle: string;
  lat: number;
  lng: number;
  address: string;
  phone: string;
  hours: string;
  galleryImages: string[];
  services: CenterService[];
}

export const centers: CenterData[] = [
  {
    slug: 'centro-sant-cugat',
    name: 'Centro Sant Cugat',
    subtitle: 'Tu centro de osteopatía y fisioterapia de referencia en Sant Cugat del Vallès',
    lat: 41.464138,
    lng: 2.087106,
    address: 'Avinguda de Gràcia, 74, 08172 Sant Cugat',
    phone: '674 036 435',
    hours: 'Lun - Vie: 9:00 - 20:00',
    galleryImages: [
      'https://images.unsplash.com/photo-1603827586368-5eea61626dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1664549760921-2198b054a592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1758654860101-d9d3ae39e191?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1717500251688-5e87d854474c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    services: [
      {
        title: 'Osteopatía',
        description: 'Tratamiento integral que restablece el equilibrio del cuerpo.',
        image:
          'https://images.unsplash.com/photo-1603827586368-5eea61626dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        link: '/servicios/osteopatia',
      },
      {
        title: 'Osteopatía Ginecológica',
        description: 'Especializada en salud de la mujer y bienestar pélvico.',
        image:
          'https://images.unsplash.com/photo-1664549760921-2198b054a592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        link: '/servicios/osteopatia-ginecologica',
      },
      {
        title: 'Osteopatía Pediátrica',
        description: 'Cuidado especializado para bebés y niños con técnicas suaves.',
        image:
          'https://images.unsplash.com/photo-1758654860101-d9d3ae39e191?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        link: '/servicios/osteopatia-pediatrica',
      },
      {
        title: 'Fisioterapia',
        description: 'Rehabilitación y terapia física para recuperar tu movilidad.',
        image:
          'https://images.unsplash.com/photo-1717500251688-5e87d854474c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        link: '/servicios/fisioterapia',
      },
    ],
  },
  {
    slug: 'centro-terrassa',
    name: 'Centro Terrassa',
    subtitle: 'Tu centro de osteopatía y fisioterapia de referencia en Terrassa',
    lat: 41.561,
    lng: 2.0105,
    address: 'Carrer del Teatre, 52, 08221 Terrassa',
    phone: '674 036 435',
    hours: 'Lun - Vie: 9:00 - 20:00',
    galleryImages: [
      'https://images.unsplash.com/photo-1603827586368-5eea61626dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1664549760921-2198b054a592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1758654860101-d9d3ae39e191?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1717500251688-5e87d854474c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    services: [
      {
        title: 'Osteopatía',
        description: 'Tratamiento integral que restablece el equilibrio del cuerpo.',
        image:
          'https://images.unsplash.com/photo-1603827586368-5eea61626dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        link: '/servicios/osteopatia',
      },
      {
        title: 'Fisioterapia',
        description: 'Rehabilitación y terapia física para recuperar tu movilidad.',
        image:
          'https://images.unsplash.com/photo-1717500251688-5e87d854474c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        link: '/servicios/fisioterapia',
      },
    ],
  },
];

export function getCenterBySlug(slug: string): CenterData | undefined {
  return centers.find((c) => c.slug === slug);
}

export function getAllCenterSlugs(): string[] {
  return centers.map((c) => c.slug);
}
