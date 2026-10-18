# Critérios de Aceitação e Validação — Telma Belezas

**Documento:** Critérios de Aceitação e Matriz de Validação  
**Metodologia:** SDD — Spec-Driven Development  
**Versão:** 1.0.0  
**Data de Validação:** 17 de Outubro de 2026  

---

## 1. Critérios de Aceitação Globais (Conforme Seção 16 do Documento)

| Item | Critério de Aceitação | Método de Validação | Status |
|---|---|---|---|
| **AC-01** | Todas as páginas especificadas (`index.html`, `sobre.html`, `servicos.html`, `portfolio.html`, `contactos.html`, `404.html`) devem estar implementadas e totalmente funcionais. | Inspeção direta das 6 páginas e navegação interna recíproca. | **Aprovado** |
| **AC-02** | A identidade visual da Telma Belezas deve ser consistente em todas as telas, transmitindo elegância e sofisticação. | Análise visual dos estilos, tipografia serif/sans e elementos decorativos dourados. | **Aprovado** |
| **AC-03** | A paleta nude (`#F5EAE2`, `#E7D3C3`), rosa (`#D9A6AC`, `#B76E79`), dourado (`#C5A15B`) e castanho escuro (`#4A3430`) deve estar aplicada de forma equilibrada através de variáveis CSS. | Verificação de variáveis em `:root` no ficheiro `css/style.css`. | **Aprovado** |
| **AC-04** | O website deve funcionar perfeitamente em dispositivos móveis, tablets e computadores, sem scroll horizontal indesejado. | Layout mobile-first validado em `css/responsive.css` com breakpoints em 560px, 860px e 1024px. | **Aprovado** |
| **AC-05** | Todos os links e botões devem ter destinos válidos ou comportamentos reais (sem links mortos sem ação). | Verificação de links internos, botões dinâmicos de WhatsApp e âncoras. | **Aprovado** |
| **AC-06** | A galeria do portfólio deve utilizar as fotografias reais fornecidas na pasta do projeto e os filtros de categoria devem funcionar em tempo real. | 38 fotos reais catalogadas em `js/config.js` e renderizadas com filtros dinâmicos em `portfolio.html`. | **Aprovado** |
| **AC-07** | O modal lightbox deve abrir a fotografia ampliada, permitir fecho por botão `×`, tecla `Escape` e clique de fundo, além de navegação anterior/próxima. | Implementado em `js/gallery.js` com controles de teclado e foco acessível. | **Aprovado** |
| **AC-08** | Os contactos devem estar centralizados num arquivo de configuração (`js/config.js`) com ligação WhatsApp devidamente codificada e funcional. | Injeção dinâmica no DOM e codificação segura via `encodeURIComponent`. | **Aprovado** |
| **AC-09** | O formulário de contacto não deve fingir envio falso por e-mail no frontend; deve validar os campos e opcionalmente preparar a mensagem para o WhatsApp. | Validação sem recarregamento e aviso transparente com conversão para WhatsApp. | **Aprovado** |
| **AC-10** | Acessibilidade: elementos semânticos, foco visível, textos alternativos (`alt`) em todas as imagens reais e suporte a leitor de tela. | Conformidade com WCAG 2.2 AA e atributos ARIA nos modais e menu móvel. | **Aprovado** |
| **AC-11** | Otimização e performance: carregamento assíncrono/diferido (`loading="lazy"`), sem travamentos ou dependências externas pesadas. | HTML e CSS puro sem bibliotecas pesadas de terceiros. | **Aprovado** |
| **AC-12** | Documentação completa no `README.md` com instruções de execução local e guia de publicação estática. | Manual detalhado em `README.md`. | **Aprovado** |

---

## 2. Checklist de Testes Funcionais Executados

- [x] Navegação completa entre todas as 6 páginas sem quebra de links relativos.
- [x] Menu móvel funcional com indicador `aria-expanded`, fecho por toque em links e tecla Escape.
- [x] Foto oficial da Telma Belezas renderizada em alta qualidade no Hero de `index.html` e na página `sobre.html`.
- [x] Catálogo completo com 38 imagens reais dos trabalhos da profissional na página `portfolio.html`.
- [x] Filtros por especialidade (Todos, Noivas, Social, Eventos & Glamour, Editorial) filtrando sem refresh da página.
- [x] Modal Lightbox com imagem ampliada, legenda descritiva, contador de fotos e navegação por teclado (`Escape`, `ArrowLeft`, `ArrowRight`).
- [x] Centralização de dados de contacto no arquivo `js/config.js`.
- [x] Formulário de orçamento em `contactos.html` validando campos obrigatórios e direcionando para WhatsApp.
- [x] Página de erro `404.html` estilizada com links de retorno à Home e Portfólio.
- [x] Arquivos de SEO `robots.txt` e `sitemap.xml` estruturados.
