import judicial from "@/assets/leilao-judicial.jpg";
import guide from "@/assets/guia-arrematante.jpg";
import taxes from "@/assets/tributos-imoveis.jpg";
import architecture from "@/assets/pulse-arquitetura.jpg";
import type { Article } from "@/data/articles";

const media: Record<Article["category"], { src: string; alt: string }> = {
  "Leilão Judicial": { src: judicial, alt: "Martelo de leilão e documentos jurídicos em uma mesa" },
  "Leilão Extrajudicial": { src: architecture, alt: "Arquitetura de edifícios comerciais em São Paulo" },
  "Guia do Arrematante": { src: guide, alt: "Entrega de uma chave ao lado de uma maquete de imóvel" },
  "Tributário": { src: taxes, alt: "Calculadora e documentos para análise dos custos de um imóvel" },
};

export const articleMedia = (article: Article) => media[article.category];