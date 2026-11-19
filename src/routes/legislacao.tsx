import { createFileRoute } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaLink } from "@/components/site/CtaLink";
import { SITE } from "@/lib/site";

const TITLE = "Legislação dos Leilões Judiciais e Extrajudiciais | Pulse Leilões";
const DESC = "Base legal dos leilões de imóveis: CPC arts. 879 a 903, Resolução 236/2016 do CNJ, Decreto 21.981/32, Lei 9.514/97 e Lei 11.101/05.";

export const Route = createFileRoute("/legislacao")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/legislacao" },
    ],
    links: [{ rel: "canonical", href: "/legislacao" }],
  }),
  component: Legislacao,
});

const laws = [
  { id: "cpc", name: "Código de Processo Civil — arts. 879 a 903", scope: "Leilão judicial", points: [
    "Define a alienação por iniciativa particular ou em leilão judicial eletrônico ou presencial (art. 879).",
    "Veda a arrematação por preço vil — em regra, inferior a 50% da avaliação (art. 891).",
    "Permite proposta de pagamento parcelado, com entrada mínima de 25% e saldo em até 30 meses (art. 895).",
    "Considera a arrematação perfeita, acabada e irretratável após a assinatura do auto (art. 903).",
  ]},
  { id: "cnj", name: "Resolução nº 236/2016 do CNJ", scope: "Leilão judicial eletrônico", points: [
    "Regulamenta os leilões judiciais eletrônicos em todo o país.",
    "Estabelece requisitos de credenciamento de leiloeiros junto aos tribunais.",
    "Define regras de publicidade, segurança e transparência das plataformas.",
  ]},
  { id: "decreto", name: "Decreto nº 21.981/1932", scope: "Profissão de leiloeiro", points: [
    "Regula a profissão de leiloeiro público oficial, com matrícula na Junta Comercial.",
    "Estabelece deveres de guarda, escrituração e prestação de contas.",
    "Prevê a comissão do leiloeiro, usualmente de 5% sobre o valor da arrematação.",
  ]},
  { id: "lei-9514", name: "Lei nº 9.514/1997 — Alienação Fiduciária", scope: "Leilão extrajudicial", points: [
    "Disciplina a consolidação da propriedade em favor do credor fiduciário.",
    "Prevê dois leilões públicos e as regras de lance mínimo (art. 27, com alterações da Lei 14.711/2023).",
    "Garante reintegração de posse liminar em 60 dias ao arrematante (art. 30).",
    "Fixa taxa de ocupação de 1% ao mês devida pelo antigo devedor (art. 37-A).",
  ]},
  { id: "lei-11101", name: "Lei nº 11.101/2005 — Recuperação Judicial e Falência", scope: "Leilão em falência", points: [
    "Disciplina a venda de ativos de empresas em recuperação judicial ou falência.",
    "Prevê, em regra, que o arrematante não sucede nas obrigações do devedor (art. 141).",
  ]},
];

function Legislacao() {
  return (
    <>
      <section className="border-b border-border py-16">
        <div className="container-site">
          <Breadcrumbs items={[{ label: "Legislação" }]} />
          <p className="eyebrow mt-10">Amparo legal</p>
          <h1 className="mt-4 max-w-4xl text-4xl text-foreground md:text-6xl">A legislação que dá segurança aos leilões</h1>
          <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
            Todo leilão conduzido pela {SITE.brand} segue rito previsto em lei, sob responsabilidade da Leiloeira Pública Oficial {SITE.auctioneer} (JUCESP nº {SITE.jucesp}).
          </p>
          <nav aria-label="Normas nesta página" className="mt-8 flex flex-wrap gap-2">
            {laws.map((l) => <a key={l.id} href={`#${l.id}`} className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground hover:border-primary hover:text-primary">{l.name.split(" —")[0]}</a>)}
          </nav>
        </div>
      </section>
      <section className="bg-paper py-16 text-paper-foreground">
        <div className="container-site max-w-4xl space-y-8">
          {laws.map((l) => (
            <article key={l.id} id={l.id} className="scroll-mt-28 rounded-sm p-8 ring-1 ring-paper-border">
              <p className="text-xs font-bold uppercase tracking-widest text-primary-hover">{l.scope}</p>
              <h2 className="mt-2 flex items-start gap-3 text-2xl"><BookOpen className="mt-1 h-6 w-6 shrink-0 text-primary-hover" aria-hidden />{l.name}</h2>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-paper-muted marker:text-primary-hover">
                {l.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </article>
          ))}
          <div className="flex flex-col items-start justify-between gap-6 rounded-sm bg-graphite p-10 md:flex-row md:items-center">
            <p className="max-w-xl font-serif text-2xl text-foreground">Cada edital detalha as regras específicas do lote.</p>
            <CtaLink campaign="legislacao">Conferir editais</CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}
