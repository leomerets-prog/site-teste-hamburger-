import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import { CASA } from "@/data/burgers";
import "./globals.css";
const titulo = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--fonte-display",
  display: "swap",
});
const sans = Inter({
  subsets: ["latin"],
  variable: "--fonte-sans",
  display: "swap",
});
export const metadata: Metadata = {
  title: `${CASA.nomeCompleto} — Hamburgueria em ${CASA.cidade}`,
  description:
    "Conheça a Me Poupa: burguers, shakes e zero frescura em Poços de Caldas. Explore os sabores e fale com a casa pelo WhatsApp.",
  robots: { index: false, follow: false },
  icons: { icon: "/marca/logo-instagram.jpg" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${titulo.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
