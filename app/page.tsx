import Abertura from "@/components/Abertura";
import BotaoWhatsapp from "@/components/BotaoWhatsapp";
import Cabecalho from "@/components/Cabecalho";
import Cardapio from "@/components/Cardapio";
import DadosEstruturados from "@/components/DadosEstruturados";
import Hero from "@/components/Hero";
import Letreiro from "@/components/Letreiro";
import Rodape from "@/components/Rodape";
import Rodizio from "@/components/Rodizio";
import Transicao from "@/components/Transicao";

export default function Home() {
  return (
    <>
      <DadosEstruturados />
      <Abertura />
      <Cabecalho />
      <main>
        <Hero />
        <Letreiro />
        <Transicao />
        <Cardapio />
        <Rodizio />
      </main>
      <Rodape />
      <BotaoWhatsapp />
    </>
  );
}
