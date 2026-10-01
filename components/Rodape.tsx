import { CASA } from "@/data/burgers";
import Logo from "./Logo";
import { ArrowUpRight } from "./Icones";
export default function Rodape() {
  return (
    <>
      <section className="closing-cta">
        <div className="wrap">
          <p className="eyebrow">JÁ SABE ONDE VAI MATAR A FOME?</p>
          <a
            href={CASA.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com a Me Poupa no WhatsApp"
          >
            BORA DE ME POUPA.
            <ArrowUpRight />
          </a>
        </div>
      </section>
      <footer className="site-footer">
        <div className="wrap footer-top">
          <Logo />
          <p>
            Hamburgueria artesanal.
            <br />
            <strong>Sem frescura.</strong>
          </p>
          <a
            href={CASA.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            @mepoupaoficial <ArrowUpRight />
          </a>
        </div>
        <div className="wrap footer-bottom">
          <span>Me Poupa · Poços de Caldas, MG</span>
          <span>Proposta de site · Versão de apresentação</span>
        </div>
      </footer>
    </>
  );
}
