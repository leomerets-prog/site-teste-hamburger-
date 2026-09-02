"use client";

import { useEffect, useRef, useState } from "react";
import { CAMADAS, DESTAQUE, PILHA } from "@/data/burgers";

/** Altura de rolagem do hero. Quanto maior, mais devagar a montagem acontece. */
const TELAS_DE_SCROLL = 6;

/** Ponto do scrub em que as legendas já saíram de cena. */
const FIM_DAS_LEGENDAS = 0.42;

/** Proporção do vídeo do hero. */
const PROPORCAO = 16 / 9;

/** Metade de um quadro a 24 fps: abaixo disso, buscar de novo não muda a tela. */
const MEIO_QUADRO = 1 / 48;

type Caixa = {
  x: number;
  y: number;
  largura: number;
  altura: number;
  /** Altura do palco (a viewport), usada para saber o que cai na faixa do título. */
  palco: number;
};

/** Altura, no rodapé do hero, reservada para o nome do lanche. */
const FAIXA_DO_TITULO = 96;

/** Altura, no topo, reservada para a marca e o menu. */
const FAIXA_DO_CABECALHO = 72;

export default function Hero() {
  const trilhoRef = useRef<HTMLDivElement>(null);
  const palcoRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progresso, setProgresso] = useState(0);
  const [pronto, setPronto] = useState(false);
  const [caixa, setCaixa] = useState<Caixa | null>(null);

  // A escolha do arquivo é feita aqui, e não com <source media="...">: navegadores
  // ignoram o atributo `media` dentro de <video>, e o resultado era o celular
  // baixando a versão grande.
  //
  // Ficou em 1080p, e não em 1440p: buscar um instante num quadro maior custa
  // decodificação proporcional ao número de pixels, e o scroll é a coisa que o
  // visitante mais sente. A textura que se via em 1440p era da própria fonte,
  // então a resolução extra pesava sem entregar nitidez de verdade.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const grande = window.matchMedia("(min-width: 768px)").matches;
    video.src = grande ? "/hero/hero-1080.mp4" : "/hero/hero-720.mp4";
    video.load();
  }, []);

  /**
   * O vídeo sangra a tela inteira (object-cover), então parte do quadro fica
   * cortada. Aqui recalculamos onde o quadro 16:9 realmente caiu — é isso que
   * mantém cada legenda grudada no ingrediente certo, em vez de assumir que o
   * vídeo ocupa exatamente a viewport.
   */
  useEffect(() => {
    const palco = palcoRef.current;
    if (!palco) return;

    const medir = () => {
      const { width: W, height: H } = palco.getBoundingClientRect();
      if (!W || !H) return;
      // object-cover: o quadro cresce até cobrir os dois eixos.
      const altura = Math.max(W / PROPORCAO, H);
      const largura = altura * PROPORCAO;
      setCaixa({
        x: (W - largura) / 2,
        y: (H - altura) / 2,
        largura,
        altura,
        palco: H,
      });
    };

    medir();
    const observador = new ResizeObserver(medir);
    observador.observe(palco);
    return () => observador.disconnect();
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
        // Dois freios, e os dois importam para o scroll não engasgar:
        //
        // `video.seeking` evita empilhar pedidos — enquanto o navegador ainda
        // está buscando um instante, pedir outro só joga trabalho fora.
        //
        // MEIO_QUADRO evita pedir um instante que daria exatamente a mesma
        // imagem. Antes o limite era 0,01s, quase quatro pedidos por quadro
        // exibido: três deles não mudavam nada na tela e ainda assim custavam
        // uma decodificação cada.
        if (!video.seeking && Math.abs(video.currentTime - tempo) > MEIO_QUADRO) {
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
  const forcaConvite = Math.max(0, 1 - progresso * 8);

  return (
    <section
      ref={trilhoRef}
      aria-label={`${DESTAQUE} sendo montado camada por camada`}
      style={{ height: `${TELAS_DE_SCROLL * 100}svh` }}
      className="relative"
    >
      <div
        ref={palcoRef}
        className="sticky top-0 h-svh w-full overflow-hidden bg-[var(--color-carvao)]"
      >
        {/*
          O vídeo sangra a tela inteira. A caixa 16:9 exata que existia aqui
          antes deixava costura visível nas laterais em telas largas e baixas —
          o vídeo tem vinheta e o fundo dele nunca bate com o preto puro do
          site. Agora o corte é assumido, e as legendas se ajustam a ele.
        */}
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
        {caixa && (
          <div
            className="pointer-events-none absolute inset-0 hidden md:block"
            aria-hidden
            style={{ opacity: forcaLegendas }}
          >
            {CAMADAS.map((camada, i) => {
              const esquerda = camada.lado === "esquerda";
              const recuo = (esquerda ? -1 : 1) * (1 - forcaLegendas) * 24;
              const topo = caixa.y + (camada.y / 100) * caixa.altura;
              const ancora =
                caixa.x +
                ((esquerda ? PILHA.esquerda : PILHA.direita) / 100) *
                  caixa.largura;

              // Quanto mais larga a janela, mais o vídeo é cortado em cima e
              // embaixo — e as camadas das pontas acabam caindo em cima do
              // menu ou do nome do lanche. Nesses casos a legenda cede o lugar
              // em vez de brigar; a lista completa segue logo abaixo do hero.
              const invasao = Math.max(
                FAIXA_DO_CABECALHO - topo,
                topo - (caixa.palco - FAIXA_DO_TITULO),
              );
              const cedeEspaco =
                invasao > 0 ? Math.max(0, 1 - invasao / 24) : 1;

              return (
                <div
                  key={camada.nome}
                  className="absolute flex items-center gap-3"
                  style={{
                    top: topo,
                    left: esquerda ? undefined : ancora,
                    right: esquerda ? `calc(100% - ${ancora}px)` : undefined,
                    flexDirection: esquerda ? "row" : "row-reverse",
                    transform: `translateY(-50%) translateX(${recuo}px)`,
                    opacity: cedeEspaco,
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
        )}

        {/*
          Rodapé do hero. O nome do lanche fica no canto, fora do caminho da
          pilha — sobreposto ao hambúrguer ele lia como se estivesse na frente.
        */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--color-carvao)] via-[var(--color-carvao)]/85 to-transparent pt-28 pb-8">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6">
            <h1 className="titulo-vitrine text-[clamp(1.75rem,3.5vw,3rem)]">
              {DESTAQUE}
            </h1>

            {/*
              Convite a rolar: a mesma serifa do site. Fica aqui dentro do
              rodapé, e não flutuando no meio da tela, porque em janela baixa
              ele caía em cima do hambúrguer e sumia contra a imagem.
            */}
            <div
              className="hidden shrink-0 items-center gap-3 sm:flex"
              style={{ opacity: forcaConvite }}
            >
              <span className="titulo-vitrine text-[13px] uppercase tracking-[0.35em] text-[var(--color-creme)]/70">
                role para montar
              </span>
              <svg
                width="12"
                height="22"
                viewBox="0 0 12 22"
                fill="none"
                aria-hidden
                className="text-[var(--color-brasa)]"
                style={{ animation: "seta-desce 2s ease-in-out infinite" }}
              >
                <path
                  d="M6 0v19M1 14.5l5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
