export interface Product {
  id: string;
  name: string;
  material: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  isEssential?: boolean;
}

export interface NavItem {
  label: string;
  path: string;
}
