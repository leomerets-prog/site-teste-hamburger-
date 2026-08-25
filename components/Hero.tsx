"use client";

import { useEffect, useRef, useState } from "react";
import { CAMADAS, DESTAQUE, PILHA } from "@/data/burgers";

/** Altura de rolagem do hero. 4 telas = a montagem inteira sob controle do dedo. */
const TELAS_DE_SCROLL = 4;

/** Ponto do scrub em que as legendas já saíram de cena. */
const FIM_DAS_LEGENDAS = 0.42;

export default function Hero() {
  const trilhoRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progresso, setProgresso] = useState(0);
  const [pronto, setPronto] = useState(false);

  // A escolha do arquivo é feita aqui, e não com <source media="...">: navegadores
  // ignoram o atributo `media` dentro de <video>, e o resultado era o celular
  // baixando a versão 1080p.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const grande = window.matchMedia("(min-width: 768px)").matches;
    video.src = grande ? "/hero/hero-1080.mp4" : "/hero/hero-720.mp4";
    video.load();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const trilho = trilhoRef.current;
    if (!video || !trilho) return;

    const reduzido = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let alvo = 0;
    let atual = 0;
    let frame = 0;
    let vivo = true;

    const medir = () => {
      const percorrivel = trilho.offsetHeight - window.innerHeight;
      if (percorrivel <= 0) return 0;
      const rolado = -trilho.getBoundingClientRect().top;
      return Math.min(1, Math.max(0, rolado / percorrivel));
    };

    const aoRolar = () => {
      alvo = medir();
      setProgresso(alvo);
    };

    const loop = () => {
      if (!vivo) return;
      // Interpolação: o vídeo persegue o scroll em vez de saltar com ele.
      // Sem isso, o scrub fica granulado no trackpad.
      atual += (alvo - atual) * 0.12;
      const duracao = video.duration;
      if (Number.isFinite(duracao) && duracao > 0) {
        const tempo = atual * duracao;
        if (Math.abs(video.currentTime - tempo) > 0.01) {
          video.currentTime = tempo;
        }
      }
      frame = requestAnimationFrame(loop);
    };

    const aoCarregar = () => {
      setPronto(true);
      aoRolar();
      atual = alvo;
      if (reduzido) {
        // Sem scrub: mostra o lanche montado e pronto.
        video.currentTime = video.duration || 0;
        return;
      }
      frame = requestAnimationFrame(loop);
    };

    if (video.readyState >= 1) aoCarregar();
    else video.addEventListener("loadedmetadata", aoCarregar);

    window.addEventListener("scroll", aoRolar, { passive: true });
    window.addEventListener("resize", aoRolar);

    return () => {
      vivo = false;
      cancelAnimationFrame(frame);
      video.removeEventListener("loadedmetadata", aoCarregar);
      window.removeEventListener("scroll", aoRolar);
      window.removeEventListener("resize", aoRolar);
    };
  }, []);

  // As legendas vivem só enquanto o lanche está desmontado e pequeno.
  const forcaLegendas = Math.max(0, 1 - progresso / FIM_DAS_LEGENDAS);

  return (
    <section
      ref={trilhoRef}
      aria-label={`${DESTAQUE} sendo montado camada por camada`}
      style={{ height: `${TELAS_DE_SCROLL * 100}svh` }}
      className="relative"
    >
      <div className="sticky top-0 flex h-svh w-full items-center justify-center overflow-hidden bg-[var(--color-carvao)]">
        {/*
          Desktop: caixa 16:9 exata, do tamanho do vídeo. As legendas se ancoram
          nela e não na viewport — é isso que mantém cada linha grudada no
          ingrediente certo em qualquer proporção de tela.

          Celular: não há legenda para ancorar, então o vídeo enche a tela e o
          corte tira as laterais vazias. Numa tela alta, a caixa 16:9 deixaria o
          lanche do tamanho de um selo no meio do preto.
        */}
        <div className="relative h-full w-full md:h-auto md:w-[min(100vw,calc(100svh*16/9))] md:aspect-video">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            poster="/hero/poster-start.jpg"
            preload="auto"
            muted
            playsInline
            disablePictureInPicture
            tabIndex={-1}
          />

          {/* Legendas — só no desktop, onde sobra espaço lateral. */}
          <div
            className="pointer-events-none absolute inset-0 hidden md:block"
            aria-hidden
            style={{ opacity: forcaLegendas }}
          >
            {CAMADAS.map((camada, i) => {
              const esquerda = camada.lado === "esquerda";
              const recuo = (esquerda ? -1 : 1) * (1 - forcaLegendas) * 24;
              return (
                <div
                  key={camada.nome}
                  className="absolute flex items-center gap-3"
                  style={{
                    top: `${camada.y}%`,
                    left: esquerda ? undefined : `${PILHA.direita}%`,
                    right: esquerda
                      ? `${100 - PILHA.esquerda}%`
                      : undefined,
                    flexDirection: esquerda ? "row" : "row-reverse",
                    transform: `translateY(-50%) translateX(${recuo}px)`,
                  }}
                >
                  <span
                    className={`text-[11px] whitespace-nowrap uppercase tracking-[0.18em] text-[var(--color-creme)] ${
                      esquerda ? "text-right" : "text-left"
                    }`}
                  >
                    {camada.nome}
                  </span>
                  <span
                    className="h-px w-[clamp(2rem,6vw,6rem)] shrink-0 bg-[var(--color-creme)]/50"
                    style={{
                      transformOrigin: esquerda ? "right center" : "left center",
                      animation: pronto
                        ? `desenhar-linha 700ms ${
                            300 + i * 90
                          }ms both cubic-bezier(.2,.7,.3,1)`
                        : undefined,
                      transform: pronto ? undefined : "scaleX(0)",
                    }}
                  />
                  <span className="h-1 w-1 shrink-0 rounded-full bg-[var(--color-brasa)]" />
                </div>
              );
            })}
          </div>
        </div>

        {/*
          Rodapé do hero. O nome do lanche fica no canto, fora do caminho da
          pilha — sobreposto ao hambúrguer ele lia como se estivesse na frente.
        */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--color-carvao)] via-[var(--color-carvao)]/80 to-transparent pt-24 pb-8">
          <div className="mx-auto flex max-w-6xl items-end justify-between gap-6 px-6">
            <h1 className="titulo-vitrine text-[clamp(1.75rem,3.5vw,3rem)]">
              {DESTAQUE}
            </h1>
            <p
              className="hidden shrink-0 pb-2 text-sm text-[var(--color-fumaca)] sm:block"
              style={{ opacity: Math.max(0, 1 - progresso * 4) }}
            >
              role para montar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
