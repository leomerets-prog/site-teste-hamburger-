import Cabecalho from "@/components/Cabecalho";
import ACasa from "@/components/ACasa";
import Cardapio from "@/components/Cardapio";
import Hero from "@/components/Hero";
import Rodape from "@/components/Rodape";
export default function Home() {
  return (
    <>
      <a href="#cardapio" className="skip-link">
        Pular para o cardápio
      </a>
      <Cabecalho />
      <main id="inicio">
        <Hero />
        <div
          className="brand-strip"
          aria-label="Burguers, shakes e zero frescura"
        >
          <span>BURGUERS</span>
          <span aria-hidden="true">✳</span>
          <span>SHAKES</span>
          <span aria-hidden="true">✳</span>
          <span>ZERO FRESCURA</span>
          <span aria-hidden="true">✳</span>
          <span>ME POUPA</span>
        </div>
        <Cardapio />
        <ACasa />
      </main>
      <Rodape />
    </>
  );
}
