"use client";
import { useState } from "react";
import { CASA, CARDAPIO } from "@/data/burgers";
import { ArrowUpRight } from "./Icones";
const normalizar = (texto: string) =>
  texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
export default function Cardapio() {
  const [busca, setBusca] = useState("");
  const itens = CARDAPIO.filter((item) =>
    normalizar(`${item.nome} ${item.ingredientes}`).includes(
      normalizar(busca.trim()),
    ),
  );
  return (
    <section
      id="cardapio"
      className="menu-section"
      aria-labelledby="menu-title"
    >
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / PRA ABRIR O APETITE</p>
            <h2 id="menu-title" className="display">
              ESCOLHA O<br />
              <span className="outline-ink">SEU NÚMERO.</span>
            </h2>
          </div>
          <div className="section-intro">
            <p>
              Tem quem não troque o favorito.
              <br />
              Tem quem queira provar todos.
            </p>
            <a className="text-link" href="#todos-os-burguers">
              Encontre o seu <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <div className="featured-grid">
          <article className="featured-card">
            <div className="featured-image">
              <img
                src="/cardapio/burguer-7.webp"
                alt="Hambúrguer com bacon, cheddar e anéis de cebola"
                loading="lazy"
                width="1200"
                height="1200"
              />
              <span className="image-tag">CROCÂNCIA EM CADA CAMADA</span>
            </div>
            <div className="featured-copy">
              <div className="featured-title">
                <h3>Burguer 7</h3>
                <span>07</span>
              </div>
              <p>
                Burguer, bacon, anéis de cebola empanados e cheddar fatiado.
              </p>
              <a
                href={CASA.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Consultar no WhatsApp <ArrowUpRight />
              </a>
            </div>
          </article>
          <article className="featured-card">
            <div className="featured-image">
              <img
                src="/cardapio/rodizio.webp"
                alt="Mini hambúrgueres com cheddar servidos em uma tábua"
                loading="lazy"
                width="1200"
                height="1200"
              />
              <span className="image-tag">A FOME PEDE COMPANHIA</span>
            </div>
            <div className="featured-copy">
              <div className="featured-title">
                <h3>Deu vontade de rodízio?</h3>
                <span aria-hidden="true">↗</span>
              </div>
              <p>
                Os mini burguers também aparecem por aqui. Fale com a casa para
                consultar dias, valores e disponibilidade.
              </p>
              <a
                href={CASA.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Consultar o rodízio <ArrowUpRight />
              </a>
            </div>
          </article>
        </div>
        <div className="menu-list-heading" id="todos-os-burguers">
          <div>
            <p className="eyebrow">UM NÚMERO. MUITA PERSONALIDADE.</p>
            <h3 className="display">QUAL É O SEU?</h3>
          </div>
          <label className="search-label">
            <span>Busque seu sabor</span>
            <input
              type="search"
              placeholder="Bacon, cheddar, Burguer 7…"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </label>
        </div>
        <p className="menu-note">
          Seleção para conhecer a casa. Confirme o cardápio atual, os preços e a
          disponibilidade pelo WhatsApp.
        </p>
        <p className="sr-only" role="status" aria-live="polite">
          {itens.length} opções encontradas
        </p>
        <ul className="burger-list">
          {itens.map((item) => (
            <li key={item.nome}>
              <span className="item-number" aria-hidden="true">
                {item.numero}
              </span>
              <div>
                <h4>{item.nome}</h4>
                <p>{item.ingredientes}</p>
              </div>
            </li>
          ))}
        </ul>
        {itens.length === 0 && (
          <div className="empty-search">
            <p>Nenhum sabor encontrado para “{busca}”.</p>
            <button
              type="button"
              className="text-link"
              onClick={() => setBusca("")}
            >
              Ver todos os burguers <span aria-hidden="true">↗</span>
            </button>
          </div>
        )}
        <div className="menu-bottom">
          <p>Escolheu? A conversa continua no WhatsApp.</p>
          <a
            href={CASA.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            Consultar cardápio atual <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
