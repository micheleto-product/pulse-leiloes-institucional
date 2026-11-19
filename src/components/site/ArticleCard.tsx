import { Link } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import type { Article } from "@/data/articles";
import { formatDate } from "@/lib/site";

export function ArticleCard({ article: a }: { article: Article }) {
  return (
    <article className="group relative flex flex-col rounded-sm border border-paper-border bg-background/0 p-7 transition-all hover:-translate-y-1 hover:border-primary-hover">
      <p className="text-xs font-bold uppercase tracking-widest text-primary-hover">{a.category}</p>
      <h3 className="mt-3 text-xl leading-snug text-paper-foreground">
        <Link to="/blog/$slug" params={{ slug: a.slug }} className="after:absolute after:inset-0">
          {a.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-paper-muted">{a.excerpt}</p>
      <p className="mt-6 flex items-center gap-3 text-xs text-paper-muted">
        <time dateTime={a.publishDate}>{formatDate(a.publishDate)}</time>
        <span aria-hidden>·</span>
        <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" aria-hidden />{a.readTime} min de leitura</span>
      </p>
    </article>
  );
}
