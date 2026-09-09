// ==========================================================================
// IPROFIT - Aplicación Interactiva del Catálogo & Pedidos por WhatsApp
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
const floatingCartBtn = document.getElementById('floating-cart-btn');

// Formato de moneda
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

// Renderizar pestañas de categorías
function renderCategoryTabs() {
  if (!categoryTabsContainer) return;
  categoryTabsContainer.innerHTML = CATEGORIES.map(cat => {
    const isActive = cat.id === activeCategory;
    return `
      <button 
        data-category="${cat.id}"
        class="category-btn px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
          isActive 
            ? 'bg-gradient-brand text-black shadow-lg shadow-cyan-500/25 font-bold scale-105' 
            : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
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
      (p.flavor && p.flavor.toLowerCase().includes(query));
    return matchesCat && matchesSearch;
  });

  if (productsCountEl) {
    productsCountEl.innerText = `${filtered.length} producto${filtered.length === 1 ? '' : 's'} disponible${filtered.length === 1 ? '' : 's'}`;
  }

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div class="col-span-full text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800 p-8">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-800 flex items-center justify-center text-2xl text-cyan-400">
          🔍
        </div>
        <h3 class="text-xl font-bold text-white mb-2">No encontramos productos</h3>
        <p class="text-slate-400 max-w-md mx-auto text-sm mb-6">
          No hay resultados para "${searchQuery}". Intenta buscar con otro término como "Whey", "Creatina" o selecciona otra categoría.
        </p>
        <button id="reset-filter-btn" class="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-cyan-500/30 font-semibold text-sm transition">
          Ver todos los productos
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
    // Badge color scheme
    let badgeClass = 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
    if (product.badgeType === 'hot') badgeClass = 'bg-red-500/15 text-red-400 border-red-500/30';
    if (product.badgeType === 'sale') badgeClass = 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
    if (product.badgeType === 'featured') badgeClass = 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40';

    const whatsappMessage = `¡Hola IPROFIT! 👋 Me interesa el producto: *${product.name}* (${formatPrice(product.price)}). ¿Tienen disponibilidad y cómo sería el envío?`;

    return `
      <div class="product-card glass-panel rounded-2xl overflow-hidden flex flex-col group border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300">
        <!-- Contenedor de Imagen -->
        <div class="relative bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 flex items-center justify-center min-h-[260px] overflow-hidden">
          <!-- Glow de fondo -->
          <div class="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

          <!-- Badges superiores -->
          <div class="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            ${product.badge ? `
              <span class="px-2.5 py-1 text-[11px] font-bold rounded-md uppercase tracking-wider border backdrop-blur-md ${badgeClass}">
                ${product.badge}
              </span>
            ` : ''}
          </div>

          <div class="absolute top-3 right-3 z-10">
            <span class="px-2 py-0.5 text-[11px] font-semibold rounded bg-slate-900/90 text-slate-300 border border-slate-700/60">
              ${product.servings}
            </span>
          </div>

          <!-- Imagen con efecto zoom suave -->
          <div class="product-img-wrapper w-full h-48 flex items-center justify-center">
            <img 
              src="${product.image}" 
              alt="${product.name}" 
              class="max-h-48 max-w-full object-contain filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.6)]"
              loading="lazy"
              onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=600&q=80';"
            />
          </div>
        </div>

        <!-- Info del Producto -->
        <div class="p-5 flex-1 flex flex-col justify-between bg-slate-950/60">
          <div>
            <!-- Marca y Tag -->
            <div class="flex items-center justify-between text-xs text-slate-400 mb-1.5">
              <span class="text-cyan-400 font-bold uppercase tracking-wider text-[11px]">${product.brand}</span>
              <span>${product.weight}</span>
            </div>

            <!-- Título -->
            <h3 class="font-bold text-white text-base leading-snug group-hover:text-cyan-300 transition-colors line-clamp-2 mb-2">
              ${product.name}
            </h3>

            <!-- Breve descripción -->
            <p class="text-xs text-slate-400 line-clamp-2 mb-3">
              ${product.shortDesc}
            </p>

            <!-- Specs en píldoras -->
            <div class="flex flex-wrap gap-1.5 mb-4">
              <span class="px-2 py-0.5 rounded-md bg-slate-900 text-cyan-400 border border-cyan-900/40 text-[11px] font-medium">
                ⚡ ${product.proteinPerServing}
              </span>
              <span class="px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800 text-[11px]">
                🎯 ${product.flavor}
              </span>
            </div>
          </div>

          <!-- Precios y Acciones -->
          <div class="pt-3 border-t border-slate-800/80">
            <div class="flex items-baseline justify-between mb-3">
              <div>
                <span class="text-xl font-extrabold text-white font-display tracking-tight">
                  ${formatPrice(product.price)}
                </span>
                ${product.originalPrice ? `
                  <span class="text-xs text-slate-500 line-through ml-1.5">
                    ${formatPrice(product.originalPrice)}
                  </span>
                ` : ''}
              </div>
              <span class="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Disponible
              </span>
            </div>

            <!-- Botones de Acción -->
            <div class="grid grid-cols-2 gap-2">
              <button 
                onclick="window.openProductDetail('${product.id}')"
                class="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-medium text-xs transition flex items-center justify-center gap-1.5"
                title="Ver especificaciones y detalles"
              >
                <span>🔍</span> Ver Detalle
              </button>

              <a 
                href="${createWhatsAppLink(whatsappMessage)}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="w-full py-2.5 px-3 rounded-xl bg-gradient-brand text-slate-950 font-bold text-xs transition flex items-center justify-center gap-1.5 hover:brightness-110 shadow-sm shadow-cyan-500/20"
                title="Preguntar directamente a un asesor"
              >
                <span>💬</span> Comprar
              </a>
            </div>

            <!-- Botón secundario para armar pedido combinado -->
            <button 
              onclick="window.addToOrder('${product.id}')"
              class="w-full mt-2 py-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-900/60 text-[11px] font-medium transition flex items-center justify-center gap-1 border border-transparent hover:border-slate-800"
            >
              <span>➕</span> Agregar a lista de pedido
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

  // Cerrar con la tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeCart();
    }
  });

  // Botón flotante de carrito
  if (floatingCartBtn) {
    floatingCartBtn.addEventListener('click', openCart);
  }
}

// Abrir detalle de producto en modal
window.openProductDetail = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product || !productModal || !modalContent) return;

  const whatsappMessage = `¡Hola IPROFIT! 👋 Quiero información y comprar: *${product.name}* (${formatPrice(product.price)}). ¿Tienen disponibilidad inmediata?`;

  modalContent.innerHTML = `
    <div class="relative flex flex-col md:flex-row gap-6 p-6 md:p-8">
      <!-- Botón de Cerrar -->
      <button 
        onclick="window.closeModal()" 
        class="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-800/90 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 transition"
      >
        ✕
      </button>

      <!-- Columna Imagen -->
      <div class="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 p-6 rounded-2xl border border-slate-800 relative">
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          class="max-h-72 object-contain filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.8)]"
          onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=600&q=80';"
        />
        <div class="absolute bottom-3 left-3 bg-slate-900/80 px-2.5 py-1 rounded text-xs text-cyan-400 border border-cyan-900/40">
          ✓ 100% Original & Sellado
        </div>
      </div>

      <!-- Columna Información -->
      <div class="w-full md:w-1/2 flex flex-col justify-between">
        <div>
          <span class="text-xs font-bold text-cyan-400 uppercase tracking-wider">${product.brand}</span>
          <h2 class="text-2xl font-bold text-white mb-2 leading-tight">${product.name}</h2>
          
          <div class="flex items-baseline gap-2 mb-4">
            <span class="text-2xl font-extrabold text-white font-display">${formatPrice(product.price)}</span>
            ${product.originalPrice ? `
              <span class="text-sm text-slate-500 line-through">${formatPrice(product.originalPrice)}</span>
            ` : ''}
          </div>

          <p class="text-slate-300 text-sm mb-4 leading-relaxed">
            ${product.description}
          </p>

          <!-- Beneficios Clave -->
          <div class="mb-5">
            <h4 class="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Beneficios Destacados:</h4>
            <ul class="space-y-1.5 text-xs text-slate-400">
              ${product.benefits.map(b => `
                <li class="flex items-start gap-2">
                  <span class="text-cyan-400 font-bold">✓</span>
                  <span>${b}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Modo de Uso -->
          <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 mb-6">
            <span class="font-bold text-cyan-400">💡 Modo de empleo recomendado:</span> ${product.howToUse}
          </div>
        </div>

        <!-- Acciones del Modal -->
        <div class="space-y-2 pt-2 border-t border-slate-800">
          <a 
            href="${createWhatsAppLink(whatsappMessage)}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="w-full py-3 px-4 rounded-xl bg-gradient-brand text-slate-950 font-bold text-sm transition flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-cyan-500/25"
          >
            <span>💬</span> Pedir por WhatsApp Ahora
          </a>
          <button 
            onclick="window.addToOrder('${product.id}'); window.closeModal();"
            class="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition border border-slate-700"
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

// Carrito / Lista de pedido
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

  if (cartBadgeEl) {
    cartBadgeEl.innerText = totalCount;
    cartBadgeEl.classList.toggle('hidden', totalCount === 0);
  }

  if (cartTotalEl) {
    cartTotalEl.innerText = formatPrice(totalPrice);
  }

  if (cartItemsContainer) {
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="py-12 text-center text-slate-400">
          <div class="text-3xl mb-2">🛒</div>
          <p class="text-sm font-medium">Tu lista de pedido está vacía</p>
          <p class="text-xs text-slate-500 mt-1">Agrega productos del catálogo para cotizarlos juntos por WhatsApp.</p>
        </div>
      `;
    } else {
      cartItemsContainer.innerHTML = cart.map(item => `
        <div class="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
          <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-contain rounded-lg bg-slate-950 p-1" />
          <div class="flex-1 min-w-0">
            <h4 class="text-xs font-semibold text-white truncate">${item.name}</h4>
            <span class="text-xs text-cyan-400 font-bold">${formatPrice(item.price)}</span>
            <div class="flex items-center gap-2 mt-1">
              <button onclick="window.updateQty('${item.id}', -1)" class="w-5 h-5 rounded bg-slate-800 hover:bg-slate-700 text-xs text-white flex items-center justify-center">-</button>
              <span class="text-xs text-slate-200 font-bold">${item.qty}</span>
              <button onclick="window.updateQty('${item.id}', 1)" class="w-5 h-5 rounded bg-slate-800 hover:bg-slate-700 text-xs text-white flex items-center justify-center">+</button>
            </div>
          </div>
          <button onclick="window.removeFromOrder('${item.id}')" class="text-slate-500 hover:text-red-400 text-sm p-1 transition" title="Quitar">
            🗑️
          </button>
        </div>
      `).join('');
    }
  }

  // Actualizar enlace de checkout WhatsApp del carrito
  const checkoutBtn = document.getElementById('cart-checkout-btn');
  if (checkoutBtn) {
    if (cart.length === 0) {
      checkoutBtn.removeAttribute('href');
      checkoutBtn.classList.add('opacity-50', 'pointer-events-none');
    } else {
      checkoutBtn.classList.remove('opacity-50', 'pointer-events-none');
      const lines = cart.map(i => `• ${i.qty}x ${i.name} - ${formatPrice(i.price * i.qty)}`).join('\n');
      const msg = `¡Hola IPROFIT! 👋 Deseo realizar el siguiente pedido desde el catálogo web:\n\n${lines}\n\n*Total Estimado: ${formatPrice(totalPrice)}*\n\n¿Me confirman disponibilidad y los datos para el envío? Gracias.`;
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
  toast.className = 'fixed bottom-6 right-6 z-50 bg-slate-900 border border-cyan-500/50 text-white px-4 py-3 rounded-xl shadow-2xl shadow-cyan-500/20 text-xs font-semibold flex items-center gap-2 toast-slide-in';
  toast.innerHTML = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    if (toast.parentNode) toast.remove();
  }, 3000);
}

// Iniciar al cargar el DOM
document.addEventListener('DOMContentLoaded', init);
