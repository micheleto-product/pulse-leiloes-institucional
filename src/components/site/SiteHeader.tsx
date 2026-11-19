import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { CtaLink } from "./CtaLink";

const nav = [
  { to: "/", label: "Início" },
  { to: "/blog", label: "Blog Jurídico" },
  { to: "/leilao-imoveis", label: "Praças de Atuação" },
  { to: "/legislacao", label: "Legislação" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-graphite/95 backdrop-blur">
      <div className="container-site flex h-20 items-center justify-between gap-6">
        <Link to="/" aria-label="Pulse Leilões — página inicial"><Logo /></Link>
        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} activeOptions={{ exact: n.to === "/" }} className="text-muted-foreground transition-colors hover:text-primary data-[status=active]:text-primary">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:block">
          <CtaLink campaign="header">Leilões abertos</CtaLink>
        </div>
        <button className="lg:hidden text-foreground" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav aria-label="Navegação móvel" className="border-t border-border bg-charcoal lg:hidden">
          <ul className="container-site flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} onClick={() => setOpen(false)} className="block py-3 text-sm uppercase tracking-wider text-foreground hover:text-primary">{n.label}</Link>
              </li>
            ))}
            <li className="pt-2"><CtaLink campaign="header_mobile" className="w-full">Ver leilões abertos</CtaLink></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
