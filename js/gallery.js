/**
 * TELMA BELEZAS — Módulo de Galeria & Lightbox (js/gallery.js)
 * Filtros de categorias e modal de ampliação de fotos reais com navegação por teclado.
 */

document.addEventListener("DOMContentLoaded", () => {
  const galleryGrid = document.querySelector("#gallery-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const lightbox = document.querySelector("#lightbox-modal");
  
  if (!galleryGrid || typeof TELMA_CONFIG === "undefined") return;

  const items = TELMA_CONFIG.portfolioItems;
  let activeFilter = "todos";
  let filteredItems = [...items];
  let currentIndex = 0;

  // Elementos da modal lightbox
  const lightboxImg = document.querySelector("#lightbox-img");
  const lightboxTitle = document.querySelector("#lightbox-title");
  const lightboxDesc = document.querySelector("#lightbox-desc");
  const lightboxCounter = document.querySelector("#lightbox-counter");
  const closeBtn = document.querySelector("#lightbox-close");
  const prevBtn = document.querySelector("#lightbox-prev");
  const nextBtn = document.querySelector("#lightbox-next");

  // Renderizar galeria
  function renderGallery() {
    galleryGrid.innerHTML = "";

    filteredItems = activeFilter === "todos"
      ? items
      : items.filter(item => item.category === activeFilter);

    if (filteredItems.length === 0) {
      galleryGrid.innerHTML = `
        <div class="gallery-empty-state" style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem;">
          <p style="font-size: 1.1rem; color: var(--color-brown-muted);">Nenhuma fotografia disponível nesta categoria no momento.</p>
        </div>
      `;
      return;
    }

    filteredItems.forEach((item, index) => {
      const card = document.createElement("article");
      card.className = "gallery-item";
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `Ampliar foto: ${item.title} (${item.categoryName})`);
      card.dataset.index = index;

      card.innerHTML = `
        <img class="gallery-img" src="${item.image}" alt="${item.title} - Telma Belezas Maquilhagem" loading="lazy" width="600" height="800">
        <div class="gallery-overlay">
          <div class="gallery-zoom-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </div>
          <span class="gallery-category-tag">${item.categoryName}</span>
          <h3 class="gallery-title">${item.title}</h3>
        </div>
      `;

      // Eventos de clique e acessibilidade por teclado
      card.addEventListener("click", () => openLightbox(index));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(index);
        }
      });

      galleryGrid.appendChild(card);
    });
  }

  // Filtragem
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      renderGallery();
    });
  });

  // Abrir Modal
  function openLightbox(index) {
    if (!lightbox || !filteredItems[index]) return;
    currentIndex = index;
    updateLightboxContent();
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    if (closeBtn) closeBtn.focus();
  }

  // Atualizar Conteúdo da Modal
  function updateLightboxContent() {
    const item = filteredItems[currentIndex];
    if (!item) return;

    if (lightboxImg) {
      lightboxImg.src = item.image;
      lightboxImg.alt = item.title;
    }
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxDesc) lightboxDesc.textContent = item.description;
    if (lightboxCounter) {
      lightboxCounter.textContent = `Fotografia ${currentIndex + 1} de ${filteredItems.length}`;
    }
  }

  // Fechar Modal
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    
    // Retornar foco ao item da galeria
    const lastActiveCard = document.querySelector(`.gallery-item[data-index="${currentIndex}"]`);
    if (lastActiveCard) lastActiveCard.focus();
  }

  // Navegação
  function nextImage() {
    currentIndex = (currentIndex + 1) % filteredItems.length;
    updateLightboxContent();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    updateLightboxContent();
  }

  // Controles de eventos da Modal
  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (prevBtn) prevBtn.addEventListener("click", prevImage);
  if (nextBtn) nextBtn.addEventListener("click", nextImage);

  // Fechar ao clicar no fundo
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // Teclado na Modal
  document.addEventListener("keydown", (e) => {
    if (!lightbox || !lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  });

  // Inicializar primeira renderização
  renderGallery();
});
