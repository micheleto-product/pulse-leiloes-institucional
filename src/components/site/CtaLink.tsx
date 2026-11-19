import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { ctaUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  campaign?: string;
  content?: string;
  variant?: "gold" | "outline" | "dark";
  size?: "md" | "lg";
  className?: string;
};

const variants = {
  gold: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-gold",
  outline: "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  dark: "bg-graphite text-primary hover:bg-charcoal",
};

/** Todo link para a plataforma oficial passa por aqui (UTM + evento GTM). */
export function CtaLink({ children, campaign, content, variant = "gold", size = "md", className }: Props) {
  return (
    <a
      href={ctaUrl({ campaign, content })}
      target="_blank"
      rel="noopener"
      data-gtm-event="clique_site_oficial"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-sm font-semibold tracking-wide transition-colors",
        size === "lg" ? "px-7 py-4 text-base" : "px-5 py-3 text-sm",
        variants[variant],
        className,
      )}
    >
      {children}
      <ArrowUpRight className="h-4 w-4" aria-hidden />
    </a>
  );
}
