# Identidade Visual e Design System — Telma Belezas

**Documento:** Design System e Diretrizes Visuais  
**Metodologia:** SDD — Spec-Driven Development  
**Versão:** 1.0.0  

---

## 1. Princípios de Design

1. **Luxo Acessível e Sensibilidade Feminina:** Uma estética que valoriza a pele, o detalhe da maquilhagem e a auto-estima, transmitindo acolhimento e profissionalismo de alto padrão.
2. **Editorial e Espaçoso:** Linhas limpas, grelhas equilibradas com respiro generoso (whitespace), evitando poluição visual para que as fotografias reais sejam as protagonistas.
3. **Harmonia Cromática Quente:** Tons naturais de pele e nude com detalhes em dourado refinado e rosa aveludado, transmitindo sofisticação sem excessos visuais.

---

## 2. Paleta de Cores e Tokens CSS

Conforme especificado no documento do projeto, as cores são centralizadas em variáveis CSS (`:root`):

| Nome do Token | Valor Hex | Utilização Principal |
|---|---|---|
| `--color-nude-light` | `#F5EAE2` | Fundo principal suave e áreas de contraste suave |
| `--color-beige-soft` | `#E7D3C3` | Cartões secundários, bordas suaves, separadores |
| `--color-rose-delicate` | `#D9A6AC` | Acentos subtis, tags, hover em superfícies |
| `--color-rose-deep` | `#B76E79` | Elementos de ação, botões secundários, destaques |
| `--color-gold-elegant` | `#C5A15B` | Detalhes de luxo, bordas de destaque, estrelas, divisórias |
| `--color-brown-dark` | `#4A3430` | Tipografia principal, títulos, contrastes fortes de texto |
| `--color-white-warm` | `#FFFCF9` | Fundo de cartões, formulários e elementos elevados |
| `--color-brown-muted` | `#705853` | Texto secundário, parágrafos e legendas (ótimo contraste) |

---

## 3. Tipografia

- **Títulos e Destaques (Display / Serif):**
  - Família: `'Playfair Display', 'Cormorant Garamond', Georgia, 'Times New Roman', serif`
  - Pesos: 500, 600, 700
  - Aplicação: `h1`, `h2`, `h3`, citações, números de destaque
  - Propriedades: `letter-spacing: -0.01em`, `line-height: 1.2`

- **Textos de Apoio e Interface (Body / Sans-Serif):**
  - Família: `'Plus Jakarta Sans', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
  - Pesos: 400 (regular), 500 (médio), 600 (semi-negrito)
  - Aplicação: parágrafos, botões, formulários, badges, navegação
  - Propriedades: `line-height: 1.6`, `letter-spacing: 0.01em`

---

## 4. Componentes Chave da Interface

### 4.1 Cabeçalho e Navegação (`.site-header`)
- Logótipo tipográfico Telma Belezas com monograma elegante.
- Links de navegação com transição suave de cor e indicador de página ativa (`active-link`).
- Botão CTA rápido "Agendar Agora" no desktop.
- Menu hambúrguer acessível para mobile com animação fluida e trap de foco.

### 4.2 Hero Section (`.hero`)
- Banner editorial com fotografia oficial de Telma Belezas.
- Mensagem de posicionamento: *"A arte de realçar a sua beleza natural com sofisticação e excelência."*
- Ações duplas: Botão Primário Dourado/Rosa para Agendamento e Botão Secundário Outline para Ver Portfólio.

### 4.3 Cartão de Serviço (`.service-card`)
- Estrutura: Imagem de capa com proporção 4:3 ou 1:1, badge de categoria, título serifado, descrição, lista de inclusões (bullet points elegantes), etiqueta de preço indicativo/sob consulta, botão de solicitação com redirecionamento ao WhatsApp informando o serviço selecionado.

### 4.4 Grelha de Galeria e Filtros (`.gallery-grid` / `.filter-bar`)
- Barra de botões tipo pill com foco e estado ativo visível.
- Grelha responsiva estilo alvenaria/editorial (masonry/grid) com `object-fit: cover`.
- Efeito hover sofisticado revelando lupa e legenda.
- Acessibilidade: suporte a navegação por teclado (`Enter` / `Space` para abrir modal).

### 4.5 Modal Lightbox (`.lightbox-modal`)
- Fundo translúcido escurecido com blur de vidro (`backdrop-filter: blur(10px)`).
- Imagem em alta definição centralizada com proporção preservada (`max-height: 85vh`).
- Legenda descritiva inferior e contador de fotos (ex.: `Foto 3 de 18`).
- Botões acessíveis: Fechar (`×`), Anterior (`←`), Próxima (`→`).

### 4.6 Rodapé Completo (`.site-footer`)
- Apresentação da marca, links rápidos de navegação, contactos diretos (WhatsApp, Instagram, E-mail, Localização em Benguela), horários de atendimento e créditos de direitos autorais.

---

## 5. Micro-interações e Acessibilidade Visual
- Transições padrão de 0.25s a 0.35s com curvas `cubic-bezier(0.4, 0, 0.2, 1)`.
- Sombras suaves (`box-shadow: 0 10px 30px rgba(74, 52, 48, 0.08)`).
- Suporte total a `@media (prefers-reduced-motion: reduce)`.
