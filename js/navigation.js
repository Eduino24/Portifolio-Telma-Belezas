/**
 * TELMA BELEZAS — Módulo de Navegação (js/navigation.js)
 * Controla comportamento do cabeçalho, menu móvel e destaque de links ativos.
 */

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".mobile-nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // 1. Efeito de scroll no cabeçalho
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  }

  // 2. Menu móvel (Abrir / Fechar)
  if (navToggle && navMenu) {
    const toggleMenu = () => {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", !isExpanded);
      navMenu.classList.toggle("is-active");

      // Bloquear scroll do body quando menu estiver aberto
      if (!isExpanded) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };

    navToggle.addEventListener("click", toggleMenu);

    // Fechar ao clicar em qualquer link da navegação
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (navMenu.classList.contains("is-active")) {
          toggleMenu();
        }
      });
    });

    // Fechar ao pressionar tecla Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navMenu.classList.contains("is-active")) {
        toggleMenu();
      }
    });

    // Fechar ao clicar fora do menu
    document.addEventListener("click", (e) => {
      if (
        navMenu.classList.contains("is-active") &&
        !navMenu.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        toggleMenu();
      }
    });
  }

  // 3. Marcação automática do link da página ativa
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    }
  });
});
