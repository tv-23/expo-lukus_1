const standardPackaging = [
  {
    weight: "Standard",
    detail: {
      en: "Boxes per layer: 12",
      es: "Cajas por capa: 12",
    },
  },
  {
    weight: "Layers",
    detail: {
      en: "8 to 10 layers",
      es: "8 a 10 capas",
    },
  },
];

export const productDetails = {
  mint: {
    title: { en: "Mint", es: "Menta" },
    category: { en: "Dried Fruits", es: "Frutas Deshidratadas" },
    image: "/assets/images/products/mint.webp",
    backgroundimage: "/assets/images/products/background/Menta.webp",
    description: {
      en: "Expo Lukus exports fresh mint in different export-grade packaging options: 100 g (bundle – 50 pieces), 80 g (bundle – variable pieces), and 70 g (65–100 pieces), ensuring flexibility while maintaining freshness and high quality for international markets.",
      es: "Expo Lukus exporta menta fresca en diferentes opciones de embalaje de calidad de exportación: 100 g (manojo – 50 piezas), 80 g (manojo – piezas variables) y 70 g (65–100 piezas), garantizando flexibilidad mientras mantiene la frescura y alta calidad para los mercados internacionales.",
    },
    packaging: [
      { weight: "100 G", detail: { en: "Bundle – 50 Pieces", es: "Manojo – 50 piezas" } },
      { weight: "80 G", detail: { en: "Bundle – Variable Pieces", es: "Manojo – piezas variables" } },
      { weight: "70 G", detail: { en: "65 – 100 Pieces", es: "65 – 100 piezas" } },
    ],
    headline: {
      title: { en: "FRESH<br>MINT", es: "MENTA<br>FRESCA" },
      subtitle: {
        en: "Fresh Moroccan mint delivered worldwide with premium quality and flexible packaging.",
        es: "Menta fresca de Marruecos entregada en todo el mundo con calidad premium y embalaje flexible.",
      },
    },
    origin: { en: "Morocco, Benrchid", es: "Marruecos, Benrchid" },
  },

  coriander: {
    title: { en: "Coriander", es: "Cilantro" },
    category: { en: "Dried Fruits", es: "Frutas Deshidratadas" },
    image: "/assets/images/products/Coriander.webp",
    backgroundimage: "/assets/images/products/background/Cilantro.webp",
    description: {
      en: "Expo Lukus exports fresh coriander with standardized packaging options: 100 g (50 pieces) and 1500 g / 40 pieces, ensuring consistent quality and freshness for international markets.",
      es: "Expo Lukus exporta cilantro fresco con opciones de embalaje estandarizadas: 100 g (50 piezas) y 1500 g / 40 piezas, garantizando calidad constante y frescura para los mercados internacionales.",
    },
    packaging: [
      { weight: "100 G", detail: { en: "50 Pieces", es: "50 piezas" } },
      { weight: "1500 G", detail: { en: "40 Pieces", es: "40 piezas" } },
    ],
    headline: {
      title: { en: "PURE<br>CORIANDER", es: "CILANTRO<br>PURO" },
      subtitle: {
        en: "Carefully selected coriander ensuring consistent freshness and export-grade quality.",
        es: "Cilantro cuidadosamente seleccionado que garantiza frescura constante y calidad de exportación.",
      },
    },
    origin: { en: "Morocco, Benrchid", es: "Marruecos, Benrchid" },
  },

  parsley: {
    title: { en: "Parsley", es: "Perejil" },
    category: { en: "Dried Fruits", es: "Frutas Deshidratadas" },
    image: "/assets/images/products/Parsley.webp",
    backgroundimage: "/assets/images/products/background/Parsley.webp",
    description: {
      en: "Expo Lukus exports fresh parsley with export-grade packaging in two formats: 100 g (50 pieces) and 1500 g / 40 pieces, carefully packed to maintain freshness and quality during transport.",
      es: "Expo Lukus exporta perejil fresco con embalaje de calidad de exportación en dos formatos: 100 g (50 piezas) y 1500 g / 40 piezas, cuidadosamente empaquetado para mantener la frescura y calidad durante el transporte.",
    },
    packaging: [
      { weight: "100 G", detail: { en: "50 Pieces", es: "50 piezas" } },
      { weight: "1500 G", detail: { en: "40 Pieces", es: "40 piezas" } },
    ],
    headline: {
      title: { en: "GREEN<br>PARSLEY", es: "PEREJIL<br>VERDE" },
      subtitle: {
        en: "Premium parsley packed to preserve freshness from Morocco to global markets.",
        es: "Perejil premium empaquetado para conservar la frescura desde Marruecos hasta los mercados globales.",
      },
    },
    origin: { en: "Morocco, Benrchid", es: "Marruecos, Benrchid" },
  },

  potato: {
    title: { en: "Potato", es: "Patata" },
    category: { en: "Fresh Vegetables", es: "Verduras Frescas" },
    image: "/assets/images/products/Potato.webp",
    backgroundimage: "/assets/images/products/background/Potato.webp",
    description: { en: "", es: "" },
    packaging: standardPackaging,
    headline: {
      title: { en: "FRESH<br>POTATO", es: "PATATA<br>FRESCA" },
      subtitle: {
        en: "Reliable export-grade potatoes for global supply.",
        es: "Patatas de calidad de exportación para suministro global.",
      },
    },
    origin: { en: "Morocco", es: "Marruecos" },
  },

  tomato: {
    title: { en: "Tomato", es: "Tomate" },
    category: { en: "Fresh Vegetables", es: "Verduras Frescas" },
    image: "/assets/images/products/tomato.webp",
    backgroundimage: "/assets/images/products/background/Tomato.webp",
    description: { en: "", es: "" },
    packaging: standardPackaging,
    headline: {
      title: { en: "FRESH<br>TOMATO", es: "TOMATE<br>FRESCO" },
      subtitle: {
        en: "Export-quality tomatoes with rich flavor and consistency.",
        es: "Tomates de calidad de exportación con sabor y consistencia.",
      },
    },
    origin: { en: "Morocco, Agadir", es: "Marruecos, Agadir" },
  },

  onion: {
    title: { en: "Onion", es: "Cebolla" },
    category: { en: "Fresh Vegetables", es: "Verduras Frescas" },
    image: "/assets/images/products/Onion.webp",
    backgroundimage: "/assets/images/products/background/Onion.webp",
    description: { en: "", es: "" },
    packaging: standardPackaging,
    headline: {
      title: { en: "FRESH<br>ONION", es: "CEBOLLA<br>FRESCA" },
      subtitle: {
        en: "Carefully sorted onions ready for international markets.",
        es: "Cebollas cuidadosamente seleccionadas para mercados internacionales.",
      },
    },
    origin: { en: "Spain", es: "España" },
  },

  blueberry: {
    title: { en: "Blueberry", es: "Arándano" },
    category: { en: "Fresh Fruits", es: "Frutas Frescas" },
    image: "/assets/images/products/Blueberry.webp",
    backgroundimage: "/assets/images/products/background/Blueberry.webp",
    description: { en: "", es: "" },
    packaging: standardPackaging,
    headline: {
      title: { en: "FRESH<br>BLUEBERRY", es: "ARÁNDANO<br>FRESCO" },
      subtitle: {
        en: "Premium blueberries packed for global freshness.",
        es: "Arándanos premium empaquetados para frescura global.",
      },
    },
    origin: { en: "Spain", es: "España" },
  },

  strawberry: {
    title: { en: "Strawberry", es: "Fresa" },
    category: { en: "Fresh Fruits", es: "Frutas Frescas" },
    image: "/assets/images/products/strawberry.webp",
    backgroundimage: "/assets/images/products/background/Strawberry.webp",
    description: { en: "", es: "" },
    packaging: standardPackaging,
    headline: {
      title: { en: "FRESH<br>STRAWBERRY", es: "FRESA<br>FRESCA" },
      subtitle: {
        en: "Sweet strawberries with premium export quality.",
        es: "Fresas dulces con calidad premium de exportación.",
      },
    },
    origin: { en: "Spain", es: "España" },
  },

  avocado: {
    title: { en: "Avocado", es: "Aguacate" },
    category: { en: "Fresh Fruits", es: "Frutas Frescas" },
    image: "/assets/images/products/Avocado.webp",
    backgroundimage: "/assets/images/products/background/Avocado.webp",
    description: { en: "", es: "" },
    packaging: standardPackaging,
    headline: {
      title: { en: "FRESH<br>AVOCADO", es: "AGUACATE<br>FRESCO" },
      subtitle: {
        en: "Carefully selected avocados ready for export.",
        es: "Aguacates cuidadosamente seleccionados listos para exportación.",
      },
    },
    origin: { en: "Morocco", es: "Marruecos" },
  },

  raspberry: {
    title: { en: "Raspberry", es: "Frambuesa" },
    category: { en: "Fresh Fruits", es: "Frutas Frescas" },
    image: "/assets/images/products/Raspberry.webp",
    backgroundimage: "/assets/images/products/background/Raspberry.webp",
    description: { en: "", es: "" },
    packaging: standardPackaging,
    headline: {
      title: { en: "FRESH<br>RASPBERRY", es: "FRAMBUESA<br>FRESCA" },
      subtitle: {
        en: "Delicate raspberries handled with premium care.",
        es: "Frambuesas delicadas tratadas con cuidado premium.",
      },
    },
    origin: { en: "Spain", es: "España" },
  },

  blackberry: {
    title: { en: "Blackberry", es: "Mora" },
    category: { en: "Fresh Fruits", es: "Frutas Frescas" },
    image: "/assets/images/products/Blackberry.webp",
    backgroundimage: "/assets/images/products/background/Blackberry.webp",
    description: { en: "", es: "" },
    packaging: standardPackaging,
    headline: {
      title: { en: "FRESH<br>BLACKBERRY", es: "MORA<br>FRESCA" },
      subtitle: {
        en: "Premium blackberries for global distribution.",
        es: "Moras premium para distribución global.",
      },
    },
    origin: { en: "Spain", es: "España" },
  },

  "manzana-valvinosta-italia-18": {
    title: { en: "Valvinosta Apple Italy 18", es: "manzana valvinosta Italia 18" },
    category: { en: "Fresh Fruits", es: "Frutas Frescas" },
    image: "/assets/images/products/manzana_valvinosta_Italia_18.webp",
    backgroundimage: "/assets/images/products/background/manzana_valvinosta_Italia_18.webp",
    description: { en: "", es: "" },
    packaging: standardPackaging,
    headline: {
      title: { en: "FRESH<br>VALVINOSTA APPLE", es: "MANZANA<br>VALVINOSTA FRESCA" },
      subtitle: {
        en: "Premium Valvinosta apples exported with care.",
        es: "Manzanas Valvinosta de primera calidad exportadas con cuidado.",
      },
    },
    origin: { en: "Italy", es: "Italia" },
  },

  "manzana-roge-raviol-18": {
    title: { en: "Roge Raviol Apple 18", es: "Manzana Roge raviol 18" },
    category: { en: "Fresh Fruits", es: "Frutas Frescas" },
    image: "/assets/images/products/Manzana_Roge_raviol_18.webp",
    backgroundimage: "/assets/images/products/background/Manzana_Roge_raviol_18.webp",
    description: { en: "", es: "" },
    packaging: standardPackaging,
    headline: {
      title: { en: "FRESH<br>ROGE RAVIOL APPLE", es: "MANZANA<br>ROGE RAVIOL FRESCA" },
      subtitle: {
        en: "High-quality Roge Raviol apples for export.",
        es: "Manzanas Roge Raviol de alta calidad para exportación.",
      },
    },
    origin: { en: "Italy", es: "Italia" },
  },

  "pera-belgique": {
    title: { en: "Belgique Pear", es: "Pera Belgique" },
    category: { en: "Fresh Fruits", es: "Frutas Frescas" },
    image: "/assets/images/products/Pera_Belgique.webp",
    backgroundimage: "/assets/images/products/background/Pera_Belgique.webp",
    description: { en: "", es: "" },
    packaging: standardPackaging,
    headline: {
      title: { en: "FRESH<br>BELGIQUE PEAR", es: "PERA<br>BELGIQUE FRESCA" },
      subtitle: {
        en: "Carefully selected Belgique pears for export.",
        es: "Peras Belgique cuidadosamente seleccionadas para exportación.",
      },
    },
    origin: { en: "Belgium", es: "Bélgica" },
  },

  "pera-portugal": {
    title: { en: "Portugal Pear", es: "Pera Portugal" },
    category: { en: "Fresh Fruits", es: "Frutas Frescas" },
    image: "/assets/images/products/Pera_Portugal.webp",
    backgroundimage: "/assets/images/products/background/Pera_Portugal.webp",
    description: { en: "", es: "" },
    packaging: standardPackaging,
    headline: {
      title: { en: "FRESH<br>PORTUGAL PEAR", es: "PERA<br>PORTUGAL FRESCA" },
      subtitle: {
        en: "High-quality Portugal pears exported worldwide.",
        es: "Peras Portugal de alta calidad exportadas mundialmente.",
      },
    },
    origin: { en: "Portugal", es: "Portugal" },
  },

  "pina-cheli": {
    title: { en: "Cheli Pineapple", es: "Piña cheli" },
    category: { en: "Fresh Fruits", es: "Frutas Frescas" },
    image: "/assets/images/products/Piña_chel.webp",
    backgroundimage: "/assets/images/products/background/Piña_cheli.webp",
    description: { en: "", es: "" },
    packaging: standardPackaging,
    headline: {
      title: { en: "FRESH<br>CHELI PINEAPPLE", es: "PIÑA<br>CHELI FRESCA" },
      subtitle: {
        en: "Sweet Cheli pineapples carefully exported.",
        es: "Piñas Cheli dulces cuidadosamente exportadas.",
      },
    },
    origin: { en: "Unknown", es: "Desconocido" },
  },

  "kiwi-gold": {
    title: { en: "Golden Kiwi", es: "Kiwi Gold" },
    category: { en: "Fresh Fruits", es: "Frutas Frescas" },
    image: "/assets/images/products/kiwi_Gold.webp",
    backgroundimage: "/assets/images/products/background/kiwi_Gold.webp",
    description: { en: "", es: "" },
    packaging: standardPackaging,
    headline: {
      title: { en: "FRESH<br>GOLDEN KIWI", es: "KIWI<br>GOLD FRESCO" },
      subtitle: {
        en: "Premium Golden Kiwi exported fresh.",
        es: "Kiwi Gold premium exportado fresco.",
      },
    },
    origin: { en: "Unknown", es: "Desconocido" },
  },

  "kiwi-vert": {
    title: { en: "Green Kiwi", es: "Kiwi vert" },
    category: { en: "Fresh Fruits", es: "Frutas Frescas" },
    image: "/assets/images/products/Kiwi_vert.webp",
    backgroundimage: "/assets/images/products/background/Kiwi_vert.webp",
    description: { en: "", es: "" },
    packaging: standardPackaging,
    headline: {
      title: { en: "FRESH<br>GREEN KIWI", es: "KIWI<br>VERT FRESCO" },
      subtitle: {
        en: "Fresh Green Kiwi carefully exported.",
        es: "Kiwi vert fresco cuidadosamente exportado.",
      },
    },
    origin: { en: "Unknown", es: "Desconocido" },
  },
};