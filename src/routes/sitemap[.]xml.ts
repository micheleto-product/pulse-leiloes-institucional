import { createFileRoute } from "@tanstack/react-router";
import { articles } from "@/data/articles";
import { cities } from "@/data/cities";

// Sitemap gerado a partir dos dados: novos artigos/cidades entram automaticamente.
export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const urls = [
          { loc: "/", priority: "1.0" },
          { loc: "/blog", priority: "0.9" },
          { loc: "/leilao-imoveis", priority: "0.8" },
          { loc: "/legislacao", priority: "0.7" },
          ...articles.map((a) => ({ loc: `/blog/${a.slug}`, priority: "0.8", lastmod: a.publishDate })),
          ...cities.map((c) => ({ loc: `/leilao-imoveis/${c.slug}`, priority: "0.7" })),
        ];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${origin}${u.loc}</loc>${"lastmod" in u && u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""}<priority>${u.priority}</priority></url>`).join("\n")}
</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
      },
    },
  },
});
