import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Logo } from "./Logo";
import { CtaLink } from "./CtaLink";
import { SITE, fullAddress } from "@/lib/site";
import { cities } from "@/data/cities";
import { sortedArticles } from "@/data/articles";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-graphite">
      <div className="border-b border-border bg-charcoal">
        <div className="container-site flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
          <div>
            <p className="eyebrow">Próximo passo</p>
            <p className="mt-2 font-serif text-2xl text-foreground">Consulte os editais e lotes com leilão em andamento.</p>
          </div>
          <CtaLink campaign="footer_banner" size="lg">Acessar plataforma oficial</CtaLink>
        </div>
      </div>
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Conteúdo jurídico e educativo sobre leilões judiciais e extrajudiciais no Estado de São Paulo.
          </p>
          <p className="mt-5 flex items-start gap-2 text-sm text-foreground">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
            <span>Leiloeira Pública Oficial: {SITE.auctioneer} — Matrícula JUCESP nº {SITE.jucesp}</span>
          </p>
        </div>
        <div>
          <h2 className="eyebrow">Artigos recentes</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {sortedArticles().slice(0, 4).map((a) => (
              <li key={a.slug}>
                <Link to="/blog/$slug" params={{ slug: a.slug }} className="text-muted-foreground hover:text-primary">{a.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="eyebrow">Praças de atuação</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link to="/leilao-imoveis/$cidade" params={{ cidade: c.slug }} className="text-muted-foreground hover:text-primary">{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <address className="not-italic">
          <h2 className="eyebrow">Atendimento</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden /><a href={SITE.whatsapp} target="_blank" rel="noopener" className="hover:text-primary">{SITE.phone} (WhatsApp)</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden /><a href={`mailto:${SITE.email}`} className="hover:text-primary">{SITE.email}</a></li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden /><span>{fullAddress}</span></li>
          </ul>
          <p className="mt-4 text-sm"><Link to="/legislacao" className="text-primary hover:underline">Base legal dos leilões →</Link></p>
        </address>
      </div>
      <div className="border-t border-border">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-muted-foreground md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {SITE.brand}. Todos os direitos reservados.</p>
          <p>Conteúdo informativo. Não substitui a leitura integral do edital nem consultoria jurídica.</p>
        </div>
      </div>
    </footer>
  );
}
