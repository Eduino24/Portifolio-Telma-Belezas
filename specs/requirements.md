# Especificação de Requisitos — Telma Belezas

**Projeto:** Telma Belezas — Portfólio Profissional de Maquilhadora  
**Metodologia:** Spec-Driven Development (SDD)  
**Versão:** 1.0.0  
**Status:** Aprovado para Planeamento e Implementação  

---

## 1. Visão Geral e Objetivos do Projeto

### 1.1 Objetivo Comercial
Construir uma presença digital premium, confiável e elegante para a maquilhadora **Telma Belezas** (Angola), com foco em valorizar os seus trabalhos reais, apresentar serviços especializados e converter visitantes em clientes por meio de contactos diretos (WhatsApp e Instagram).

### 1.2 Objetivo Técnico
Desenvolver uma aplicação web estática multipágina utilizando exclusivamente **HTML5 semântico**, **CSS3 moderno** e **JavaScript puro (Vanilla)**, sem frameworks ou dependências pesadas, garantindo alta performance, acessibilidade (WCAG 2.2 AA), responsividade mobile-first e facilidade de manutenção.

---

## 2. Tipos de Visitantes (Personas)

1. **Noivas e Acompanhantes:** Procuram pacotes completos para o dia do casamento, pontualidade, atendimento personalizado ao domicílio ou estúdio e maquilhagem de alta durabilidade.
2. **Clientes para Eventos Sociais e Galas:** Procuram maquilhagem elegante e marcante para festas, formaturas, sessões fotográficas ou aniversários.
3. **Produtores de Moda, Fotógrafos e Agências:** Buscam trabalhos editoriais com acabamento impecável para campanhas publicitárias e sessões em estúdio.
4. **Clientes Casuais/Recorrentes:** Querem saber localização, preços indicativos, disponibilidade de datas e como agendar com rapidez.

---

## 3. Requisitos Funcionais (RF)

| ID | Descrição do Requisito | Critério de Verificação |
|---|---|---|
| **RF-01** | **Navegação Multipágina:** O site deve conter 6 páginas principais (`index.html`, `sobre.html`, `servicos.html`, `portfolio.html`, `contactos.html`, `404.html`). | Todas as rotas navegam sem quebra e indicam a página ativa visualmente. |
| **RF-02** | **Menu de Navegação Responsivo:** Menu fixo/intuitivo no topo com versão hambúrguer para dispositivos móveis com abertura, fecho por toque e fecho automático ao selecionar um link. | Funciona suavemente em smartphones e tablets sem deslocamento lateral. |
| **RF-03** | **Secção Hero de Alto Impacto (Home):** Apresentar slogan, foto principal da maquilhadora (Telma Belezas), botão primário para agendamento (WhatsApp) e secundário para o portfólio. | Elementos visíveis no primeiro scroll, com carregamento prioritário. |
| **RF-04** | **Página Sobre Mim:** Apresentar a foto oficial da profissional (`Telma Belezas.png`), biografia, filosofia de trabalho e compromisso, destacando campos provisórios editáveis. | Layout editorial claro, integrando foto e texto sem distorção. |
| **RF-05** | **Catálogo de Serviços:** Apresentar cartões de serviços detalhados (Social, Noivas, Eventos, Editorial/Fotografia, Formaturas). Cada cartão contém foto real, descrição, itens incluídos, estado do preço e botão de agendamento. | Dados centralizados e fáceis de editar em `js/config.js` / HTML. |
| **RF-06** | **Galeria de Portfólio com Imagens Reais:** Apresentar as fotografias reais fornecidas na pasta `Minhas Imagens`. | Nenhuma imagem fictícia ou de banco genérico sem licença; renderização em grelha editorial assimétrica responsiva. |
| **RF-07** | **Filtros de Portfólio:** Filtros interativos por categoria (ex.: Todos, Noivas, Social, Eventos & Glamour, Editorial). | Apenas categorias com imagens disponíveis são exibidas. Filtragem em tempo real sem recarregar a página. |
| **RF-08** | **Modal Lightbox de Imagens:** Ao clicar numa imagem da galeria, abrir modal com visualização ampliada, legenda descritiva, navegação por setas (anterior/próxima), fecho por botão `×`, fecho por clique fora e tecla `Escape`. | Foco preso adequadamente na modal, navegação por teclado funcional. |
| **RF-09** | **Integração com WhatsApp:** Botão de agendamento com URL pré-preenchido e codificado (`encodeURIComponent`), com mensagem clara para início de atendimento. | Link abre conversa no WhatsApp web/app com mensagem pré-formatada. |
| **RF-10** | **Integração com Redes Sociais (Instagram):** Links para perfil oficial ou campos claramente configuráveis. | Abre em nova aba com `rel="noopener noreferrer"`. |
| **RF-11** | **Formulário de Contacto e Orçamento:** Formulário completo no navegador com validação nativa e JS (campos obrigatórios, e-mail/telefone). Nota clara de que o envio direto requer backend/serviço externo ou encaminha para WhatsApp. | Validação acessível sem falsas confirmações de envio de e-mail. |
| **RF-12** | **Página de Erro 404 Personalizada:** Página com layout alinhado à identidade visual e botão de retorno à Home. | Acessível diretamente ou quando uma rota não existe. |
| **RF-13** | **Centralização de Dados Comerciais:** Configuração centralizada em `js/config.js` para contacto, telefone, redes sociais, horários e endereço. | Permite atualizar o número ou Instagram em um único local. |

---

## 4. Requisitos Não Funcionais (RNF)

| ID | Descrição do Requisito | Critério de Verificação |
|---|---|---|
| **RNF-01** | **Tecnologias Restritas:** Uso exclusivo de HTML5 semântico, CSS3 e JavaScript ES6+ puro. Proibido Tailwind, React, Bootstrap ou bibliotecas volumosas. | Zero dependências npm no runtime cliente. |
| **RNF-02** | **Desempenho (Performance):** Carregamento rápido, imagens otimizadas, lazy-loading nativo (`loading="lazy"`), scripts assíncronos/deferidos. | PageSpeed / Lighthouse de performance elevado (>90). |
| **RNF-03** | **Acessibilidade (WCAG 2.2 AA):** Contraste adequado entre textos e fundos, foco visível, tags semânticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), `aria-labels` e suporte a `prefers-reduced-motion`. | Navegável 100% por teclado, sem armadilhas de foco. |
| **RNF-04** | **Design Responsivo Mobile-First:** Perfeita adaptação de 320px até 4K (smartphones, tablets, laptops, monitores ultrawide), sem transbordo horizontal (`overflow-x`). | Testado nas larguras 375px, 768px, 1024px, 1440px. |
| **RNF-05** | **Direção de Arte e Estética Premium:** Cores nude, bege, rosa delicado, toques de dourado refinado e castanho escuro, tipografia de alta legibilidade combinando serif para títulos e sans-serif para texto. | Sensação de marca de luxo e sofisticação acessível. |
| **RNF-06** | **Segurança e Privacidade:** Sem uso indiscriminado de `innerHTML`, sem rastreadores desnecessários, validação segura de dados, código pronto para HTTPS. | Sem vulnerabilidades XSS ou chaves expostas. |

---

## 5. Informações Pendentes / Provisórias

Conforme estipulado no documento de especificação, não são inventados dados não fornecidos pela profissional. Os seguintes itens possuem valores de demonstração claramente assinalados com aviso de personalização:
1. **Número de Telefone/WhatsApp oficial de Angola:** Configurado e ativo como `+244 955 936 510` (raw: `244955936510`).
2. **Nome de utilizador do Instagram:** Configurado como `Telma Pukilas` (`https://www.instagram.com/telmapukilas`).
3. **Endereço físico/Estúdio:** Província de Benguela, Angola (com opção de atendimento ao domicílio / estúdio).
4. **Tabela de Preços exata:** Indicada como "Sob consulta / A partir de [Valor Provisório]" para evitar promessas comerciais falsas.
