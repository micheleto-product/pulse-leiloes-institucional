import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, ChevronDown, Clock, Gavel } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaLink } from "@/components/site/CtaLink";
import { SchemaMarkup } from "@/components/site/SchemaMarkup";
import { ArticleCard } from "@/components/site/ArticleCard";
import { getArticle, sortedArticles, type Block } from "@/data/articles";
import { SITE, formatDate } from "@/lib/site";

const slugify = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData, params }) => {
    const a = loaderData?.article;
    if (!a) return { meta: [{ title: "Artigo não encontrado | Pulse Leilões" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${a.title} | Pulse Leilões` },
        { name: "description", content: a.metaDescription },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { property: "article:published_time", content: a.publishDate },
        { property: "article:section", content: a.category },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="container-site py-32 text-center">
      <h1 className="text-4xl text-foreground">Artigo não encontrado</h1>
      <Link to="/blog" className="mt-6 inline-block text-primary">Voltar ao blog</Link>
    </div>
  ),
  component: ArticlePage,
});

function renderBlock(b: Block, i: number) {
  switch (b.type) {
    case "h2": return <h2 key={i} id={slugify(b.text)}>{b.text}</h2>;
    case "h3": return <h3 key={i}>{b.text}</h3>;
    case "p": return <p key={i}>{b.text}</p>;
    case "quote": return <blockquote key={i}>{b.text}</blockquote>;
    case "ul": return <ul key={i}>{b.items.map((t, j) => <li key={j}>{t}</li>)}</ul>;
    case "ol": return <ol key={i}>{b.items.map((t, j) => <li key={j}>{t}</li>)}</ol>;
  }
}

function ReadingProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      setP(Math.min(100, (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)) * 100));
    };
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return <div aria-hidden className="fixed left-0 top-0 z-[60] h-1 bg-primary transition-[width]" style={{ width: `${p}%` }} />;
}

function ArticlePage() {
  const { article: a } = Route.useLoaderData();
  const headings = a.content.flatMap((b) => (b.type === "h2" ? [{ text: b.text }] : []));
  const mid = Math.floor(a.content.length / 2);
  const midIndex = a.content.findIndex((b, i) => i >= mid && b.type === "h2");
  const related = sortedArticles().filter((x) => x.slug !== a.slug).slice(0, 3);
  const campaign = a.utmCampaign;

  return (
    <>
      <ReadingProgress />
      <SchemaMarkup
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: a.title,
            description: a.metaDescription,
            datePublished: a.publishDate,
            dateModified: a.publishDate,
            articleSection: a.category,
            inLanguage: "pt-BR",
            author: { "@type": "Organization", name: SITE.brand, url: SITE.officialSite },
            publisher: { "@type": "Organization", name: SITE.brand, url: SITE.officialSite },
            mainEntityOfPage: `/blog/${a.slug}`,
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: a.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          },
        ]}
      />
      <article>
        <header className="border-b border-border py-14">
          <div className="container-site max-w-4xl">
            <Breadcrumbs items={[{ label: "Blog Jurídico", to: "/blog" }, { label: a.title }]} />
            <p className="eyebrow mt-10">{a.category}</p>
            <h1 className="mt-4 text-3xl leading-tight text-foreground md:text-5xl">{a.title}</h1>
            <p className="mt-5 text-lg text-muted-foreground">{a.excerpt}</p>
            <p className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span>Por <strong className="text-foreground">Equipe Jurídica {SITE.brand}</strong></span>
              <span aria-hidden>·</span>
              <time dateTime={a.publishDate}>{formatDate(a.publishDate)}</time>
              <span aria-hidden>·</span>
              <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" aria-hidden />{a.readTime} min</span>
            </p>
          </div>
        </header>

        <div className="bg-paper text-paper-foreground">
          <div className="container-site grid gap-12 py-14 lg:grid-cols-[1fr_300px]">
            <div className="min-w-0 max-w-3xl">
              <aside className="mb-10 rounded-sm border-l-4 border-primary bg-background/0 p-6 ring-1 ring-paper-border" aria-label="Resumo">
                <p className="font-serif text-lg font-semibold">Em resumo</p>
                <ul className="mt-3 space-y-2">
                  {a.keyTakeaways.map((k) => (
                    <li key={k} className="flex gap-2 text-sm leading-relaxed text-paper-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-hover" aria-hidden />{k}</li>
                  ))}
                </ul>
              </aside>

              <div className="prose-article">
                {a.content.map((b, i) => (
                  <div key={i} className="contents">
                    {i === midIndex && (
                      <aside className="not-prose my-10 flex flex-col gap-4 rounded-sm bg-graphite p-7 sm:flex-row sm:items-center sm:justify-between" aria-label="Plataforma oficial">
                        <div>
                          <p className="font-serif text-xl text-foreground">Coloque a teoria em prática</p>
                          <p className="mt-1 text-sm text-muted-foreground">Veja editais e lotes com leilão em andamento.</p>
                        </div>
                        <CtaLink campaign={campaign} content="banner_meio">Conferir editais</CtaLink>
                      </aside>
                    )}
                    {renderBlock(b, i)}
                  </div>
                ))}
              </div>

              <section className="mt-16" aria-labelledby="faq">
                <h2 id="faq" className="text-3xl">Perguntas frequentes</h2>
                <div className="mt-6 divide-y divide-paper-border border-y border-paper-border">
                  {a.faq.map((f) => (
                    <details key={f.q} className="group py-5">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-paper-foreground">
                        <h3 className="font-sans text-base">{f.q}</h3>
                        <ChevronDown className="h-5 w-5 shrink-0 text-primary-hover transition-transform group-open:rotate-180" aria-hidden />
                      </summary>
                      <p className="mt-3 leading-relaxed text-paper-muted">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>

              <p className="mt-10 text-xs text-paper-muted">
                Conteúdo de caráter informativo. Cada leilão é regido por seu edital; consulte-o integralmente e, se necessário, um advogado de sua confiança.
              </p>
            </div>

            <aside className="hidden lg:block" aria-label="Navegação do artigo">
              <div className="sticky top-28 space-y-6">
                <nav aria-label="Neste artigo" className="rounded-sm p-6 ring-1 ring-paper-border">
                  <p className="text-xs font-bold uppercase tracking-widest text-paper-muted">Neste artigo</p>
                  <ol className="mt-4 space-y-2 text-sm">
                    {headings.map((h) => (
                      <li key={h.text}><a href={`#${slugify(h.text)}`} className="text-paper-foreground hover:text-primary-hover">{h.text}</a></li>
                    ))}
                    <li><a href="#faq" className="text-paper-foreground hover:text-primary-hover">Perguntas frequentes</a></li>
                  </ol>
                </nav>
                <div className="rounded-sm bg-graphite p-6">
                  <Gavel className="h-8 w-8 text-primary" aria-hidden />
                  <p className="mt-4 font-serif text-xl text-foreground">Leilões abertos agora</p>
                  <p className="mt-2 text-sm text-muted-foreground">Imóveis em SP com edital, matrícula e laudo disponíveis.</p>
                  <CtaLink campaign={campaign} content="sidebar" className="mt-5 w-full">Ver leilões</CtaLink>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <section className="py-20" aria-labelledby="relacionados">
        <div className="container-site">
          <h2 id="relacionados" className="text-3xl text-foreground">Continue aprendendo</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3 [&_article]:border-border [&_h3]:text-foreground [&_p]:text-muted-foreground">
            {related.map((r) => <ArticleCard key={r.slug} article={r} />)}
          </div>
        </div>
      </section>

      {/* CTA fixo no mobile */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-graphite/95 p-3 backdrop-blur lg:hidden">
        <CtaLink campaign={campaign} content="sticky_mobile" className="w-full">Ver leilões abertos</CtaLink>
      </div>
    </>
  );
}
