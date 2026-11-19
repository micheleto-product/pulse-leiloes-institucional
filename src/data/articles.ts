// Artigos do blog jurídico. Para publicar um novo artigo, adicione um objeto ao array.
export type Block =
  | { type: "h2" | "h3" | "p" | "quote"; text: string }
  | { type: "ul" | "ol"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  metaDescription: string;
  category: "Leilão Judicial" | "Leilão Extrajudicial" | "Guia do Arrematante" | "Tributário";
  publishDate: string; // YYYY-MM-DD
  readTime: number; // minutos
  excerpt: string;
  keyTakeaways: string[];
  content: Block[];
  faq: { q: string; a: string }[];
  utmCampaign: string;
};

export const articles: Article[] = [
  {
    slug: "acao-de-imissao-na-posse-leilao-judicial",
    title: "Como funciona a Ação de Imissão na Posse em leilão judicial?",
    metaDescription:
      "Arrematou um imóvel ocupado? Entenda a imissão na posse no leilão judicial e extrajudicial, prazos, custos e como o CPC protege o arrematante.",
    category: "Leilão Judicial",
    publishDate: "2026-10-28",
    readTime: 8,
    excerpt:
      "Imóvel ocupado não é sinônimo de problema. Veja como o arrematante obtém a posse de forma legal, quanto tempo leva e o que avaliar antes do lance.",
    keyTakeaways: [
      "No leilão judicial, a posse costuma ser pedida nos próprios autos da execução, sem nova ação.",
      "No extrajudicial (Lei 9.514/97), o caminho é a reintegração de posse, com liminar prevista em lei.",
      "Negociar a desocupação amigável geralmente é mais rápido e barato que a via forçada.",
    ],
    content: [
      { type: "p", text: "Um dos receios mais comuns de quem começa a investir em leilões é arrematar um imóvel ainda ocupado pelo antigo proprietário ou por terceiros. A boa notícia é que o ordenamento jurídico brasileiro oferece instrumentos claros para que o arrematante assuma a posse do bem — e conhecer esses caminhos é parte essencial da análise de risco de qualquer lote." },
      { type: "h2", text: "O que é a imissão na posse?" },
      { type: "p", text: "Imissão na posse é o ato pelo qual alguém que tem o direito de possuir um bem — no caso, o arrematante, que adquiriu a propriedade em hasta pública — passa efetivamente a exercer essa posse. Ela pode ocorrer de forma voluntária (o ocupante entrega as chaves) ou por determinação judicial, com expedição de mandado." },
      { type: "h2", text: "Imissão na posse no leilão judicial" },
      { type: "p", text: "No leilão judicial, regido pelos arts. 879 a 903 do Código de Processo Civil, a arrematação é considerada perfeita, acabada e irretratável com a assinatura do auto pelo juiz, pelo arrematante e pelo leiloeiro (art. 903). Após o pagamento e o decurso dos prazos legais, é expedida a carta de arrematação e, se o imóvel estiver ocupado pelo executado, o mandado de imissão na posse (art. 901, §1º)." },
      { type: "p", text: "Na prática, isso significa que, em regra, o arrematante não precisa ajuizar uma nova ação: o pedido é feito nos próprios autos da execução, o que torna o procedimento mais célere." },
      { type: "h3", text: "E se o ocupante for um terceiro?" },
      { type: "p", text: "Quando o imóvel está ocupado por terceiro estranho ao processo — por exemplo, um locatário — a situação exige análise do caso concreto. Contratos de locação podem ser denunciados pelo adquirente nos termos da Lei do Inquilinato (Lei 8.245/91, art. 8º), observados os prazos legais, e, em alguns cenários, pode ser necessária ação própria de imissão na posse." },
      { type: "h2", text: "Imissão na posse no leilão extrajudicial" },
      { type: "p", text: "Nos leilões de alienação fiduciária (Lei 9.514/97), o arrematante pode requerer a reintegração de posse, que deve ser concedida liminarmente, com ordem de desocupação em 60 dias, desde que comprovada a consolidação da propriedade (art. 30). O antigo devedor também fica sujeito ao pagamento de taxa de ocupação de 1% ao mês sobre o valor do imóvel (art. 37-A)." },
      { type: "h2", text: "Passo a passo prático" },
      { type: "ol", items: [
        "Leia o edital e verifique se o imóvel está ocupado e por quem.",
        "Após a arrematação, tente contato e negociação amigável com o ocupante.",
        "Não havendo acordo, requeira o mandado de imissão (judicial) ou ajuíze a reintegração (extrajudicial).",
        "Acompanhe o cumprimento do mandado pelo oficial de justiça.",
        "Faça vistoria e registre o estado do imóvel ao receber as chaves.",
      ]},
      { type: "h2", text: "Quanto tempo leva?" },
      { type: "p", text: "Não existe prazo único: depende da comarca, da vara, do tipo de ocupante e da existência de recursos. Por isso, o tempo estimado de desocupação deve entrar no cálculo de rentabilidade junto com custos de advogado, eventual reforma e despesas de manutenção." },
      { type: "quote", text: "Imóvel ocupado é um fator de precificação, não um impeditivo. O desconto costuma refletir justamente esse custo de tempo." },
      { type: "h2", text: "Cuidados antes de dar o lance" },
      { type: "ul", items: [
        "Visite a região e, se possível, verifique a ocupação externamente.",
        "Consulte o processo para identificar recursos ou embargos pendentes.",
        "Reserve verba para honorários e eventuais custas de desocupação.",
        "Considere uma margem de segurança no prazo do seu planejamento financeiro.",
      ]},
    ],
    faq: [
      { q: "Preciso entrar com uma nova ação para tirar o ocupante após leilão judicial?", a: "Em regra não. Quando o ocupante é o executado, a imissão na posse é requerida nos próprios autos da execução, com expedição de mandado (CPC, art. 901, §1º). Situações com terceiros podem exigir ação própria." },
      { q: "Quem paga as despesas de desocupação?", a: "Em geral, as despesas com advogado, mudança e eventual arrombamento ficam a cargo do arrematante, salvo disposição diferente no edital ou decisão judicial. Por isso devem constar no seu cálculo de viabilidade." },
      { q: "Posso cobrar aluguel do ocupante após a arrematação?", a: "No leilão extrajudicial, a Lei 9.514/97 (art. 37-A) prevê taxa de ocupação de 1% ao mês sobre o valor do imóvel. No judicial, a cobrança pela ocupação indevida pode ser pleiteada conforme o caso concreto." },
    ],
    utmCampaign: "artigo_imissao_posse",
  },
  {
    slug: "leilao-judicial-tem-divida-sub-rogacao-tributaria-art-130-ctn",
    title: "Leilão judicial tem dívida? Entenda a sub-rogação tributária (Art. 130 do CTN)",
    metaDescription:
      "IPTU atrasado e condomínio em imóvel de leilão: quem paga? Entenda o Art. 130 do CTN, o Art. 908 do CPC e o que o edital pode prever.",
    category: "Tributário",
    publishDate: "2026-10-14",
    readTime: 7,
    excerpt:
      "IPTU em atraso não passa automaticamente para o arrematante. Entenda a sub-rogação no preço e por que a leitura do edital continua decisiva.",
    keyTakeaways: [
      "Pelo Art. 130, parágrafo único, do CTN, os tributos anteriores se sub-rogam no preço da arrematação.",
      "O STJ (Tema 1.134) fixou que o edital não pode transferir ao arrematante tributos anteriores à hasta.",
      "Débitos condominiais têm regime próprio: leia sempre o edital e o processo.",
    ],
    content: [
      { type: "p", text: "Uma das perguntas mais frequentes de quem analisa um imóvel em leilão é: “e as dívidas do imóvel, ficam comigo?”. A resposta depende da natureza do débito e do tipo de leilão — e entender esse ponto é o que separa um bom negócio de uma surpresa desagradável." },
      { type: "h2", text: "O que diz o Art. 130 do CTN" },
      { type: "p", text: "O Código Tributário Nacional estabelece que os créditos tributários relativos a impostos sobre a propriedade (como o IPTU), taxas e contribuições de melhoria sub-rogam-se na pessoa do adquirente. Porém, o parágrafo único traz a regra que interessa ao arrematante: no caso de arrematação em hasta pública, a sub-rogação ocorre sobre o respectivo preço." },
      { type: "quote", text: "Em outras palavras: os tributos anteriores são pagos com o dinheiro da arrematação, e o imóvel é transferido livre desses débitos." },
      { type: "h2", text: "O entendimento do STJ (Tema 1.134)" },
      { type: "p", text: "Em 2024, o Superior Tribunal de Justiça, em julgamento de recursos repetitivos (Tema 1.134), consolidou que é inválida a cláusula de edital que atribua ao arrematante a responsabilidade por débitos tributários anteriores à arrematação. O tribunal modulou os efeitos da decisão, aplicando-a aos editais publicados após a data da ata de julgamento — por isso, a data do edital também importa." },
      { type: "h2", text: "E o condomínio?" },
      { type: "p", text: "Débitos condominiais não são tributos e seguem lógica diferente. São obrigações propter rem, vinculadas ao imóvel. O CPC prevê, no art. 908, §1º, que créditos que recaem sobre o bem sub-rogam-se no preço; contudo, a jurisprudência e os editais tratam o tema caso a caso. É comum o edital indicar expressamente se o arrematante responderá ou não por débitos condominiais." },
      { type: "h2", text: "Checklist de dívidas antes do lance" },
      { type: "ul", items: [
        "Leia a cláusula de débitos do edital com atenção.",
        "Confira a data de publicação do edital (Tema 1.134 do STJ).",
        "Consulte a certidão de débitos de IPTU na prefeitura.",
        "Peça ao condomínio a declaração de débitos, quando possível.",
        "Verifique eventuais débitos de água, luz e gás (geralmente pessoais do consumidor).",
      ]},
      { type: "h2", text: "Leilão extrajudicial é diferente?" },
      { type: "p", text: "Sim. No leilão extrajudicial da Lei 9.514/97, a regra do Art. 130, parágrafo único, do CTN não se aplica da mesma forma, pois não se trata de hasta pública judicial. Nesses casos, o edital do credor fiduciário costuma detalhar quem arca com IPTU e condomínio — e é comum que o arrematante assuma esses valores." },
    ],
    faq: [
      { q: "Vou pagar o IPTU atrasado de um imóvel arrematado em leilão judicial?", a: "Em regra, não. O Art. 130, parágrafo único, do CTN determina que os tributos anteriores se sub-rogam no preço da arrematação. O STJ (Tema 1.134) reforçou que o edital não pode transferir esse ônus ao arrematante, para editais publicados após o julgamento." },
      { q: "E as dívidas de condomínio?", a: "Dependem do edital e do caso concreto. Por serem obrigações propter rem, podem ser cobradas do novo proprietário se o edital assim previr. Sempre leia a cláusula de débitos." },
      { q: "A regra do CTN vale para leilão de banco?", a: "Não da mesma forma. Leilões extrajudiciais de alienação fiduciária seguem a Lei 9.514/97 e o edital do credor, que frequentemente atribui IPTU e condomínio ao arrematante." },
    ],
    utmCampaign: "artigo_sub_rogacao_tributaria",
  },
  {
    slug: "vale-a-pena-arrematar-imovel-alienacao-fiduciaria-leilao",
    title: "Vale a pena arrematar imóvel com alienação fiduciária em leilão?",
    metaDescription:
      "Entenda o leilão de alienação fiduciária (Lei 9.514/97): 1º e 2º leilão, lance mínimo, direito de preferência do devedor, riscos e vantagens.",
    category: "Leilão Extrajudicial",
    publishDate: "2026-09-30",
    readTime: 8,
    excerpt:
      "Os leilões de bancos movimentam milhares de imóveis por ano. Veja como funcionam as duas praças, onde estão os descontos e quais riscos considerar.",
    keyTakeaways: [
      "O procedimento é extrajudicial, conduzido pelo credor fiduciário e por leiloeiro oficial.",
      "No 2º leilão, o lance mínimo pode ficar bem abaixo do valor de avaliação.",
      "O devedor tem direito de preferência até a data do 2º leilão.",
    ],
    content: [
      { type: "p", text: "A alienação fiduciária é a garantia mais usada nos financiamentos imobiliários no Brasil. Quando o comprador deixa de pagar as parcelas, o banco pode retomar o imóvel sem processo judicial e levá-lo a leilão. Para o investidor, isso gera uma oferta recorrente de imóveis com documentação geralmente mais organizada." },
      { type: "h2", text: "Como funciona o procedimento" },
      { type: "ol", items: [
        "O devedor é intimado pelo Cartório de Registro de Imóveis para purgar a mora.",
        "Sem pagamento, a propriedade é consolidada em nome do credor fiduciário.",
        "O credor promove o 1º leilão, com lance mínimo igual ao valor de avaliação previsto no contrato.",
        "Sem arrematantes, ocorre o 2º leilão, com lance mínimo referenciado no valor da dívida e encargos, nos termos do art. 27 da Lei 9.514/97 (com as alterações da Lei 14.711/2023).",
      ]},
      { type: "h2", text: "Onde estão as oportunidades" },
      { type: "p", text: "Como o lance mínimo do segundo leilão se vincula ao saldo devedor — e não ao valor de mercado — é possível encontrar imóveis com descontos expressivos, sobretudo quando o financiamento já estava em estágio avançado de amortização." },
      { type: "h2", text: "Principais vantagens" },
      { type: "ul", items: [
        "Procedimento mais rápido que o judicial.",
        "Documentação do imóvel normalmente regular, pois foi aceita como garantia bancária.",
        "Possibilidade de reintegração de posse liminar em 60 dias (art. 30).",
        "Taxa de ocupação de 1% ao mês devida pelo antigo devedor que permanecer no imóvel (art. 37-A).",
      ]},
      { type: "h2", text: "Riscos que você precisa avaliar" },
      { type: "ul", items: [
        "Imóvel ocupado e tempo de desocupação.",
        "Débitos de IPTU e condomínio, frequentemente atribuídos ao arrematante pelo edital.",
        "Ações revisionais ou anulatórias movidas pelo antigo devedor.",
        "Exercício do direito de preferência pelo devedor até a data do 2º leilão (art. 27, §2º-B).",
        "Venda “ad corpus” e no estado em que se encontra, sem garantia de vícios ocultos.",
      ]},
      { type: "h2", text: "Então, vale a pena?" },
      { type: "p", text: "Pode valer — desde que a análise seja criteriosa. Um bom investimento em alienação fiduciária combina leitura minuciosa do edital, consulta à matrícula atualizada, pesquisa de preço de mercado na região e reserva financeira para custos de posse, ITBI, registro e eventual reforma." },
    ],
    faq: [
      { q: "Qual a diferença entre 1º e 2º leilão na alienação fiduciária?", a: "No 1º leilão, o lance mínimo corresponde ao valor de avaliação do imóvel. No 2º, o lance mínimo se vincula ao valor da dívida e encargos, conforme o art. 27 da Lei 9.514/97, o que geralmente gera maiores descontos." },
      { q: "O antigo dono pode recuperar o imóvel depois do leilão?", a: "O devedor tem direito de preferência para readquirir o imóvel até a data do 2º leilão, pagando a dívida e encargos. Depois da arrematação, eventual discussão ocorre em ação judicial própria." },
      { q: "Posso financiar um imóvel de leilão de banco?", a: "Alguns credores oferecem condições de parcelamento ou financiamento informadas no edital. Verifique sempre as condições de pagamento do lote específico." },
    ],
    utmCampaign: "artigo_alienacao_fiduciaria",
  },
  {
    slug: "diferencas-leilao-judicial-e-extrajudicial",
    title: "Diferenças práticas entre Leilão Judicial e Leilão Extrajudicial",
    metaDescription:
      "Leilão judicial ou extrajudicial? Compare base legal, lance mínimo, parcelamento, dívidas, posse e prazos para escolher a melhor oportunidade.",
    category: "Guia do Arrematante",
    publishDate: "2026-09-16",
    readTime: 6,
    excerpt:
      "Base legal, lance mínimo, dívidas e posse mudam bastante de um para o outro. Um comparativo direto para decidir em qual lote investir.",
    keyTakeaways: [
      "Judicial: determinado por um juiz, segue o CPC (arts. 879 a 903).",
      "Extrajudicial: promovido pelo credor, geralmente pela Lei 9.514/97.",
      "Regras de dívidas, parcelamento e desocupação mudam em cada modalidade.",
    ],
    content: [
      { type: "p", text: "Embora ambos sejam conduzidos por leiloeiros oficiais e possam acontecer na mesma plataforma online, os leilões judicial e extrajudicial têm origens, regras e riscos distintos. Saber diferenciá-los é o primeiro passo para escolher o lote certo para sua estratégia." },
      { type: "h2", text: "Leilão judicial" },
      { type: "p", text: "Ocorre dentro de um processo — execução de dívida, cumprimento de sentença, falência (Lei 11.101/05) ou ações trabalhistas e fiscais. É determinado pelo juiz e regido pelo CPC e pela Resolução nº 236/2016 do CNJ, que disciplina os leilões eletrônicos." },
      { type: "ul", items: [
        "Lance mínimo definido pelo juiz; não se admite preço vil (em regra, abaixo de 50% da avaliação — CPC, art. 891).",
        "Possibilidade de parcelamento com entrada mínima de 25% e saldo em até 30 meses (CPC, art. 895).",
        "Tributos anteriores sub-rogam-se no preço (CTN, art. 130, parágrafo único).",
        "Imissão na posse normalmente requerida nos próprios autos.",
      ]},
      { type: "h2", text: "Leilão extrajudicial" },
      { type: "p", text: "Promovido diretamente pelo credor, sem intervenção prévia do Judiciário. O caso mais comum é a alienação fiduciária de imóveis financiados (Lei 9.514/97), mas também há vendas de bens de empresas e de órgãos públicos." },
      { type: "ul", items: [
        "Duas praças: 1º leilão pelo valor de avaliação e 2º leilão vinculado ao valor da dívida.",
        "Condições de pagamento definidas pelo credor no edital.",
        "IPTU e condomínio frequentemente atribuídos ao arrematante.",
        "Reintegração de posse com liminar prevista em lei.",
      ]},
      { type: "h2", text: "Comparativo rápido" },
      { type: "ul", items: [
        "Quem determina: juiz (judicial) × credor (extrajudicial).",
        "Base legal: CPC e Res. 236 CNJ × Lei 9.514/97.",
        "Velocidade: geralmente mais lento × geralmente mais rápido.",
        "Dívidas anteriores: tendem a ser quitadas com o preço × variam conforme o edital.",
        "Comissão do leiloeiro: em regra 5% sobre o valor do lance, conforme edital (Decreto 21.981/32).",
      ]},
      { type: "h2", text: "Qual escolher?" },
      { type: "p", text: "Não existe modalidade melhor em absoluto. Quem busca desconto máximo e tem fôlego para prazos maiores costuma olhar para leilões judiciais; quem prefere processos mais objetivos e documentação bancária tende a se interessar pelos extrajudiciais. Em ambos os casos, o edital é o documento soberano." },
    ],
    faq: [
      { q: "Leilão judicial é mais seguro que o extrajudicial?", a: "Ambos são seguros quando conduzidos por leiloeiro oficial e analisados com cuidado. A segurança depende mais da leitura do edital, da matrícula e do processo do que da modalidade." },
      { q: "Posso parcelar um imóvel em leilão judicial?", a: "Sim. O art. 895 do CPC permite proposta de parcelamento com pelo menos 25% de entrada e saldo em até 30 meses, garantido por hipoteca do próprio bem, conforme as condições do edital." },
      { q: "Qual é a comissão do leiloeiro?", a: "Em regra, 5% sobre o valor da arrematação, paga pelo arrematante, conforme previsto no edital e no Decreto 21.981/32." },
    ],
    utmCampaign: "artigo_judicial_vs_extrajudicial",
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
export const sortedArticles = () => [...articles].sort((a, b) => b.publishDate.localeCompare(a.publishDate));
