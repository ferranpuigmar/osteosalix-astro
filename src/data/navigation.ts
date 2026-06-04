export interface MenuItem {
  id: string;
  title: string;
  link: string;
}

export interface MenuGroup {
  menuItem: MenuItem;
  submenuItem: MenuItem[];
}

export const navigation: MenuGroup[] = [
  {
    menuItem: { id: '1', title: 'El centro', link: '/#el-centro' },
    submenuItem: [],
  },
  {
    menuItem: { id: '2', title: 'Servicios', link: '/#servicios' },
    submenuItem: [
      { id: '2a', title: 'Osteopatía', link: '/servicios/osteopatia' },
      { id: '2b', title: 'Fisioterapia', link: '/servicios/fisioterapia' },
      { id: '2c', title: 'Osteopatía pediátrica', link: '/servicios/osteopatia-pediatrica' },
      { id: '2d', title: 'Osteopatía ginecológica', link: '/servicios/osteopatia-ginecologica' },
    ],
  },
  {
    menuItem: { id: '3', title: 'Dónde estamos', link: '/#donde-estamos' },
    submenuItem: [],
  },
];
