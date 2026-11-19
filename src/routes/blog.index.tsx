import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArticleCard } from "@/components/site/ArticleCard";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaLink } from "@/components/site/CtaLink";
import { articles, sortedArticles } from "@/data/articles";

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
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const categories = ["Todos", ...Array.from(new Set(articles.map((a) => a.category)))];
  const [cat, setCat] = useState("Todos");
  const list = sortedArticles().filter((a) => cat === "Todos" || a.category === cat);
  return (
    <>
      <section className="border-b border-border py-16">
        <div className="container-site">
          <Breadcrumbs items={[{ label: "Blog Jurídico" }]} />
          <p className="eyebrow mt-10">Blog jurídico e educativo</p>
          <h1 className="mt-4 max-w-3xl text-4xl text-foreground md:text-6xl">Conheça o universo dos leilões de imóveis</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">Guias práticos, com base legal, para você arrematar com mais segurança.</p>
        </div>
      </section>
      <section className="bg-paper py-16 text-paper-foreground" aria-label="Lista de artigos">
        <div className="container-site">
          <div role="tablist" aria-label="Filtrar por categoria" className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={cat === c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${cat === c ? "border-graphite bg-graphite text-primary" : "border-paper-border text-paper-muted hover:border-paper-foreground hover:text-paper-foreground"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {list.map((a) => <ArticleCard key={a.slug} article={a} />)}
          </div>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-sm bg-graphite p-10 md:flex-row md:items-center">
            <p className="max-w-xl font-serif text-2xl text-foreground">Já sabe o que procura? Veja os imóveis com leilão aberto agora.</p>
            <CtaLink campaign="blog_index">Ver leilões abertos</CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}
