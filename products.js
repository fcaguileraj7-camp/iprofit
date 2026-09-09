// ==========================================================================
// IPROFIT - Catálogo de Productos y Configuración General
// Basado en la línea visual, fichas técnicas y precios de catalogo_2.jpeg
// ==========================================================================

export const CONFIG = {
  brandName: "IPROFIT",
  tagline: "DEFINE TU PROCESO",
  whatsappNumber: "573001234567", // Reemplaza con tu WhatsApp oficial
  currency: "$",
  currencyCode: "COL$",
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
    brandLogo: "ON",
    category: "proteinas",
    price: 400000,
    originalPrice: 440000,
    badge: "MÁS VENDIDO",
    badgeType: "gold",
    accentColor: "amber",
    tagline: "CRECIMIENTO Y MANTENIMIENTO MUSCULAR",
    image: "images/producto-1.jpeg",
    weight: "5 LBS (2.27 kg)",
    servings: "73 Servicios",
    flavor: "Vanilla Ice Cream",
    availableFlavors: ["Vanilla Ice Cream", "Double Rich Chocolate", "Delicious Strawberry"],
    shortDesc: "Mezcla de proteína de suero de leche de alta calidad, con un perfil completo de aminoácidos, ideal para el crecimiento y mantenimiento muscular.",
    description: "Optimum Nutrition Gold Standard 100% Whey es el estándar de oro en nutrición deportiva. Con un balance perfecto entre aislado y concentrado de proteína de suero, proporciona absorción eficiente, excelente biodisponibilidad y digestión ligera para optimizar cada fase de tu proceso.",
    featureBadges: [
      { label: "24g De Proteína Por Porción", icon: "🥛", tag: "24g" },
      { label: "5.5g De BCAAs (Esenciales)", icon: "🧬", tag: "5.5g BCAAs" },
      { label: "Baja en Azúcar y Grasas", icon: "💚", tag: "Clean" },
      { label: "Ayuda a la Recuperación Muscular", icon: "🏋️", tag: "Recuperación" },
      { label: "Ideal para Ganar y Mantener Masa", icon: "🛡️", tag: "Masa Magra" }
    ],
    benefits: [
      "24g de proteína de suero de leche de máxima calidad por porción",
      "5.5g de BCAAs para potenciar la síntesis proteica",
      "Perfil completo de aminoácidos esenciales",
      "Baja en azúcares y grasas saturadas",
      "Disolución rápida y textura suave insuperable"
    ],
    howToUse: "Consumir 1 servicio (1 scoop) en 250-300 ml de agua fría o leche descremada inmediatamente después del entrenamiento o en la mañana.",
    inStock: true
  },
  {
    id: "muscletech-nitrotech-2lb",
    name: "Nitro-Tech Ultimate Muscle Building",
    brand: "MuscleTech",
    brandLogo: "MT",
    category: "proteinas",
    price: 220000,
    originalPrice: 250000,
    badge: "MÁS MÚSCULO, MÁS FUERZA",
    badgeType: "red",
    accentColor: "red",
    tagline: "FÓRMULA AVANZADA CON CREATINA",
    image: "images/producto-2.jpeg",
    weight: "2 LBS (907 g)",
    servings: "22 Servicios",
    flavor: "Vanilla Cream",
    availableFlavors: ["Vanilla Cream", "Milk Chocolate", "Cookies & Cream"],
    shortDesc: "Fórmula avanzada de proteína de suero con creatina y aminoácidos, diseñada para maximizar el crecimiento muscular, aumentar la fuerza y mejorar el rendimiento.",
    description: "MuscleTech Nitro-Tech está desarrollada con ciencia pura para aquellos que demandan potencia real. Cada porción aporta 30g de proteína de rápida absorción junto a 3g de creatina monohidratada pura y 6.8g de BCAAs, acelerando de manera comprobada el desarrollo muscular y la fuerza máxima.",
    featureBadges: [
      { label: "30g De Proteína Por Porción", icon: "⚡", tag: "30g" },
      { label: "3g De Creatina Monohidrato", icon: "💥", tag: "3g Creatina" },
      { label: "6.8g BCAAs", icon: "🧬", tag: "6.8g BCAAs" },
      { label: "Acelera el Crecimiento Muscular", icon: "📈", tag: "Hipertrofia" },
      { label: "Mejora la Fuerza y el Rendimiento", icon: "🥊", tag: "Power" },
      { label: "Recuperación Más Rápida", icon: "⏱️", tag: "Fast Recovery" }
    ],
    benefits: [
      "30g de proteína ultrapurificada de alta biodisponibilidad",
      "3g de Creatina Monohidratada para recargar el ATP muscular",
      "6.8g de aminoácidos de cadena ramificada (BCAAs)",
      "Mayor congestión muscular, potencia y recuperación acelerada"
    ],
    howToUse: "Mezclar 1 scoop con 200-240 ml de agua fría inmediatamente al terminar la sesión de entrenamiento.",
    inStock: true
  },
  {
    id: "dymatize-iso100-hydrolyzed",
    name: "ISO100 Hydrolyzed 100% Whey Isolate",
    brand: "Dymatize",
    brandLogo: "ISO",
    category: "proteinas",
    price: 240000,
    originalPrice: 275000,
    badge: "PROTEÍNA DE AISLADO PREMIUM",
    badgeType: "cyan",
    accentColor: "cyan",
    tagline: "ABSORCIÓN ULTRARRÁPIDA Y MÁXIMA PUREZA",
    image: "images/producto-3.jpeg",
    weight: "2 LBS (900 g)",
    servings: "28 Servicios",
    flavor: "Vanilla Bean",
    availableFlavors: ["Vanilla Bean", "Gourmet Chocolate", "Fudge Brownie"],
    shortDesc: "Proteína de rápida absorción y máxima pureza, ideal para quienes busquen calidad, digestibilidad y un perfil nutricional superior.",
    description: "Dymatize ISO100 es una proteína hidrolizada y aislada de primer nivel. Al procesarse enzimáticamente, las cadenas de proteínas se descomponen en péptidos más pequeños, permitiendo que tu organismo las digiera y absorba a velocidad récord. Cero sensación de pesadez y mínimo aporte de carbohidratos.",
    featureBadges: [
      { label: "25g De Proteína Por Porción", icon: "💎", tag: "25g" },
      { label: "5.5g De BCAAs", icon: "🧬", tag: "5.5g BCAAs" },
      { label: "2.7g De Leucina Por Porción", icon: "🔬", tag: "2.7g Leucina" },
      { label: "Absorción Ultrarrápida", icon: "⚡", tag: "Hydrolyzed" },
      { label: "Fácil Digestión", icon: "🍃", tag: "Light" },
      { label: "Ideal para Definición y Mantenimiento", icon: "🎯", tag: "Definición" }
    ],
    benefits: [
      "25g de proteína 100% aislada e hidrolizada de suero de leche",
      "5.5g de BCAAs incluyendo 2.7g de Leucina para gatillar la síntesis proteica",
      "Menos de 1g de azúcar y grasas por porción",
      "Digestibilidad superior sin hinchazón ni lactosa residual"
    ],
    howToUse: "Tomar 1 scoop con 150-200 ml de agua en la mañana o justo al finalizar tu entrenamiento para una entrega inmediata de nutrientes.",
    inStock: true
  },
  {
    id: "dymatize-creatine-creapure-300g",
    name: "Creatine Micronized Creapure®",
    brand: "Dymatize",
    brandLogo: "CR",
    category: "creatinas",
    price: 155000,
    originalPrice: 180000,
    badge: "100% CREAPURE ALEMANA",
    badgeType: "cyan",
    accentColor: "cyan",
    tagline: "MÁXIMA PUREZA Y FUERZA EXPLOSIVA",
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=800&q=80",
    weight: "300 g",
    servings: "60 Servicios",
    flavor: "Sin Sabor (Unflavored)",
    availableFlavors: ["Sin Sabor"],
    shortDesc: "Sello Creapure® alemán de pureza grado farmacéutico. Aumento explosivo de fuerza, hidratación muscular y volumen.",
    description: "Creatina monohidratada micronizada con certificación internacional Creapure®. Diseñada para incrementar la resistencia en series pesadas y acelerar la resíntesis de fosfocreatina muscular.",
    featureBadges: [
      { label: "5g Creatina Pura Grado Farmacéutico", icon: "⚡", tag: "5g Creapure" },
      { label: "Aumento de Fuerza y Potencia", icon: "🥊", tag: "Fuerza Max" },
      { label: "Cero Rellenos ni Azúcar", icon: "🌿", tag: "100% Pura" },
      { label: "Fácil Disolución Micronizada", icon: "💧", tag: "Micronizada" }
    ],
    benefits: [
      "Sello Creapure® original fabricado en Alemania",
      "Mejora demostrada de potencia explosiva e hipertrofia",
      "60 servicios de 5g exactos para 2 meses completos",
      "No altera el sabor al mezclar con proteína o zumo"
    ],
    howToUse: "Tomar 5g diarios (1 scoop raso) de manera continua, preferiblemente post-entrenamiento o junto con carbohidratos.",
    inStock: true
  },
  {
    id: "muscletech-platinum-creatine-400g",
    name: "Platinum 100% Creatine Micronized",
    brand: "MuscleTech",
    brandLogo: "MT",
    category: "creatinas",
    price: 135000,
    originalPrice: 160000,
    badge: "80 SERVICIOS RENDIDORES",
    badgeType: "red",
    accentColor: "red",
    tagline: "ENERGÍA ATP Y RESISTENCIA ANABÓLICA",
    image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=800&q=80",
    weight: "400 g",
    servings: "80 Servicios",
    flavor: "Sin Sabor",
    availableFlavors: ["Sin Sabor"],
    shortDesc: "Creatina monohidratada ultra-micronizada para atletas de alto calibre que buscan rendimiento constante.",
    description: "Platinum 100% Creatine de MuscleTech proporciona la creatina monohidratada más testeada del mercado para aumentar la masa muscular magra y mejorar la fuerza en ejercicios de alta demanda.",
    featureBadges: [
      { label: "5g Creatina Monohidratada", icon: "⚡", tag: "5g" },
      { label: "80 Tomas de Alto Rendimiento", icon: "📦", tag: "80 Servs" },
      { label: "Mayor Volumen Celular", icon: "💪", tag: "Volumen" },
      { label: "Recuperación Entre Series", icon: "⏱️", tag: "Resistencia" }
    ],
    benefits: [
      "80 porciones completas de 5 gramos",
      "Micronización avanzada para rápida solubilidad",
      "Probada por deportistas de élite para fuerza y resistencia",
      "Libre de carbohidratos y sustancias añadidas"
    ],
    howToUse: "Consumir 1 medida de 5g disuelta en 200 ml de líquido diariamente todos los días.",
    inStock: true
  },
  {
    id: "combo-definicion-fuerza-pro",
    name: "Combo Pro: Gold Standard Whey + Creatina Creapure",
    brand: "IPROFIT Pack",
    brandLogo: "IPROFIT",
    category: "combos",
    price: 520000,
    originalPrice: 580000,
    badge: "AHORRO ESPECIAL PACK",
    badgeType: "cyan",
    accentColor: "cyan",
    tagline: "EL DÚO DEFINITIVO PARA TRANSFORMAR TU FÍSICO",
    image: "images/producto-1.jpeg",
    weight: "Kit Doble Premium",
    servings: "73 + 60 Servicios",
    flavor: "Vainilla + Sin Sabor",
    availableFlavors: ["Vainilla + Sin Sabor", "Chocolate + Sin Sabor"],
    shortDesc: "El combo perfecto para ganar masa muscular limpia y aumentar la fuerza con el sello de calidad IPROFIT.",
    description: "Combina la proteína más famosa del mundo (Gold Standard 5LB) con la pureza certificada de la Creatina Creapure®. Todo lo que necesitas para tu ciclo de entrenamiento con asesoría personalizada y envío garantizado.",
    featureBadges: [
      { label: "Gold Standard Whey 5 LBS Original", icon: "🥛", tag: "Whey 5LB" },
      { label: "Creatina Creapure 300g Alemana", icon: "⚡", tag: "Creapure 300g" },
      { label: "Asesoría Nutricional Personalizada", icon: "🎯", tag: "Asesoría VIP" },
      { label: "Ahorro Directo de $60.000 COL$", icon: "🏷️", tag: "Ahorro Pack" }
    ],
    benefits: [
      "Doble suplementación sinérgica para ganancia y recuperación",
      "Más de 2 meses y medio de nutrición deportiva continua",
      "Asesoría personalizada por WhatsApp sobre timing y dosis",
      "Envío prioritario incluido"
    ],
    howToUse: "Creatina 5g continuos en la mañana o post-entreno; Proteína 1 scoop al finalizar tu rutina deportiva.",
    inStock: true
  }
];
