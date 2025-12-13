export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  specs?: string[];
  priceDisplay?: string;
  imageUrl: string;
  tags: string[];
}

export enum SectionId {
  HOME = 'home',
  WHY_US = 'why-us',
  ABOUT = 'about',
  PRODUCTS = 'products',
  SERVICES = 'services',
  BANK = 'bank',
  CALCULATOR = 'calculator',
  ACCOUNTANT = 'accountant',
  CONTACT = 'contact'
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  role: string;
}