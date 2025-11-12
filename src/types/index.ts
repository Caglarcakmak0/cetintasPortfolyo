export interface NavItem {
  id: string;
  label: string;
  href: string;
  active?: boolean;
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: string;
}

export interface FooterLink {
  id: string;
  text: string;
  url?: string;
}

export interface Client {
  id: number;
  name: string;
  logo: string;
}

export interface ClientsData {
  row1: Client[];
  row2: Client[];
}

export interface Sector {
  id: string;
  title: string;
  description: string;
  features: string[];
  backgroundImage: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image?: string;
  link: string;
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

export interface Location {
  id: string;
  name: string;
  flag: string;
  companyName: string;
  description: string;
  coordinates: [number, number];
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  date?: string;
  author?: string;
  challenge: {
    title: string;
    description: string;
    points: string[];
  };
  solution: {
    title: string;
    description: string;
    points: string[];
  };
  result: {
    title: string;
    description: string;
    metrics: {
      value: string;
      label: string;
    }[];
    additionalBenefits: string[];
  };
  architecture?: {
    title: string;
    description: string;
    components: {
      name: string;
      description: string;
      technologies: string[];
    }[];
    integrations: string[];
  };
}