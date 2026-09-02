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

export const metadata: Metadata = {
  title: `${CASA.nomeCompleto} — Hambúrgueres | ${CASA.cidade}`,
  description: CASA.assinatura,
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
