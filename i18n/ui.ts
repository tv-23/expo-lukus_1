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
    'nav.cta': 'Request a quote',
    // About Section
    'about.headline': {
      'p1': "About", 'p2': "Us",
    },
    'about.text': "Expo Lukus is a company founded by the Chetouan family, building on their extensive experience in the supply, distribution, and cold storage of fruits and vegetables. After achieving success in this sector, they expanded into exporting produce to international markets, relying on an integrated logistics chain and strong infrastructure to ensure quality, safety, and compliance with export standards. The company focuses on competitive pricing, long-term partnerships, and supporting the agricultural sector by creating opportunities for local farmers. Alongside Chetouan Import Export in Morocco and Expo Lukus in Spain, the group forms a cross-border trade bridge between Morocco and Spain, aiming to streamline import-export operations, strengthen supply chains, and facilitate access to both local and international markets.",
    // Products Grid
    'products.headline': 'Fresh from Morocco<br>to Spain',
    'products.text': "High-quality fruits, vegetables, and aromatic herbs, carefully sourced in Morocco and exported to Spain with exceptional standards.",
    'productsI.headline': 'Fresh from Spain<br>to Morocco',
    'productsI.text': "High-quality fruits, vegetables, and aromatic herbs, carefully sourced in Spain and exported to Morocco with exceptional standards.",
    'products.filter.fresh-herbs': 'Fine Herbs',
    'products.filter.fresh-vegetables': 'Fresh Vegetables',
    'products.filter.fresh-fruits': 'Fresh Fruits',
    'products.filter.all': 'All Produce',
    // Certifications
    'certifications.headline': 'Certifications',
    'certifications.text': "International Quality Standards",
    // CTA
    'cta': {
      tag: "Partnership",
      title: "Ready to grow<br>your <i>harvest</i>?",
      description:
        "From Larache to the world. Reach out today to secure your direct bridge to high-end Moroccan produce.",

      form: {
        name: "Full Name",
        email: "Business Email",
        message: "Tell us about your needs...",
        submit: "Submit Inquiry",
      },
    },
    // Footer
    "footer": {
      description:
        "The direct bridge between Moroccan soil and the global stage. We curate nature’s finest produce with a commitment to cold-chain excellence and family heritage.",

      explore: "Explore",
      moroccoHub: "Morocco Hub",
      spainHub: "Spain Hub",
      legal: "Legal",

      hub: {
        sourcing: "Sourcing & Packaging",
        logistics: "Logistics & Distribution",
      },

      copyright:
        '© <span class="tt-copyright-year">2026 Expo Luku <br /> Tous droits réservés. Créé & développé par <a href="https://brosmedia.ma/" target="_blank">Brosmedia</a >.</span>',
      tagline: "From Earth to the World",

      links: {
        home: "Home",
        about: "About Us",
        products: "Products",
        contact: "Contact",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        licenses: "Export Licenses",
      },
    },
    // About Page
    "about-us.headline": '<h1 class="main-title">ROOTED.<br>GLOBAL.</h1><p class="tagline">Tells the story of the origin (Morocco) and the destination (Global) in one short, massive sentence.</p>',
    "story": {
      blocks: [
        {
          tag: "History // 01",
          title: "Roots of<br />Expo Lukus.",
          paragraphs: [
            "Expo Lukus is one of the companies founded by the Chetouan family, which has built significant experience in the supply and distribution of fruits and vegetables, along with cold storage services to ensure product quality and safety.",
            "Following strong success in this sector, the family expanded its activities by establishing a dedicated export company focused on delivering fresh fruits and vegetables to international markets.",
          ],
          stats: [
            { value: "30+", label: "Years Experience" },
            { value: "100%", label: "Family Legacy" },
          ],
        },

        {
          tag: "Operations // 02",
          title: "Integrated<br />Supply Chain.",
          paragraphs: [
            "Expo Lukus relies on an integrated service chain supported by strong logistical resources developed through years of hands-on experience in the agricultural sector.",
            "This allows the company to guarantee high-quality products while maintaining strict compliance with international export standards across all operations.",
          ],
          stats: [
            { value: "Global", label: "Logistics" },
            { value: "ISO", label: "Standards" },
          ],
        },

        {
          tag: "Commitment // 03",
          title: "Quality &<br />Growth.",
          paragraphs: [
            "The company is committed to offering competitive pricing while building long-term, trust-based relationships with its international clients.",
            "Beyond profit, Expo Lukus aims to support the development of the agricultural sector and create sustainable economic opportunities for local farmers and partners.",
          ],
          stats: [
            { value: "FairPay", label: "To Farmers" },
            { value: "Ethics", label: "Driven" },
          ],
        },

        {
          tag: "Vision // 04",
          title: "Connecting<br />Markets.",
          paragraphs: [
            "At Expo Lukus, agriculture is seen not only as a business but as a responsibility toward both the land and the people who cultivate it.",
            "The company, through Chetouan Import Export in Morocco and Expo Lukus in Spain, builds a strong trade bridge between both countries to facilitate exchange, improve supply chains, and open access to global markets.",
          ],
          stats: [
            { value: "Two Hubs", label: "Morocco & Spain" },
            { value: "Agility", label: "Supply Chain" },
          ],
        },
      ],
    },
    // Contact Page
    "contact": {
      headline: '<h1 class="main-title">ROOTED.<br>GLOBAL.</h1><p class="tagline">Tells the story of the origin (Morocco) and the destination (Global) in one short, massive sentence.</p>',
      title: "Our Heart <br>is in the South.",
      description:
        "Based in the fertile plains of Larache, we connect Morocco's agricultural heritage with the global demand for excellence.",

      info: {
        callTitle: "Direct Call",
        addressTitle: "Headquarters",
        address: "Avenue Mohamed V, <br>Larache, Morocco",
      },

      form: {
        name: "Your Name",
        email: "Email Address",
        message: "Message",
        submit: "Send Inquiry",
      },
      hub: [
        {
          title: "Sourcing",
        },
        {
          title: "Logistics",
        },
        {
          title: "Quality Control",
        },
      ],
      section_title: "Find Us in the<br>Fields",
    },
    // European Gateway
    'bridge.shutter': 'THE TRADE BRIDGE',
    // Spain Section (Visible First)
    'bridge.spain.tag': 'Spain Hub',
    'bridge.spain.title': 'Expo <i>Lukus</i> Spain.',
    'bridge.spain.desc': 'Strategically located in Madrid to open access to foreign markets, ensuring the development of a smooth supply chain and creating unprecedented growth opportunities in the fruit and vegetable sector.',
    // Morocco Section (Revealed Second)
    'bridge.morocco.tag': 'Morocco Hub',
    'bridge.morocco.title': 'Chetouan <br>Import <i>Export</i>.',
    'bridge.morocco.desc': 'Established in Larache, Chetouan serves as our primary production heartbeat. From here, we nurture local harvests and facilitate direct access to Morocco\'s finest produce for international commerce.',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Nosotros',
    'nav.products': 'Productos',
    'nav.contact': 'Contáctanos',
    'nav.cta': 'Solicitud de presupuesto',
    // About Section
    'about.headline': {
      'p1': "Sobre", 'p2': "Nosotros",
    },
    'about.text': "Expo Lukus es una empresa fundada por la familia Chetouan, que se basa en su amplia experiencia en el suministro, la distribución y el almacenamiento en frío de frutas y verduras. Tras lograr el éxito en este sector, la familia amplió sus actividades hacia la exportación de productos a mercados internacionales, apoyándose en una cadena logística integrada y una sólida infraestructura que garantiza la calidad, la seguridad y el cumplimiento de los estándares de exportación. La empresa se centra en ofrecer precios competitivos, construir relaciones a largo plazo y apoyar al sector agrícola mediante la creación de oportunidades para los agricultores locales. Junto con Chetouan Import Export en Marruecos y Expo Lukus en España, el grupo forma un puente comercial entre ambos países, con el objetivo de optimizar las operaciones de importación y exportación, fortalecer las cadenas de suministro y facilitar el acceso a los mercados locales e internacionales.",
    // Products Grid
    'products.headline': 'Fresco de Marruecos<br>a España',
    'products.text': "Frutas, verduras y hierbas aromáticas de alta calidad, cuidadosamente seleccionadas en Marruecos y exportadas a España con estándares excepcionales.",
    'productsI.headline': 'Fresco de España<br>a Marruecos',
    'productsI.text': "Frutas, verduras y hierbas aromáticas de alta calidad, cuidadosamente seleccionadas en España y exportadas a Marruecos con estándares excepcionales.",
    'products.filter.fresh-herbs': 'Hierba Finas',
    'products.filter.fresh-vegetables': 'Verduras Frescas',
    'products.filter.fresh-fruits': 'Frutas Frescas',
    'products.filter.all': 'Todos los Productos',
    // Certifications
    'certifications.headline': 'Certificaciones',
    'certifications.text': "Estándares Internacionales de Calidad",
    // CTA
    'cta': {
      tag: "Asociación",
      title: "¿Listo para hacer crecer<br>tu <i>cosecha</i>?",
      description:
        "Desde Larache hacia el mundo. Contáctanos hoy para asegurar tu acceso directo a productos marroquíes de alta calidad.",

      form: {
        name: "Nombre completo",
        email: "Correo empresarial",
        message: "Cuéntanos tus necesidades...",
        submit: "Enviar consulta",
      },
    },
    // Footer
    "footer": {
      description:
        "El puente directo entre el suelo marroquí y el escenario global. Seleccionamos los mejores productos de la naturaleza con un compromiso de excelencia en cadena de frío y herencia familiar.",

      explore: "Explorar",
      moroccoHub: "Centro Marruecos",
      spainHub: "Centro España",
      legal: "Legal",

      hub: {
        sourcing: "Abastecimiento y Embalaje",
        logistics: "Logística y Distribución",
      },

      copyright:
        '© <span class="tt-copyright-year">2026 Expo Luku <br /> Todos los derechos reservados. Creado y desarrollado por <a href="https://brosmedia.ma/" target="_blank">Brosmedia</a>.</span>',
      tagline: "De la Tierra al Mundo",

      links: {
        home: "Inicio",
        about: "Sobre Nosotros",
        products: "Productos",
        contact: "Contacto",
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio",
        licenses: "Licencias de Exportación",
      },
    },
    // About Page
    "about-us.headline": '<h1 class="main-title">RAÍCES.<br>GLOBAL.</h1><p class="tagline">Cuenta la historia del origen (Marruecos) y el destino (Global) en una sola frase corta y poderosa.</p>',
    "story": {
      blocks: [
        {
          tag: "Historia // 01",
          title: "Raíces de<br />Expo Lukus.",
          paragraphs: [
            "Expo Lukus es una de las empresas fundadas por la familia Chetouan, que ha desarrollado una gran experiencia en el suministro y distribución de frutas y verduras, junto con servicios de almacenamiento en frío para garantizar la calidad y seguridad del producto.",
            "Tras un gran éxito en este sector, la familia amplió sus actividades estableciendo una empresa de exportación dedicada a llevar frutas y verduras frescas a los mercados internacionales.",
          ],
          stats: [
            { value: "30+", label: "Años de experiencia" },
            { value: "100%", label: "Legado familiar" },
          ],
        },

        {
          tag: "Operaciones // 02",
          title: "Cadena de<br />Suministro.",
          paragraphs: [
            "Expo Lukus se basa en una cadena de servicios integrada apoyada por sólidos recursos logísticos desarrollados durante años de experiencia en el sector agrícola.",
            "Esto permite garantizar productos de alta calidad cumpliendo estrictamente con los estándares internacionales de exportación en todas las operaciones.",
          ],
          stats: [
            { value: "Global", label: "Logística" },
            { value: "ISO", label: "Estándares" },
          ],
        },

        {
          tag: "Compromiso // 03",
          title: "Calidad y<br />Crecimiento.",
          paragraphs: [
            "La empresa se compromete a ofrecer precios competitivos mientras construye relaciones a largo plazo basadas en la confianza con sus clientes internacionales.",
            "Más allá del beneficio, Expo Lukus busca apoyar el desarrollo del sector agrícola y crear oportunidades económicas sostenibles para agricultores y socios locales.",
          ],
          stats: [
            { value: "Pago Justo", label: "A Agricultores" },
            { value: "Ética", label: "Impulsada" },
          ],
        },

        {
          tag: "Visión // 04",
          title: "Conectando<br />Mercados.",
          paragraphs: [
            "En Expo Lukus, la agricultura no se ve solo como un negocio, sino como una responsabilidad hacia la tierra y las personas que la cultivan.",
            "La empresa, a través de Chetouan Import Export en Marruecos y Expo Lukus en España, construye un fuerte puente comercial entre ambos países para facilitar el intercambio y el acceso a mercados globales.",
          ],
          stats: [
            { value: "Dos Hubs", label: "Marruecos & España" },
            { value: "Agilidad", label: "Cadena de suministro" },
          ],
        },
      ],
    },
    // Contact Page
    "contact": {
      headline: '<h1 class="main-title">ACCESO<br>DIRECTO</h1><p class="tagline">El puente Chetouan entre la tierra y tu mercado.</p>',
      title: "Nuestro corazón <br>está en el sur.",
      description:
        "Ubicados en las fértiles llanuras de Larache, conectamos la herencia agrícola de Marruecos con la demanda global de excelencia.",

      info: {
        callTitle: "Llamada directa",
        addressTitle: "Sede central",
        address: "Avenida Mohamed V, <br>Larache, Marruecos",
      },

      form: {
        name: "Tu nombre",
        email: "Correo electrónico",
        message: "Mensaje",
        submit: "Enviar consulta",
      },
      hub: [
        {
          title: "Abastecimiento",
        },
        {
          title: "Logística",
        },
        {
          title: "Control de Calidad",
        },
      ],
      section_title: "Encuéntranos en los<br>Campos",
    },
    // European Gateway
    'bridge.shutter': 'EL PUENTE COMERCIAL',
    // Spain Section (Visible First)
    'bridge.spain.tag': 'Centro España',
    'bridge.spain.title': 'Expo <i>Lukus</i> España.',
    'bridge.spain.desc': 'Ubicada estratégicamente en Madrid para abrir el acceso a los mercados extranjeros, asegurando el desarrollo de una cadena de suministro fluida y creando oportunidades de crecimiento sin precedentes en el sector de frutas y verduras.',
    // Morocco Section (Revealed Second)
    'bridge.morocco.tag': 'Centro Marruecos',
    'bridge.morocco.title': 'Chetouan <br>Import <i>Export</i>.',
    'bridge.morocco.desc': 'Establecida en Larache, Chetouan actúa como nuestro principal corazón de producción. Desde aquí, fomentamos las cosechas locales y facilitamos el acceso directo a los mejores productos de Marruecos para el comercio internacional.',
  },
} as const;