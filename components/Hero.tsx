"use client";

import { useEffect, useRef, useState } from "react";
import { CAMADAS, CASA, DESTAQUE, PILHA } from "@/data/burgers";
import { ArrowUpRight } from "./Icones";

/** Altura de rolagem do hero. Quanto maior, mais devagar a montagem acontece. */
const TELAS_DE_SCROLL = 3;

/** No celular o trilho encurta: decodificar custa mais e a paciência é menor. */
const TELAS_NO_CELULAR = 2.5;

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
const FAIXA_DO_TITULO = 180;

/** Altura, no topo, reservada para a marca e o menu. */
const FAIXA_DO_CABECALHO = 110;

export default function Hero() {
  const trilhoRef = useRef<HTMLDivElement>(null);
  const palcoRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progresso, setProgresso] = useState(0);
  const [pronto, setPronto] = useState(false);
  const [caixa, setCaixa] = useState<Caixa | null>(null);
  const [telas, setTelas] = useState(TELAS_DE_SCROLL);
  const [estatico, setEstatico] = useState(false);

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

    // Static fallback also avoids the video download for reduced motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.poster = "/hero/poster-end.jpg";
      setEstatico(true);
      return;
    }

    video.src = grande ? "/hero/hero-1080.mp4" : "/hero/hero-720.mp4";
    video.load();

    // No celular o trilho é mais curto. Muitas telas de rolagem num aparelho onde
    // cada quadro custa mais para decodificar viram uma travessia longa demais.
    if (!grande) setTelas(TELAS_NO_CELULAR);

    // No iOS o decodificador de vídeo só acorda depois de um play de verdade.
    // Sem isto, mexer em `currentTime` não muda nada na tela: o hero fica
    // congelado no primeiro quadro e a rolagem parece quebrada. Um play seguido
    // de pause imediato acorda o decodificador sem o vídeo chegar a andar —
    // funciona porque o elemento é `muted` e `playsInline`.
    const acordarDecodificador = () => {
      const p = video.play();
      if (p && typeof p.then === "function") {
        p.then(() => video.pause()).catch(() => {});
      } else {
        video.pause();
      }
    };

    acordarDecodificador();
    video.addEventListener("loadeddata", acordarDecodificador, { once: true });
    return () => video.removeEventListener("loadeddata", acordarDecodificador);
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
      // Measure the visible video area after reserving space for the header.
      const midia = videoRef.current?.getBoundingClientRect();
      const alturaMidia = midia?.height || H;
      const topoMidia = midia
        ? midia.top - palco.getBoundingClientRect().top
        : 0;
      const altura = Math.max(W / PROPORCAO, alturaMidia);
      const largura = altura * PROPORCAO;
      setCaixa({
        x: (W - largura) / 2,
        y: topoMidia + (alturaMidia - altura) / 2,
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
        if (
          !video.seeking &&
          Math.abs(video.currentTime - tempo) > MEIO_QUADRO
        ) {
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

    // HAVE_CURRENT_DATA: existe quadro decodificado. Esperar só o metadado
    // (HAVE_METADATA) fazia o laço começar antes de haver o que mostrar — na
    // rede do celular o metadado chega muito antes dos dados, e as buscas
    // caíam no vazio.
    if (video.readyState >= 2) aoCarregar();
    else video.addEventListener("loadeddata", aoCarregar);

    window.addEventListener("scroll", aoRolar, { passive: true });
    window.addEventListener("resize", aoRolar);

    return () => {
      vivo = false;
      cancelAnimationFrame(frame);
      video.removeEventListener("loadeddata", aoCarregar);
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
      style={{ height: `${telas * 100}svh` }}
      className="relative hero-rail"
    >
      <div
        ref={palcoRef}
        className="hero-stage sticky top-0 h-svh w-full overflow-hidden bg-[#0a0a0b]"
      >
        {/*
          O vídeo sangra a tela inteira. A caixa 16:9 exata que existia aqui
          antes deixava costura visível nas laterais em telas largas e baixas —
          o vídeo tem vinheta e o fundo dele nunca bate com o preto puro do
          site. Agora o corte é assumido, e as legendas se ajustam a ele.
        */}
        <video
          ref={videoRef}
          className="hero-video absolute w-full object-cover"
          poster="/hero/poster-start.jpg"
          preload="auto"
          muted
          playsInline
          disablePictureInPicture
          tabIndex={-1}
          onError={() => {
            setEstatico(true);
            setTelas(1);
            if (videoRef.current)
              videoRef.current.poster = "/hero/poster-end.jpg";
          }}
        />

        {/* Legendas — só no desktop, onde sobra espaço lateral. */}
        {caixa && !estatico && (
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
                      transformOrigin: esquerda
                        ? "right center"
                        : "left center",
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

        <div className="hero-footer">
          <div className="hero-footer-inner wrap">
            <div>
              <p className="hero-kicker">ME POUPA · BURGERS & SHAKES</p>
              <h1 className="titulo-vitrine hero-title">{CASA.manchete}</h1>
              <p className="hero-caption">
                Animação ilustrativa. Os sabores da casa estão logo abaixo.
              </p>
            </div>
            <div className="hero-actions">
              <a href="#cardapio" className="button button-yellow">
                Conhecer os sabores <ArrowUpRight />
              </a>
              {!estatico && (
                <div
                  className="scroll-invite"
                  style={{ opacity: forcaConvite }}
                >
                  <span>Role para montar</span>
                  <svg
                    width="14"
                    height="22"
                    viewBox="0 0 14 22"
                    fill="none"
                    aria-hidden="true"
                    style={{
                      animation: "seta-desce 1.8s ease-in-out infinite",
                    }}
                  >
                    <path
                      d="M7 1v18M1.5 14l5.5 5.5L12.5 14"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
