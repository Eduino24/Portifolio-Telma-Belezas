/**
 * TELMA BELEZAS — Script Principal (js/main.js)
 * Inicialização global, injeção de configurações e tratamento de formulários.
 */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof TELMA_CONFIG === "undefined") {
    console.error("TELMA_CONFIG não foi carregado.");
    return;
  }

  // 1. Atualizar dinamicamente textos e links baseados em TELMA_CONFIG
  document.querySelectorAll("[data-config='phoneDisplay']").forEach(el => {
    el.textContent = TELMA_CONFIG.phoneDisplay;
  });

  document.querySelectorAll("[data-config='instagramHandle']").forEach(el => {
    el.textContent = TELMA_CONFIG.instagramHandle;
  });

  document.querySelectorAll("[data-config='locationDisplay']").forEach(el => {
    el.textContent = TELMA_CONFIG.locationDisplay;
  });

  document.querySelectorAll("[data-config='serviceArea']").forEach(el => {
    el.textContent = TELMA_CONFIG.serviceArea;
  });

  document.querySelectorAll("[data-config='businessHours']").forEach(el => {
    el.textContent = TELMA_CONFIG.businessHours;
  });

  document.querySelectorAll("[data-config='email']").forEach(el => {
    el.textContent = TELMA_CONFIG.email;
    if (el.tagName === "A") {
      el.href = `mailto:${TELMA_CONFIG.email}`;
    }
  });

  // Atualizar links de WhatsApp padrão
  document.querySelectorAll("[data-whatsapp-btn]").forEach(el => {
    const customMsg = el.getAttribute("data-whatsapp-msg") || TELMA_CONFIG.whatsappMessage;
    el.href = TELMA_CONFIG.getWhatsAppUrl(customMsg);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  // Atualizar links de Instagram
  document.querySelectorAll("[data-instagram-btn]").forEach(el => {
    el.href = TELMA_CONFIG.instagramUrl;
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  // Atualizar links telefónicos diretos
  document.querySelectorAll("[data-phone-link]").forEach(el => {
    el.href = `tel:+${TELMA_CONFIG.phoneRaw}`;
  });

  // Atualizar ano do rodapé
  const copyrightYear = document.querySelector("#current-year");
  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }

  // 2. Tratamento do Formulário de Contacto e Orçamento
  const contactForm = document.querySelector("#contact-form");
  const formAlert = document.querySelector("#form-alert");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.querySelector("#form-name")?.value.trim();
      const phone = document.querySelector("#form-phone")?.value.trim();
      const service = document.querySelector("#form-service")?.value;
      const date = document.querySelector("#form-date")?.value;
      const message = document.querySelector("#form-message")?.value.trim();

      if (!name || !phone) {
        if (formAlert) {
          formAlert.className = "form-alert alert-info";
          formAlert.style.display = "block";
          formAlert.innerHTML = "<strong>Atenção:</strong> Por favor, preencha o seu nome e contacto telefónico para prosseguir.";
        }
        return;
      }

      // Montar mensagem personalizada para WhatsApp
      let composedMessage = `Olá, Telma Belezas! O meu nome é *${name}*.\n`;
      composedMessage += `Gostaria de solicitar um agendamento/orçamento.\n`;
      if (service) composedMessage += `• *Serviço de interesse:* ${service}\n`;
      if (date) composedMessage += `• *Data pretendida:* ${date}\n`;
      if (message) composedMessage += `• *Mensagem:* ${message}\n`;
      composedMessage += `\nAguardo a sua disponibilidade. Muito obrigada!`;

      if (formAlert) {
        formAlert.className = "form-alert alert-info";
        formAlert.style.display = "block";
        formAlert.innerHTML = `
          <strong>Mensagem validada!</strong> Como este website estático não armazena dados em servidor por motivos de segurança e privacidade, estamos a abrir o seu WhatsApp para envio direto com todos os detalhes preenchidos.
        `;
      }

      // Redirecionar para WhatsApp após breve intervalo para leitura do feedback
      setTimeout(() => {
        window.open(TELMA_CONFIG.getWhatsAppUrl(composedMessage), "_blank", "noopener,noreferrer");
      }, 700);
    });
  }
});
