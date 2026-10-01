"use client";

import { useEffect, useRef } from "react";
import { TRANSICAO } from "@/data/burgers";

/**
 * O vídeo do Flow — o 14 sai, o 7 entra, e volta — rodando sozinho num quadro
 * vertical. Antes ele andava conforme o scroll e travava; agora toca em loop.
 *
 * Só baixa quando está chegando perto da tela (o arquivo não é necessário no
 * primeiro carregamento) e para de tocar quando sai dela.
 */
export default function Transicao() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let carregado = false;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          if (!carregado) {
            video.src = TRANSICAO.video;
            video.load();
            carregado = true;
          }
          video.play().catch(() => {});
        } else if (carregado) {
          video.pause();
        }
      },
      { rootMargin: "300px 0px" },
    );
    obs.observe(video);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      aria-labelledby="transicao-titulo"
      className="relative overflow-hidden bg-[var(--color-amarelo)] px-5 pb-20 pt-24 md:px-6 md:pb-28 md:pt-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <div className="text-[var(--color-preto)]">
          <p className="titulo flex items-center gap-4 text-[clamp(5rem,14vw,10rem)]" aria-hidden>
            <span>{TRANSICAO.de}</span>
            <svg viewBox="0 0 60 40" className="h-[0.42em] w-auto" fill="none">
              <path d="M2 14h40V3l16 17-16 17V26H2z" fill="currentColor" />
            </svg>
            <span>{TRANSICAO.para}</span>
          </p>
          <h2 id="transicao-titulo" className="titulo mt-4 text-[clamp(2.25rem,5vw,3.75rem)]">
            {TRANSICAO.titulo}
          </h2>
          <p className="mt-5 max-w-md text-lg font-medium leading-relaxed text-[var(--color-preto)]/80">
            {TRANSICAO.texto}
          </p>
          <a
            href="#cardapio"
            className="mt-8 inline-flex items-center rounded-full bg-[var(--color-preto)] px-6 py-4 font-bold text-[var(--color-amarelo)] transition-transform hover:-translate-y-0.5"
          >
            Ver os 16 burguers
          </a>
        </div>

        {/* Quadro vertical com borda grossa e um giro leve: lê como um post
            colado na parede, que é de onde esse vídeo veio. */}
        <div className="relative mx-auto w-full max-w-[320px] md:max-w-[360px]">
          <div className="relative aspect-[9/16] rotate-2 overflow-hidden rounded-[28px] border-[6px] border-[var(--color-preto)] bg-[var(--color-preto)] shadow-[10px_10px_0_var(--color-preto)]">
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              poster={TRANSICAO.poster}
              loop
              muted
              playsInline
              preload="none"
              disablePictureInPicture
              aria-label={TRANSICAO.alt}
            />
          </div>
          <span className="titulo absolute -left-4 -top-5 -rotate-6 rounded-lg bg-[var(--color-ketchup)] px-3 py-1.5 text-xl text-white shadow-md">
            Contém amor
          </span>
        </div>
      </div>
    </section>
  );
}
