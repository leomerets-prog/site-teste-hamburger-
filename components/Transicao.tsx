"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { DESTAQUES, TRANSICAO } from "@/data/burgers";

/** Curva suave de 0 a 1: a troca acelera no meio e assenta nas pontas. */
function suave(x: number) {
  const t = Math.min(1, Math.max(0, x));
  return t * t * (3 - 2 * t);
}

const ingredientesDe = (slug: string) =>
  DESTAQUES.find((d) => d.slug === slug)?.ingredientes ?? [];

const numeroDe = (slug: string) =>
  DESTAQUES.find((d) => d.slug === slug)?.numero ?? "";

/**
 * Um lanche vira o outro conforme o scroll, num quadro vertical (9:16).
 *
 * No celular o quadro ocupa a tela inteira, que já é quase 9:16. No computador
 * ele fica numa coluna à direita do texto — esticar um vídeo em pé numa tela
 * deitada cortaria metade do lanche.
 *
 * Por enquanto dissolve uma foto na outra. Quando o vídeo do Flow chegar, ele
 * entra em TRANSICAO.video e esta seção passa a fazer scrub como o hero.
 */
export default function Transicao() {
  const trilhoRef = useRef<HTMLElement>(null);
  const [progresso, setProgresso] = useState(0);

  useEffect(() => {
    const trilho = trilhoRef.current;
    if (!trilho) return;
    let frame = 0;

    const medir = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const percorrivel = trilho.offsetHeight - window.innerHeight;
        const rolado = -trilho.getBoundingClientRect().top;
        setProgresso(
          percorrivel > 0 ? Math.min(1, Math.max(0, rolado / percorrivel)) : 0,
        );
      });
    };

    medir();
    window.addEventListener("scroll", medir, { passive: true });
    window.addEventListener("resize", medir);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", medir);
      window.removeEventListener("resize", medir);
    };
  }, []);

  // A troca acontece no miolo do trilho. As pontas ficam paradas de propósito:
  // o olho precisa reconhecer cada lanche antes de ver um virar o outro.
  const troca = suave((progresso - 0.25) / 0.5);

  // Foto dissolve; texto não. Dois números ou duas listas de ingredientes
  // sobrepostos a 50% viram borrão ilegível ("14" + "07" lia "1047"). Por isso
  // o texto do primeiro lanche sai inteiro na primeira metade da troca, e só
  // depois o do segundo entra.
  const saida = suave(1 - troca * 2);
  const entrada = suave(troca * 2 - 1);

  const lados = [
    { ...TRANSICAO.inicio, opacidade: 1 - troca, texto: saida, desloca: -1 },
    { ...TRANSICAO.fim, opacidade: troca, texto: entrada, desloca: 1 },
  ];

  return (
    <section
      ref={trilhoRef}
      aria-labelledby="transicao-titulo"
      className="relative h-[240svh] border-t border-[var(--color-carvao-claro)]"
    >
      <div className="sticky top-0 h-svh overflow-hidden">
        <div className="relative mx-auto h-full max-w-6xl md:px-6">
          {/* Quadro 9:16 — tela cheia no celular, coluna à direita no computador. */}
          <div className="absolute inset-0 md:inset-auto md:right-6 md:top-[53%] md:aspect-[9/16] md:h-[74svh] md:-translate-y-1/2 md:overflow-hidden md:rounded-sm">
            {lados.map((lado) => (
              <Image
                key={lado.slug}
                src={lado.foto}
                alt={lado.alt}
                fill
                sizes="(min-width: 768px) 480px, 100vw"
                className="object-cover"
                style={{
                  opacity: lado.opacidade,
                  // Um respiro de escala junto da dissolução: sem ele, a troca
                  // de foto lê como corte seco.
                  transform: `scale(${1.04 - 0.04 * lado.opacidade})`,
                }}
              />
            ))}
            {/* No celular o texto fica por cima da foto e precisa do véu. */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-[var(--color-carvao)] via-[var(--color-carvao)]/40 to-transparent md:hidden"
            />
          </div>

          {/* Texto — rodapé sobre a foto no celular, coluna à esquerda no computador. */}
          <div className="absolute inset-x-0 bottom-0 px-6 pb-14 md:inset-y-0 md:left-6 md:right-auto md:flex md:w-[44%] md:flex-col md:justify-center md:px-0 md:pb-0">
            <div className="relative h-[clamp(4.5rem,11vw,8.5rem)]" aria-hidden>
              {lados.map((lado) => (
                <span
                  key={lado.slug}
                  className="titulo-vitrine absolute left-0 top-0 text-[clamp(4.5rem,11vw,8.5rem)] leading-none text-[var(--color-brasa)]"
                  style={{
                    opacity: lado.texto,
                    transform: `translateY(${(1 - lado.texto) * 14 * lado.desloca}px)`,
                  }}
                >
                  {numeroDe(lado.slug)}
                </span>
              ))}
            </div>

            <h2
              id="transicao-titulo"
              className="titulo-vitrine mt-2 text-[clamp(2rem,4vw,3.25rem)] leading-tight"
            >
              {TRANSICAO.titulo}
            </h2>
            <p className="mt-4 max-w-sm text-lg leading-relaxed text-[var(--color-creme)]/85">
              {TRANSICAO.texto}
            </p>

            {/* Os ingredientes do lanche que está na tela, trocando junto. */}
            <div className="relative mt-6 h-12">
              {lados.map((lado) => (
                <p
                  key={lado.slug}
                  className="absolute inset-x-0 top-0 text-xs uppercase leading-relaxed tracking-[0.14em] text-[var(--color-fumaca)]"
                  style={{ opacity: lado.texto }}
                  aria-hidden={lado.texto < 0.5}
                >
                  {ingredientesDe(lado.slug).join(" · ")}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
