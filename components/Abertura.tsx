"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CASA } from "@/data/burgers";

/**
 * Gotas da borda da cortina. O logo tem um copo de shake escorrendo; a borda
 * repete o desenho, com gotas de largura e profundidade irregulares para não
 * parecer carimbo.
 */
const GOTAS: [number, number][] = [
  [90, 18], [60, 46], [110, 22], [70, 64], [95, 28], [55, 40], [120, 20],
  [65, 58], [100, 26], [80, 70], [60, 30], [110, 50], [75, 22], [90, 44],
  [70, 26], [110, 60], [80, 20],
];

function bordaEmGotas() {
  const total = GOTAS.reduce((s, [w]) => s + w, 0);
  const escala = 1440 / total;
  let x = 0;
  let d = "M0 0H1440V12";
  // Caminha da direita para a esquerda, descendo uma gota por trecho.
  for (let i = GOTAS.length - 1; i >= 0; i--) {
    const [largura, fundo] = GOTAS[i];
    const w = largura * escala;
    const x0 = 1440 - x;
    const x1 = x0 - w;
    d += `C${x0 - w * 0.22} 12 ${x0 - w * 0.3} ${12 + fundo} ${x0 - w * 0.5} ${12 + fundo}`;
    d += `C${x0 - w * 0.7} ${12 + fundo} ${x1 + w * 0.22} 12 ${x1} 12`;
    x += w;
  }
  return d + "V0Z";
}

const BORDA = bordaEmGotas();

/**
 * Abertura: a tela nasce amarela com o logo no centro, e a cortina sobe com a
 * borda pingando, revelando o hambúrguer do hero. Antes o site abria direto no
 * vídeo escuro, e o logo amarelo do cabeçalho não tinha relação nenhuma com o
 * que aparecia embaixo dele.
 *
 * É só CSS; o componente sai da árvore quando a animação acaba, para a cortina
 * não ficar invisível por cima da página interceptando nada. Com movimento
 * reduzido, a animação dura 0,01ms e a cortina já nasce fora da tela.
 */
export default function Abertura() {
  const [visivel, setVisivel] = useState(true);

  // Se a animação terminar antes de o React acordar (rede lenta, movimento
  // reduzido), o onAnimationEnd nunca chega. O relógio garante a saída.
  useEffect(() => {
    const t = setTimeout(() => setVisivel(false), 2200);
    return () => clearTimeout(t);
  }, []);

  if (!visivel) return null;

  return (
    <div
      aria-hidden
      onAnimationEnd={(e) => {
        if (e.animationName === "cortina-sobe") setVisivel(false);
      }}
      className="pointer-events-none fixed inset-0 z-[60]"
      style={{ animation: "cortina-sobe 1.9s cubic-bezier(.7,0,.2,1) forwards" }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-amarelo)]">
        <div style={{ animation: "logo-sai 1.9s cubic-bezier(.7,0,.2,1) forwards" }}>
          <Image
            src="/marca/me-poupa.png"
            alt={CASA.nomeCompleto}
            width={1570}
            height={845}
            priority
            sizes="(min-width: 768px) 440px, 70vw"
            className="h-auto w-[70vw] max-w-[440px]"
          />
        </div>
      </div>
      <svg
        className="absolute left-0 top-full h-[90px] w-full -translate-y-px"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
      >
        <path d={BORDA} fill="var(--color-amarelo)" />
      </svg>
    </div>
  );
}
