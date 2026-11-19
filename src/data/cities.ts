export type City = {
  slug: string;
  name: string;
  region: string;
  /** Contexto local exclusivo (evita conteúdo duplicado entre páginas). */
  intro: string;
  highlights: string[];
  forum: string;
};

export const cities: City[] = [
  {
    slug: "sao-paulo",
    name: "São Paulo",
    region: "Capital",
    forum: "Foro Central Cível e Foros Regionais (Pinheiros, Santana, Santo Amaro, Jabaquara, entre outros)",
    intro:
      "A Capital concentra o maior volume de processos de execução do país, o que se traduz em oferta constante de apartamentos, salas comerciais e imóveis residenciais em praticamente todas as regiões — do centro expandido aos bairros periféricos com forte demanda por locação.",
    highlights: [
      "Alta liquidez para revenda em regiões com metrô e corredores de ônibus",
      "Grande oferta de apartamentos compactos com potencial de renda por locação",
      "Leilões judiciais de varas cíveis, de família e trabalhistas, além de extrajudiciais bancários",
    ],
  },
  {
    slug: "campinas",
    name: "Campinas",
    region: "Região Metropolitana de Campinas",
    forum: "Fórum da Comarca de Campinas",
    intro:
      "Polo tecnológico e universitário, Campinas reúne demanda permanente por moradia de estudantes, profissionais e famílias. Imóveis arrematados próximos a universidades, ao aeroporto de Viracopos e a eixos como a Rodovia Dom Pedro I tendem a ter boa absorção no mercado.",
    highlights: [
      "Demanda estudantil e corporativa por locação",
      "Bairros consolidados com valorização histórica",
      "Terrenos e galpões no entorno logístico",
    ],
  },
  {
    slug: "jundiai",
    name: "Jundiaí",
    region: "Aglomeração Urbana de Jundiaí",
    forum: "Fórum da Comarca de Jundiaí",
    intro:
      "Entre a Capital e Campinas, Jundiaí combina qualidade de vida, condomínios residenciais e forte presença logística. Para o arrematante, isso significa público comprador qualificado e boa procura por casas e terrenos.",
    highlights: [
      "Procura por casas em condomínio e loteamentos",
      "Proximidade com as rodovias Anhanguera e Bandeirantes",
      "Perfil familiar de compradores finais",
    ],
  },
  {
    slug: "catanduva",
    name: "Catanduva",
    region: "Noroeste Paulista",
    forum: "Fórum da Comarca de Catanduva",
    intro:
      "Cidade de porte médio no noroeste paulista, Catanduva apresenta valores de entrada mais acessíveis e casas com áreas generosas — perfil interessante para quem busca reforma e revenda ou primeira compra com desconto.",
    highlights: [
      "Ticket de entrada mais baixo que o da Capital",
      "Casas térreas com terreno amplo",
      "Mercado local de compradores finais",
    ],
  },
  {
    slug: "suzano",
    name: "Suzano",
    region: "Alto Tietê",
    forum: "Fórum da Comarca de Suzano",
    intro:
      "No Alto Tietê, Suzano tem crescimento residencial impulsionado pela ligação ferroviária com a Capital. Casas e apartamentos de padrão econômico costumam atender tanto o comprador final quanto o investidor de locação.",
    highlights: [
      "Acesso à Capital pela Linha 11-Coral da CPTM",
      "Imóveis econômicos com boa procura para aluguel",
      "Oportunidades em leilões judiciais da comarca",
    ],
  },
  {
    slug: "guaruja",
    name: "Guarujá",
    region: "Baixada Santista",
    forum: "Fórum da Comarca de Guarujá",
    intro:
      "Destino de veraneio consolidado, Guarujá oferece apartamentos e casas de praia que podem servir para uso próprio, locação por temporada ou valorização patrimonial. Atenção especial a débitos de condomínio, comuns em imóveis de segunda residência.",
    highlights: [
      "Potencial de locação por temporada",
      "Imóveis próximos à orla com demanda sazonal",
      "Análise criteriosa de débitos condominiais no edital",
    ],
  },
  {
    slug: "osasco",
    name: "Osasco",
    region: "Região Oeste da Grande São Paulo",
    forum: "Fórum da Comarca de Osasco",
    intro:
      "Um dos maiores centros empresariais da Grande São Paulo, Osasco tem demanda sólida por moradia próxima a polos corporativos como Alphaville e o eixo da Castello Branco.",
    highlights: [
      "Proximidade com polos corporativos",
      "Apartamentos com boa liquidez de locação",
      "Mercado ativo para revenda rápida",
    ],
  },
  {
    slug: "hortolandia",
    name: "Hortolândia",
    region: "Região Metropolitana de Campinas",
    forum: "Fórum da Comarca de Hortolândia",
    intro:
      "Município em expansão na RMC, Hortolândia tem conjuntos residenciais e condomínios verticais que aparecem com frequência em leilões — ótimos para quem busca renda de aluguel com ticket moderado.",
    highlights: [
      "Condomínios verticais com valor de entrada acessível",
      "Indústria e serviços gerando demanda por locação",
      "Integração com Campinas e Sumaré",
    ],
  },
  {
    slug: "braganca-paulista",
    name: "Bragança Paulista",
    region: "Região Bragantina",
    forum: "Fórum da Comarca de Bragança Paulista",
    intro:
      "Com clima de interior e acesso pela Fernão Dias, Bragança Paulista atrai quem procura chácaras, terrenos e casas para moradia ou segunda residência, com valorização ligada à migração de famílias da Capital.",
    highlights: [
      "Chácaras e terrenos com potencial de valorização",
      "Acesso pela Rodovia Fernão Dias",
      "Demanda crescente de famílias vindas da Capital",
    ],
  },
];

export const getCity = (slug: string) => cities.find((c) => c.slug === slug);
