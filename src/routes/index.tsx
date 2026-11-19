import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Building2, Gavel, Hammer, Home, KeyRound, LandPlot, Landmark, MapPin, Scale, ShieldCheck, TrendingUp, Repeat } from "lucide-react";
import hero from "@/assets/sao-paulo-noite.jpg";
import { CtaLink } from "@/components/site/CtaLink";
import { SchemaMarkup } from "@/components/site/SchemaMarkup";
import { ArticleCard } from "@/components/site/ArticleCard";
import { sortedArticles } from "@/data/articles";
import { cities } from "@/data/cities";
import { SITE } from "@/lib/site";

const TITLE = "Leilão de Imóveis em SP com Segurança Jurídica | Pulse Leilões";
const DESC = "Aprenda a investir em leilões judiciais e extrajudiciais de imóveis em São Paulo com segurança jurídica. Guias, legislação e editais com leiloeira oficial JUCESP.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const theses = [
  { icon: Hammer, title: "Reforma e Revenda Rápida", text: "Arrematar abaixo do mercado, reformar com orçamento controlado e revender em poucos meses." },
  { icon: Repeat, title: "Revenda Direta de Oportunidade", text: "Imóveis em bom estado com desconto relevante, prontos para revenda sem obras." },
  { icon: KeyRound, title: "Renda Passiva com Locação", text: "Compra com desconto que eleva a rentabilidade mensal do aluguel sobre o capital investido." },
  { icon: TrendingUp, title: "Valorização Patrimonial de Longo Prazo", text: "Formação de patrimônio em regiões com tendência de valorização consistente." },
  { icon: Scale, title: "Direitos Possessórios", text: "Aquisição de direitos sobre imóveis em situações específicas, com análise jurídica aprofundada." },
  { icon: LandPlot, title: "Incorporação e Loteamentos", text: "Terrenos e áreas com potencial construtivo para empreendimentos residenciais ou comerciais." },
];

const pillars = [
  { icon: BadgeCheck, title: "Leiloeira Pública Oficial", text: `${SITE.auctioneer}, matriculada na JUCESP sob nº ${SITE.jucesp}.` },
  { icon: Landmark, title: "Rito previsto em lei", text: "Leilões conduzidos conforme o CPC, a Resolução 236/2016 do CNJ e o Decreto 21.981/32." },
  { icon: ShieldCheck, title: "Transparência total", text: "Edital, matrícula, laudo e processo disponíveis antes do lance, para decisão informada." },
];

const steps = [
  { n: "01", t: "Cadastre-se", d: "Crie sua conta na plataforma oficial e envie os documentos de habilitação." },
  { n: "02", t: "Analise o edital", d: "Leia edital, matrícula e processo. Nossos guias ajudam em cada etapa." },
  { n: "03", t: "Dê seu lance online", d: "Participe em tempo real, de qualquer lugar, com total rastreabilidade." },
];

function Index() {
  const latest = sortedArticles().slice(0, 3);
  return (
    <>
      <SchemaMarkup
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE.brand,
            url: SITE.officialSite,
            email: SITE.email,
            telephone: SITE.phoneE164,
            address: { "@type": "PostalAddress", streetAddress: SITE.address.street, addressLocality: SITE.address.city, addressRegion: SITE.address.state, postalCode: SITE.address.zip, addressCountry: "BR" },
            founder: { "@type": "Person", name: SITE.auctioneer, jobTitle: `Leiloeira Pública Oficial — JUCESP nº ${SITE.jucesp}` },
          },
          {
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: `${SITE.brand} — Leilões Judiciais e Extrajudiciais`,
            url: SITE.officialSite,
            telephone: SITE.phoneE164,
            email: SITE.email,
            areaServed: cities.map((c) => ({ "@type": "City", name: `${c.name}, SP` })),
            address: { "@type": "PostalAddress", streetAddress: SITE.address.street, addressLocality: SITE.address.city, addressRegion: SITE.address.state, postalCode: SITE.address.zip, addressCountry: "BR" },
            employee: { "@type": "Person", name: SITE.auctioneer, jobTitle: "Leiloeira Pública Oficial", identifier: `JUCESP ${SITE.jucesp}` },
          },
        ]}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden" aria-labelledby="hero-title">
        <img src={hero} alt="Vista noturna dos prédios de São Paulo" width={1920} height={1088} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="container-site flex min-h-[86vh] flex-col justify-center py-24">
          <p className="eyebrow animate-fade-up">Leilões judiciais e extrajudiciais · Estado de São Paulo</p>
          <h1 id="hero-title" className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] text-foreground animate-fade-up md:text-6xl lg:text-7xl">
            Imóveis de leilão com <span className="text-primary">segurança jurídica</span> e informação de verdade.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-up">
            Entenda cada etapa — do edital à imissão na posse — e invista com clareza em oportunidades conduzidas por leiloeira pública oficial.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up">
            <CtaLink campaign="home_hero" size="lg">Ver leilões abertos</CtaLink>
            <Link to="/blog" className="inline-flex items-center gap-2 rounded-sm border border-border px-7 py-4 font-semibold text-foreground transition-colors hover:border-primary hover:text-primary">
              Aprender antes de investir <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <dl className="mt-16 grid max-w-3xl grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
            <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Leiloeira oficial</dt><dd className="mt-1 font-serif text-xl text-foreground">JUCESP nº {SITE.jucesp}</dd></div>
            <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Praças no estado</dt><dd className="mt-1 font-serif text-xl text-foreground">{cities.length} cidades</dd></div>
            <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Lances</dt><dd className="mt-1 font-serif text-xl text-foreground">100% online</dd></div>
          </dl>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section className="py-24" aria-labelledby="quem-somos">
        <div className="container-site grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">Quem somos & segurança jurídica</p>
            <span className="gold-rule mt-4" />
            <h2 id="quem-somos" className="mt-6 text-3xl text-foreground md:text-5xl">Tecnologia e rigor legal a serviço de quem arremata.</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A Pulse Leilões nasceu para simplificar o mercado de leilões, unindo plataforma digital e processos transparentes. Todos os leilões são conduzidos pela Leiloeira Pública Oficial <strong className="text-foreground">{SITE.auctioneer}</strong>, matriculada na Junta Comercial do Estado de São Paulo sob nº {SITE.jucesp}.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Este portal existe para que você chegue ao lance sabendo exatamente o que está comprando — sem promessas irreais, com base na lei.
            </p>
          </div>
          <ul className="grid gap-4">
            {pillars.map((p) => (
              <li key={p.title} className="flex gap-5 rounded-sm border border-border bg-card p-6 transition-colors hover:border-primary/50">
                <p.icon className="h-7 w-7 shrink-0 text-primary" aria-hidden />
                <div>
                  <h3 className="text-lg text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TESES */}
      <section className="border-y border-border bg-charcoal py-24" aria-labelledby="teses">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="eyebrow">Teses de investimento</p>
            <h2 id="teses" className="mt-4 text-3xl text-foreground md:text-5xl">Seis estratégias para diferentes perfis de investidor.</h2>
            <p className="mt-4 text-muted-foreground">Cada estratégia pede um tipo de lote, um prazo e um nível de risco. Identifique a sua antes de filtrar os editais.</p>
          </div>
          <ul className="mt-14 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-3">
            {theses.map((t, i) => (
              <li key={t.title} className="group bg-charcoal p-8 transition-colors hover:bg-graphite">
                <div className="flex items-center justify-between">
                  <t.icon className="h-8 w-8 text-primary" aria-hidden />
                  <span className="font-serif text-3xl text-muted-foreground/40">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-6 text-xl text-foreground">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex justify-center"><CtaLink campaign="home_teses" variant="outline">Encontrar lotes para minha estratégia</CtaLink></div>
        </div>
      </section>

      {/* COMO PARTICIPAR */}
      <section className="py-24" aria-labelledby="como-participar">
        <div className="container-site">
          <p className="eyebrow">Como participar</p>
          <h2 id="como-participar" className="mt-4 text-3xl text-foreground md:text-5xl">Três passos até o seu primeiro lance.</h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="border-t-2 border-primary pt-6">
                <span className="font-serif text-5xl text-primary">{s.n}</span>
                <h3 className="mt-4 text-xl text-foreground">{s.t}</h3>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* BLOG */}
      <section className="bg-paper py-24 text-paper-foreground" aria-labelledby="ultimos-artigos">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-primary-hover">Blog jurídico</p>
              <h2 id="ultimos-artigos" className="mt-4 text-3xl md:text-5xl">Últimos artigos</h2>
            </div>
            <Link to="/blog" className="inline-flex items-center gap-2 font-semibold text-paper-foreground hover:text-primary-hover">Ver todos <ArrowRight className="h-4 w-4" aria-hidden /></Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {latest.map((a) => <ArticleCard key={a.slug} article={a} />)}
          </div>
        </div>
      </section>

      {/* PRAÇAS */}
      <section className="py-24" aria-labelledby="pracas">
        <div className="container-site">
          <p className="eyebrow">Praças de atuação</p>
          <h2 id="pracas" className="mt-4 text-3xl text-foreground md:text-5xl">Leilões de imóveis em todo o Estado de São Paulo.</h2>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link to="/leilao-imoveis/$cidade" params={{ cidade: c.slug }} className="group flex items-center justify-between rounded-sm border border-border bg-card px-6 py-5 transition-colors hover:border-primary">
                  <span className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" aria-hidden />
                    <span>
                      <span className="block font-semibold text-foreground">Leilão de imóveis em {c.name}</span>
                      <span className="text-xs text-muted-foreground">{c.region}</span>
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="pb-24" aria-labelledby="cta-final">
        <div className="container-site">
          <div className="relative overflow-hidden rounded-sm border border-primary/30 bg-charcoal p-10 md:p-16">
            <Gavel className="absolute -right-6 -top-6 h-48 w-48 text-primary/10" aria-hidden />
            <div className="relative max-w-2xl">
              <h2 id="cta-final" className="text-3xl text-foreground md:text-4xl">Pronto para analisar oportunidades reais?</h2>
              <p className="mt-4 text-muted-foreground">Veja os imóveis residenciais, comerciais e terrenos com leilão aberto, com edital e documentos disponíveis.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CtaLink campaign="home_cta_final" size="lg">Conferir editais</CtaLink>
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground"><Home className="h-4 w-4 text-primary" aria-hidden /> Residenciais <Building2 className="ml-2 h-4 w-4 text-primary" aria-hidden /> Comerciais</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
