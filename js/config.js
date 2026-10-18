/**
 * TELMA BELEZAS — Configuração Central da Aplicação
 * Permite gerir contactos, redes sociais, serviços e catálogo de fotos num único ficheiro.
 */

const TELMA_CONFIG = {
  // Dados de Identidade
  brandName: "Telma Belezas",
  tagline: "Arte & Elegância em Maquilhagem Profissional",
  slogan: "Realçando a sua beleza natural com sofisticação, delicadeza e luxo acessível.",
  makeupArtistName: "Telma",
  
  // Informações Comerciais e Contacto Oficiais
  phoneDisplay: "+244 955 936 510",
  phoneRaw: "244955936510", // Formato internacional WhatsApp (Angola +244)
  whatsappMessage: "Olá, Telma Belezas! Gostaria de saber mais sobre os seus serviços de maquilhagem e verificar disponibilidade de agendamento.",
  instagramHandle: "Telma Pukilas",
  instagramUrl: "https://www.instagram.com/telmapukilas",
  email: "contacto@telmabezas.com",
  locationDisplay: "Benguela, Angola",
  serviceArea: "Atendimento exclusivo em Estúdio e ao Domicílio / Hotéis em Benguela",
  businessHours: "Segunda a Sábado: 08h00 - 19h00 | Domingos e Feriados sob marcação prévia",

  // Catálogo de Fotografias Reais (38 imagens da profissional organizadas por categorias)
  portfolioItems: [
    {
      id: 1,
      image: "assets/images/trabalhos/trabalho-01.jpeg",
      title: "Maquilhagem Glamour Noite",
      category: "eventos",
      categoryName: "Eventos & Glamour",
      description: "Acabamento iluminado com olhar marcante e esfumado clássico para celebrações e festas noturnas."
    },
    {
      id: 2,
      image: "assets/images/trabalhos/trabalho-02.jpeg",
      title: "Harmonia em Tons Quentes",
      category: "social",
      categoryName: "Social",
      description: "Pele aveludada, contorno suave e lábios definidos com brilho sofisticado."
    },
    {
      id: 3,
      image: "assets/images/trabalhos/trabalho-03.jpeg",
      title: "Produção Editorial de Beleza",
      category: "editorial",
      categoryName: "Editorial & Moda",
      description: "Composição artística para fotografia em estúdio de alta definição e campanhas."
    },
    {
      id: 4,
      image: "assets/images/trabalhos/trabalho-04.jpeg",
      title: "Realce Suave & Radiante",
      category: "social",
      categoryName: "Social",
      description: "Maquilhagem social clássica realçando os traços naturais com subtileza e elegância."
    },
    {
      id: 5,
      image: "assets/images/trabalhos/trabalho-05.jpeg",
      title: "Noiva Clássica & Radiante",
      category: "noivas",
      categoryName: "Noivas",
      description: "Acabamento de longa duração à prova de emoções, com pele blindada e olhar luminoso para o grande dia."
    },
    {
      id: 6,
      image: "assets/images/trabalhos/trabalho-06.jpeg",
      title: "Gala & Eventos Especiais",
      category: "eventos",
      categoryName: "Eventos & Glamour",
      description: "Técnica apurada de sombreamento com pigmentos selecionados para eventos de prestígio."
    },
    {
      id: 7,
      image: "assets/images/trabalhos/trabalho-07.jpeg",
      title: "Sofisticação para Formatura",
      category: "eventos",
      categoryName: "Eventos & Glamour",
      description: "Look moderno e jovial com olhar realçado e acabamento acetinado para celebrações académicas."
    },
    {
      id: 8,
      image: "assets/images/trabalhos/trabalho-08.jpeg",
      title: "Pele Perfeita & Contorno Harmonioso",
      category: "social",
      categoryName: "Social",
      description: "Equilíbrio perfeito entre luminosidade e cobertura duradoura para o dia todo."
    },
    {
      id: 9,
      image: "assets/images/trabalhos/trabalho-09.jpeg",
      title: "Noiva Elegância Contemporânea",
      category: "noivas",
      categoryName: "Noivas",
      description: "Beleza atemporal pensada para harmonizar com o vestido, iluminação e fotografia do casamento."
    },
    {
      id: 10,
      image: "assets/images/trabalhos/trabalho-10.jpeg",
      title: "Iluminação Estratégica",
      category: "social",
      categoryName: "Social",
      description: "Técnica de glow sutil nos pontos altos do rosto para um resultado elegante e fotogênico."
    },
    {
      id: 11,
      image: "assets/images/trabalhos/trabalho-11.jpeg",
      title: "Olhar Marcante Smokey",
      category: "eventos",
      categoryName: "Eventos & Glamour",
      description: "Esfumado de transição perfeita com delineado preciso para destaque noturno."
    },
    {
      id: 12,
      image: "assets/images/trabalhos/trabalho-12.jpeg",
      title: "Noiva Romântica",
      category: "noivas",
      categoryName: "Noivas",
      description: "Tons rosados e nudes suaves conferindo serenidade e beleza inesquecível ao altar."
    },
    {
      id: 13,
      image: "assets/images/trabalhos/trabalho-13.jpeg",
      title: "Ensaio Fotográfico & Book",
      category: "editorial",
      categoryName: "Editorial & Moda",
      description: "Maquilhagem adaptada a flashes e iluminação de estúdio profissional com alta fidelidade de cor."
    },
    {
      id: 14,
      image: "assets/images/trabalhos/trabalho-14.jpeg",
      title: "Social Glamour",
      category: "social",
      categoryName: "Social",
      description: "Combinação personalizada de tons para jantares, aniversários e encontros especiais."
    },
    {
      id: 15,
      image: "assets/images/trabalhos/trabalho-15.jpeg",
      title: "Acento de Cor e Contraste",
      category: "eventos",
      categoryName: "Eventos & Glamour",
      description: "Lábios impactantes combinados com acabamento de pele minimalista e sofisticado."
    },
    {
      id: 16,
      image: "assets/images/trabalhos/trabalho-16.jpeg",
      title: "Produção de Noiva Premium",
      category: "noivas",
      categoryName: "Noivas",
      description: "Atendimento completo com preparação de pele minuciosa e fixação máxima."
    },
    {
      id: 17,
      image: "assets/images/trabalhos/trabalho-17.jpeg",
      title: "Estética Editorial",
      category: "editorial",
      categoryName: "Editorial & Moda",
      description: "Design de sobrancelhas e acabamento glossy pensado para câmeras de alta resolução."
    },
    {
      id: 18,
      image: "assets/images/trabalhos/trabalho-18.jpeg",
      title: "Celebração e Festa",
      category: "eventos",
      categoryName: "Eventos & Glamour",
      description: "Toque de luminosidade com brilho fino que resiste à pista de dança e clima quente."
    },
    {
      id: 19,
      image: "assets/images/trabalhos/trabalho-19.jpeg",
      title: "Clássico com Toque Moderno",
      category: "social",
      categoryName: "Social",
      description: "Uma proposta versátil adequada tanto para ocasiões diurnas quanto noites festivas."
    },
    {
      id: 20,
      image: "assets/images/trabalhos/trabalho-20.jpeg",
      title: "Beleza Feminina Autêntica",
      category: "social",
      categoryName: "Social",
      description: "Valorização da textura natural da pele com cobertura leve e pontos de luz calibrados."
    },
    {
      id: 21,
      image: "assets/images/trabalhos/trabalho-21.jpeg",
      title: "Noiva dos Sonhos",
      category: "noivas",
      categoryName: "Noivas",
      description: "Harmonização de tons perolados e acabamento acetinado para um visual memorável."
    },
    {
      id: 22,
      image: "assets/images/trabalhos/trabalho-22.jpeg",
      title: "Editorial Conceitual",
      category: "editorial",
      categoryName: "Editorial & Moda",
      description: "Técnica apurada de texturas e contrastes para portfólio de moda e revistas."
    },
    {
      id: 23,
      image: "assets/images/trabalhos/trabalho-23.jpeg",
      title: "Maquilhagem para Dama de Honor",
      category: "eventos",
      categoryName: "Eventos & Glamour",
      description: "Beleza elegante e coordenada para cortejo de noivas e familiares próximos."
    },
    {
      id: 24,
      image: "assets/images/trabalhos/trabalho-24.jpeg",
      title: "Pele Blindada para Festas",
      category: "eventos",
      categoryName: "Eventos & Glamour",
      description: "Resistência ao calor e humidade sem perder a leveza visual."
    },
    {
      id: 25,
      image: "assets/images/trabalhos/trabalho-25.jpeg",
      title: "Soft Glam Diurno",
      category: "social",
      categoryName: "Social",
      description: "Elegância sem excessos para reuniões, batizados e eventos corporativos."
    },
    {
      id: 26,
      image: "assets/images/trabalhos/trabalho-26.jpeg",
      title: "Produção para Sessão Fotográfica",
      category: "editorial",
      categoryName: "Editorial & Moda",
      description: "Contorno tridimensional para valorizar os ângulos em fotografia profissional."
    },
    {
      id: 27,
      image: "assets/images/trabalhos/trabalho-27.jpeg",
      title: "Noiva Tradicional & Glamour",
      category: "noivas",
      categoryName: "Noivas",
      description: "Destaque para o olhar e lábios perfeitamente desenhados com alta durabilidade."
    },
    {
      id: 28,
      image: "assets/images/trabalhos/trabalho-28.jpeg",
      title: "Sofisticação Metálica Sutil",
      category: "eventos",
      categoryName: "Eventos & Glamour",
      description: "Pigmentos champanhe e bronze harmonizados com maestria."
    },
    {
      id: 29,
      image: "assets/images/trabalhos/trabalho-29.jpeg",
      title: "Beleza Madura & Revitalizada",
      category: "social",
      categoryName: "Social",
      description: "Técnicas de hidratação prévia e produtos fluidos que não acumulam nas linhas finas."
    },
    {
      id: 30,
      image: "assets/images/trabalhos/trabalho-30.jpeg",
      title: "Noiva Elegância Suprema",
      category: "noivas",
      categoryName: "Noivas",
      description: "Expressão máxima da sofisticação e pureza para celebrações inesquecíveis."
    },
    {
      id: 31,
      image: "assets/images/trabalhos/trabalho-31.jpeg",
      title: "Editorial Close-Up",
      category: "editorial",
      categoryName: "Editorial & Moda",
      description: "Detalhamento minucioso de pestanas, delineado e esfumado com precisão milimétrica."
    },
    {
      id: 32,
      image: "assets/images/trabalhos/trabalho-32.jpeg",
      title: "Festa & Celebração Noturna",
      category: "eventos",
      categoryName: "Eventos & Glamour",
      description: "Intensidade calibrada para criar uma presença magnética e confiante."
    },
    {
      id: 33,
      image: "assets/images/trabalhos/trabalho-33.jpeg",
      title: "Brilho Natural & Frescura",
      category: "social",
      categoryName: "Social",
      description: "Acabamento 'clean girl' sofisticado para ocasiões leves e ensolaradas."
    },
    {
      id: 34,
      image: "assets/images/trabalhos/trabalho-34.jpeg",
      title: "Destaque de Formanda",
      category: "eventos",
      categoryName: "Eventos & Glamour",
      description: "Maquilhagem marcante para fotos de diploma e banquete de celebração."
    },
    {
      id: 35,
      image: "assets/images/trabalhos/trabalho-35.jpeg",
      title: "Noiva Minimalista & Chique",
      category: "noivas",
      categoryName: "Noivas",
      description: "Foco no viço natural da pele e subtileza dos traços para casamentos intimistas."
    },
    {
      id: 36,
      image: "assets/images/trabalhos/trabalho-36.jpeg",
      title: "Ensaio Pré-Wedding",
      category: "editorial",
      categoryName: "Editorial & Moda",
      description: "Resistência para fotos externas ao pôr do sol e trocas de figurino."
    },
    {
      id: 37,
      image: "assets/images/trabalhos/trabalho-37.jpeg",
      title: "Impacto & Presença",
      category: "eventos",
      categoryName: "Eventos & Glamour",
      description: "Produção de alto impacto para jantares de gala e tapete vermelho."
    },
    {
      id: 38,
      image: "assets/images/trabalhos/trabalho-38.jpeg",
      title: "Harmonia Clássica Telma Belezas",
      category: "social",
      categoryName: "Social",
      description: "Assinatura estética da maquilhadora: pele impecável, olhar envolvente e elegância singular."
    }
  ],

  // Serviços Oferecidos
  services: [
    {
      id: "noivas",
      title: "Produção Exclusiva para Noivas",
      subtitle: "O seu dia mais especial com perfeição e tranquilidade",
      category: "noivas",
      image: "assets/images/trabalhos/trabalho-05.jpeg",
      badge: "Serviço Assinatura",
      description: "Atendimento completo e personalizado para o dia do seu casamento. Inclui teste prévio de maquilhagem, preparação com dermocosméticos de alta performance, técnica de pele blindada e acompanhamento até a cerimónia.",
      features: [
        "Consultoria prévia de estilo e harmonização com o vestido",
        "Teste completo de maquilhagem antes da cerimónia",
        "Pele blindada de longa duração e resistente a lágrimas e calor",
        "Aplicação de pestanas postiças premium fio a fio ou inteiriças",
        "Kit de retoque exclusivo para o grande dia",
        "Possibilidade de atendimento no local (hotel/domicílio)"
      ],
      priceNotice: "Sob consulta / Orçamento personalizado",
      buttonText: "Solicitar Orçamento de Noiva"
    },
    {
      id: "social",
      title: "Maquilhagem Social & Casual Chic",
      subtitle: "Elegância na medida certa para eventos diurnos ou noturnos",
      category: "social",
      image: "assets/images/trabalhos/trabalho-04.jpeg",
      badge: "Mais Procurado",
      description: "Ideal para aniversários, batizados, jantares formais e reuniões de negócios. Realça os seus melhores traços com uma pele luminosa, duradoura e natural.",
      features: [
        "Higienização e preparação da pele conforme o tipo cutâneo",
        "Cobertura adaptada: leve, média ou alta cobertura",
        "Design e preenchimento harmonioso de sobrancelhas",
        "Pestanas postiças selecionadas para o seu formato de olho",
        "Fixação profissional com produtos de marcas internacionais"
      ],
      priceNotice: "A partir de valor sob consulta",
      buttonText: "Agendar Maquilhagem Social"
    },
    {
      id: "eventos",
      title: "Festas, Galas & Formaturas",
      subtitle: "Brilhe e destaque-se com produções impactantes",
      category: "eventos",
      image: "assets/images/trabalhos/trabalho-07.jpeg",
      badge: "Destaque Noturno",
      description: "Produção glamorosa para momentos em que quer ser o centro das atenções: bailes de formatura, galas de premiação e festas sofisticadas.",
      features: [
        "Esfumados sofisticados, cut crease suave ou delineados gráficos",
        "Técnicas de iluminação e contorno fotográfico tridimensional",
        "Glitters finos e pigmentos luminosos de alta fixação",
        "Durabilidade prolongada para resistir a dança e clima",
        "Ajuste personalizado ao tom do traje e acessórios"
      ],
      priceNotice: "Sob consulta conforme o evento",
      buttonText: "Agendar para Evento"
    },
    {
      id: "editorial",
      title: "Editorial, Moda & Ensaios Fotográficos",
      subtitle: "Perfeição técnica adaptada a lentes e iluminação profissional",
      category: "editorial",
      image: "assets/images/trabalhos/trabalho-03.jpeg",
      badge: "Profissional & Mídia",
      description: "Atendimento especializado para campanhas publicitárias, marcas de roupa, catálogos, videoclipes e ensaios de gravidez, pré-wedding ou aniversários.",
      features: [
        "Adequação técnica à temperatura de cor da iluminação de estúdio",
        "Produtos sem reflexo branco (HD e Ultra HD)",
        "Disponibilidade para acompanhamento de estúdio e trocas de look",
        "Pontualidade e trabalho alinhado com a equipa de fotografia",
        "Acabamento impecável mesmo em fotos macro/close-up"
      ],
      priceNotice: "Diária ou por produção (sob consulta)",
      buttonText: "Consultar para Editorial"
    }
  ],

  // Função utilitária para gerar link de WhatsApp
  getWhatsAppUrl: function(customMessage) {
    const text = customMessage || this.whatsappMessage;
    return `https://wa.me/${this.phoneRaw}?text=${encodeURIComponent(text)}`;
  }
};

// Exportação compatível com navegador global
if (typeof window !== "undefined") {
  window.TELMA_CONFIG = TELMA_CONFIG;
}
