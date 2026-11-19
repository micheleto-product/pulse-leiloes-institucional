import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Article } from "@/data/articles";
import { formatDate } from "@/lib/site";
import { articleMedia } from "@/lib/article-media";

export function ArticleCard({ article: a }: { article: Article }) {
  const image = articleMedia(a);
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-md border border-paper-border bg-paper text-paper-foreground transition-all hover:-translate-y-1 hover:border-primary-hover motion-reduce:transform-none">
      <div className="aspect-[16/10] overflow-hidden">
        <img src={image.src} alt={image.alt} width={1024} height={768} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none" />
      </div>
      <div className="flex flex-1 flex-col p-6">
      <p className="self-start rounded-sm bg-primary px-2.5 py-1 text-[11px] font-bold text-primary-foreground">{a.category}</p>
      <h3 className="mt-4 text-xl leading-snug text-paper-foreground">
        <Link to="/blog/$slug" params={{ slug: a.slug }} className="after:absolute after:inset-0">
          {a.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-paper-muted">{a.excerpt}</p>
      <p className="mt-5 flex flex-wrap items-center gap-3 text-xs text-paper-muted">
        <time dateTime={a.publishDate}>{formatDate(a.publishDate)}</time>
        <span aria-hidden>·</span>
        <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" aria-hidden />{a.readTime} min de leitura</span>
      </p>
      <span className="mt-5 flex items-center justify-between border-t border-paper-border pt-4 text-sm font-semibold text-paper-foreground">Ler artigo <ArrowUpRight className="h-4 w-4" aria-hidden /></span>
      </div>
    </article>
  );
}
