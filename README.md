# ⚡ IPROFIT - Catálogo Web & Landing Page Oficial

> **DEFINE TU PROCESO** — Sitio web oficial y catálogo de suplementación deportiva de alto rendimiento para **IPROFIT**, diseñado para máxima conversión y costo \$0 en **GitHub Pages**.

---

## 🚀 Características Principales

- **Diseño de Marca Premium & Deportivo:** Inspirado en la identidad visual de IPROFIT (negro obsidiana, acentos en cyan neón `#00f0ff` y acabados en plata metálico con efectos glassmorphism).
- **100% Gratuito de Hospedar:** Diseñado con arquitectura estática ultra liviana, lista para funcionar en **GitHub Pages** (o Vercel / Netlify) a **$0 de costo de por vida**.
- **Cierre de Ventas por WhatsApp:**
  - Botón individual *"Comprar por WhatsApp"* en cada producto con mensaje automático prellenado.
  - **Cotizador / Carrito Multiproducto:** Los clientes pueden armar un pedido con múltiples productos y enviarlo todo consolidado en un solo mensaje estructurado a WhatsApp.
- **Filtros y Búsqueda en Tiempo Real:** Filtra por categorías (Proteínas, Creatinas, Pre-Entrenos, Combos) o busca por nombre, marca o ingrediente al instante.
- **Ventana Modal de Detalle:** Vista ampliada con modo de uso, beneficios clave y garantía de autenticidad.
- **100% Adaptable a Móviles (Responsive):** Experiencia ultra fluida pensada para clientes que llegan desde Instagram, TikTok o estados de WhatsApp.

---

## 🛠️ Cómo Probarlo en Tu Computador

Para abrir el catálogo en tu navegador localmente:

1. Si tienes Python instalado, ejecuta en esta carpeta:
   ```bash
   python -m http.server 8080
   ```
2. Abre tu navegador en:
   ```text
   http://localhost:8080
   ```
*(O simplemente haz doble clic en `index.html`).*

---

## 🌐 Cómo Publicarlo GRATIS en GitHub Pages

Sigue estos sencillos pasos para tener tu catálogo en línea con link oficial para compartir:

### Paso 1: Inicializar el repositorio Git y subir tu código
Abre una terminal en esta carpeta (`c:\dev\Proyectos\iprofit`) y ejecuta:

```bash
git init
git add .
git commit -m "feat: Catálogo oficial IPROFIT listo para producción"
git branch -M main
```

### Paso 2: Conectar con tu cuenta de GitHub
1. Ve a [GitHub](https://github.com) y crea un nuevo repositorio público llamado por ejemplo `iprofit`.
2. En tu terminal ejecuta los comandos que te da GitHub (reemplazando `TU_USUARIO`):
   ```bash
   git remote add origin https://github.com/TU_USUARIO/iprofit.git
   git push -u origin main
   ```

### Paso 3: Activar GitHub Pages en 2 clics
1. En tu repositorio de GitHub, haz clic en **Settings** (pestaña superior derecha).
2. En el menú lateral izquierdo, haz clic en **Pages**.
3. En la sección **Build and deployment** > **Branch**, selecciona `main` y la carpeta `/(root)`.
4. Haz clic en **Save**.
5. ¡Listo! En unos 30-60 segundos tendrás tu enlace público oficial gratuito:
   ```text
   https://TU_USUARIO.github.io/iprofit/
   ```

---

## ⚙️ Cómo Personalizar tu Negocio

Todo está centralizado en el archivo [`products.js`](products.js):

### 1. Cambiar tu número de WhatsApp
Abre `products.js` y edita la variable `whatsappNumber`:
```javascript
export const CONFIG = {
  brandName: "IPROFIT",
  tagline: "DEFINE TU PROCESO",
  // Escribe tu número con código de país (sin '+')
  // Ejemplo para Colombia: 573001234567
  whatsappNumber: "573XXXXXXXXX", 
  currency: "$",
  currencyCode: "COP",
  socials: {
    instagram: "https://instagram.com/tu_cuenta",
    whatsapp: "https://wa.me/573XXXXXXXXX",
    tiktok: "https://tiktok.com/@tu_cuenta"
  }
};
```

### 2. Agregar o Editar Productos
En `products.js`, cada producto es un bloque fácil de entender. Puedes cambiar precio, foto, descripción o agregar más:
```javascript
{
  id: "mi-nuevo-producto",
  name: "Nombre del Suplemento",
  brand: "Marca",
  category: "proteinas", // o "creatinas", "preentreno", "combos"
  price: 250000,
  originalPrice: 280000, // opcional para mostrar tachado
  badge: "NUEVO",
  image: "images/mi-foto.jpeg",
  weight: "5 LBS",
  servings: "70 Servicios",
  proteinPerServing: "25g",
  flavor: "Chocolate",
  shortDesc: "Resumen corto para la tarjeta.",
  description: "Descripción completa detallada.",
  benefits: [
    "Beneficio 1",
    "Beneficio 2"
  ],
  howToUse: "Instrucciones de consumo.",
  inStock: true
}
```

---

## 📁 Estructura del Proyecto

```text
iprofit/
│
├── index.html           # Página principal (Landing Page + Catálogo)
├── styles.css           # Estilos de marca IPROFIT (Cyan neón, Obsidian, Glassmorphism)
├── products.js          # Configuración de WhatsApp, redes y catálogo de productos
├── app.js               # Lógica interactiva (filtros, buscador, modal y carrito)
├── README.md            # Documentación y guía de despliegue
└── images/
    ├── logo_iprofit.jpeg # Logotipo oficial IPROFIT
    ├── producto-1.jpeg  # Foto producto 1 (Optimum Nutrition Whey 5LB)
    ├── producto-2.jpeg  # Foto producto 2 (MuscleTech Nitro-Tech)
    └── catalogo.jpeg    # Referencia del catálogo
```
