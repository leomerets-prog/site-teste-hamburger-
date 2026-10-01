import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import { CASA } from "@/data/burgers";
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

const DESCRICAO =
  "Catorze burguers numerados, o do Palhaço e rodízio todo dia por R$ 99,99. Rua Santa Catarina, 271, Poços de Caldas.";

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
  keywords: [
    "hamburgueria Poços de Caldas",
    "rodízio de hambúrguer Poços de Caldas",
    "Me Poupa Burgers",
    "melhor hambúrguer Poços de Caldas",
    "delivery hambúrguer Poços de Caldas",
  ],
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
  return (
    <html lang="pt-BR" className={`${titulo.variable} ${corpo.variable}`}>
      {/* Pinta a barra do navegador no celular com o amarelo da marca. */}
      <meta name="theme-color" content="#fdc403" />
      <body>{children}</body>
    </html>
  );
}
