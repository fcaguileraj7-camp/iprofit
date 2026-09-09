// ==========================================================================
// IPROFIT - Aplicación Interactiva del Catálogo & Pedidos por WhatsApp
// Optimizado para Celular (Mobile-First) & Branding inspirado en catalogo_2.jpeg
// ==========================================================================

import { CONFIG, CATEGORIES, PRODUCTS } from './products.js';

// Estado de la aplicación
let activeCategory = 'todos';
let searchQuery = '';
let cart = []; // Lista de productos seleccionados para el pedido conjunto

// Elementos del DOM
const productsGrid = document.getElementById('products-grid');
const categoryTabsContainer = document.getElementById('category-tabs');
const searchInput = document.getElementById('search-input');
const productsCountEl = document.getElementById('products-count');
const productModal = document.getElementById('product-modal');
const modalContent = document.getElementById('modal-content');
const cartDrawer = document.getElementById('cart-drawer');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');
const cartBadgeEl = document.getElementById('cart-badge');
const mobileCartBadgeEl = document.getElementById('mobile-cart-badge');
const floatingCartBtn = document.getElementById('floating-cart-btn');

// Formato de moneda colombiana
function formatPrice(amount) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(amount);
}

// Generador de enlace WhatsApp con mensaje codificado
function createWhatsAppLink(text) {
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedText}`;
}

// Inicialización de la app
function init() {
  renderCategoryTabs();
  renderProducts();
  setupEventListeners();
  updateCartUI();
}

// Renderizar pestañas de categorías con soporte táctil
function renderCategoryTabs() {
  if (!categoryTabsContainer) return;
  categoryTabsContainer.innerHTML = CATEGORIES.map(cat => {
    const isActive = cat.id === activeCategory;
    return `
      <button 
        data-category="${cat.id}"
        class="category-btn flex-shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 whitespace-nowrap active:scale-95 ${
          isActive 
            ? 'bg-gradient-brand text-black shadow-lg shadow-cyan-500/25 font-bold scale-[1.02]' 
            : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
        }"
      >
        ${cat.name}
      </button>
    `;
  }).join('');
}

// Filtrar y renderizar productos
function renderProducts() {
  if (!productsGrid) return;

  const filtered = PRODUCTS.filter(p => {
    const matchesCat = activeCategory === 'todos' || p.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      p.name.toLowerCase().includes(query) || 
      p.brand.toLowerCase().includes(query) || 
      p.shortDesc.toLowerCase().includes(query) ||
      (p.tagline && p.tagline.toLowerCase().includes(query)) ||
      (p.flavor && p.flavor.toLowerCase().includes(query));
    return matchesCat && matchesSearch;
  });

  if (productsCountEl) {
    productsCountEl.innerText = `${filtered.length} producto${filtered.length === 1 ? '' : 's'} disponible${filtered.length === 1 ? '' : 's'}`;
  }

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div class="col-span-full text-center py-12 px-4 bg-slate-900/40 rounded-3xl border border-slate-800">
        <div class="w-14 h-14 mx-auto mb-3 rounded-full bg-slate-800 flex items-center justify-center text-2xl text-cyan-400">
          🔍
        </div>
        <h3 class="text-lg font-bold text-white mb-1">No encontramos productos</h3>
        <p class="text-slate-400 max-w-sm mx-auto text-xs sm:text-sm mb-4">
          No hay resultados para "${searchQuery}". Intenta buscar con otro término como "Whey", "Creatina" o "Dymatize".
        </p>
        <button id="reset-filter-btn" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-cyan-500/30 font-semibold text-xs transition">
          Ver todo el catálogo
        </button>
      </div>
    `;
    const resetBtn = document.getElementById('reset-filter-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        searchQuery = '';
        if (searchInput) searchInput.value = '';
        activeCategory = 'todos';
        renderCategoryTabs();
        renderProducts();
      });
    }
    return;
  }

  productsGrid.innerHTML = filtered.map(product => {
    // Estilos de acento según la marca (Gold Standard: Amber | Nitro-Tech: Red | Dymatize: Cyan)
    let cardAccentBorder = 'border-slate-800 hover:border-cyan-500/50';
    let badgeStyle = 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30';
    let glowGlow = 'hover:shadow-[0_10px_30px_rgba(0,240,255,0.15)]';
    let brandColorText = 'text-cyan-400';

    if (product.accentColor === 'amber') {
      cardAccentBorder = 'border-slate-800/90 hover:border-amber-500/50';
      badgeStyle = 'bg-amber-500/15 text-amber-300 border-amber-500/30';
      glowGlow = 'hover:shadow-[0_10px_30px_rgba(245,158,11,0.15)]';
      brandColorText = 'text-amber-400';
    } else if (product.accentColor === 'red') {
      cardAccentBorder = 'border-slate-800/90 hover:border-red-500/50';
      badgeStyle = 'bg-red-500/15 text-red-300 border-red-500/30';
      glowGlow = 'hover:shadow-[0_10px_30px_rgba(239,68,68,0.15)]';
      brandColorText = 'text-red-400';
    }

    const whatsappMessage = `¡Hola IPROFIT! 👋 Me interesa comprar: *${product.name}* (${formatPrice(product.price)} COL$). ¿Tienen disponibilidad inmediata para envío?`;

    // Micro badges de características como en catalogo_2.jpeg
    const badgesHtml = product.featureBadges ? product.featureBadges.slice(0, 3).map(b => `
      <span class="feature-badge-chip">
        <span>${b.icon}</span>
        <span class="text-[10px] sm:text-[11px]">${b.tag || b.label}</span>
      </span>
    `).join('') : '';

    return `
      <div class="product-card glass-panel rounded-2xl overflow-hidden flex flex-col group border ${cardAccentBorder} ${glowGlow} transition-all duration-300">
        
        <!-- Contenedor de Imagen de Producto -->
        <div class="relative bg-gradient-to-b from-slate-900/90 via-slate-950/80 to-black p-5 flex items-center justify-center min-h-[240px] sm:min-h-[270px] overflow-hidden">
          
          <!-- Badges superiores -->
          <div class="absolute top-3 left-3 flex flex-col gap-1 z-10">
            ${product.badge ? `
              <span class="px-2.5 py-1 text-[10px] sm:text-[11px] font-bold rounded-lg uppercase tracking-wider border backdrop-blur-md ${badgeStyle}">
                ${product.badge}
              </span>
            ` : ''}
          </div>

          <div class="absolute top-3 right-3 z-10">
            <span class="px-2 py-0.5 text-[10px] sm:text-[11px] font-semibold rounded-md bg-slate-900/90 text-slate-300 border border-slate-700/80">
              ${product.servings}
            </span>
          </div>

          <!-- Imagen con Zoom Suave -->
          <div class="product-img-wrapper w-full h-44 sm:h-48 flex items-center justify-center">
            <img 
              src="${product.image}" 
              alt="${product.name}" 
              class="max-h-44 sm:max-h-48 max-w-full object-contain filter drop-shadow-[0_12px_18px_rgba(0,0,0,0.7)]"
              loading="lazy"
              onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=600&q=80';"
            />
          </div>
        </div>

        <!-- Contenido e Información -->
        <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-slate-950/70">
          <div>
            <!-- Marca y Tagline -->
            <div class="flex items-center justify-between text-xs mb-1">
              <span class="${brandColorText} font-black uppercase tracking-wider text-[11px]">${product.brand}</span>
              <span class="text-slate-400 text-[11px] font-medium">${product.weight}</span>
            </div>

            <!-- Título del Producto -->
            <h3 class="font-bold text-white text-sm sm:text-base leading-snug group-hover:text-cyan-300 transition-colors line-clamp-2 mb-1.5">
              ${product.name}
            </h3>

            <!-- Tagline / Resumen -->
            <p class="text-[11px] sm:text-xs text-slate-400 line-clamp-2 mb-3 leading-relaxed">
              ${product.shortDesc}
            </p>

            <!-- Micro-chips de características (Inspirados en catalogo_2) -->
            <div class="flex flex-wrap gap-1.5 mb-4">
              ${badgesHtml}
            </div>
          </div>

          <!-- Precios y Acciones -->
          <div class="pt-3 border-t border-slate-800/80">
            <!-- Bloque de Precio Oficial -->
            <div class="flex items-baseline justify-between mb-3">
              <div>
                <span class="text-[11px] text-slate-400 uppercase font-bold tracking-wider block">PRECIO:</span>
                <span class="text-xl sm:text-2xl font-black text-white font-display tracking-tight">
                  ${formatPrice(product.price)}
                </span>
                <span class="text-[11px] text-cyan-400 font-bold ml-1">(COL$)</span>
                ${product.originalPrice ? `
                  <span class="text-xs text-slate-500 line-through ml-2">
                    ${formatPrice(product.originalPrice)}
                  </span>
                ` : ''}
              </div>
              
              <span class="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Stock
              </span>
            </div>

            <!-- Botones de Acción (Optimizados para toques en móvil) -->
            <div class="grid grid-cols-2 gap-2">
              <button 
                onclick="window.openProductDetail('${product.id}')"
                class="w-full min-h-[42px] py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 active:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 font-semibold text-xs transition flex items-center justify-center gap-1.5"
                title="Ver especificaciones completas"
              >
                <span>🔍</span> Ficha
              </button>

              <a 
                href="${createWhatsAppLink(whatsappMessage)}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="w-full min-h-[42px] py-2.5 px-3 rounded-xl bg-gradient-brand active:brightness-90 text-slate-950 font-bold text-xs transition flex items-center justify-center gap-1.5 hover:brightness-110 shadow-sm shadow-cyan-500/20"
                title="Preguntar directamente a un asesor"
              >
                <span>💬</span> Comprar
              </a>
            </div>

            <!-- Botón secundario para armar pedido combinado -->
            <button 
              onclick="window.addToOrder('${product.id}')"
              class="w-full mt-2 min-h-[36px] py-1.5 rounded-lg text-slate-400 hover:text-cyan-400 active:text-cyan-300 hover:bg-slate-900/80 text-[11px] font-medium transition flex items-center justify-center gap-1 border border-transparent hover:border-slate-800"
            >
              <span>➕</span> Agregar a cotización WhatsApp
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Configurar escuchadores de eventos
function setupEventListeners() {
  // Pestañas de categorías
  if (categoryTabsContainer) {
    categoryTabsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.category-btn');
      if (!btn) return;
      activeCategory = btn.dataset.category;
      renderCategoryTabs();
      renderProducts();
    });
  }

  // Buscador en tiempo real
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProducts();
    });
  }

  // Cerrar modal al hacer clic en el backdrop
  if (productModal) {
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) {
        closeModal();
      }
    });
  }

  // Cerrar con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeCart();
    }
  });

  // Botón flotante de carrito (desktop)
  if (floatingCartBtn) {
    floatingCartBtn.addEventListener('click', openCart);
  }

  // Botón del carrito en la barra móvil
  const mobileCartBtn = document.getElementById('mobile-nav-cart-btn');
  if (mobileCartBtn) {
    mobileCartBtn.addEventListener('click', openCart);
  }
}

// Abrir detalle de producto en modal (Mobile Sheet en celular)
window.openProductDetail = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product || !productModal || !modalContent) return;

  const whatsappMessage = `¡Hola IPROFIT! 👋 Quiero información y comprar: *${product.name}* (${formatPrice(product.price)} COL$). ¿Tienen disponibilidad inmediata?`;

  modalContent.innerHTML = `
    <div class="relative flex flex-col md:flex-row gap-5 p-5 sm:p-7">
      
      <!-- Botón de Cerrar -->
      <button 
        onclick="window.closeModal()" 
        class="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-slate-800/90 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 transition"
      >
        ✕
      </button>

      <!-- Columna Imagen -->
      <div class="w-full md:w-5/12 flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-black p-5 rounded-2xl border border-slate-800 relative">
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          class="max-h-56 sm:max-h-64 object-contain filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.8)]"
          onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=600&q=80';"
        />
        <div class="mt-3 text-center">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-cyan-400 border border-cyan-500/30 text-[11px] font-bold">
            ✓ 100% Original & Sellado de Fábrica
          </span>
        </div>
      </div>

      <!-- Columna Información -->
      <div class="w-full md:w-7/12 flex flex-col justify-between">
        <div>
          <!-- Marca y Tagline -->
          <div class="flex items-center gap-2 mb-1">
            <span class="text-xs font-black text-cyan-400 uppercase tracking-wider">${product.brand}</span>
            <span class="text-slate-500">&bull;</span>
            <span class="text-xs text-slate-400 font-semibold">${product.weight}</span>
          </div>

          <h2 class="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">${product.name}</h2>
          
          <!-- Bloque de Precio -->
          <div class="flex items-baseline gap-2 mb-3 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
            <span class="text-xs text-slate-400 uppercase font-bold">PRECIO:</span>
            <span class="text-2xl font-black text-white font-display">${formatPrice(product.price)}</span>
            <span class="text-xs text-cyan-400 font-bold">(COL$)</span>
            ${product.originalPrice ? `
              <span class="text-xs text-slate-500 line-through ml-2">${formatPrice(product.originalPrice)}</span>
            ` : ''}
          </div>

          <!-- Descripción -->
          <p class="text-slate-300 text-xs sm:text-sm mb-4 leading-relaxed">
            ${product.description}
          </p>

          <!-- Badges de Especificaciones (Inspirados en catalogo_2) -->
          ${product.featureBadges ? `
            <div class="mb-4">
              <h4 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Ficha Nutricional Destacada:</h4>
              <div class="grid grid-cols-2 gap-2">
                ${product.featureBadges.map(b => `
                  <div class="flex items-center gap-2 p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                    <span class="text-base">${b.icon}</span>
                    <span class="text-[11px] font-semibold text-slate-200 leading-tight">${b.label}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Modo de Uso -->
          <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 mb-5">
            <span class="font-bold text-cyan-400">💡 Modo de empleo:</span> ${product.howToUse}
          </div>
        </div>

        <!-- Acciones del Modal -->
        <div class="space-y-2 pt-2 border-t border-slate-800">
          <a 
            href="${createWhatsAppLink(whatsappMessage)}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="w-full min-h-[44px] py-3 px-4 rounded-xl bg-gradient-brand text-slate-950 font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-cyan-500/25"
          >
            <span>💬</span> Pedir por WhatsApp Ahora
          </a>
          <button 
            onclick="window.addToOrder('${product.id}'); window.closeModal();"
            class="w-full min-h-[40px] py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition border border-slate-700"
          >
            ➕ Añadir a mi lista de cotización
          </button>
        </div>
      </div>

    </div>
  `;

  productModal.classList.remove('hidden');
  productModal.classList.add('flex');
};

// Cerrar Modal
window.closeModal = function() {
  if (!productModal) return;
  productModal.classList.add('hidden');
  productModal.classList.remove('flex');
};

// Carrito / Cotizador WhatsApp
window.addToOrder = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartUI();
  showToast(`✅ Agregado: ${product.name}`);
  openCart();
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

  // Badge en desktop
  if (cartBadgeEl) {
    cartBadgeEl.innerText = totalCount;
    cartBadgeEl.classList.toggle('hidden', totalCount === 0);
  }

  // Badge en la barra de celular
  if (mobileCartBadgeEl) {
    mobileCartBadgeEl.innerText = totalCount;
    mobileCartBadgeEl.classList.toggle('hidden', totalCount === 0);
  }

  if (cartTotalEl) {
    cartTotalEl.innerText = `${formatPrice(totalPrice)} COL$`;
  }

  if (cartItemsContainer) {
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="py-12 text-center text-slate-400">
          <div class="text-3xl mb-2">🛒</div>
          <p class="text-sm font-semibold text-white">Tu lista de pedido está vacía</p>
          <p class="text-xs text-slate-500 mt-1 max-w-xs mx-auto">Agrega suplementos del catálogo para cotizarlos juntos por WhatsApp con envío preferencial.</p>
        </div>
      `;
    } else {
      cartItemsContainer.innerHTML = cart.map(item => `
        <div class="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
          <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-contain rounded-lg bg-black p-1" />
          <div class="flex-1 min-w-0">
            <h4 class="text-xs font-semibold text-white truncate">${item.name}</h4>
            <span class="text-xs text-cyan-400 font-bold">${formatPrice(item.price)} COL$</span>
            <div class="flex items-center gap-2 mt-1">
              <button onclick="window.updateQty('${item.id}', -1)" class="w-6 h-6 rounded bg-slate-800 active:bg-slate-700 text-xs text-white flex items-center justify-center font-bold">-</button>
              <span class="text-xs text-slate-200 font-bold">${item.qty}</span>
              <button onclick="window.updateQty('${item.id}', 1)" class="w-6 h-6 rounded bg-slate-800 active:bg-slate-700 text-xs text-white flex items-center justify-center font-bold">+</button>
            </div>
          </div>
          <button onclick="window.removeFromOrder('${item.id}')" class="text-slate-500 hover:text-red-400 p-2 text-sm transition" title="Quitar">
            🗑️
          </button>
        </div>
      `).join('');
    }
  }

  // Actualizar enlace de checkout WhatsApp
  const checkoutBtn = document.getElementById('cart-checkout-btn');
  if (checkoutBtn) {
    if (cart.length === 0) {
      checkoutBtn.removeAttribute('href');
      checkoutBtn.classList.add('opacity-50', 'pointer-events-none');
    } else {
      checkoutBtn.classList.remove('opacity-50', 'pointer-events-none');
      const lines = cart.map(i => `• ${i.qty}x ${i.name} - ${formatPrice(i.price * i.qty)} COL$`).join('\n');
      const msg = `¡Hola IPROFIT! 👋 Deseo realizar el siguiente pedido desde el catálogo web:\n\n${lines}\n\n*Total Estimado: ${formatPrice(totalPrice)} COL$*\n\n¿Me confirman disponibilidad inmediata y el costo de envío a mi ciudad? Gracias.`;
      checkoutBtn.href = createWhatsAppLink(msg);
    }
  }
}

// Abrir / Cerrar Drawer del Carrito
window.openCart = function() {
  if (!cartDrawer) return;
  cartDrawer.classList.remove('translate-x-full');
};

window.closeCart = function() {
  if (!cartDrawer) return;
  cartDrawer.classList.add('translate-x-full');
};

// Notificación Toast
function showToast(message) {
  const existing = document.getElementById('toast-notification');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'toast-notification';
  toast.className = 'fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-50 bg-slate-900 border border-cyan-500/60 text-white px-4 py-3 rounded-xl shadow-2xl shadow-cyan-500/20 text-xs font-semibold flex items-center gap-2 toast-slide-in';
  toast.innerHTML = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    if (toast.parentNode) toast.remove();
  }, 2800);
}

// Iniciar al cargar el DOM
document.addEventListener('DOMContentLoaded', init);
