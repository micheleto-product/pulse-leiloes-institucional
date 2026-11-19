import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, FileSearch, Gavel, MapPin, UserPlus } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaLink } from "@/components/site/CtaLink";
import { SchemaMarkup } from "@/components/site/SchemaMarkup";
import { cities, getCity } from "@/data/cities";
import { sortedArticles } from "@/data/articles";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/leilao-imoveis/$cidade")({
  loader: ({ params }) => {
    const city = getCity(params.cidade);
    if (!city) throw notFound();
    return { city };
  },
  head: ({ loaderData, params }) => {
    const c = loaderData?.city;
    if (!c) return { meta: [{ title: "Cidade não encontrada | Pulse Leilões" }, { name: "robots", content: "noindex" }] };
    const title = `Leilão de Imóveis em ${c.name} - SP | Editais Judiciais e Extrajudiciais`;
    const desc = `Leilões de imóveis em ${c.name} (SP): casas, apartamentos e terrenos em leilão judicial e extrajudicial. Veja como participar online com segurança.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/leilao-imoveis/${params.cidade}` },
      ],
      links: [{ rel: "canonical", href: `/leilao-imoveis/${params.cidade}` }],
    };
  },
  notFoundComponent: () => (
    <div className="container-site py-32 text-center">
      <h1 className="text-4xl text-foreground">Cidade não encontrada</h1>
      <Link to="/leilao-imoveis" className="mt-6 inline-block text-primary">Ver todas as praças</Link>
    </div>
  ),
  component: CityPage,
});

function CityPage() {
  const { city: c } = Route.useLoaderData();
  const content = `cidade_${c.slug}`;
  const campaign = "seo_local";
  const others = cities.filter((x) => x.slug !== c.slug);
  const faq = [
    { q: `Como participar de leilão de imóveis em ${c.name}?`, a: `Basta se cadastrar na plataforma oficial da ${SITE.brand}, enviar os documentos de habilitação, analisar o edital do lote e ofertar lances online durante o período do leilão.` },
    { q: `Os leilões de ${c.name} são presenciais?`, a: "Não é necessário comparecer: os lances são feitos 100% online, em tempo real, conforme a Resolução 236/2016 do CNJ para leilões judiciais eletrônicos." },
    { q: "Quem conduz os leilões?", a: `A Leiloeira Pública Oficial ${SITE.auctioneer}, matriculada na JUCESP sob nº ${SITE.jucesp}.` },
  ];
  return (
    <>
      <SchemaMarkup
        data={[
          { "@context": "https://schema.org", "@type": "Service", serviceType: "Leilão de imóveis", name: `Leilão de imóveis em ${c.name} - SP`, areaServed: { "@type": "City", name: `${c.name}, SP` }, provider: { "@type": "Organization", name: SITE.brand, url: SITE.officialSite } },
          { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
        ]}
      />
      <section className="border-b border-border py-16">
        <div className="container-site">
          <Breadcrumbs items={[{ label: "Praças de atuação", to: "/leilao-imoveis" }, { label: c.name }]} />
          <p className="eyebrow mt-10 flex items-center gap-2"><MapPin className="h-4 w-4" aria-hidden /> {c.region}</p>
          <h1 className="mt-4 max-w-4xl text-4xl leading-tight text-foreground md:text-6xl">Leilão de Imóveis em {c.name} - SP: Editais Judiciais e Extrajudiciais</h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{c.intro}</p>
          <div className="mt-8"><CtaLink campaign={campaign} content={content} size="lg">Ver leilões abertos em {c.name}</CtaLink></div>
        </div>
      </section>

      <section className="py-20" aria-labelledby="oportunidades">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div>
            <h2 id="oportunidades" className="text-3xl text-foreground md:text-4xl">Oportunidades em {c.name}</h2>
            <ul className="mt-8 space-y-4">
              {c.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-muted-foreground"><Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />{h}</li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted-foreground">Leilões judiciais da região tramitam no <strong className="text-foreground">{c.forum}</strong>, sob as regras do CPC (arts. 879 a 903). Leilões extrajudiciais seguem, em regra, a Lei 9.514/97.</p>
          </div>
          <div className="rounded-sm border border-border bg-card p-8">
            <h2 className="text-2xl text-foreground">Guia rápido: como participar online</h2>
            <ol className="mt-6 space-y-6">
              {[
                { icon: UserPlus, t: "Cadastro e habilitação", d: "Crie sua conta na plataforma oficial e envie RG, CPF e comprovante de endereço." },
                { icon: FileSearch, t: "Análise do edital", d: "Leia edital, matrícula atualizada e processo. Confira débitos e ocupação." },
                { icon: Gavel, t: "Lance online", d: "Oferte seu lance em tempo real. Ao vencer, siga as instruções de pagamento do edital." },
              ].map((s, i) => (
                <li key={s.t} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary font-bold text-primary-foreground">{i + 1}</span>
                  <div><h3 className="font-sans text-base font-semibold text-foreground">{s.t}</h3><p className="mt-1 text-sm text-muted-foreground">{s.d}</p></div>
                </li>
              ))}
            </ol>
            <CtaLink campaign={campaign} content={content} className="mt-8 w-full">Acessar plataforma oficial</CtaLink>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 text-paper-foreground" aria-labelledby="faq-cidade">
        <div className="container-site max-w-3xl">
          <h2 id="faq-cidade" className="text-3xl">Dúvidas sobre leilões em {c.name}</h2>
          <dl className="mt-8 space-y-6">
            {faq.map((f) => (<div key={f.q}><dt className="font-semibold">{f.q}</dt><dd className="mt-2 text-paper-muted">{f.a}</dd></div>))}
          </dl>
          <h2 className="mt-14 text-2xl">Leia antes de arrematar</h2>
          <ul className="mt-4 space-y-2">
            {sortedArticles().slice(0, 3).map((a) => (
              <li key={a.slug}><Link to="/blog/$slug" params={{ slug: a.slug }} className="text-paper-foreground underline decoration-primary underline-offset-4 hover:text-primary-hover">{a.title}</Link></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16" aria-labelledby="outras">
        <div className="container-site">
          <h2 id="outras" className="text-2xl text-foreground">Outras praças de atuação</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {others.map((o) => (
              <li key={o.slug}><Link to="/leilao-imoveis/$cidade" params={{ cidade: o.slug }} className="inline-block rounded-full border border-border px-4 py-2 text-sm text-muted-foreground hover:border-primary hover:text-primary">Leilão de imóveis em {o.name}</Link></li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
