import { CASA } from "@/data/burgers";
import Logo from "./Logo";
import { ArrowUpRight } from "./Icones";
export default function Cabecalho() {
  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <Logo />
        <nav aria-label="Navegação principal">
          <a href="#cardapio">Cardápio</a>
          <a href="#a-casa" className="nav-house">
            A casa
          </a>
          <a
            href={CASA.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-yellow header-contact"
          >
            WhatsApp <ArrowUpRight />
          </a>
        </nav>
      </div>
    </header>
  );
}
