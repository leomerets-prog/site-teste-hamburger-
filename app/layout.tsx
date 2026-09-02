import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { CASA } from "@/data/burgers";
import "./globals.css";

const serifa = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--fonte-serifa",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--fonte-sans",
  display: "swap",
});

// O title é o que aparece na aba e no Google; a description é o que aparece
// embaixo dele e na prévia do link no WhatsApp — por isso ela é uma frase de
// verdade, e não palavra-chave empilhada.
export const metadata: Metadata = {
  title: `${CASA.nomeCompleto} — Hamburgueria em ${CASA.cidade}`,
  description:
    "Catorze burguers numerados, o do Palhaço e rodízio todo dia por R$ 99,99. Rua Santa Catarina, 271, Poços de Caldas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${serifa.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
