// src/i18n/ui.ts
export const languages = {
  es: 'Spanish',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.products': 'Products',
    'nav.contact': 'Contact Us',
    // About Section
    'about.headline': {
      'p1': "About", 'p2': "Us",
    },
    'about.text': "Expo Lukus is a company founded by the Chetouan family, building on their extensive experience in the supply, distribution, and cold storage of fruits and vegetables. After achieving success in this sector, they expanded into exporting produce to international markets, relying on an integrated logistics chain and strong infrastructure to ensure quality, safety, and compliance with export standards. The company focuses on competitive pricing, long-term partnerships, and supporting the agricultural sector by creating opportunities for local farmers. Alongside Chetouan Import Export in Morocco and Expo Lukus in Spain, the group forms a cross-border trade bridge between Morocco and Spain, aiming to streamline import-export operations, strengthen supply chains, and facilitate access to both local and international markets.",
    // Products Grid
    'products.headline': 'The Global<br>Fruit Selection',
    'products.text': "Premium fruits sourced from Morocco and delivered to international markets with export excellence.",
    'products.filter.fresh-herbs': 'Dried Fruits',
    'products.filter.fresh-vegetables': 'Fresh Vegetables',
    'products.filter.fresh-fruits': 'Fresh Fruits',
    'products.filter.all': 'All Produce',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Nosotros',
    'nav.products': 'Productos',
    'nav.contact': 'Contáctanos',
    // About Section
    'about.headline': {
      'p1': "Sobre", 'p2': "Nosotros",
    },
    'about.text': "Expo Lukus es una empresa fundada por la familia Chetouan, que se basa en su amplia experiencia en el suministro, la distribución y el almacenamiento en frío de frutas y verduras. Tras lograr el éxito en este sector, la familia amplió sus actividades hacia la exportación de productos a mercados internacionales, apoyándose en una cadena logística integrada y una sólida infraestructura que garantiza la calidad, la seguridad y el cumplimiento de los estándares de exportación. La empresa se centra en ofrecer precios competitivos, construir relaciones a largo plazo y apoyar al sector agrícola mediante la creación de oportunidades para los agricultores locales. Junto con Chetouan Import Export en Marruecos y Expo Lukus en España, el grupo forma un puente comercial entre ambos países, con el objetivo de optimizar las operaciones de importación y exportación, fortalecer las cadenas de suministro y facilitar el acceso a los mercados locales e internacionales.",
    // Products Grid
    'products.headline': 'La Selección Global<br>de Frutas',
    'products.text': 'Frutas premium procedentes de Marruecos y entregadas a mercados internacionales con excelencia en la exportación.',
    'products.filter.fresh-herbs': 'Frutas Deshidratadas',
    'products.filter.fresh-vegetables': 'Verduras Frescas',
    'products.filter.fresh-fruits': 'Frutas Frescas',
    'products.filter.all': 'Todos los Productos',
  },
} as const;