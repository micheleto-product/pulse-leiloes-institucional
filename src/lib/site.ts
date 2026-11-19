// Dados institucionais centralizados — use sempre estas constantes.
export const SITE = {
  brand: "Pulse Leilões",
  portalName: "Portal de Inteligência Pulse Leilões",
  auctioneer: "Mayara Turina Loterio",
  jucesp: "1.230",
  address: {
    street: "Rua Cláudio Soares, 72, Conjunto 1310",
    district: "Pinheiros",
    city: "São Paulo",
    state: "SP",
    zip: "05422-030",
  },
  phone: "(11) 5026-5664",
  phoneE164: "+551150265664",
  whatsapp: "https://wa.me/551150265664",
  email: "contato@pulseleiloes.com.br",
  officialSite: "https://www.pulseleiloes.com.br",
} as const;

const BASE_CTA = "https://www.pulseleiloes.com.br/proximos_leiloes/1/1/";

/** Link oficial de conversão com UTMs. `content` vira utm_content (ex.: cidade_campinas). */
export function ctaUrl(opts: { campaign?: string | undefined; content?: string | undefined } = {}) {
  const p = new URLSearchParams({
    utm_source: "portal_conteudo",
    utm_medium: "seo",
    utm_campaign: opts.campaign ?? "organico",
  });
  if (opts.content) p.set("utm_content", opts.content);
  return `${BASE_CTA}?${p.toString()}`;
}

export const fullAddress = `${SITE.address.street}, ${SITE.address.district}, ${SITE.address.city} - ${SITE.address.state}, CEP ${SITE.address.zip}`;

export function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}
