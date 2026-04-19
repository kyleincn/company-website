export interface NavItem {
  name: string;
  href: string;
}

export interface CompanyInfo {
  name: string;
  shortName: string;
  slogan: string;
  description: string;
  address: string;
  phone: string;
  email: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'ai' | 'vr';
  description: string;
  features: string[];
  image: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
}
