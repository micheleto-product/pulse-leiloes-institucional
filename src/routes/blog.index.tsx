import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, Gavel, Landmark, Scale, Search, X } from "lucide-react";
import { ArticleCard } from "@/components/site/ArticleCard";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaLink } from "@/components/site/CtaLink";
import { Button } from "@/components/ui/button";
import { sortedArticles } from "@/data/articles";
import architecture from "@/assets/pulse-arquitetura.jpg";

const TITLE = "Blog Jurídico de Leilões de Imóveis | Pulse Leilões";
const DESC = "Artigos sobre leilão judicial e extrajudicial: imissão na posse, dívidas do imóvel, alienação fiduciária e como arrematar com segurança.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

const topics = [
  { category: "Leilão Judicial", title: "Judicial", description: "Da arrematação à imissão na posse.", icon: Gavel },
  { category: "Leilão Extrajudicial", title: "Extrajudicial", description: "Alienação fiduciária e seus cuidados.", icon: Landmark },
  { category: "Guia do Arrematante", title: "Guia do arrematante", description: "Informação para cada etapa do lance.", icon: BookOpen },
  { category: "Tributário", title: "Dívidas e tributos", description: "IPTU, condomínio e custos do imóvel.", icon: Scale },
];

function BlogIndex() {
  const [cat, setCat] = useState("Todos");
  const [search, setSearch] = useState("");
  const track = useRef<HTMLDivElement>(null);
  const results = useRef<HTMLElement>(null);
  const list = sortedArticles().filter((a) => (cat === "Todos" || a.category === cat) && `${a.title} ${a.excerpt}`.toLocaleLowerCase("pt-BR").includes(search.toLocaleLowerCase("pt-BR").trim()));
  const chooseTopic = (category: string) => {
    setCat(category);
    results.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
  };
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border" aria-labelledby="blog-title">
        <img src={architecture} alt="Edifícios de São Paulo vistos de baixo" width={1536} height={1024} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-editorial-overlay" />
        <div className="container-site pb-12 pt-7 md:pb-14 md:pt-9">
          <Breadcrumbs items={[{ label: "Blog Jurídico" }]} />
          <p className="eyebrow mt-10">Pulse Leilões · Blog jurídico</p>
          <h1 id="blog-title" className="mt-4 max-w-3xl text-3xl leading-tight text-foreground md:text-5xl">O universo dos <span className="text-primary">leilões de imóveis</span></h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/90 md:text-lg">Guias práticos e informação jurídica para decisões mais conscientes — do primeiro edital à conquista da posse.</p>
        </div>
        <div className="border-t border-border bg-graphite/75 py-7 md:py-9">
          <div className="container-site">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-foreground">Explore por assunto</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" aria-label="Assuntos anteriores" onClick={() => track.current?.scrollBy({ left: -340, behavior: "smooth" })}><ArrowLeft /></Button>
                <Button variant="outline" size="icon" aria-label="Próximos assuntos" onClick={() => track.current?.scrollBy({ left: 340, behavior: "smooth" })}><ArrowRight /></Button>
              </div>
            </div>
            <div ref={track} className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3">
              {topics.map((topic) => (
                <article key={topic.category} className={`flex w-[275px] shrink-0 snap-start flex-col rounded-md border bg-card p-6 md:w-[calc((100%-2.5rem)/3)] ${cat === topic.category ? "border-primary" : "border-border"}`}>
                  <topic.icon className="h-8 w-8 text-primary" strokeWidth={1.5} aria-hidden />
                  <h3 className="mt-4 text-xl text-foreground">{topic.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{topic.description}</p>
                  <Button variant="link" className="mt-4 h-auto justify-between p-0 text-primary" onClick={() => chooseTopic(topic.category)}>Ver artigos <ArrowRight /></Button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section ref={results} className="scroll-mt-24 bg-paper py-12 text-paper-foreground md:py-16" aria-labelledby="articles-title">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <h2 id="articles-title" className="text-3xl">{cat === "Todos" ? "Artigos e guias" : cat}</h2>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-3.5 h-4 w-4 text-paper-muted" aria-hidden />
              <input type="search" aria-label="Buscar artigos" placeholder="Buscar no blog" value={search} onChange={(e) => setSearch(e.target.value)} className="h-11 w-full rounded-sm border border-paper-border bg-paper pl-10 pr-3 text-sm text-paper-foreground placeholder:text-paper-muted" />
            </div>
          </div>
          <div aria-label="Filtrar por categoria" className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-b border-paper-border pb-3">
            {["Todos", ...topics.map((t) => t.category)].map((c) => (
              <Button key={c} variant="ghost" aria-pressed={cat === c} onClick={() => setCat(c)} className={`h-auto whitespace-normal rounded-none border-b-2 px-0 py-2 text-sm hover:bg-transparent hover:text-paper-foreground ${cat === c ? "border-primary font-bold text-paper-foreground" : "border-transparent text-paper-muted"}`}>{c}</Button>
            ))}
          </div>
          <p aria-live="polite" className="mt-5 text-xs text-paper-muted">{list.length} {list.length === 1 ? "artigo" : "artigos"}</p>
          <div className="mt-6 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {list.map((a) => <ArticleCard key={a.slug} article={a} />)}
          </div>
          {list.length === 0 && <div className="py-16 text-center"><p className="font-serif text-2xl">Nenhum artigo encontrado</p><Button variant="link" className="mt-4 text-paper-foreground" onClick={() => { setSearch(""); setCat("Todos"); }}><X /> Limpar filtros</Button></div>}
        </div>
      </section>
      <section className="border-t border-border bg-charcoal py-12">
        <div className="container-site flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div><p className="eyebrow">Da informação à decisão</p><h2 className="mt-3 max-w-xl text-2xl text-foreground md:text-3xl">Seu próximo passo começa com um edital.</h2><p className="mt-3 text-sm text-muted-foreground">Consulte os imóveis e documentos na plataforma oficial Pulse Leilões.</p></div>
          <CtaLink campaign="blog_index">Ver leilões abertos</CtaLink>
        </div>
      </section>
    </>
  );
}
