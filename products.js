// ==========================================================================
// IPROFIT - Catálogo Mobile-First (Celulares) & Design Tokens
// Productos como STICKERS die-cut recortados sin fondo, inspirados en 'clientes'
// 100% Catálogo Oficial PDF + Pre-Entrenos Oficiales de Marca
// ==========================================================================

export const CONFIG = {
  brandName: "IPROFIT",
  tagline: "DEFINE TU PROCESO",
  whatsappNumber: "573504514024",
  phoneDisplay: "350 451 4024",
  location: "San Gil, Santander",
  currency: "$",
  currencyCode: "COL$",
  socials: {
    instagram: "https://instagram.com/iprofit.co",
    instagramHandle: "@iprofit.co",
    whatsapp: "https://wa.me/573504514024"
  }
};

export const CATEGORIES = [
  { id: "todos", name: "🔥 Todos", icon: "🔥" },
  { id: "proteinas", name: "🥤 Proteínas", icon: "🥤" },
  { id: "creatinas", name: "⚡ Creatinas", icon: "⚡" },
  { id: "preentrenos", name: "💥 Pre-Entreno", icon: "💥" },
  { id: "quemadores", name: "🔥 Quemadores", icon: "🔥" },
  { id: "combos", name: "🏆 Combos", icon: "🏆" }
];

export const PRODUCTS = [
  // --- COMBOS & PACKS ---
  {
    id: "combo-on-whey-creatine-pro",
    name: "Combo Pro: Gold Standard Whey 5LB + Creatina ON 600g",
    brand: "IPROFIT Pack",
    category: "combos",
    price: 550000,
    originalPrice: 580000,
    badge: "COMBO ESTRELLA",
    theme: "amber",
    clientMotto: "PEQUEÑOS HÁBITOS, GRANDES RESULTADOS",
    shapeType: "slash-gold",
    tagline: "PROTEÍNA #1 MUNDIAL + CREATINA 120 TOMAS",
    image: "images/stickers/combo_on_whey_creatine_real.png",
    weight: "Kit Doble Original",
    servings: "73 + 120 Servs",
    flavor: "Vainilla Ice Cream + Sin Sabor",
    shortDesc: "El dúo más vendido: 5 LBS de Whey Protein (24g) + Creatina Micronizada ON 600g para 4 meses de entrenamiento pesado.",
    description: "Sinergia comprobada: absorción inmediata de aminoácidos esenciales post-entreno y saturación de creatina en músculo para máxima fuerza.",
    featureBadges: [
      { label: "24g Proteína Whey", icon: "🥛", tag: "24g Proteína" },
      { label: "5g Creatina Pura (120 Tomas)", icon: "⚡", tag: "120 Tomas" },
      { label: "Ahorro Especial $30.000", icon: "🏷️", tag: "Ahorro Pack" },
      { label: "Asesoría de Dosificación", icon: "🎯", tag: "Asesoría VIP" }
    ],
    howToUse: "Creatina: 5g diarios continuo en agua o jugo. Proteína: 1 scoop tras entrenar.",
    inStock: true
  },

  // --- PROTEÍNAS ---
  {
    id: "on-gold-standard-whey-5lb",
    name: "Gold Standard 100% Whey Protein",
    brand: "Optimum Nutrition",
    category: "proteinas",
    price: 400000,
    originalPrice: 440000,
    badge: "MÁS VENDIDA",
    theme: "amber",
    clientMotto: "DISCIPLINA QUE DA RESULTADOS",
    shapeType: "slash-gold",
    tagline: "CRECIMIENTO Y RECUPERACIÓN MUSCULAR",
    image: "images/stickers/on_gold_standard_whey_5lb.png",
    weight: "5.00 LBS (2.27 kg)",
    servings: "73 Servicios",
    flavor: "Vanilla Ice Cream",
    shortDesc: "El estándar de oro en nutrición deportiva mundial. 24g de proteína de suero y 5.5g de BCAAs por porción.",
    description: "Formulado principalmente con Aislado de Proteína de Suero (WPI). Digestibilidad superior, absorción eficiente y disolución rápida sin grumos.",
    featureBadges: [
      { label: "24g Proteína Suero", icon: "🥛", tag: "24g Proteína" },
      { label: "5.5g BCAAs Naturales", icon: "🧬", tag: "5.5g BCAAs" },
      { label: "Baja en Grasa y Azúcar", icon: "💚", tag: "Clean Whey" },
      { label: "Recuperación Inmediata", icon: "🛡️", tag: "Recuperación" }
    ],
    howToUse: "1 scoop en 250ml de agua fría tras el entrenamiento.",
    inStock: true
  },
  {
    id: "dymatize-iso100-5lb",
    name: "ISO100® Hydrolyzed 100% Whey Isolate 5LB",
    brand: "Dymatize",
    category: "proteinas",
    price: 540000,
    originalPrice: 590000,
    badge: "AISLADO PREMIUM",
    theme: "cyan",
    clientMotto: "THE G.O.A.T EN DEFINICIÓN",
    shapeType: "slash-cyan",
    tagline: "ABSORCIÓN ULTRARRÁPIDA Y MÁXIMA PUREZA",
    image: "images/stickers/dymatize_iso100_5lb.png",
    weight: "5.00 LBS (2.3 kg)",
    servings: "71 Servicios",
    flavor: "Gourmet Vanilla",
    shortDesc: "Proteína de suero hidrolizada y aislada de gama élite. 25g de proteína ultra pura con menos de 1g de azúcar.",
    description: "Pre-digerida enzimáticamente para asimilarse al instante sin ninguna sensación de pesadez ni lactosa residual. Perfecta para etapas de corte y definición.",
    featureBadges: [
      { label: "25g Proteína Hidrolizada", icon: "💎", tag: "25g Hidrolizada" },
      { label: "5.5g BCAAs + 2.7g Leucina", icon: "🧬", tag: "2.7g Leucina" },
      { label: "Menos de 1g de Carbohidratos", icon: "🍃", tag: "Zero Fat" },
      { label: "Cero Hinchazón Digestiva", icon: "🎯", tag: "Fácil Digestión" }
    ],
    howToUse: "1 scoop en 200ml de agua al terminar ejercicio de alta demanda.",
    inStock: true
  },
  {
    id: "dymatize-iso100-1-3lb",
    name: "ISO100® Hydrolyzed Whey Isolate 1.3LB",
    brand: "Dymatize",
    category: "proteinas",
    price: 230000,
    originalPrice: 255000,
    badge: "CALIDAD ÉLITE",
    theme: "cyan",
    clientMotto: "DEFINE TU PROCESO",
    shapeType: "slash-cyan",
    tagline: "25G DE PROTEÍNA ULTRA PURA EN ENVASE COMPACTO",
    image: "images/stickers/dymatize_iso100_1_3lb.png",
    weight: "1.3 LBS (600 g)",
    servings: "20 Servicios",
    flavor: "Vainilla Gourmet",
    shortDesc: "Toda la potencia enzimática de Dymatize ISO100 en formato compacto ideal para probar o viajar.",
    description: "Misma concentración de suero hidrolizado y aislado en presentación portátil.",
    featureBadges: [
      { label: "25g Proteína Pura", icon: "💎", tag: "25g Pura" },
      { label: "5.5g BCAAs", icon: "🧬", tag: "5.5g BCAAs" },
      { label: "Presentación Compacta", icon: "📦", tag: "1.3 LBS" }
    ],
    howToUse: "1 scoop en 180ml de agua fría.",
    inStock: true
  },
  {
    id: "muscletech-nitrotech-2lb",
    name: "Nitro-Tech™ Ultimate Muscle Building",
    brand: "MuscleTech",
    category: "proteinas",
    price: 220000,
    originalPrice: 250000,
    badge: "MÁS MÚSCULO, MÁS FUERZA",
    theme: "red",
    clientMotto: "MÁS FUERZA - MÁS DISCIPLINA",
    shapeType: "slash-red",
    tagline: "30G PROTEÍNA DE SUERO + 3G CREATINA PURA",
    image: "images/stickers/muscletech_nitrotech_2lb.png",
    weight: "2.00 LBS (907 g)",
    servings: "22 Servicios",
    flavor: "Vainilla Cream",
    shortDesc: "Potencia anabólica diseñada para ganar masa magra y reventar récords de fuerza en el gimnasio.",
    description: "Combina 30g de proteína de suero ultrapurificada con una dosis clínica de 3g de creatina monohidrato para mayor congestión y potencia muscular.",
    featureBadges: [
      { label: "30g Proteína Suero", icon: "⚡", tag: "30g Proteína" },
      { label: "3g Creatina Monohidrato", icon: "💥", tag: "3g Creatina" },
      { label: "6.8g BCAAs", icon: "🧬", tag: "6.8g BCAAs" },
      { label: "Hipertrofia Acelerada", icon: "📈", tag: "Hipertrofia" }
    ],
    howToUse: "1 scoop en 240ml de agua post-entreno.",
    inStock: true
  },

  // --- CREATINAS ---
  {
    id: "on-creatine-micronized-600g",
    name: "Creatina Monohidrato Micronizada 600g",
    brand: "Optimum Nutrition",
    category: "creatinas",
    price: 180000,
    originalPrice: 210000,
    badge: "120 SERVICIOS",
    theme: "cyan",
    clientMotto: "ENERGÍA & POTENCIA EXPLOSIVA",
    shapeType: "slash-cyan",
    tagline: "4 MESES DE FUERZA Y RECUPERACIÓN ATP",
    image: "images/stickers/on_creatine_600g_real.png",
    weight: "600 G (21.16 oz)",
    servings: "120 Servicios",
    flavor: "Sin Sabor (Unflavored)",
    shortDesc: "Envase gigante de 600g de Optimum Nutrition. 120 servicios de creatina micronizada de disolución instantánea.",
    description: "El suplemento más respaldado por la ciencia deportiva. Eleva la fuerza máxima en series pesadas y promueve la hidratación celular muscular.",
    featureBadges: [
      { label: "5g Creatina Monohidrato Pura", icon: "⚡", tag: "5g Pura" },
      { label: "120 Tomas Rendidoras (4 Meses)", icon: "📦", tag: "120 Servs" },
      { label: "Fácil Disolución Micronizada", icon: "💧", tag: "Micronizada" },
      { label: "Sin Rellenos ni Azúcar", icon: "🌿", tag: "100% Pura" }
    ],
    howToUse: "1 scoop de 5g diario continuo en agua o batido.",
    inStock: true
  },
  {
    id: "on-creatine-micronized-300g",
    name: "Creatina Monohidrato Micronizada 300g",
    brand: "Optimum Nutrition",
    category: "creatinas",
    price: 130000,
    originalPrice: 150000,
    badge: "60 SERVICIOS",
    theme: "cyan",
    clientMotto: "DEFINE TU PROCESO",
    shapeType: "slash-cyan",
    tagline: "PUREZA Y EFICIENCIA EN CADA TOMA",
    image: "images/stickers/on_creatine_powder.png",
    weight: "300 G (10.58 oz)",
    servings: "60 Servicios",
    flavor: "Sin Sabor",
    shortDesc: "Presentación clásica de 300g (2 meses completos) de Optimum Nutrition.",
    description: "Micronizada para permanecer suspendida en líquido y absorberse rápido sin alterar el sabor de tu bebida.",
    featureBadges: [
      { label: "5g Monohidrato Puro", icon: "⚡", tag: "5g" },
      { label: "60 Tomas Exactas", icon: "📦", tag: "60 Servs" },
      { label: "Aumento de Fuerza ATP", icon: "🥊", tag: "Fuerza Max" }
    ],
    howToUse: "5g diarios con agua o batido.",
    inStock: true
  },
  {
    id: "dymatize-creatine-300g",
    name: "Creatina Monohidratada Pura 300g",
    brand: "Dymatize",
    category: "creatinas",
    price: 140000,
    originalPrice: 165000,
    badge: "CALIDAD USA",
    theme: "red",
    clientMotto: "MÁS FUERZA - MÁS POTENCIA",
    shapeType: "slash-red",
    tagline: "FUERZA EXPLOSIVA Y VOLUMEN CELULAR",
    image: "images/stickers/dymatize_creatine_300g.png",
    weight: "300 G (10.5 oz)",
    servings: "60 Servicios",
    flavor: "Sin Sabor",
    shortDesc: "Creatina monohidratada 100% pura grado farmacéutico formulada para atletas de alto rendimiento.",
    description: "Ayuda a recargar el ATP muscular y retrasa la aparición de la fatiga en entrenamientos de hipertrofia o fuerza.",
    featureBadges: [
      { label: "5g Grado Farmacéutico", icon: "⚡", tag: "5g Pura" },
      { label: "60 Tomas", icon: "📦", tag: "60 Servs" },
      { label: "Volumen Muscular Magro", icon: "💪", tag: "Volumen" }
    ],
    howToUse: "Consumir 5g al día con agua.",
    inStock: true
  },
  {
    id: "muscletech-creatine-600g",
    name: "Platinum 100% Creatine Micronized 600g",
    brand: "MuscleTech",
    category: "creatinas",
    price: 150000,
    originalPrice: 175000,
    badge: "120 SERVICIOS RENDIDORA",
    theme: "lime",
    clientMotto: "DISCIPLINA QUE DA RESULTADOS",
    shapeType: "slash-lime",
    tagline: "ENERGÍA ATP Y RESISTENCIA ANABÓLICA",
    image: "images/stickers/muscletech_creatine_600g.png",
    weight: "600 G (21.16 oz)",
    servings: "120 Servicios",
    flavor: "Sin Sabor",
    shortDesc: "Creatina ultrapurificada MuscleTech Platinum. Rinde 120 tomas para 4 meses de entrenamiento constante.",
    description: "Excelente relación costo por gramo en presentación rendidora de 600g.",
    featureBadges: [
      { label: "5g Creatina Pura", icon: "⚡", tag: "5g" },
      { label: "120 Tomas de Alto Rendimiento", icon: "📦", tag: "120 Servs" },
      { label: "Resistencia Muscular", icon: "🛡️", tag: "Resistencia" }
    ],
    howToUse: "1 scoop de 5g diario.",
    inStock: true
  },
  {
    id: "nutrex-creatine-300g",
    name: "Creatina Monohidrato Micronizada 300g",
    brand: "Nutrex",
    category: "creatinas",
    price: 100000,
    originalPrice: 120000,
    badge: "EXCELENTE VALOR",
    theme: "lime",
    clientMotto: "PEQUEÑOS HÁBITOS, GRANDES RESULTADOS",
    shapeType: "slash-lime",
    tagline: "POTENCIA Y RESISTENCIA EN CADA SERIE",
    image: "images/stickers/nutrex_creatine_300g.png",
    weight: "300 G (10.58 oz)",
    servings: "60 Servicios",
    flavor: "Sin Sabor",
    shortDesc: "Creatina monohidratada pura de Nutrex Research para 60 entrenamientos intensos.",
    description: "Pureza garantizada a precio muy competitivo para quienes no negocian calidad ni constancia.",
    featureBadges: [
      { label: "5g Creatina Micronizada", icon: "⚡", tag: "5g" },
      { label: "60 Servicios", icon: "📦", tag: "60 Servs" },
      { label: "100% Pura", icon: "🌿", tag: "Clean" }
    ],
    howToUse: "Tomar 5g diarios con agua.",
    inStock: true
  },
  {
    id: "nutrex-creatine-150g",
    name: "Creatina Monohidrato Micronizada 150g",
    brand: "Nutrex",
    category: "creatinas",
    price: 70000,
    originalPrice: 85000,
    badge: "MÁS ECONÓMICA",
    theme: "lime",
    clientMotto: "DEFINE TU PROCESO",
    shapeType: "slash-lime",
    tagline: "FORMATO INICIAL DE 1 MES",
    image: "images/stickers/nutrex_creatine_150g.png",
    weight: "150 G (5.29 oz)",
    servings: "30 Servicios",
    flavor: "Sin Sabor",
    shortDesc: "La presentación más económica de creatina pura para iniciar tu suplementación.",
    description: "Ideal para llevar de viaje o empezar a sentir los efectos de la creatina en tu fuerza.",
    featureBadges: [
      { label: "5g Por Porción", icon: "⚡", tag: "5g" },
      { label: "30 Servicios", icon: "📦", tag: "30 Servs" },
      { label: "Precio Entrada $70.000", icon: "🏷️", tag: "$70.000" }
    ],
    howToUse: "1 scoop de 5g diario.",
    inStock: true
  },

  // --- PRE-ENTRENOS ---
  {
    id: "insanelabz-psychotic",
    name: "Psychotic High Stimulant Pre-Workout",
    brand: "Insane Labz",
    category: "preentrenos",
    price: 135000,
    originalPrice: 155000,
    badge: "ENERGÍA PSICÓTICA",
    theme: "red",
    clientMotto: "MÁS FUERZA & ENERGÍA EXTREMA",
    shapeType: "slash-red",
    tagline: "ENFOQUE TÚNEL Y RESISTENCIA AL LÍMITE",
    image: "images/stickers/insanelabz_psychotic_preworkout.png",
    weight: "35 Servicios (216g)",
    servings: "35 Servicios",
    flavor: "Fruit Punch",
    shortDesc: "El pre-entreno más potente y reconocido del mercado. Fórmula con Ampiberry® patentado y cafeína anhidra pura.",
    description: "Insane Labz Psychotic está desarrollado para atletas que demandan máxima congestión, fuerza y un enfoque mental fuera de serie durante toda la rutina.",
    featureBadges: [
      { label: "35 Servicios Concentrados", icon: "💥", tag: "35 Servs" },
      { label: "Ampiberry® Patentado", icon: "⚡", tag: "Ampiberry" },
      { label: "Enfoque Mental Extremo", icon: "🧠", tag: "Focus" },
      { label: "Cero Azúcar y Carbos", icon: "🌿", tag: "Zero Sugar" }
    ],
    howToUse: "Tomar 1 scoop pequeño (evaluar 1/2 scoop primero) en 250ml de agua fría 20 a 30 min antes de entrenar.",
    inStock: true
  },
  {
    id: "cellucor-c4-original",
    name: "C4 Original Explosive Pre-Workout",
    brand: "Cellucor",
    category: "preentrenos",
    price: 130000,
    originalPrice: 150000,
    badge: "PRE-ENTRENO #1 USA",
    theme: "amber",
    clientMotto: "DISCIPLINA QUE DA RESULTADOS",
    shapeType: "slash-gold",
    tagline: "ENERGÍA EXPLOSIVA & BOMBEO MUSCULAR",
    image: "images/stickers/cellucor_c4_original_preworkout.png",
    weight: "30 Servicios (195g)",
    servings: "30 Servicios",
    flavor: "Icy Blue Razz / Fruit Punch",
    shortDesc: "El legendario pre-entreno estadounidense. Combina CarnoSyn® Beta-Alanina, Nitrato de Creatina y cafeína pura.",
    description: "C4 Original aporta energía limpia y sostenida sin bajón, retrasando el cansancio muscular y potenciando la vascularización en cada serie.",
    featureBadges: [
      { label: "150mg Cafeína Pura", icon: "⚡", tag: "150mg Cafeína" },
      { label: "1.6g CarnoSyn® Beta-Alanina", icon: "🧬", tag: "Beta-Alanina" },
      { label: "1g Nitrato Creatina NO3-T®", icon: "🥊", tag: "NO3-T" },
      { label: "30 Servicios", icon: "📦", tag: "30 Servs" }
    ],
    howToUse: "1 scoop en 200ml de agua fría 20 a 30 minutos antes del entrenamiento.",
    inStock: true
  },

  // --- QUEMADORES ---
  {
    id: "nutrex-lipo6-black-ultra",
    name: "Lipo-6 Black Ultra Concentrate",
    brand: "Nutrex",
    category: "quemadores",
    price: 100000,
    originalPrice: 125000,
    badge: "TERMOGÉNICO #1",
    theme: "red",
    clientMotto: "MÁXIMO ENFOQUE & ENERGÍA",
    shapeType: "slash-red",
    tagline: "ULTIMATE THERMOGENIC FAT DESTROYER",
    image: "images/stickers/nutrex_lipo6_black.png",
    weight: "60 Liqui-Caps",
    servings: "60 Servicios",
    flavor: "Cápsulas Líquidas Rápidas",
    shortDesc: "Destructor termogénico ultra concentrado. Una sola cápsula líquida al día para activar el metabolismo.",
    description: "Acelera el gasto calórico basal, controla el apetito durante déficit calórico y aporta un golpe de energía pura.",
    featureBadges: [
      { label: "Ultra Concentrado (1 Cap)", icon: "🔥", tag: "1 Cap al Día" },
      { label: "Cápsulas Líquidas Rápidas", icon: "⚡", tag: "Liqui-Caps" },
      { label: "Enfoque Sensorial Intenso", icon: "🧠", tag: "Focus" },
      { label: "60 Días de Suplementación", icon: "📦", tag: "60 Servs" }
    ],
    howToUse: "1 cápsula en la mañana con desayuno o 30 min antes de cardio.",
    inStock: true
  },
  {
    id: "muscletech-hydroxycut-hardcore-elite",
    name: "Hydroxycut Hardcore® Elite",
    brand: "MuscleTech",
    category: "quemadores",
    price: 120000,
    originalPrice: 145000,
    badge: "ENERGÍA EXTREMA",
    theme: "red",
    clientMotto: "DISCIPLINA QUE DA RESULTADOS",
    shapeType: "slash-red",
    tagline: "POTENCIA TERMOGÉNICA 4 EN 1",
    image: "images/stickers/hydroxycut_hardcore_elite.png",
    weight: "100 Cápsulas",
    servings: "50-100 Servs",
    flavor: "Cápsulas Termogénicas",
    shortDesc: "Fórmula termogénica intensa para sesiones de corte y definición muscular exigente.",
    description: "Cafeína anhidra pura, extracto de café verde y agentes termogénicos para máxima energía y quema de calorías.",
    featureBadges: [
      { label: "Termogénesis 4 en 1", icon: "🔥", tag: "4 en 1" },
      { label: "Energía Sensorial Extrema", icon: "⚡", tag: "High Energy" },
      { label: "100 Cápsulas de Acción Rápida", icon: "📦", tag: "100 Caps" }
    ],
    howToUse: "1 cápsula 30 a 60 min antes de entrenar.",
    inStock: true
  }
];
