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
    title: {
      en: "Mint",
      es: "Menta",
    },
    category: {
      en: "Dried Fruits",
      es: "Frutas Deshidratadas",
    },
    image: "/assets/images/products/mint.webp",
    backgroundimage: "/assets/images/products/background/Menta.webp",
    description: {
      en: "Expo Lukus exports fresh mint in different export-grade packaging options: 100 g (bundle – 50 pieces), 80 g (bundle – variable pieces), and 70 g (65–100 pieces), ensuring flexibility while maintaining freshness and high quality for international markets.",
      es: "Expo Lukus exporta menta fresca en diferentes opciones de embalaje de calidad de exportación: 100 g (manojo – 50 piezas), 80 g (manojo – piezas variables) y 70 g (65–100 piezas), garantizando flexibilidad mientras mantiene la frescura y alta calidad para los mercados internacionales.",
    },
    packaging: [
      {
        weight: "100 G",
        detail: {
          en: "Bundle – 50 Pieces",
          es: "Manojo – 50 piezas",
        },
      },
      {
        weight: "80 G",
        detail: {
          en: "Bundle – Variable Pieces",
          es: "Manojo – piezas variables",
        },
      },
      {
        weight: "70 G",
        detail: {
          en: "65 – 100 Pieces",
          es: "65 – 100 piezas",
        },
      },
    ],
    headline: {
      title: {
        en: "FRESH<br>MINT",
        es: "MENTA<br>FRESCA",
      },
      subtitle: {
        en: "Fresh Moroccan mint delivered worldwide with premium quality and flexible packaging.",
        es: "Menta fresca de Marruecos entregada en todo el mundo con calidad premium y embalaje flexible.",
      },
    },
  },

  coriander: {
    title: {
      en: "Coriander",
      es: "Cilantro",
    },
    category: {
      en: "Dried Fruits",
      es: "Frutas Deshidratadas",
    },
    backgroundimage: "/assets/images/products/background/Cilantro.webp",
    image: "/assets/images/products/Coriander.webp",
    description: {
      en: "Expo Lukus exports fresh coriander with standardized packaging options: 100 g (50 pieces) and 1500 g / 40 pieces, ensuring consistent quality and freshness for international markets.",
      es: "Expo Lukus exporta cilantro fresco con opciones de embalaje estandarizadas: 100 g (50 piezas) y 1500 g / 40 piezas, garantizando calidad constante y frescura para los mercados internacionales.",
    },
    packaging: [
      {
        weight: "100 G",
        detail: {
          en: "50 Pieces",
          es: "50 piezas",
        },
      },
      {
        weight: "1500 G",
        detail: {
          en: "40 Pieces",
          es: "40 piezas",
        },
      },
    ],
    headline: {
      title: {
        en: "PURE<br>CORIANDER",
        es: "CILANTRO<br>PURO",
      },
      subtitle: {
        en: "Carefully selected coriander ensuring consistent freshness and export-grade quality.",
        es: "Cilantro cuidadosamente seleccionado que garantiza frescura constante y calidad de exportación.",
      },
    },
  },

  parsley: {
    title: {
      en: "Parsley",
      es: "Perejil",
    },
    category: {
      en: "Dried Fruits",
      es: "Frutas Deshidratadas",
    },
    image: "/assets/images/products/Parsley.webp",
    backgroundimage: "/assets/images/products/background/Parsley.webp",
    description: {
      en: "Expo Lukus exports fresh parsley with export-grade packaging in two formats: 100 g (50 pieces) and 1500 g / 40 pieces, carefully packed to maintain freshness and quality during transport.",
      es: "Expo Lukus exporta perejil fresco con embalaje de calidad de exportación en dos formatos: 100 g (50 piezas) y 1500 g / 40 piezas, cuidadosamente empaquetado para mantener la frescura y calidad durante el transporte.",
    },
    packaging: [
      {
        weight: "100 G",
        detail: {
          en: "50 Pieces",
          es: "50 piezas",
        },
      },
      {
        weight: "1500 G",
        detail: {
          en: "40 Pieces",
          es: "40 piezas",
        },
      },
    ],
    headline: {
      title: {
        en: "GREEN<br>PARSLEY",
        es: "PEREJIL<br>VERDE",
      },
      subtitle: {
        en: "Premium parsley packed to preserve freshness from Morocco to global markets.",
        es: "Perejil premium empaquetado para conservar la frescura desde Marruecos hasta los mercados globales.",
      },
    },
  },
  potato: {
    title: { en: "Potato", es: "Patata" },
    category: { en: "Fresh Vegetables", es: "Verduras Frescas" },
    image: "/assets/images/products/Potato.webp",
    backgroundimage: "",
    description: { en: "", es: "" },
    packaging: standardPackaging,
    headline: {
      title: { en: "FRESH<br>POTATO", es: "PATATA<br>FRESCA" },
      subtitle: {
        en: "Reliable export-grade potatoes for global supply.",
        es: "Patatas de calidad de exportación para suministro global.",
      },
    },
  },

  tomato: {
    title: { en: "Tomato", es: "Tomate" },
    category: { en: "Fresh Vegetables", es: "Verduras Frescas" },
    image: "/assets/images/products/tomato.webp",
    backgroundimage: "",
    description: { en: "", es: "" },
    packaging: standardPackaging,
    headline: {
      title: { en: "FRESH<br>TOMATO", es: "TOMATE<br>FRESCO" },
      subtitle: {
        en: "Export-quality tomatoes with rich flavor and consistency.",
        es: "Tomates de calidad de exportación con sabor y consistencia.",
      },
    },
  },

  onion: {
    title: { en: "Onion", es: "Cebolla" },
    category: { en: "Fresh Vegetables", es: "Verduras Frescas" },
    image: "/assets/images/products/Onion.webp",
    backgroundimage: "",
    description: { en: "", es: "" },
    packaging: standardPackaging,
    headline: {
      title: { en: "FRESH<br>ONION", es: "CEBOLLA<br>FRESCA" },
      subtitle: {
        en: "Carefully sorted onions ready for international markets.",
        es: "Cebollas cuidadosamente seleccionadas para mercados internacionales.",
      },
    },
  },

  blueberry: {
    title: { en: "Blueberry", es: "Arándano" },
    category: { en: "Fresh Fruits", es: "Frutas Frescas" },
    image: "/assets/images/products/Blueberry.webp",
    backgroundimage: "",
    description: { en: "", es: "" },
    packaging: standardPackaging,
    headline: {
      title: { en: "FRESH<br>BLUEBERRY", es: "ARÁNDANO<br>FRESCO" },
      subtitle: {
        en: "Premium blueberries packed for global freshness.",
        es: "Arándanos premium empaquetados para frescura global.",
      },
    },
  },

  strawberry: {
    title: { en: "Strawberry", es: "Fresa" },
    category: { en: "Fresh Fruits", es: "Frutas Frescas" },
    image: "/assets/images/products/strawberry.webp",
    backgroundimage: "",
    description: { en: "", es: "" },
    packaging: standardPackaging,
    headline: {
      title: { en: "FRESH<br>STRAWBERRY", es: "FRESA<br>FRESCA" },
      subtitle: {
        en: "Sweet strawberries with premium export quality.",
        es: "Fresas dulces con calidad premium de exportación.",
      },
    },
  },

  avocado: {
    title: { en: "Avocado", es: "Aguacate" },
    category: { en: "Fresh Fruits", es: "Frutas Frescas" },
    image: "/assets/images/products/Avocado.webp",
    backgroundimage: "",
    description: { en: "", es: "" },
    packaging: standardPackaging,
    headline: {
      title: { en: "FRESH<br>AVOCADO", es: "AGUACATE<br>FRESCO" },
      subtitle: {
        en: "Carefully selected avocados ready for export.",
        es: "Aguacates cuidadosamente seleccionados listos para exportación.",
      },
    },
  },

  raspberry: {
    title: { en: "Raspberry", es: "Frambuesa" },
    category: { en: "Fresh Fruits", es: "Frutas Frescas" },
    image: "/assets/images/products/Raspberry.webp",
    backgroundimage: "",
    description: { en: "", es: "" },
    packaging: standardPackaging,
    headline: {
      title: { en: "FRESH<br>RASPBERRY", es: "FRAMBUESA<br>FRESCA" },
      subtitle: {
        en: "Delicate raspberries handled with premium care.",
        es: "Frambuesas delicadas tratadas con cuidado premium.",
      },
    },
  },

  blackberry: {
    title: { en: "Blackberry", es: "Mora" },
    category: { en: "Fresh Fruits", es: "Frutas Frescas" },
    image: "/assets/images/products/Blackberry.webp",
    backgroundimage: "",
    description: { en: "", es: "" },
    packaging: standardPackaging,
    headline: {
      title: { en: "FRESH<br>BLACKBERRY", es: "MORA<br>FRESCA" },
      subtitle: {
        en: "Premium blackberries for global distribution.",
        es: "Moras premium para distribución global.",
      },
    },
  },
};

