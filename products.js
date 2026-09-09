// ==========================================================================
// IPROFIT - Catálogo de Productos y Configuración General
// ==========================================================================

export const CONFIG = {
  brandName: "IPROFIT",
  tagline: "DEFINE TU PROCESO",
  // Cambia este número por el WhatsApp oficial de tu negocio (código de país sin '+', ej: 573001234567 para Colombia)
  whatsappNumber: "573001234567",
  currency: "$",
  currencyCode: "COP",
  socials: {
    instagram: "https://instagram.com/iprofit",
    whatsapp: "https://wa.me/573001234567",
    tiktok: "https://tiktok.com/@iprofit"
  }
};

export const CATEGORIES = [
  { id: "todos", name: "🔥 Todos los Productos" },
  { id: "proteinas", name: "🥤 Proteínas" },
  { id: "creatinas", name: "⚡ Creatinas" },
  { id: "preentreno", name: "💥 Pre-Entrenos" },
  { id: "combos", name: "🏆 Combos & Packs" }
];

export const PRODUCTS = [
  {
    id: "on-gold-standard-whey-5lb",
    name: "Gold Standard 100% Whey Protein",
    brand: "Optimum Nutrition",
    category: "proteinas",
    price: 345000,
    originalPrice: 380000,
    badge: "MÁS VENDIDO",
    badgeType: "hot",
    image: "images/producto-1.jpeg",
    weight: "5 LBS (2.26 kg)",
    servings: "73 Servicios",
    proteinPerServing: "24g",
    flavor: "Vanilla Ice Cream",
    availableFlavors: ["Vanilla Ice Cream", "Double Rich Chocolate", "Delicious Strawberry"],
    shortDesc: "La proteína de suero aislada #1 en el mundo. Máxima pureza, recuperación muscular acelerada y digestión óptima.",
    description: "Optimum Nutrition Gold Standard 100% Whey es el estándar dorado de las proteínas. Cada servicio entrega 24g de proteína de suero de leche de primera calidad, principalmente aislado de proteína de suero (WPI), con 5.5g de BCAAs naturales y 4g de glutamina para apoyar el crecimiento y la reparación de la masa muscular magra.",
    benefits: [
      "24 gramos de proteína pura de suero por porción",
      "5.5g de BCAAs de origen natural para protección muscular",
      "Baja en carbohidratos, grasas y azúcares",
      "Disolución instantánea con cuchara o shaker"
    ],
    howToUse: "Mezcla 1 scoop en 250-300 ml de agua fría o leche descremada después de entrenar o entre comidas principales.",
    inStock: true
  },
  {
    id: "muscletech-nitrotech-2lb",
    name: "Nitro-Tech Ultimate Muscle Building",
    brand: "MuscleTech",
    category: "proteinas",
    price: 215000,
    originalPrice: 245000,
    badge: "FUERZA + VOLUMEN",
    badgeType: "featured",
    image: "images/producto-2.jpeg",
    weight: "2 LBS (907 g)",
    servings: "22 Servicios",
    proteinPerServing: "30g",
    flavor: "Vanilla Cream",
    availableFlavors: ["Vanilla Cream", "Milk Chocolate", "Cookies & Cream"],
    shortDesc: "Fórmula hiper-avanzada con 30g de proteína de suero + 3g de Creatina Monohidratada para máximo volumen y potencia.",
    description: "MuscleTech Nitro-Tech está científicamente diseñada para construir 70% más músculo magro que la proteína de suero convencional. Su fórmula combina péptidos y aislado de suero de rápida asimilación reforzado con 3 gramos de creatina monohidratada pura por scoop.",
    benefits: [
      "30g de proteína ultra limpia y biodisponible",
      "3g de Creatina Monohidratada incorporada por porción",
      "Mayor fuerza, resistencia y congestión muscular",
      "Sabor gourmet premium y fácil digestión"
    ],
    howToUse: "Consumir 1 scoop mezclado con 200-250 ml de agua fría inmediatamente al terminar el entrenamiento.",
    inStock: true
  },
  {
    id: "dymatize-creatine-creapure-300g",
    name: "Creatine Micronized Creapure®",
    brand: "Dymatize",
    category: "creatinas",
    price: 155000,
    originalPrice: 180000,
    badge: "100% CREAPURE",
    badgeType: "quality",
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=800&q=80",
    weight: "300 g",
    servings: "60 Servicios",
    proteinPerServing: "5g Creatina Pura",
    flavor: "Sin Sabor (Unflavored)",
    availableFlavors: ["Sin Sabor"],
    shortDesc: "Sello Creapure® alemán de máxima pureza. Aumento explosivo de fuerza, hidratación intracelular y potencia atlética.",
    description: "La creatina monohidratada Dymatize Creapure® está micronizada para una solubilidad insuperable. Mejora la producción de ATP celular, permitiendo levantar más peso, recuperarte más rápido entre series y favorecer la hipertrofia muscular.",
    benefits: [
      "100% Monohidrato de Creatina grado farmacéutico Creapure®",
      "Aumento probado de fuerza máxima y potencia explosiva",
      "Apoya la recuperación y previene el catabolismo muscular",
      "Fácil de combinar con tu proteína o bebida favorita"
    ],
    howToUse: "Tomar 5g diarios (1 scoop raso) disueltos en agua, jugo o batido de proteína. Consumo continuo todos los días.",
    inStock: true
  },
  {
    id: "muscletech-platinum-creatine-400g",
    name: "Platinum 100% Creatine",
    brand: "MuscleTech",
    category: "creatinas",
    price: 135000,
    originalPrice: 160000,
    badge: "ALTO RENDIMIENTO",
    badgeType: "hot",
    image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=800&q=80",
    weight: "400 g",
    servings: "80 Servicios",
    proteinPerServing: "5g Creatina",
    flavor: "Sin Sabor",
    availableFlavors: ["Sin Sabor"],
    shortDesc: "Creatina monohidratada ultra-micronizada para atletas de alto calibre que buscan fuerza y resistencia constante.",
    description: "Platinum 100% Creatine provee a tus músculos con la forma de creatina monohidratada más estudiada del mundo. Diseñada para recargar los depósitos de fosfocreatina muscular durante entrenamientos de alta intensidad.",
    benefits: [
      "5g de creatina monohidratada micronizada por servicio",
      "Mejora sustancial en sprints, levantamiento pesado y saltos",
      "Cero azúcar, cero rellenos, 100% ingrediente activo",
      "Rendimiento comprobado de 80 tomas por envase"
    ],
    howToUse: "Mezcla 1 servicio (5g) en 240 ml de agua. Tomar en cualquier momento del día de manera consistente.",
    inStock: true
  },
  {
    id: "dymatize-iso100-5lb",
    name: "ISO100 Hydrolyzed 100% Whey Isolate",
    brand: "Dymatize",
    category: "proteinas",
    price: 389000,
    originalPrice: 420000,
    badge: "AISLADA ULTRA PURA",
    badgeType: "featured",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=800&q=80",
    weight: "5 LBS (2.3 kg)",
    servings: "71 Servicios",
    proteinPerServing: "25g",
    flavor: "Gourmet Vanilla",
    availableFlavors: ["Gourmet Vanilla", "Fudge Brownie", "Cookies & Cream"],
    shortDesc: "Proteína hidrolizada y aislada de absorción ultrarrápida. Cero grasa, menos de 1g de carbohidratos, ideal para definición.",
    description: "Dymatize ISO100 es una de las proteínas más premiadas del planeta. Al estar hidrolizada enzimáticamente, sus cadenas de aminoácidos llegan a tus músculos casi de inmediato, ideal para etapas de definición o atletas con digestión sensible.",
    benefits: [
      "25g de proteína hidrolizada 100% aislada de suero",
      "Menos de 1g de azúcar y grasas por porción",
      "Absorción inmediata y digestión liviana",
      "Libre de gluten y lactosa residual"
    ],
    howToUse: "Mezcla 1 scoop en 150-180 ml de agua o tu leche favorita en la mañana o justo después del entrenamiento.",
    inStock: true
  },
  {
    id: "combo-definicion-fuerza-pro",
    name: "Pack Definición & Fuerza PRO (Whey ON + Creatina)",
    brand: "IPROFIT Combo",
    category: "combos",
    price: 479000,
    originalPrice: 535000,
    badge: "AHORRA $56.000",
    badgeType: "sale",
    image: "images/producto-1.jpeg",
    weight: "Combo Doble",
    servings: "73 + 60 Servicios",
    proteinPerServing: "Whey + Creatina",
    flavor: "Vainilla + Sin Sabor",
    availableFlavors: ["Vainilla + Sin Sabor", "Chocolate + Sin Sabor"],
    shortDesc: "El combo definitivo para construir músculo magro y aumentar tu fuerza: Gold Standard 5LB + Creatina Creapure.",
    description: "Lleva tu preparación física al siguiente escalón combinando la proteína aislada más reconocida con la creatina de mayor pureza internacional. Ahorra comprando el kit completo con envío preferencial.",
    benefits: [
      "Optimum Nutrition Gold Standard 5 LBS original",
      "Creatina Monohidratada Creapure® 300g",
      "Guía digital de asesoría de consumo incluida",
      "Ahorro directo de $56.000 COP"
    ],
    howToUse: "Creatina 5g diarios en la mañana o con comida; Proteína 1 scoop post-entreno.",
    inStock: true
  }
];
