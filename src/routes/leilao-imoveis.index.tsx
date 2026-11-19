import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { cities } from "@/data/cities";

const TITLE = "Leilão de Imóveis no Estado de São Paulo por Cidade | Pulse Leilões";
const DESC = "Encontre leilões judiciais e extrajudiciais de imóveis em São Paulo, Campinas, Jundiaí, Osasco, Guarujá e outras cidades paulistas.";

export const Route = createFileRoute("/leilao-imoveis/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/leilao-imoveis" },
    ],
    links: [{ rel: "canonical", href: "/leilao-imoveis" }],
  }),
  component: CitiesIndex,
});

function CitiesIndex() {
  return (
    <section className="py-16">
      <div className="container-site">
        <Breadcrumbs items={[{ label: "Praças de atuação" }]} />
        <p className="eyebrow mt-10">Praças de atuação</p>
        <h1 className="mt-4 max-w-3xl text-4xl text-foreground md:text-6xl">Leilão de imóveis no Estado de São Paulo</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">Escolha a cidade para ver o contexto do mercado local e como participar dos leilões da região.</p>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((c) => (
            <li key={c.slug}>
              <Link to="/leilao-imoveis/$cidade" params={{ cidade: c.slug }} className="group block h-full rounded-sm border border-border bg-card p-7 transition-colors hover:border-primary">
                <MapPin className="h-6 w-6 text-primary" aria-hidden />
                <h2 className="mt-4 text-2xl text-foreground">{c.name}</h2>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.region}</p>
                <p className="mt-4 line-clamp-3 text-sm text-muted-foreground">{c.intro}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">Ver praça <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden /></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
