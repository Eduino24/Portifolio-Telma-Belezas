# Arquitetura Técnica — Telma Belezas

**Documento:** Arquitetura do Sistema e Estrutura de Arquivos  
**Metodologia:** SDD — Spec-Driven Development  
**Versão:** 1.0.0  

---

## 1. Arquitetura de Aplicação

O projeto adota uma arquitetura estática multi-páginas (MPA - Multi-Page Application) nativa, priorizando simplicidade de hospedagem, rapidez de carregamento e facilidade de manutenção sem dependências de compilação ou ferramentas de build.

### Diagrama da Estrutura de Arquivos

```
telma-belezas/
├── index.html              # Página Inicial (Hero, resumo sobre, destaques, prévia da galeria)
├── sobre.html              # Biografia, filosofia, percurso, especialidades
├── servicos.html           # Catálogo de serviços com cartões e links WhatsApp
├── portfolio.html          # Galeria com fotos reais filtráveis e modal lightbox
├── contactos.html          # Contactos diretos, horário, localização e formulário de orçamento
├── 404.html                # Página de erro 404 elegante
├── css/
│   ├── style.css           # Variáveis CSS, reset, tipografia e utilitários
│   ├── components.css      # Componentes (header, footer, botões, cards, modal lightbox, formulários)
│   └── responsive.css      # Media queries mobile-first e ajustes responsivos
├── js/
│   ├── config.js           # Dados centrais de contacto, links sociais, telefone, WhatsApp, morada
│   ├── navigation.js       # Comportamento do menu mobile, estado ativo e header fixo
│   ├── gallery.js          # Lógica de filtragem e modal lightbox com controle de teclado
│   └── main.js             # Inicialização geral, formulário e utilitários comuns
├── assets/
│   ├── images/             # Fotografias reais da Telma Belezas e trabalhos
│   ├── icons/              # Ícones SVG embutidos ou arquivos vetoriais
│   └── fonts/              # Fontes locais ou referências otimizadas
├── specs/                  # Documentação SDD
│   ├── requirements.md
│   ├── design.md
│   ├── architecture.md
│   ├── tasks.md
│   └── acceptance-criteria.md
├── README.md               # Instruções de instalação, teste e publicação
├── robots.txt              # Configuração de indexação para motores de busca
└── sitemap.xml             # Mapa do site para SEO
```

---

## 2. Padrões de Código e Módulos JavaScript

### 2.1 Centralização de Configurações (`js/config.js`)
Todos os dados comerciais e de contacto ficam definidos em um objeto imutável `TELMA_CONFIG`:
```javascript
const TELMA_CONFIG = {
  brandName: "Telma Belezas",
  phoneDisplay: "+244 955 936 510", // Oficial
  phoneRaw: "244955936510",          // Formato WhatsApp internacional (Angola +244)
  whatsappDefaultMessage: "Olá, Telma Belezas! Gostaria de obter informações sobre os serviços de maquilhagem e disponibilidade para agendamento.",
  instagramUrl: "https://www.instagram.com/telmapukilas",
  instagramHandle: "Telma Pukilas",
  email: "contacto@telmabezas.com",
  location: "Benguela, Angola (Atendimento em estúdio e ao domicílio)",
  openingHours: "Segunda a Sábado: 08:00 - 18:00 (Domingos e feriados sob marcação prévia)"
};
```
Isso permite alterar o número ou rede social da maquilhadora num único arquivo sem precisar tocar no HTML das 6 páginas.

### 2.2 Módulo de Navegação (`js/navigation.js`)
- Controla abertura/fechamento do menu móvel com classes acessíveis (`is-active`, `aria-expanded`).
- Fechamento com tecla Escape e clique fora.
- Destaca a página ativa no menu principal comparando `window.location.pathname`.

### 2.3 Módulo de Galeria e Modal (`js/gallery.js`)
- Filtragem reativa por atributos `data-category`.
- Suporte à visualização em tela cheia com Modal Lightbox.
- Suporte a teclado: `Escape` fecha, seta esquerda (`ArrowLeft`) vai para imagem anterior, seta direita (`ArrowRight`) vai para a próxima imagem.
- Acessibilidade: gerencia o foco do leitor de tela ao abrir e fechar a modal.

### 2.4 Módulo de Formulário (`js/main.js`)
- Validação no lado do cliente com feedback visual instantâneo.
- Conversão amigável do formulário de orçamento em mensagem direta para o WhatsApp da maquilhadora com os campos preenchidos.

---

## 3. SEO e Metadados
- `index.html`: Open Graph tags, Twitter Card tags, schema.org JSON-LD para profissional de beleza local (BeautySalon / MakeupArtist).
- Cada página possui `<title>` descritivo e `<meta name="description">` focado em palavras-chave em Angola: "Maquilhadora Benguela", "Maquilhagem Noivas Angola", "Telma Belezas".
