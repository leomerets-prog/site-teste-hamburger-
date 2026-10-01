"use client";

import Image from "next/image";
import { useState } from "react";
import { CARDAPIO, CHAMADA_CARDAPIO, type Item } from "@/data/burgers";

/**
 * O cardápio inteiro, em abas: burguers, hot dogs, porções, shakes e bebidas.
 *
 * Todas as abas estão no HTML desde o início, só escondidas — o Google lê o
 * cardápio todo, e trocar de aba não espera rede nenhuma.
 */
export default function Cardapio() {
  const [aberta, setAberta] = useState(CARDAPIO[0].id);

  return (
    <section id="cardapio" aria-labelledby="cardapio-titulo" className="bg-[var(--color-creme)] px-5 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="inline-block -rotate-2 rounded-md bg-[var(--color-preto)] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-amarelo)]">
          {CHAMADA_CARDAPIO.etiqueta}
        </p>
        <h2 id="cardapio-titulo" className="titulo mt-4 text-[clamp(3rem,8vw,6rem)] text-[var(--color-preto)]">
          {CHAMADA_CARDAPIO.titulo[0]}
          <br />
          <span className="text-[var(--color-ketchup)]">{CHAMADA_CARDAPIO.titulo[1]}</span>
        </h2>

        {/* Abas. No celular rolam de lado em vez de quebrar linha. */}
        <div
          role="tablist"
          aria-label="Partes do cardápio"
          className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:px-0"
        >
          {CARDAPIO.map((aba) => {
            const ativa = aba.id === aberta;
            return (
              <button
                key={aba.id}
                role="tab"
                id={`aba-${aba.id}`}
                aria-selected={ativa}
                aria-controls={`painel-${aba.id}`}
                onClick={() => setAberta(aba.id)}
                className={`shrink-0 rounded-full border-[3px] border-[var(--color-preto)] px-5 py-2.5 text-sm font-bold uppercase tracking-[0.06em] transition-all ${
                  ativa
                    ? "bg-[var(--color-preto)] text-[var(--color-amarelo)] shadow-[3px_3px_0_var(--color-amarelo)]"
                    : "bg-white text-[var(--color-preto)] hover:-translate-y-0.5 hover:bg-[var(--color-amarelo)]"
                }`}
              >
                {aba.rotulo}
              </button>
            );
          })}
        </div>

        {CARDAPIO.map((aba) => (
          <div
            key={aba.id}
            role="tabpanel"
            id={`painel-${aba.id}`}
            aria-labelledby={`aba-${aba.id}`}
            hidden={aba.id !== aberta}
            className="mt-10"
          >
            <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <h3 className="titulo text-4xl text-[var(--color-preto)] md:text-5xl">{aba.titulo}</h3>
              <p className="max-w-md text-base font-medium text-[var(--color-cinza)]">{aba.intro}</p>
            </div>

            {aba.grupos.map((grupo, gi) => (
              <div key={gi} className={gi > 0 ? "mt-14" : ""}>
                {grupo.titulo && (
                  <h4 className="titulo mb-5 text-2xl text-[var(--color-preto)]">{grupo.titulo}</h4>
                )}
                {grupo.nota && (
                  <p className="mb-6 inline-block rotate-1 rounded-lg bg-[var(--color-amarelo)] px-4 py-2 text-sm font-bold text-[var(--color-preto)]">
                    {grupo.nota}
                  </p>
                )}
                <Grupo itens={grupo.itens} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * Escolhe o arranjo pelo que o grupo tem: sabores sem descrição viram uma
 * lista corrida num painel só (nove cards com uma palavra cada pareciam
 * botões); uma foto sozinha divide a linha com a lista, em vez de deixar meia
 * tela vazia ao lado.
 */
function Grupo({ itens }: { itens: Item[] }) {
  const comFoto = itens.filter((i) => i.foto);
  const semFoto = itens.filter((i) => !i.foto);

  if (itens.every((i) => !i.descricao && !i.foto && !i.numero)) {
    return (
      <ul className="grid gap-x-10 gap-y-4 rounded-3xl border-[3px] border-[var(--color-preto)] bg-white p-6 shadow-[6px_6px_0_var(--color-preto)] sm:grid-cols-2 md:p-8 lg:grid-cols-3">
        {itens.map((item) => (
          <li key={item.nome} className="titulo flex items-center gap-3 text-2xl text-[var(--color-preto)] md:text-3xl">
            <span aria-hidden className="h-3 w-3 shrink-0 rotate-45 bg-[var(--color-amarelo)] ring-2 ring-[var(--color-preto)]" />
            {item.nome}
          </li>
        ))}
      </ul>
    );
  }

  const lista = (colunas: string) => (
    <ul className={`grid gap-3 md:gap-4 ${colunas}`}>
      {semFoto.map((item) => (
        <li key={item.nome}>
          <CardSimples item={item} />
        </li>
      ))}
    </ul>
  );

  if (comFoto.length === 1) {
    return (
      <div className="grid gap-6 md:grid-cols-2">
        <CardComFoto item={comFoto[0]} />
        {lista("content-start")}
      </div>
    );
  }

  return (
    <>
      {comFoto.length > 0 && (
        <div className="mb-6 grid gap-6 md:grid-cols-2">
          {comFoto.map((item) => (
            <CardComFoto key={item.nome} item={item} />
          ))}
        </div>
      )}
      {lista("sm:grid-cols-2 lg:grid-cols-3")}
    </>
  );
}

const MOLDURA =
  "rounded-3xl border-[3px] border-[var(--color-preto)] bg-white shadow-[6px_6px_0_var(--color-preto)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[9px_9px_0_var(--color-preto)]";

function Selo({ texto }: { texto: string }) {
  return (
    <span className="rotate-3 rounded-md bg-[var(--color-ketchup)] px-2.5 py-1 text-xs font-bold uppercase tracking-[0.06em] text-white">
      {texto}
    </span>
  );
}

function CardComFoto({ item }: { item: Item }) {
  return (
    <article className={`overflow-hidden ${MOLDURA}`}>
      <div className="relative aspect-[4/3] border-b-[3px] border-[var(--color-preto)] md:aspect-[5/4]">
        <Image src={item.foto!} alt={item.alt ?? item.nome} fill sizes="(min-width: 768px) 560px, 100vw" className="object-cover" />
        {item.numero && (
          <span className="titulo absolute left-4 top-4 flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-[var(--color-preto)] bg-[var(--color-amarelo)] text-3xl text-[var(--color-preto)]">
            {item.numero}
          </span>
        )}
        {item.selo && (
          <span className="absolute right-4 top-4">
            <Selo texto={item.selo} />
          </span>
        )}
      </div>
      <div className="p-6">
        <h4 className="titulo text-3xl text-[var(--color-preto)] md:text-4xl">{item.nome}</h4>
        {item.chamada && (
          <p className="mt-2 text-lg font-semibold leading-snug text-[var(--color-tinta)]">{item.chamada}</p>
        )}
        {item.descricao && <p className="mt-3 text-sm leading-relaxed text-[var(--color-cinza)]">{item.descricao}</p>}
      </div>
    </article>
  );
}

function CardSimples({ item }: { item: Item }) {
  return (
    <article className={`flex h-full items-start gap-4 p-4 md:p-5 ${MOLDURA}`}>
      {item.numero && (
        <span className="titulo flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-amarelo)] text-2xl text-[var(--color-preto)] md:h-14 md:w-14 md:text-3xl">
          {item.numero}
        </span>
      )}
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="titulo text-2xl text-[var(--color-preto)]">{item.nome}</h4>
          {item.selo && <Selo texto={item.selo} />}
        </div>
        {item.descricao && <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-cinza)]">{item.descricao}</p>}
      </div>
    </article>
  );
}
