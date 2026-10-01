import Cabecalho from "@/components/Cabecalho";
import DadosEstruturados from "@/components/DadosEstruturados";
import CamadasMobile from "@/components/CamadasMobile";
import Cardapio from "@/components/Cardapio";
import Hero from "@/components/Hero";
import Rodape from "@/components/Rodape";

export default function Home() {
  return (
    <>
      <DadosEstruturados />
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
