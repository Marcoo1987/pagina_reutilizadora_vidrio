const IMG_DIR = "./img/fotos productos";
const CART_STORAGE_KEY = "paniri_cart_v1";

const PRODUCTS = [
  {
    id: "vasos-corona-330",
    name: "Vaso Corona 330 ml",
    price: 5990,
    tag: "Vidrio reutilizado",
    detail: "Formato 330 ml",
    description: "Vaso pulido y seguro hecho a partir de botella Corona reutilizada.",
    image: `${IMG_DIR}/vasos corona 330 ml.png`,
    imageAlt: "Vasos Corona 330 ml hechos con botellas reutilizadas.",
  },
  {
    id: "vasos-corona-550-fep-loa",
    name: "Vaso Corona 550 ml (FEP Loa)",
    price: 7490,
    tag: "Edición local",
    detail: "Formato 550 ml",
    description: "Vaso en formato 550 ml con diseño local, ideal para eventos y recuerdos.",
    image: `${IMG_DIR}/vasos corna 550 ml en fep loa.png`,
    imageAlt: "Vasos Corona 550 ml con diseño FEP Loa.",
  },
  {
    id: "vaso-diseno-llama-be-cool",
    name: "Vaso con diseño “Llama be cool”",
    price: 7990,
    tag: "Vinilo / ilustración",
    detail: "Diseño territorial",
    description: "Vaso reutilizado con diseño inspirado en la identidad del desierto y su fauna.",
    image: `${IMG_DIR}/vasos con diseño llama be cool.png`,
    imageAlt: "Vasos con diseño “Llama be cool”.",
  },
  {
    id: "vaso-diseno-girasol-zorro-llama",
    name: "Vaso con diseño (girasol, zorro y llama)",
    price: 7990,
    tag: "Vinilo / ilustración",
    detail: "Diseños variados",
    description: "Vaso de vidrio reutilizado con diseños de flora y fauna del territorio.",
    image: `${IMG_DIR}/vasos con diseño girasol zorro llama.png`,
    imageAlt: "Vasos con diseño de girasol, zorro y llama.",
  },
  {
    id: "vasos-diseno-vinilo-surtidos",
    name: "Vasos con diseños surtidos (vinilo)",
    price: 14990,
    tag: "Pack surtido",
    detail: "Varios diseños",
    description: "Pack de vasos reutilizados con distintos diseños en vinilo, ideal para regalo.",
    image: `${IMG_DIR}/vasos con diseños disttintos vinilo.png`,
    imageAlt: "Vasos con diseños distintos en vinilo.",
  },
  {
    id: "vaso-diseno-aniversario-calama",
    name: "Vaso diseño aniversario de Calama",
    price: 8490,
    tag: "Edición Calama",
    detail: "Diseño conmemorativo",
    description: "Vaso reutilizado con diseño conmemorativo inspirado en Calama.",
    image: `${IMG_DIR}/diseño para aniversario de calama.png`,
    imageAlt: "Vaso con diseño para aniversario de Calama.",
  },
  {
    id: "cenicero-diseno",
    name: "Cenicero con diseño",
    price: 6990,
    tag: "Hogar / terraza",
    detail: "Vidrio reutilizado",
    description: "Cenicero hecho a partir de botella reutilizada con terminación pulida.",
    image: `${IMG_DIR}/ceniceros con diseño.png`,
    imageAlt: "Ceniceros con diseño hechos con vidrio reutilizado.",
  },
  {
    id: "florero-cobreloa",
    name: "Florero “Cobreloa”",
    price: 12990,
    tag: "Decoración",
    detail: "Pieza decorativa",
    description: "Florero de vidrio reutilizado con identidad local (inspiración Cobreloa).",
    image: `${IMG_DIR}/florero cobreloa.png`,
    imageAlt: "Florero inspirado en Cobreloa hecho con botella reutilizada.",
  },
  {
    id: "florero-chaman-yalquincha",
    name: "Florero “Chamán de Yalquincha”",
    price: 12990,
    tag: "Decoración",
    detail: "Identidad territorial",
    description: "Florero con diseño inspirado en el patrimonio y el territorio.",
    image: `${IMG_DIR}/florero con chaman de yalquincha.png`,
    imageAlt: "Florero con diseño de chamán de Yalquincha.",
  },
  {
    id: "florero-vista-inferior",
    name: "Florero corte pulido (vista inferior)",
    price: 11990,
    tag: "Terminación premium",
    detail: "Bordes pulidos",
    description: "Florero con corte y pulido cuidadoso para un acabado seguro y profesional.",
    image: `${IMG_DIR}/florero desde abajo.jpeg`,
    imageAlt: "Florero de vidrio reutilizado, vista desde abajo mostrando el corte pulido.",
  },
  {
    id: "floreros-varios",
    name: "Set de floreros variados",
    price: 19990,
    tag: "Set",
    detail: "Varias piezas",
    description: "Conjunto de floreros reutilizados para decorar distintos espacios.",
    image: `${IMG_DIR}/floreros varios.jpeg`,
    imageAlt: "Varios floreros hechos con botellas reutilizadas.",
  },
  {
    id: "floreros-varios-2",
    name: "Set de floreros variados (2)",
    price: 19990,
    tag: "Set",
    detail: "Varias piezas",
    description: "Otra combinación de floreros reutilizados en distintos tamaños y colores.",
    image: `${IMG_DIR}/floreros varios 2.jpeg`,
    imageAlt: "Set de floreros variados hechos con botellas reutilizadas.",
  },
  {
    id: "macetero-petaca",
    name: "Macetero tipo petaca para plantas",
    price: 10990,
    tag: "Jardín / interior",
    detail: "Ideal suculentas",
    description: "Macetero reutilizado en formato petaca, perfecto para plantas pequeñas.",
    image: `${IMG_DIR}/macetero tamaño petaca para plantas.jpeg`,
    imageAlt: "Macetero de vidrio reutilizado tipo petaca para plantas.",
  },
  {
    id: "coronas-decorativas",
    name: "Coronas decorativas (distintos tamaños)",
    price: 15990,
    tag: "Decoración",
    detail: "3 tamaños",
    description: "Conjunto de coronas decorativas en distintos tamaños para hogar o local.",
    image: `${IMG_DIR}/tres coronas de distintos tamaños.png`,
    imageAlt: "Tres coronas decorativas de distintos tamaños.",
  },
  {
    id: "velas-aromaticas",
    name: "Velas aromáticas",
    price: 8990,
    tag: "Aromas",
    detail: "Hechas en recipiente reutilizado",
    description: "Velas aromáticas en envase de vidrio reutilizado, ideales para ambientar espacios.",
    image: `${IMG_DIR}/velas aromaticas.png`,
    imageAlt: "Velas aromáticas en recipientes de vidrio reutilizado.",
  },
  {
    id: "velas-mandalas",
    name: "Velas con mandalas pintados",
    price: 9990,
    tag: "Arte a mano",
    detail: "Pintado artesanal",
    description: "Velas en recipientes reutilizados con mandalas pintados a mano.",
    image: `${IMG_DIR}/velas con mandalas pintados.png`,
    imageAlt: "Velas con mandalas pintados en recipientes de vidrio reutilizado.",
  },
  {
    id: "tripack-velas",
    name: "Tripack de velas",
    price: 15990,
    tag: "Pack",
    detail: "3 unidades",
    description: "Pack de 3 velas en envases reutilizados, ideal para regalo o decoración.",
    image: `${IMG_DIR}/tripack con velas.png`,
    imageAlt: "Tripack con velas en envases de vidrio reutilizado.",
  },
];

let cart = [];

const CL_PHONE = "56912345678"; // Cambia este número por el WhatsApp real del emprendimiento

const productsGrid = document.getElementById("productsGrid");
const cartDrawer = document.getElementById("cartDrawer");
const cartToggleBtn = document.getElementById("cartToggleBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartItemsList = document.getElementById("cartItems");
const cartEmptyLabel = document.getElementById("cartEmpty");
const cartTotalLabel = document.getElementById("cartTotal");
const cartCountBadge = document.getElementById("cartCount");
const whatsappCheckoutBtn = document.getElementById("whatsappCheckoutBtn");
const floatingWhatsapp = document.getElementById("floatingWhatsapp");
const currentYearSpan = document.getElementById("currentYear");
const backdrop = document.getElementById("backdrop");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");

function formatCurrency(amount) {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(amount);
}

function safeEncodePath(path) {
  return encodeURI(path);
}

function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) ?? null;
}

function saveCart() {
  try {
    const minimal = cart.map((i) => ({ id: i.id, qty: i.qty }));
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(minimal));
  } catch {
    // ignore storage failures
  }
}

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return;
    const minimal = JSON.parse(raw);
    if (!Array.isArray(minimal)) return;

    const restored = [];
    for (const item of minimal) {
      if (!item || typeof item !== "object") continue;
      if (typeof item.id !== "string") continue;
      const qty = Number(item.qty);
      if (!Number.isFinite(qty) || qty <= 0) continue;
      const p = getProductById(item.id);
      if (!p) continue;
      restored.push({ ...p, qty: Math.floor(qty) });
    }
    cart = restored;
  } catch {
    // ignore parse failures
  }
}

function renderProducts() {
  if (!productsGrid) return;

  productsGrid.innerHTML = "";

  PRODUCTS.forEach((product) => {
    const imageSrc = safeEncodePath(product.image);
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <img class="product-image" src="${imageSrc}" alt="${product.imageAlt}" loading="lazy" />
      <span class="product-tag">${product.tag}</span>
      <h3 class="product-title">${product.name}</h3>
      <p class="product-description">${product.description}</p>
      <div class="product-meta">
        <div>
          <div class="product-price">${formatCurrency(product.price)}</div>
          <div class="product-detail">${product.detail}</div>
        </div>
      </div>
      <div class="product-actions">
        <button class="btn btn-primary btn-sm" data-product-id="${product.id}">
          <i class="fa-solid fa-plus"></i>
          Agregar al carrito
        </button>
      </div>
    `;
    productsGrid.appendChild(card);
  });
}

function addToCart(product) {
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartUI();
  saveCart();
  openCart();
}

function setQty(id, nextQty) {
  const qty = Math.max(0, Math.floor(Number(nextQty)));
  const existing = cart.find((i) => i.id === id);
  if (!existing) return;
  if (qty === 0) {
    cart = cart.filter((i) => i.id !== id);
  } else {
    existing.qty = qty;
  }
  updateCartUI();
  saveCart();
}

function updateCartUI() {
  if (!cartItemsList || !cartEmptyLabel || !cartTotalLabel || !cartCountBadge) return;

  cartItemsList.innerHTML = "";
  let total = 0;
  let totalItems = 0;

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.className = "cart-item";
    const lineTotal = item.price * item.qty;
    total += lineTotal;
    totalItems += item.qty;

    const thumbSrc = safeEncodePath(item.image);
    li.innerHTML = `
      <img class="cart-item-thumb" src="${thumbSrc}" alt="" loading="lazy" />
      <div class="cart-item-main">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-controls" aria-label="Cantidad">
          <button class="qty-button" data-action="dec" data-id="${item.id}" aria-label="Disminuir cantidad">
            <i class="fa-solid fa-minus"></i>
          </button>
          <span class="qty-badge" aria-label="Cantidad actual">${item.qty}</span>
          <button class="qty-button" data-action="inc" data-id="${item.id}" aria-label="Aumentar cantidad">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <div class="cart-item-right">
        <div class="cart-item-price">${formatCurrency(lineTotal)}</div>
        <button class="icon-button cart-item-remove" data-action="remove" data-id="${item.id}" aria-label="Quitar producto">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;

    cartItemsList.appendChild(li);
  });

  cartEmptyLabel.style.display = cart.length === 0 ? "block" : "none";
  cartTotalLabel.textContent = formatCurrency(total);
  cartCountBadge.textContent = String(totalItems);

  if (whatsappCheckoutBtn) {
    whatsappCheckoutBtn.disabled = cart.length === 0;
  }
}

function openCart() {
  if (!cartDrawer) return;
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  if (backdrop) {
    backdrop.classList.add("show");
    backdrop.setAttribute("aria-hidden", "false");
  }
  document.body.style.overflow = "hidden";
}

function closeCart() {
  if (!cartDrawer) return;
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  if (backdrop) {
    backdrop.classList.remove("show");
    backdrop.setAttribute("aria-hidden", "true");
  }
  document.body.style.overflow = "";
}

function buildWhatsappMessagePlain() {
  if (!cart.length) {
    return "Hola Paniri Reutiliza, quiero más información sobre sus productos de reutilización de botellas de vidrio en Calama.";
  }

  let message = "Hola Paniri Reutiliza,\n\nQuisiera hacer el siguiente pedido:\n";

  cart.forEach((item) => {
    message += `- ${item.qty} x ${item.name} (${formatCurrency(item.price)} c/u)\n`;
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  message += `\nTotal aproximado: ${formatCurrency(total)}\n\n`;
  message += "Estoy en Calama y me gustaría coordinar pago y entrega. ¡Gracias!";

  return message;
}

function openWhatsapp(withCart = false) {
  const messagePlain = withCart
    ? buildWhatsappMessagePlain()
    : "Hola Paniri Reutiliza, me gustaría saber más sobre sus productos.";
  const url = `https://wa.me/${CL_PHONE}?text=${encodeURIComponent(messagePlain)}`;
  window.open(url, "_blank");
}

function initEvents() {
  if (productsGrid) {
    productsGrid.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const button = target.closest("button[data-product-id]");
      if (!button) return;
      const id = button.getAttribute("data-product-id");
      if (!id) return;
      const product = PRODUCTS.find((p) => p.id === id);
      if (!product) return;
      addToCart(product);
    });
  }

  if (cartToggleBtn) {
    cartToggleBtn.addEventListener("click", () => {
      if (cartDrawer?.classList.contains("open")) {
        closeCart();
      } else {
        openCart();
      }
    });
  }

  if (closeCartBtn) {
    closeCartBtn.addEventListener("click", closeCart);
  }

  if (cartItemsList) {
    cartItemsList.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const btn = target.closest("button[data-action]");
      if (!btn) return;
      const id = btn.getAttribute("data-id");
      if (!id) return;
      const action = btn.getAttribute("data-action");
      const item = cart.find((i) => i.id === id);
      if (!item) return;
      if (action === "inc") setQty(id, item.qty + 1);
      if (action === "dec") setQty(id, item.qty - 1);
      if (action === "remove") setQty(id, 0);
    });
  }

  if (whatsappCheckoutBtn) {
    whatsappCheckoutBtn.addEventListener("click", () => {
      if (cart.length === 0) return;
      openWhatsapp(true);
    });
  }

  if (floatingWhatsapp) {
    floatingWhatsapp.addEventListener("click", (e) => {
      e.preventDefault();
      openWhatsapp(false);
    });
  }

  if (backdrop) {
    backdrop.addEventListener("click", () => {
      if (cartDrawer?.classList.contains("open")) closeCart();
      if (mobileNav?.classList.contains("open")) closeMobileNav();
    });
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      if (mobileNav?.classList.contains("open")) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (mobileNav) {
    mobileNav.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const link = target.closest("a[href^='#']");
      if (!link) return;
      closeMobileNav();
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (cartDrawer?.classList.contains("open")) closeCart();
      if (mobileNav?.classList.contains("open")) closeMobileNav();
    }
  });
}

function openMobileNav() {
  if (!mobileNav || !mobileMenuBtn) return;
  mobileNav.classList.add("open");
  mobileNav.setAttribute("aria-hidden", "false");
  mobileMenuBtn.setAttribute("aria-expanded", "true");
  if (backdrop) {
    backdrop.classList.add("show");
    backdrop.setAttribute("aria-hidden", "false");
  }
}

function closeMobileNav() {
  if (!mobileNav || !mobileMenuBtn) return;
  mobileNav.classList.remove("open");
  mobileNav.setAttribute("aria-hidden", "true");
  mobileMenuBtn.setAttribute("aria-expanded", "false");
  if (backdrop && !cartDrawer?.classList.contains("open")) {
    backdrop.classList.remove("show");
    backdrop.setAttribute("aria-hidden", "true");
  }
}

function setCurrentYear() {
  if (currentYearSpan) {
    currentYearSpan.textContent = String(new Date().getFullYear());
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadCart();
  renderProducts();
  updateCartUI();
  initEvents();
  setCurrentYear();
});

