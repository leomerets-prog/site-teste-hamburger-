"use client";

import { useEffect, useRef, useState } from "react";
import { CAMADAS, HERO, PILHA } from "@/data/burgers";
import { SITE_CONFIG } from "@/data/site.config";

/** Proporção do vídeo do hero. */
const PROPORCAO = 16 / 9;

/**
 * Linha do tempo do vídeo em loop, em segundos. O arquivo é ida e volta:
 * monta (8s), segura montado, desmonta (8s), segura aberto — e repete sem
 * emenda, porque o último quadro é igual ao primeiro.
 */
const MONTA = 8;
const SEGURA_MONTADO = 1.2;
const DESMONTA = 8;

/** Quanto o lanche está montado no instante t: 0 aberto, 1 fechado. */
function montagem(t: number) {
  if (t < MONTA) return t / MONTA;
  if (t < MONTA + SEGURA_MONTADO) return 1;
  if (t < MONTA + SEGURA_MONTADO + DESMONTA)
    return 1 - (t - MONTA - SEGURA_MONTADO) / DESMONTA;
  return 0;
}

/** Faixas que as legendas não invadem: o menu no topo e o texto embaixo. */
const FAIXA_DO_TOPO = 96;
const FAIXA_DO_TEXTO = 300;

type Caixa = { x: number; y: number; largura: number; altura: number; palco: number };

/**
 * Hero com o vídeo rodando sozinho. Antes o vídeo andava conforme o scroll, e
 * cada movimento do dedo virava uma busca de quadro — no celular, travava.
 * Agora ele toca em loop, mudo, e só para quando sai da tela.
 */
export default function Hero() {
  const palcoRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const legendasRef = useRef<HTMLDivElement>(null);
  const [caixa, setCaixa] = useState<Caixa | null>(null);

  // Arquivo certo para a tela. `<source media>` é ignorado dentro de <video>.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const grande = window.matchMedia("(min-width: 768px)").matches;
    video.src = grande
      ? SITE_CONFIG.midia.hero.videoDesktop
      : SITE_CONFIG.midia.hero.videoMobile;
    video.load();
    video.play().catch(() => {});

    // Fora da tela, para de decodificar: economiza bateria e deixa o resto
    // da página rolar liso.
    const observador = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
    observador.observe(video);
    return () => observador.disconnect();
  }, []);

  // Onde o quadro 16:9 cai depois do corte do object-cover. As legendas se
  // ancoram nele, e não na viewport.
  useEffect(() => {
    const palco = palcoRef.current;
    if (!palco) return;
    const medir = () => {
      const { width: W, height: H } = palco.getBoundingClientRect();
      if (!W || !H) return;
      const altura = Math.max(W / PROPORCAO, H);
      const largura = altura * PROPORCAO;
      setCaixa({ x: (W - largura) / 2, y: (H - altura) / 2, largura, altura, palco: H });
    };
    medir();
    const obs = new ResizeObserver(medir);
    obs.observe(palco);
    return () => obs.disconnect();
  }, []);

  // As legendas acompanham o tempo do vídeo. Escreve direto no estilo, sem
  // passar pelo React: são 60 atualizações por segundo e nenhuma precisa
  // re-renderizar componente nenhum.
  useEffect(() => {
    let frame = 0;
    const laco = () => {
      const video = videoRef.current;
      const camada = legendasRef.current;
      if (video && camada) {
        const forca = Math.max(0, 1 - montagem(video.currentTime) / 0.4);
        camada.style.opacity = String(forca);
        camada.style.setProperty("--recuo", `${(1 - forca) * 24}px`);
      }
      frame = requestAnimationFrame(laco);
    };
    frame = requestAnimationFrame(laco);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      id="topo"
      aria-label="Me Poupa — hambúrguer sendo montado"
      className="relative bg-[var(--color-preto)]"
    >
      <div ref={palcoRef} className="relative h-svh min-h-[620px] w-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          poster={SITE_CONFIG.midia.hero.poster}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          tabIndex={-1}
          aria-hidden
        />

        {/* Legendas — só no computador, onde sobra espaço dos lados do lanche. */}
        {caixa && (
          <div
            ref={legendasRef}
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden md:block"
            style={{ opacity: 1 }}
          >
            {CAMADAS.map((c, i) => {
              const esquerda = c.lado === "esquerda";
              const topo = caixa.y + (c.y / 100) * caixa.altura;
              const ancora =
                caixa.x + ((esquerda ? PILHA.esquerda : PILHA.direita) / 100) * caixa.largura;
              // Legenda que cairia em cima do menu ou do texto cede o lugar.
              const invade = topo < FAIXA_DO_TOPO || topo > caixa.palco - FAIXA_DO_TEXTO;
              if (invade) return null;
              return (
                <div
                  key={c.nome}
                  className="absolute flex items-center gap-3"
                  style={{
                    top: topo,
                    left: esquerda ? undefined : ancora,
                    right: esquerda ? `calc(100% - ${ancora}px)` : undefined,
                    flexDirection: esquerda ? "row" : "row-reverse",
                    transform: `translateY(-50%) translateX(calc(var(--recuo, 0px) * ${esquerda ? -1 : 1}))`,
                  }}
                >
                  <span className="whitespace-nowrap rounded-full bg-[var(--color-amarelo)] px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-preto)]">
                    {c.nome}
                  </span>
                  <span
                    className="h-px w-[clamp(2rem,5vw,5rem)] shrink-0 bg-[var(--color-amarelo)]"
                    style={{
                      transformOrigin: esquerda ? "right center" : "left center",
                      animation: `desenhar-linha 700ms ${1900 + i * 90}ms both cubic-bezier(.2,.7,.3,1)`,
                    }}
                  />
                  <span className="h-2 w-2 shrink-0 rounded-full border-2 border-[var(--color-amarelo)] bg-[var(--color-preto)]" />
                </div>
              );
            })}
          </div>
        )}

        {/* Texto do hero, sobre um véu escuro. Sobe junto com a cortina. */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--color-preto)] via-[var(--color-preto)]/75 to-transparent pb-14 pt-40 md:pb-16">
          <div
            className="mx-auto max-w-6xl px-5 md:px-6"
            style={{ animation: "sobe 900ms 1.2s both cubic-bezier(.2,.7,.3,1)" }}
          >
            <p className="mb-4 inline-block -rotate-2 rounded-md bg-[var(--color-amarelo)] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-preto)]">
              {HERO.etiqueta}
            </p>

            <h1 className="titulo text-[clamp(2.75rem,5.6vw,5.25rem)] text-white">
              {HERO.manchete}
              <br />
              <span className="text-[var(--color-amarelo)]">{HERO.pergunta}</span>
            </h1>

            <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <p className="max-w-md text-base leading-relaxed text-white/85 md:text-lg">
                {HERO.texto}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#cardapio"
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-amarelo)] px-6 py-4 text-base font-bold text-[var(--color-preto)] transition-transform hover:-translate-y-0.5"
                >
                  {HERO.botaoCardapio}
                  <svg
                    width="14"
                    height="20"
                    viewBox="0 0 14 20"
                    fill="none"
                    aria-hidden
                    style={{ animation: "seta-desce 1.6s ease-in-out infinite" }}
                  >
                    <path d="M7 1v17M1.5 12.5 7 18l5.5-5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="#rodizio"
                  className="inline-flex items-center rounded-full border-2 border-white/80 px-6 py-4 text-base font-bold text-white transition-colors hover:bg-white hover:text-[var(--color-preto)]"
                >
                  {HERO.botaoRodizio}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
