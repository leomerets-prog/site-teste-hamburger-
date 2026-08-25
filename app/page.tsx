import Cabecalho from "@/components/Cabecalho";
import CamadasMobile from "@/components/CamadasMobile";
import Cardapio from "@/components/Cardapio";
import Hero from "@/components/Hero";
import Rodape from "@/components/Rodape";

export default function Home() {
  return (
    <>
      <Cabecalho />
      <main>
        <Hero />
        <CamadasMobile />
        <Cardapio />
      </main>
      <Rodape />
    </>
  );
}
