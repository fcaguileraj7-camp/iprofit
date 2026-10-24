# ⚡ IPROFIT - Catálogo Móvil Oficial (App Feed & Stickers Troquelados)

> **DEFINE TU PROCESO** — Catálogo web móvil optimizado para celulares de suplementación deportiva oficial para **IPROFIT** (San Gil, Santander). Desarrollado con una estética deportiva de **stickers troquelados sin fondo** inspirada en el material de marca de los atletas y clientes de la tienda, visualizador de fotos HD (Lightbox), cotizador flotante para el pulgar y cierre de pedidos directo por WhatsApp (`+57 350 451 4024`).

---

## 🚀 Lo que hace único a este catálogo móvil

1. **Diseño Mobile-First 100% Celulares:**
   - Formato de feed vertical scrolleable fluido diseñado anatómicamente para navegación con el pulgar.
   - Shell adaptativo (`max-w-[480px]` centrado con aura neón en PC y 100% ancho nativo en smartphones).
   - Barra superior fija con acceso a Instagram (@iprofit.co), buscador plegable y pestañas touch por categoría con conteo dinámico.
   - Dock de compra flotante inferior para consultar cotización o solicitar asesoría en 1 tap.

2. **Ecosistema Visual de Stickers (Inspirado en la carpeta `clientes`):**
   - **Siluetas sin fondo recortadas profesionalmente:** Cada tarro y bolsa de suplemento está troquelada y estilizada como un sticker físico con borde blanco nítido, sombra 3D proyectada y halo de luz ambiental temática.
   - **Cintas diagonales (`skew`):** Frases motivacionales de la marca (*"PEQUEÑOS HÁBITOS, GRANDES RESULTADOS"*, *"DISCIPLINA QUE DA RESULTADOS"*, *"THE G.O.A.T"*, etc.).
   - **Cero traslapes:** Arquitectura de tarjeta por capas separadas donde ninguna foto oculta textos, sellos ni botones.

3. **Catálogo Completo (15 Suplementos Oficiales):**
   - 🥤 **Proteínas:** Gold Standard Whey 5LB, ISO100 5LB & 1.3LB, Nitro-Tech 2LB.
   - ⚡ **Creatinas:** ON Micronizada 600g & 300g, Dymatize 300g, MuscleTech 600g, Nutrex 300g & 150g.
   - 💥 **Pre-Entrenos:** Insane Labz Psychotic, Cellucor C4 Original Explosive.
   - 🔥 **Quemadores:** Nutrex Lipo-6 Black Ultra Concentrate, MuscleTech Hydroxycut Hardcore Elite.
   - 🏆 **Combos:** Pack Pro Gold Standard Whey 5LB + Creatina ON 600g.

4. **Cierre de Ventas Inmediato por WhatsApp:**
   - **Botón directo "Pedir":** Envía mensaje preconfigurado con el nombre del producto, precio y consulta de disponibilidad en San Gil.
   - **Cotizador / Carrito Acumulativo:** Agrega múltiples productos y genera el pedido completo en un solo mensaje de WhatsApp listo para despachar.
   - **Lightbox HD:** Toca cualquier producto para examinarlo en pantalla completa.

---

## 🌐 Cómo Desplegarlo a Costo $0 (Paso a Paso)

Tienes 2 opciones gratuitas de por vida para tener un link oficial:

### Opción 1: GitHub Pages (Recomendada, 2 minutos)

1. Abre una terminal en esta carpeta (`c:\dev\Proyectos\iprofit`) y prepara el repositorio:
   ```bash
   git init
   git add .
   git commit -m "feat: Catálogo dinámico IPROFIT completo y actualizado"
   git branch -M main
   ```
2. Crea un repositorio público en [GitHub](https://github.com) llamado por ejemplo `catalogo-iprofit` o `iprofit`.
3. Sube el código:
   ```bash
   git remote add origin https://github.com/TU_USUARIO/iprofit.git
   git push -u origin main
   ```
4. En GitHub: entra a **Settings** > **Pages** > En **Branch** selecciona `main` y carpeta `/(root)` > Clic en **Save**.
5. ¡Listo! En segundos tu catálogo estará disponible en:
   ```text
   https://TU_USUARIO.github.io/iprofit/
   ```

---

### Opción 2: Vercel (Ultra rápido con enlace .vercel.app)

1. Ve a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
2. Haz clic en **"Add New Project"** e importa tu repositorio `iprofit`.
3. Deja la configuración por defecto y haz clic en **Deploy**.
4. Te entregará un link seguro instantáneo tipo:
   ```text
   https://iprofit.vercel.app
   ```

---

## 🛠️ Cómo Probarlo en Tu Computador

Para abrir el catálogo localmente:
1. En tu terminal ejecuta:
   ```bash
   python -m http.server 8080
   ```
2. Abre en tu navegador:
   ```text
   http://localhost:8080
   ```
*(O también puedes abrir `index.html` con la extensión Live Server de VS Code).*

---

## ⚙️ Personalización del Negocio

Todos los datos están centralizados en [`products.js`](products.js):

* **WhatsApp Oficial:** `CONFIG.whatsappNumber = "573504514024"`
* **Instagram:** `CONFIG.socials.instagram = "https://instagram.com/iprofit.co"`
* **Ubicación:** `CONFIG.location = "San Gil, Santander"`
* **Lista de Productos y Precios:** Puedes modificar precios, nombres, descripciones y presentaciones en el array `PRODUCTS`.
