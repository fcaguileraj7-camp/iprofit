// ==========================================================================
// IPROFIT - Mobile-First Catalog Experience (Scrollable App Feed)
// Ecosistema de STICKERS die-cut recortados sin fondo, inspirados en 'clientes'
// Modo Claro y Oscuro + Botones Vectoriales SVG HD (Cero Emojis Pixelados)
// Cero traslapes: Jerarquía visual limpia y separación total de capas
// ==========================================================================

import { CONFIG, CATEGORIES, PRODUCTS } from './products.js';

let activeCategory = 'todos';
let searchQuery = '';
let cart = [];

// Elementos del DOM
const feedContainer = document.getElementById('mobile-feed-container');
const categoryTabsContainer = document.getElementById('category-pills-bar');
const searchToggleBtn = document.getElementById('search-toggle-btn');
const searchBarContainer = document.getElementById('search-bar-container');
const searchInput = document.getElementById('search-input');
const searchClearBtn = document.getElementById('search-clear-btn');
const feedCountEl = document.getElementById('feed-count-pill');
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const themeToggleIcon = document.getElementById('theme-toggle-icon');

// Lightbox
const lightboxModal = document.getElementById('image-lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');

// Carrito / Dock
const cartDrawer = document.getElementById('cart-drawer');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');
const dockCartCount = document.getElementById('dock-cart-count');
const dockCartTotal = document.getElementById('dock-cart-total');
const dockCartBtn = document.getElementById('dock-cart-btn');

function formatPrice(amount) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(amount);
}

function createWhatsAppLink(text) {
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

// ==========================================================================
// ICONOS VECTORIALES SVG DE ALTA DEFINICIÓN (UI PROFESIONAL)
// ==========================================================================
const ICONS = {
  sun: `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-amber-400 animate-spin-once" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  `,
  moon: `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-sky-600 animate-spin-once" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  `,
  whatsapp: `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-white flex-shrink-0" viewBox="0 0 24 24">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.64 20.28 9.7 20.28 11.91C20.28 16.45 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.83 7.35C8.65 7.35 8.44 7.42 8.27 7.61C8.09 7.8 7.57 8.29 7.57 9.29C7.57 10.29 8.3 11.26 8.41 11.4C8.51 11.54 9.85 13.62 11.93 14.51C13.66 15.26 14.01 15.11 14.39 15.07C14.76 15.04 15.58 14.58 15.75 14.1C15.92 13.62 15.92 13.2 15.87 13.11C15.82 13.02 15.69 12.97 15.5 12.87C15.32 12.78 14.41 12.33 14.24 12.27C14.07 12.21 13.95 12.18 13.82 12.37C13.7 12.55 13.35 12.97 13.24 13.09C13.14 13.22 13.03 13.23 12.84 13.14C12.66 13.05 12.07 12.85 11.37 12.23C10.82 11.75 10.45 11.15 10.34 10.96C10.23 10.78 10.33 10.68 10.42 10.59C10.5 10.51 10.6 10.38 10.7 10.27C10.79 10.15 10.83 10.07 10.89 9.95C10.95 9.82 10.92 9.72 10.87 9.62C10.82 9.53 10.47 8.64 10.31 8.26C10.16 7.9 10.01 7.95 9.89 7.94C9.78 7.94 9.65 7.94 9.52 7.94C9.39 7.94 9.17 7.99 8.99 8.19C8.81 8.39 8.29 8.87 8.29 9.88C8.29 10.88 9.02 11.85 9.13 11.99L8.83 7.35Z"/>
    </svg>
  `,
  zoom: `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 stroke-current stroke-[2.4]" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="7"></circle>
      <line x1="21" y1="21" x2="16" y2="16"></line>
      <line x1="11" y1="8" x2="11" y2="14"></line>
      <line x1="8" y1="11" x2="14" y2="11"></line>
    </svg>
  `,
  plus: `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 stroke-current stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  `,
  bolt: `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 inline-block fill-current -mt-0.5" viewBox="0 0 24 24">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
  `,
  trash: `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 stroke-current stroke-[2]" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    </svg>
  `,
  book: `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 opacity-80 stroke-current stroke-[2]" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
    </svg>
  `,
  chevronDown: `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 stroke-current stroke-[2.5] transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `
};

// ==========================================================================
// GESTOR DE TEMA CLARO / OSCURO (PERSISTENCIA & REACTIVIDAD)
// ==========================================================================
function updateThemeUI(theme) {
  if (theme === 'light') {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    if (themeToggleIcon) themeToggleIcon.innerHTML = ICONS.moon;
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('title', 'Cambiar a Modo Oscuro');
      themeToggleBtn.setAttribute('aria-label', 'Cambiar a Modo Oscuro');
    }
  } else {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    if (themeToggleIcon) themeToggleIcon.innerHTML = ICONS.sun;
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('title', 'Cambiar a Modo Claro');
      themeToggleBtn.setAttribute('aria-label', 'Cambiar a Modo Claro');
    }
  }
}

function initTheme() {
  const saved = localStorage.getItem('iprofit_theme');
  const activeTheme = (saved === 'light' || saved === 'dark') ? saved : 'dark';
  updateThemeUI(activeTheme);
}

function toggleTheme() {
  const isLight = document.documentElement.classList.contains('light');
  const nextTheme = isLight ? 'dark' : 'light';
  localStorage.setItem('iprofit_theme', nextTheme);
  updateThemeUI(nextTheme);
  renderCategoryPills();
  renderMobileFeed();
  updateCartUI();
}

// ==========================================================================
// RENDERIZADO DE PESTAÑAS TOUCH
// ==========================================================================
function renderCategoryPills() {
  if (!categoryTabsContainer) return;

  const isLight = document.documentElement.classList.contains('light');

  categoryTabsContainer.innerHTML = CATEGORIES.map(cat => {
    const isActive = cat.id === activeCategory;
    const count = cat.id === 'todos' 
      ? PRODUCTS.length 
      : PRODUCTS.filter(p => p.category === cat.id).length;

    let activeClasses = '';
    let inactiveClasses = '';

    if (isLight) {
      activeClasses = 'bg-gradient-to-r from-sky-600 to-cyan-600 text-white shadow-md shadow-sky-600/25 scale-[1.02] border-transparent font-black';
      inactiveClasses = 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200/80 font-bold';
    } else {
      activeClasses = 'bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-950 shadow-md shadow-cyan-500/30 scale-[1.02] border-transparent font-black';
      inactiveClasses = 'bg-white/10 text-slate-300 hover:text-white hover:bg-white/15 border-white/10 font-bold';
    }

    const badgeActiveClasses = isLight ? 'bg-black/20 text-white font-black' : 'bg-black/20 text-slate-950 font-black';
    const badgeInactiveClasses = isLight ? 'bg-slate-200 text-slate-600 font-bold' : 'bg-black/40 text-slate-400 font-semibold';

    return `
      <button 
        data-category="${cat.id}"
        class="category-pill-btn w-full px-2 py-1.5 rounded-xl text-[10.5px] xs:text-[11px] transition-all duration-200 flex items-center justify-between border whitespace-nowrap active:scale-95 shadow-sm ${
          isActive ? activeClasses : inactiveClasses
        }"
      >
        <span class="truncate">${cat.name}</span>
        <span class="px-1.5 py-0.2 rounded-full text-[9px] ml-1 flex-shrink-0 ${
          isActive ? badgeActiveClasses : badgeInactiveClasses
        }">${count}</span>
      </button>
    `;
  }).join('');
}

// ==========================================================================
// RENDERIZADO DEL FEED (STICKERS SIN FONDO Y SIN TRASLAPES)
// ==========================================================================
function renderMobileFeed() {
  if (!feedContainer) return;

  const query = searchQuery.toLowerCase().trim();
  const filtered = PRODUCTS.filter(p => {
    const matchesCat = activeCategory === 'todos' || p.category === activeCategory;
    const matchesSearch = !query || 
      p.name.toLowerCase().includes(query) || 
      p.brand.toLowerCase().includes(query) || 
      p.shortDesc.toLowerCase().includes(query) ||
      (p.clientMotto && p.clientMotto.toLowerCase().includes(query)) ||
      (p.flavor && p.flavor.toLowerCase().includes(query));
    return matchesCat && matchesSearch;
  });

  if (feedCountEl) {
    feedCountEl.innerText = `${filtered.length} suplemento${filtered.length === 1 ? '' : 's'}`;
  }

  if (filtered.length === 0) {
    feedContainer.innerHTML = `
      <div class="py-16 px-6 text-center rounded-3xl border my-4" style="background-color: var(--card-header-bg); border-color: var(--border-subtle);">
        <div class="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center text-theme-accent-cyan" style="background-color: var(--btn-secondary-bg);">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 stroke-current stroke-[2]" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7"></circle>
            <line x1="21" y1="21" x2="16" y2="16"></line>
          </svg>
        </div>
        <h3 class="text-base font-bold text-primary-themed mb-1">Sin resultados para "${searchQuery}"</h3>
        <p class="text-xs mb-4 max-w-xs mx-auto" style="color: var(--text-secondary);">Prueba buscando "Whey", "Creatina" o selecciona otra categoría.</p>
        <button onclick="window.clearSearchAndFilters()" class="px-5 py-2.5 rounded-xl font-bold text-xs btn-whatsapp-action">
          Ver Todo el Catálogo
        </button>
      </div>
    `;
    return;
  }

  feedContainer.innerHTML = filtered.map(product => {
    const theme = product.theme || 'cyan';
    const motto = product.clientMotto || 'DEFINE TU PROCESO';
    const haloClass = `radial-halo-${theme}`;
    const safeTitle = product.name.replace(/'/g, "\\'");
    const whatsappOrderMsg = `¡Hola IPROFIT! 👋 Quiero pedir el producto: *${product.name}* (${formatPrice(product.price)} COL$). ¿Tienen disponibilidad en San Gil para envío?`;

    // Píldoras de nutrición
    const specPillsHtml = product.featureBadges ? product.featureBadges.slice(0, 4).map(b => `
      <span class="spec-pill">
        <span>${b.icon}</span>
        <span>${b.tag || b.label}</span>
      </span>
    `).join('') : '';

    return `
      <article class="mobile-product-card theme-${theme}">
        
        <!-- 1. CABECERA SEPARADA: CINTA MOTIVACIONAL Y BADGES SUPERIORES -->
        <div class="card-header-bar p-3.5 pb-2 flex items-center justify-between gap-2 border-b">
          <!-- Cinta Diagonal Inspirada en Clientes -->
          <div class="shape-motto-banner">
            ${ICONS.bolt}
            <span>${motto}</span>
          </div>

          <!-- Badge Destacado -->
          ${product.badge ? `
            <span class="card-badge-pill px-2.5 py-0.5 text-[9.5px] font-black rounded-md uppercase tracking-wider font-athletic">
              ${product.badge}
            </span>
          ` : ''}
        </div>

        <!-- 2. STAGE DEL STICKER: PURE DIE-CUT STICKER SIN FONDO CON LUZ AMBIENTAL -->
        <div class="product-sticker-stage stripe-speed-pattern relative">
          <!-- Luz ambiental temática centrada -->
          <div class="absolute inset-0 ${haloClass} pointer-events-none"></div>

          <!-- Sticker Recortado Troquelado -->
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            class="product-sticker relative z-10"
            onclick="window.openLightbox('${product.image}', '${safeTitle}')"
            loading="lazy"
          />

          <!-- Botón de Zoom HD Discreto con Icono SVG -->
          <button 
            onclick="window.openLightbox('${product.image}', '${safeTitle}')"
            class="btn-zoom-hd"
            title="Ver foto en pantalla completa"
          >
            ${ICONS.zoom}
            <span>Ver HD</span>
          </button>
        </div>

        <!-- 3. BLOQUE DE INFORMACIÓN (CLARO, ORDENADO Y SIN TRASLAPE) -->
        <div class="card-info-content p-4 flex flex-col gap-2.5">
          
          <!-- Metadatos: Marca, Peso y Servicios -->
          <div class="flex flex-wrap items-center justify-between gap-1.5 text-[11px]">
            <div class="flex items-center gap-1.5">
              <span class="font-athletic font-black uppercase tracking-wider text-theme-accent-${theme}">${product.brand}</span>
              <span style="color: var(--text-muted);">&bull;</span>
              <span class="metadata-weight-pill font-bold px-2 py-0.5 rounded text-[10px]">${product.weight}</span>
            </div>
            <span class="metadata-servings-badge font-bold px-2 py-0.5 rounded text-[10px]">
              ✓ ${product.servings}
            </span>
          </div>

          <!-- Sabor si existe -->
          ${product.flavor ? `
            <div class="text-[10.5px] flex items-center gap-1.5">
              <span style="color: var(--text-muted);" class="font-medium">Sabor:</span>
              <span class="flavor-badge font-semibold px-2 py-0.5 rounded text-[10.5px]">${product.flavor}</span>
            </div>
          ` : ''}

          <!-- Título del Producto -->
          <h2 class="product-title font-product-title font-black uppercase text-base sm:text-lg leading-tight mt-0.5">
            ${product.name}
          </h2>

          <!-- Breve descripción -->
          <p class="product-desc text-xs leading-relaxed">
            ${product.shortDesc}
          </p>

          <!-- Píldoras de Especificaciones Nutricionales -->
          <div class="flex flex-wrap gap-1.5 my-0.5">
            ${specPillsHtml}
          </div>

          <!-- Acordeón Desplegable: Ficha y Modo de Empleo -->
          <details class="product-accordion group rounded-xl overflow-hidden border">
            <summary class="px-3 py-2 text-xs font-bold flex items-center justify-between cursor-pointer transition select-none">
              <span class="flex items-center gap-1.5">
                ${ICONS.book}
                <span>Modo de empleo & Garantía</span>
              </span>
              <span class="text-theme-accent-cyan">${ICONS.chevronDown}</span>
            </summary>
            <div class="accordion-body px-3 pb-3 pt-1 text-xs space-y-1.5 border-t">
              <p><strong class="text-theme-accent-cyan font-bold">Instrucciones:</strong> ${product.howToUse}</p>
              <p><strong>Garantía IPROFIT:</strong> Producto 100% original con precinto sellado de fábrica.</p>
            </div>
          </details>

          <!-- PRECIO Y ACCIONES 1-TAP -->
          <div class="card-footer-actions pt-3 border-t flex items-center justify-between gap-3 mt-1">
            
            <!-- Bloque de Precio -->
            <div>
              <span class="price-label text-[9.5px] font-athletic uppercase block tracking-wider">PRECIO:</span>
              <div class="flex items-baseline gap-1">
                <span class="price-amount text-2xl sm:text-3xl font-black font-price tracking-tight">
                  ${formatPrice(product.price)}
                </span>
                <span class="price-currency text-[10px] font-athletic font-bold">(COL$)</span>
              </div>
              ${product.originalPrice ? `
                <span class="price-original text-xs line-through font-price">
                  ${formatPrice(product.originalPrice)}
                </span>
              ` : ''}
            </div>

            <!-- Botones de Acción Celular con Iconos Vectoriales -->
            <div class="flex items-center gap-2">
              <button 
                onclick="window.addToOrder('${product.id}')"
                class="btn-add-quote"
                title="Agregar a mi cotización"
                aria-label="Agregar suplemento a la lista"
              >
                ${ICONS.plus}
              </button>

              <a 
                href="${createWhatsAppLink(whatsappOrderMsg)}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-whatsapp-action h-11 px-4 flex items-center justify-center gap-1.5 text-xs shadow-lg"
              >
                ${ICONS.whatsapp}
                <span class="font-athletic font-black text-white">PEDIR</span>
              </a>
            </div>

          </div>

        </div>

      </article>
    `;
  }).join('');
}

// ==========================================================================
// CONTROLADORES DE EVENTOS
// ==========================================================================
function setupEventListeners() {
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  if (categoryTabsContainer) {
    categoryTabsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.category-pill-btn');
      if (!btn) return;
      activeCategory = btn.dataset.category;
      renderCategoryPills();
      renderMobileFeed();
      window.scrollTo({ top: 80, behavior: 'smooth' });
    });
  }

  if (searchToggleBtn && searchBarContainer) {
    searchToggleBtn.addEventListener('click', () => {
      searchBarContainer.classList.toggle('hidden');
      if (!searchBarContainer.classList.contains('hidden') && searchInput) {
        searchInput.focus();
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.classList.toggle('hidden', !searchQuery);
      }
      renderMobileFeed();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      searchClearBtn.classList.add('hidden');
      renderMobileFeed();
    });
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) window.closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeLightbox();
      window.closeCart();
    }
  });

  if (dockCartBtn) {
    dockCartBtn.addEventListener('click', window.openCart);
  }
}

// Lightbox
window.openLightbox = function(src, title) {
  if (!lightboxModal || !lightboxImg) return;
  lightboxImg.src = src;
  if (lightboxCaption) lightboxCaption.innerText = title || 'Producto IPROFIT';
  lightboxModal.classList.remove('hidden');
  lightboxModal.classList.add('flex');
};

window.closeLightbox = function() {
  if (!lightboxModal) return;
  lightboxModal.classList.add('hidden');
  lightboxModal.classList.remove('flex');
};

window.clearSearchAndFilters = function() {
  searchQuery = '';
  if (searchInput) searchInput.value = '';
  activeCategory = 'todos';
  renderCategoryPills();
  renderMobileFeed();
};

// Carrito / Cotizador
window.addToOrder = function(productId) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...p, qty: 1 });
  }

  updateCartUI();
  showToast(`⚡ Agregado: ${p.name}`);
};

window.removeFromOrder = function(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
};

window.updateQty = function(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    window.removeFromOrder(productId);
  } else {
    updateCartUI();
  }
};

function updateCartUI() {
  const totalCount = cart.reduce((acc, i) => acc + i.qty, 0);
  const totalPrice = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);

  if (dockCartCount) {
    dockCartCount.innerText = totalCount;
    dockCartCount.classList.toggle('hidden', totalCount === 0);
  }

  if (dockCartTotal) {
    dockCartTotal.innerText = formatPrice(totalPrice);
  }

  if (cartTotalEl) {
    cartTotalEl.innerText = `${formatPrice(totalPrice)} COL$`;
  }

  if (cartItemsContainer) {
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="py-12 text-center" style="color: var(--text-muted);">
          <div class="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center text-theme-accent-cyan" style="background-color: var(--btn-secondary-bg);">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 stroke-current stroke-[2]" viewBox="0 0 24 24" fill="none">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </div>
          <p class="text-sm font-bold text-primary-themed">Tu cotización está vacía</p>
          <p class="text-xs mt-1 max-w-[240px] mx-auto" style="color: var(--text-secondary);">Toca el botón "+" en cualquier suplemento para agregarlo y cotizar todo junto por WhatsApp.</p>
        </div>
      `;
    } else {
      cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item-card flex items-center gap-3 p-3 rounded-2xl border">
          <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-contain rounded-lg p-1" style="background-color: var(--btn-secondary-bg);" />
          <div class="flex-1 min-w-0">
            <h4 class="text-xs font-bold text-primary-themed truncate">${item.name}</h4>
            <span class="text-xs text-theme-accent-cyan font-bold">${formatPrice(item.price)} COL$</span>
            <div class="flex items-center gap-2 mt-1">
              <button onclick="window.updateQty('${item.id}', -1)" class="cart-qty-btn" aria-label="Restar">-</button>
              <span class="text-xs font-bold text-primary-themed">${item.qty}</span>
              <button onclick="window.updateQty('${item.id}', 1)" class="cart-qty-btn" aria-label="Sumar">+</button>
            </div>
          </div>
          <button onclick="window.removeFromOrder('${item.id}')" class="cart-remove-btn" title="Eliminar producto" aria-label="Eliminar">
            ${ICONS.trash}
          </button>
        </div>
      `).join('');
    }
  }

  const checkoutBtn = document.getElementById('cart-checkout-btn');
  if (checkoutBtn) {
    if (cart.length === 0) {
      checkoutBtn.removeAttribute('href');
      checkoutBtn.classList.add('opacity-50', 'pointer-events-none');
    } else {
      checkoutBtn.classList.remove('opacity-50', 'pointer-events-none');
      const lines = cart.map(i => `• ${i.qty}x ${i.name} (${formatPrice(i.price * i.qty)} COL$)`).join('\n');
      const msg = `¡Hola IPROFIT! 👋 Deseo realizar el siguiente pedido desde el catálogo móvil:\n\n${lines}\n\n*Total Estimado: ${formatPrice(totalPrice)} COL$*\n\n¿Me confirman disponibilidad y el costo de envío a mi dirección? Muchas gracias.`;
      checkoutBtn.href = createWhatsAppLink(msg);
    }
  }
}

window.openCart = function() {
  if (!cartDrawer) return;
  cartDrawer.classList.remove('translate-y-full');
};

window.closeCart = function() {
  if (!cartDrawer) return;
  cartDrawer.classList.add('translate-y-full');
};

function showToast(message) {
  const existing = document.getElementById('mobile-toast');
  if (existing) existing.remove();

  const isLight = document.documentElement.classList.contains('light');
  const toast = document.createElement('div');
  toast.id = 'mobile-toast';
  toast.className = `fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-full shadow-2xl text-xs font-bold flex items-center gap-2 toast-slide-up backdrop-blur-md border ${
    isLight 
      ? 'bg-slate-900/95 text-white border-sky-400' 
      : 'bg-slate-900/95 text-white border-cyan-400'
  }`;
  toast.innerHTML = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    if (toast.parentNode) toast.remove();
  }, 2200);
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderCategoryPills();
  renderMobileFeed();
  setupEventListeners();
  updateCartUI();
});
