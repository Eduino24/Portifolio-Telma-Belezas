# Telma Belezas — Portfólio Profissional de Maquilhadora

Website institucional e portfólio digital premium para a maquilhadora **Telma Belezas** (Angola), desenvolvido com **HTML5 semântico**, **CSS3 moderno** e **JavaScript puro (Vanilla)**, seguindo a metodologia **Spec-Driven Development (SDD)**.

---

## 🌟 Destaques do Projeto

- **Zero Dependências Pesadas:** Desenvolvido sem React, Vue, Tailwind CSS ou Bootstrap, assegurando máxima velocidade e longevidade.
- **Fotografias Reais:** Utilização exclusiva das 38 fotografias reais fornecidas pela profissional e fotografia oficial no Hero e Sobre Mim.
- **Portfólio com Filtros Reativos:** Filtragem por especialidades (Todos, Noivas, Social, Eventos & Glamour, Editorial) com contadores e renderização progressiva.
- **Modal Lightbox Acessível:** Ampliação de imagens com navegação por teclado (`ArrowLeft`, `ArrowRight`, `Escape`), leitor de tela amigável e contador de imagens.
- **Design System Editorial:** Paleta refinada com Nude Claro (`#F5EAE2`), Bege Suave (`#E7D3C3`), Rosa Delicado (`#D9A6AC`), Rosa Profundo (`#B76E79`), Dourado Elegante (`#C5A15B`) e Castanho Escuro (`#4A3430`).
- **Centralização de Dados (`js/config.js`):** Atualização simplificada de número de WhatsApp, Instagram, horários e localização num único ficheiro.
- **Conformidade de Acessibilidade:** WCAG 2.2 AA (foco visível, contraste adequado, semântica e suporte a `prefers-reduced-motion`).

---

## 📁 Estrutura de Ficheiros

```
Protifolio-Telminha/
├── index.html              # Início (Hero, resumo, serviços em destaque, prévia da galeria)
├── sobre.html              # Sobre Mim (Biografia, filosofia, valores e foto oficial)
├── servicos.html           # Serviços (Noivas, Social, Eventos, Editorial com inclusões e preços)
├── portfolio.html          # Portfólio (38 fotos reais filtráveis com Lightbox)
├── contactos.html          # Contactos (Canais diretos e formulário com WhatsApp)
├── 404.html                # Página de erro 404 personalizada
├── css/
│   ├── style.css           # Tokens de design, fontes, reset e variáveis CSS
│   ├── components.css      # Header, botões, cards, galeria, lightbox e footer
│   └── responsive.css      # Ajustes mobile-first para todos os tamanhos de ecrã
├── js/
│   ├── config.js           # Dados centrais de contacto, links sociais e catálogo de fotos
│   ├── navigation.js       # Comportamento do menu mobile e links ativos
│   ├── gallery.js          # Lógica dos filtros e modal lightbox da galeria
│   └── main.js             # Inicialização, injeção de dados e formulário
├── assets/
│   └── images/             # Fotografia da maquilhadora e pasta 'trabalhos' com 38 fotos
├── specs/                  # Documentação SDD (Metodologia)
│   ├── requirements.md     # Requisitos funcionais e não-funcionais
│   ├── design.md           # Identidade visual, tipografia e componentes
│   ├── architecture.md     # Arquitetura técnica e convenções
│   ├── tasks.md            # Plano e matriz de tarefas
│   └── acceptance-criteria.md # Critérios de aceitação e testes
├── robots.txt              # Regras para motores de busca
├── sitemap.xml             # Mapa do site para SEO
└── README.md               # Este guia completo
```

---

## ⚙️ Como Personalizar os Dados da Profissional

Abra o ficheiro [`js/config.js`](file:///c:/Users/Eduino%20Francisco/Desktop/Protifolio-Telminha/js/config.js) e altere os campos assinalados:

```javascript
const TELMA_CONFIG = {
  // Contactos oficiais da Telma em Angola:
  phoneDisplay: "+244 955 936 510", // Como aparece no ecrã
  phoneRaw: "244955936510",          // Formato internacional sem '+' para o link do WhatsApp
  
  // Instagram oficial:
  instagramHandle: "Telma Pukilas",
  instagramUrl: "https://www.instagram.com/telmapukilas",
  
  // Localização e Horário:
  locationDisplay: "Benguela, Angola",
  businessHours: "Segunda a Sábado: 08:00 - 19:00"
};
```

---

## 🚀 Como Executar Localmente

Como o projeto é construído em HTML/CSS/JS puros, não requer instalação de dependências ou build:

### Opção 1: Abrir no Navegador
Basta abrir diretamente o ficheiro `index.html` em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).

### Opção 2: Com Servidor Local (Recomendado para rotas perfeitas)
No terminal do projeto:
```bash
# Com Python 3:
python -m http.server 8080

# Ou com Node.js (npx):
npx serve .
```
Aceda a `http://localhost:8080` ou `http://localhost:3000`.

---

## 🌐 Instruções de Publicação (Hospedagem Estática)

O projeto é 100% estático e pode ser publicado gratuitamente em qualquer um dos seguintes serviços:

1. **GitHub Pages:**
   - Faça push deste repositório para o GitHub.
   - Aceda a *Settings* > *Pages* > selecione a branch `main` e a pasta `/ (root)`.
   
2. **Netlify:**
   - Arraste a pasta do projeto diretamente para o [Netlify Drop](https://app.netlify.com/drop).
   
3. **Vercel / Cloudflare Pages:**
   - Conecte o repositório Git e publique selecionando *Framework Preset: Other / Static HTML*.

---

## 📋 Verificação dos Critérios de Aceitação (SDD)

- [x] Todas as 6 páginas desenvolvidas (`index.html`, `sobre.html`, `servicos.html`, `portfolio.html`, `contactos.html`, `404.html`).
- [x] Imagens reais utilizadas exclusivamente (foto oficial da maquiadora e 38 trabalhos reais catalogados).
- [x] Paleta oficial implementada através de variáveis CSS (#F5EAE2, #E7D3C3, #D9A6AC, #B76E79, #C5A15B, #4A3430, #FFFCF9).
- [x] Galeria filtrável responsiva e modal lightbox com zoom e atalhos de teclado.
- [x] Integração de agendamento via WhatsApp sem intermediários falsos.
- [x] Acessibilidade e suporte mobile-first validados.
