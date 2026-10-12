import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const title = Anton({ subsets: ["latin"], weight: "400", variable: "--fonte-titulo", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--fonte-corpo", display: "swap" });
export const metadata: Metadata = {
  title: "Red Hot — Street Food",
  description: "Burgers, hot dogs e sanduíches em Poços de Caldas. Conheça o cardápio Red Hot e peça pelo WhatsApp.",
  robots: { index: false, follow: false },
  icons: { icon: "/marca/red-hot.png", apple: "/marca/red-hot.png" },
};
export const viewport: Viewport = { themeColor: "#cf1721" };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR" className={title.variable + " " + body.variable}><body>{children}</body></html>;
}
