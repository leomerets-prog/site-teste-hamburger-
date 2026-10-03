import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Anton, Inter } from "next/font/google";
import { CASA } from "@/data/burgers";
import { SITE_CONFIG } from "@/data/site.config";
import { SITE } from "@/lib/site";
import "./globals.css";

// Anton tem o mesmo corpo do "BURGERS & SHAKES" do logotipo: condensada,
// pesada, em caixa alta. Inter fica com o texto corrido.
const titulo = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--fonte-titulo",
  display: "swap",
});

const corpo = Inter({
  subsets: ["latin"],
  variable: "--fonte-corpo",
  display: "swap",
});

const DESCRICAO = SITE_CONFIG.seo.descricao;

/**
 * O title é o que aparece na aba e no Google; a description é o que aparece
 * embaixo dele e na prévia do link no WhatsApp — por isso ela é uma frase de
 * verdade, e não palavra-chave empilhada.
 *
 * O bloco Open Graph é o que mais vale para uma hamburgueria: quase todo acesso
 * vem de link colado no WhatsApp ou no Instagram, e sem ele o link chega como
 * uma linha de texto cinza. A imagem é `app/opengraph-image.jpg`, que o Next
 * encontra pelo nome e já publica com as dimensões certas.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: `${CASA.nomeCompleto} — Hamburgueria em ${CASA.cidade}`,
  description: DESCRICAO,
  applicationName: CASA.nomeCompleto,
  keywords: [...SITE_CONFIG.seo.palavrasChave],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE,
    siteName: `${CASA.nomeCompleto} ${CASA.assinaturaDaMarca}`,
    title: `${CASA.nomeCompleto} — Hamburgueria em ${CASA.cidade}`,
    description: DESCRICAO,
  },
  twitter: {
    card: "summary_large_image",
    title: `${CASA.nomeCompleto} — Hamburgueria em ${CASA.cidade}`,
    description: DESCRICAO,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cores = {
    "--color-amarelo": SITE_CONFIG.tema.primaria,
    "--color-amarelo-escuro": SITE_CONFIG.tema.primariaEscura,
    "--color-preto": SITE_CONFIG.tema.escura,
    "--color-grafite": SITE_CONFIG.tema.grafite,
    "--color-creme": SITE_CONFIG.tema.fundo,
    "--color-papel": SITE_CONFIG.tema.papel,
    "--color-tinta": SITE_CONFIG.tema.texto,
    "--color-cinza": SITE_CONFIG.tema.textoSuave,
    "--color-ketchup": SITE_CONFIG.tema.destaque,
  } as CSSProperties;

  return (
    <html lang="pt-BR" className={`${titulo.variable} ${corpo.variable}`} style={cores}>
      {/* Pinta a barra do navegador no celular com o amarelo da marca. */}
      <meta name="theme-color" content={SITE_CONFIG.tema.primaria} />
      <body>{children}</body>
    </html>
  );
}
