import { CASA } from "@/data/burgers";
import { ArrowUpRight, Pin } from "./Icones";
export default function ACasa() {
  return (
    <section
      id="a-casa"
      className="house-section"
      aria-labelledby="house-title"
    >
      <div className="wrap house-grid">
        <div className="house-photo">
          <img
            src="/marca/ambiente.jpg"
            alt="Ambiente da Me Poupa com letreiro de milkshake em neon e detalhes amarelos"
            width="512"
            height="640"
            loading="lazy"
          />
          <span>POÇOS DE CALDAS, MG ↗</span>
        </div>
        <div className="house-copy">
          <p className="eyebrow">02 / NOSSO PONTO DE ENCONTRO</p>
          <h2 id="house-title" className="display">
            VEM COM
            <br />
            FOME.
            <br />
            <span>FICA À VONTADE.</span>
          </h2>
          <p>
            Burguer na mesa, boa companhia do lado. A próxima parada é aqui, no
            coração de Poços de Caldas.
          </p>
          <div className="address-block">
            <Pin />
            <div>
              <strong>{CASA.endereco}</strong>
              <span>Centro · {CASA.cidade}</span>
              <span>{CASA.horario}</span>
            </div>
          </div>
          <div className="house-actions">
            <a
              href={CASA.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-yellow"
            >
              Como chegar <ArrowUpRight />
            </a>
            <a
              href={CASA.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Nosso Instagram <ArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
