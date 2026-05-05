import { NavItem, Product } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Shop All', path: '/shop' },
  { label: 'Essentials', path: '/shop?category=essentials' },
  { label: 'Our Story', path: '/story' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'arch-01',
    name: 'The Monolith Boot',
    material: 'Sculpted Calfskin',
    price: 840,
    description: 'A sculptural exploration of form and function. Crafted from a single piece of premium calfskin, the Monolith Boot features a hidden internal structure for peak support without compromising the minimalist silhouette.',
    images: [
      'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1200'
    ],
    category: 'footwear',
    isEssential: true,
  },
  {
    id: 'arch-02',
    name: 'Tectonic Loafer',
    material: 'Veau Velours',
    price: 620,
    description: 'Inspired by geological strata, the Tectonic Loafer utilizes layered textures of suede and polished leather to create a depth of field rarely seen in footwear.',
    images: [
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=1200'
    ],
    category: 'footwear',
  },
  {
    id: 'arch-03',
    name: 'Column Sandal',
    material: 'Full Grain Nappa',
    price: 480,
    description: 'Minimalism at its most structural. The Column Sandal features a unique architectural heel and ultra-fine straps that provide surprising stability.',
    images: [
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1200'
    ],
    category: 'footwear',
    isEssential: true,
  },
  {
    id: 'arch-04',
    name: 'Void Mule',
    material: 'Brushed Suede',
    price: 550,
    description: 'The Void Mule challenges traditional construction with its negative space design and hand-stitched detailing.',
    images: [
      'https://images.unsplash.com/photo-1512374382149-4332c66719a3?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=1200'
    ],
    category: 'footwear',
  }
];
