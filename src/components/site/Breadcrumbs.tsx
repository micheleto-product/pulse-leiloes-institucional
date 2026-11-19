import { ChevronRight } from "lucide-react";
import { SchemaMarkup } from "./SchemaMarkup";

export type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items, tone = "dark" }: { items: Crumb[]; tone?: "dark" | "light" }) {
  const all: Crumb[] = [{ label: "Início", to: "/" }, ...items];
  return (
    <nav aria-label="Trilha de navegação" className={tone === "light" ? "text-paper-muted" : "text-muted-foreground"}>
      <ol className="flex flex-wrap items-center gap-1.5 text-xs">
        {all.map((c, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {c.to && i < all.length - 1 ? (
              <a href={c.to} className="hover:text-primary">{c.label}</a>
            ) : (
              <span aria-current="page" className="line-clamp-1">{c.label}</span>
            )}
            {i < all.length - 1 && <ChevronRight className="h-3 w-3" aria-hidden />}
          </li>
        ))}
      </ol>
      <SchemaMarkup
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.label, ...(c.to ? { item: c.to } : {}) })),
        }}
      />
    </nav>
  );
}
