import type { MenuGroup } from '@/server/domain/models';

export const navigation: MenuGroup[] = [
  {
    id: '1',
    title: 'El centro',
    link: '/#el-centro',
    submenuItem: [],
  },
  {
    id: '2',
    title: 'Servicios',
    link: '/#servicios',
    submenuItem: [
      { id: '2a', title: 'Osteopatía', link: '/servicios/osteopatia' },
      { id: '2b', title: 'Fisioterapia', link: '/servicios/fisioterapia' },
      { id: '2c', title: 'Osteopatía pediátrica', link: '/servicios/osteopatia-pediatrica' },
      { id: '2d', title: 'Osteopatía ginecológica', link: '/servicios/osteopatia-ginecologica' },
    ],
  },
  {
    id: '3',
    title: 'Dónde estamos',
    link: '/#donde-estamos',
    submenuItem: [],
  },
];
