import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import styles from "./demo.module.css";
import AnimatedLogo from "./AnimatedLogo";
import HeroAssemblyVideo from "./HeroAssemblyVideo";
import FoodTransitionVideo from "./FoodTransitionVideo";

type MenuItem = {
  name: string;
  description: string;
  note: string;
  price?: string;
  image?: string;
  sourceUrl?: string;
};

type Fact = {
  value: string;
  label: string;
};

type Demo = {
  name: string;
  descriptor: string;
  logo: { src: string; width: number; height: number; badge: boolean; icon: string; video?: string; poster?: string };
  kicker: string;
  headline: string;
  subheadline: string;
  heroPost: string;
  heroPostUrl: string;
  heroVideo?: string;
  heroPoster?: string;
  photoCropTop: number;
  photoCropHeight: number;
  photoRadius: string;
  accent: string;
  secondary: string;
  background: string;
  paper: string;
  ink: string;
  muted: string;
  sectionBackground: string;
  sectionInk: string;
  storyBackground: string;
  storyInk: string;
  instagram: string;
  whatsapp?: string;
  videoUrl: string;
  videoFile?: string;
  videoPoster?: string;
  venueImage?: { src: string; width: number; height: number; alt: string };
  orderUrl: string;
  orderLabel: string;
  address: string;
  hours: string;
  facts: Fact[];
  tickerItems: string[];
  menuTitle: string;
  menuIntro: string;
  menu: MenuItem[];
  storyTitle: string;
  storyCopy: string;
  specialties: string[];
  videoTitle: string;
  videoCopy: string;
  sourceNote: string;
};

const DEMOS: Record<string, Demo> = {
  "red-hot": {
    name: "Red Hot",
    descriptor: "Street Food · Poços de Caldas",
    logo: {
      src: "/marca/red-hot.png", width: 1774, height: 887, badge: false,
      icon: "/marca/originais/red-hot-ifood.jpg",
      video: "/marca/red-hot-logo.mp4",
      poster: "/marca/red-hot-logo-poster.webp",
    },
    kicker: "Burgers, defumados e comida de rua",
    headline: "Fogo na chapa. Sabor de rua.",
    subheadline:
      "Burgers, smash, hot dogs e sanduíches defumados — escolha o seu favorito e peça direto pelos canais da casa.",
    heroPost: "https://www.instagram.com/p/DeAXYcOjNkm/embed/",
    heroPostUrl: "https://www.instagram.com/p/DeAXYcOjNkm/",
    heroVideo: "/conceitos/red-hot/hero-montagem-v2.mp4",
    heroPoster: "/conceitos/red-hot/hero-montagem-v2-poster.webp",
    photoCropTop: 54,
    photoCropHeight: 350,
    photoRadius: "8px 8px 70px 8px",
    accent: "#e83c2d",
    secondary: "#f2a23a",
    background: "#17110f",
    paper: "#fff4e4",
    ink: "#fff7eb",
    muted: "#c6b9ad",
    sectionBackground: "#fff4e4",
    sectionInk: "#201714",
    storyBackground: "#c92f26",
    storyInk: "#fff8ef",
    instagram: "https://www.instagram.com/redhotstreetfood/",
    whatsapp: "https://wa.me/message/47EH53KWH5EII1",
    videoUrl: "https://www.instagram.com/redhotstreetfood/reel/DRFu-cnkkGo/",
    videoFile: "/conceitos/red-hot/transicao-burgers.mp4",
    videoPoster: "/conceitos/red-hot/transicao-burgers-poster.webp",
    venueImage: {
      src: "/conceitos/red-hot/fachada.webp",
      width: 597,
      height: 717,
      alt: "Entrada da casa à noite, com letreiro Redhotdog, neon vermelho, plantas e balcão.",
    },
    orderUrl:
      "https://www.ifood.com.br/delivery/pocos-de-caldas-mg/red-hot-street-food-centro/439d00df-2134-4b7d-82d6-4d5712370f84",
    orderLabel: "Pedir pelo iFood",
    address: "Rua Santa Catarina, 273 · Centro · Poços de Caldas, MG",
    hours: "Todos os dias · das 18h às 23h45",
    facts: [
      { value: "Há 10 anos", label: "vendendo qualidade" },
      { value: "18h–23h45", label: "todos os dias" },
      { value: "Centro", label: "Poços de Caldas" },
    ],
    tickerItems: ["Burgers", "Smash", "Hot dogs", "Defumados"],
    menuTitle: "Tem fogo para todo tipo de fome.",
    menuIntro:
      "Cardápio fornecido pela empresa no Google e conferido em 5 de outubro de 2026. Valores e disponibilidade podem mudar.",
    menu: [
      {
        name: "Dodgers Burger",
        description:
          "Pão francês bola, blend artesanal de 160 g, maionese de ervas, ovo, molho barbecue, cebola caramelizada, bacon crispy e queijo muçarela.",
        note: "Burger artesanal",
        price: "R$ 38,90",
        image: "/conceitos/red-hot/cardapio/dodgers.webp",
        sourceUrl: "https://www.instagram.com/redhotstreetfood/p/Dd7N0MqDULW/",
      },
      {
        name: "Yankee Burger",
        description:
          "Pão francês, hambúrguer artesanal de 160 g, maionese da casa, cebola roxa fatiada, creme de gorgonzola e bacon crispy.",
        note: "Cremoso e crocante",
        price: "R$ 37,90",
        image: "/conceitos/red-hot/cardapio/burger-gorgonzola.webp",
        sourceUrl: "https://www.instagram.com/redhotstreetfood/p/Ddw6l87GGDf/",
      },
      {
        name: "Red Socks Hot Dog",
        description:
          "Pão de hot dog, salsicha 100% bovina, maionese da casa, molho Currywurst, cebola crispy e purê de batata.",
        note: "Salsicha 100% bovina",
        price: "R$ 35,90",
        image: "/conceitos/red-hot/cardapio/red-socks.webp",
        sourceUrl: "https://www.instagram.com/redhotstreetfood/p/Dd2EKCqDLuk/",
      },
      {
        name: "Tiger Burger",
        description:
          "Pão brioche, hambúrguer artesanal de 160 g, onion rings, molho barbecue, rúcula, maionese da casa e queijo cheddar cremoso.",
        note: "Burger artesanal",
        price: "R$ 37,90",
      },
      {
        name: "Smash Bacon",
        description:
          "Pão de smash, dois hambúrgueres amassados de 50 g cada, maionese da casa, queijo catupiry e bacon crispy.",
        note: "Dois smash de 50 g",
        price: "R$ 28,90",
      },
      {
        name: "Smash Salada",
        description:
          "Pão de smash, dois blends amassados de 50 g cada, maionese da casa, alface, tomate, cebola roxa e queijo.",
        note: "Dois smash de 50 g",
        price: "R$ 26,00",
      },
      {
        name: "Orleans",
        description:
          "Baguete com gergelim, pulled pork defumado e desfiado, salada coleslaw, cebola caramelizada e maionese da casa.",
        note: "Street food defumado",
        price: "R$ 38,90",
      },
      {
        name: "Potland",
        description:
          "Baguete com gergelim, cupim defumado e desfiado, molho chimichurri, queijo catupiry, cebola roxa e maionese da casa.",
        note: "Cupim defumado",
        price: "R$ 39,90",
      },
      {
        name: "Indians",
        description:
          "Pão brioche, blend artesanal de 160 g, geleia de pimenta agridoce, queijo catupiry e bacon crispy.",
        note: "Agridoce e picante",
        price: "R$ 37,90",
      },
      {
        name: "BLT",
        description:
          "Pão francês bola, hambúrguer artesanal de 160 g, alface, tomate, maionese da casa, queijo muçarela e bacon crispy.",
        note: "Valor a confirmar com a casa",
      },
      {
        name: "Chicken Pesto",
        description:
          "Baguete com gergelim, frango na chapa, alface, tomate, maionese da casa, queijo catupiry e molho pesto.",
        note: "Frango na chapa",
        price: "R$ 36,00",
      },
      {
        name: "BLT Hot Dog",
        description:
          "Pão de hot dog, salsicha 100% bovina, maionese da casa, alface, tomate e bacon crispy.",
        note: "Salsicha 100% bovina",
        price: "R$ 35,90",
      },
    ],
    storyTitle: "Uma década com a chapa acesa.",
    storyCopy:
      "São dez anos de trabalho e atendimento todos os dias em Poços. O perfil da casa destaca burgers, smash, hot dogs e sanduíches defumados — uma carta de street food para diferentes vontades.",
    specialties: ["Burgers e smash", "Hot dogs", "Sanduíches defumados"],
    videoTitle: "Um close. Duas vontades.",
    videoCopy:
      "Pão dourado, carne na chapa e camadas de sabor. Escolha seu favorito e encontre seu próximo pedido no cardápio.",
    sourceNote:
      "Conceito independente para avaliação. Fotos e informações foram consultadas nos canais públicos do Red Hot; confirmar autorização de uso, cardápio, preços e dados operacionais antes de publicar.",
  },
  bigus: {
    name: "Bigu’s Burger",
    descriptor: "Hamburgueria · Poços de Caldas",
    logo: { src: "/marca/bigus.png", width: 1854, height: 848, badge: true, icon: "/marca/originais/bigus-saipos.jpg" },
    kicker: "Burger generoso no centro de Poços",
    headline: "Um Bigu’s para matar a fome de verdade.",
    subheadline:
      "Combos preparados na hora, burgers caprichados e opções para diferentes vontades. Escolha no cardápio digital e peça direto para a casa.",
    heroPost: "https://www.instagram.com/p/DVrSO1XAIvQ/embed/",
    heroPostUrl: "https://www.instagram.com/p/DVrSO1XAIvQ/",
    photoCropTop: 250,
    photoCropHeight: 400,
    photoRadius: "28px 28px 28px 120px",
    accent: "#e8782c",
    secondary: "#8dab4e",
    background: "#f4e8d2",
    paper: "#fff8eb",
    ink: "#291a12",
    muted: "#706156",
    sectionBackground: "#291a12",
    sectionInk: "#fff8eb",
    storyBackground: "#e8782c",
    storyInk: "#27180f",
    instagram: "https://www.instagram.com/bigusburgeroriginal/",
    videoUrl: "https://www.instagram.com/bigusburgeroriginal/reel/DaOEXnMx95z/",
    orderUrl: "https://bigusburger.saipos.com/",
    orderLabel: "Abrir cardápio e pedir",
    address: "Rua Junqueiras, 416, loja 5 · Centro · Poços de Caldas, MG",
    hours: "Confira o horário atualizado no cardápio digital ou no Instagram.",
    facts: [
      { value: "No centro", label: "em Poços de Caldas" },
      { value: "Feito na hora", label: "para chegar no capricho" },
      { value: "Cardápio online", label: "pedido direto com a casa" },
    ],
    tickerItems: ["Burgers", "Combos", "Opção vegetariana", "Feito na hora"],
    menuTitle: "Um cardápio para escolher com calma.",
    menuIntro:
      "Estes destaques partem de publicações da casa. Veja ingredientes, tamanhos, adicionais e valores atualizados no menu online.",
    menu: [
      {
        name: "Combo da casa",
        description:
          "Hambúrguer e acompanhamentos preparados na hora — um combo pensado para resolver a fome.",
        note: "Destaque publicado pelo Bigu’s.",
        sourceUrl: "https://www.instagram.com/bigusburgeroriginal/p/DVrSO1XAIvQ/",
      },
      {
        name: "Burger vegetariano",
        description:
          "Uma opção com pão macio, ingredientes fresquinhos e o toque da casa.",
        note: "Consulte a disponibilidade no cardápio digital.",
        sourceUrl: "https://www.instagram.com/bigusburgeroriginal/p/DV4KKd9gdem/",
      },
      {
        name: "Três carnes",
        description:
          "Um burger de três carnes, queijo derretido e ingredientes selecionados, apresentado no perfil oficial.",
        note: "Confirme a disponibilidade antes de pedir.",
        sourceUrl: "https://www.instagram.com/bigusburgeroriginal/p/DZsqqf2kfZL/",
      },
    ],
    storyTitle: "Um novo Bigu’s para um novo momento.",
    storyCopy:
      "Na nova fase da casa, no centro de Poços, aparecem combos preparados na hora, burgers de três carnes e uma opção vegetariana. O cardápio digital mostra o que está disponível agora.",
    specialties: ["Combos completos", "Burgers generosos", "Opção vegetariana"],
    videoTitle: "Camadas, molho e uma mordida em movimento.",
    videoCopy:
      "Mostre o preparo, as camadas e o cuidado no envio em um clipe curto. O destaque abre um reel publicado pelo Bigu’s.",
    sourceNote:
      "Conceito independente para avaliação. Fotos e informações foram consultadas nos canais públicos do Bigu’s; confirmar autorização de uso, cardápio, preços e dados operacionais antes de publicar.",
  },
};

export function generateStaticParams() {
  return Object.keys(DEMOS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const demo = DEMOS[slug];
  if (!demo) return { title: "Conceito de site" };

  return {
    title: demo.name + " — conceito de site",
    description: "Demonstração visual independente para " + demo.name + ", em Poços de Caldas.",
    alternates: { canonical: "/conceito/" + slug },
    robots: { index: false, follow: false },
    icons: { icon: demo.logo.icon, apple: demo.logo.icon },
  };
}

function BrandLogo({ demo, priority = false }: { demo: Demo; priority?: boolean }) {
  const hasVideo = Boolean(demo.logo.video && demo.logo.poster);
  const frameClassName = [
    styles.logoFrame,
    demo.logo.badge ? styles.logoBadge : "",
    hasVideo ? styles.logoVideoFrame : "",
  ].filter(Boolean).join(" ");

  return (
    <Link className={styles.wordmark} href="#inicio" aria-label={demo.name + ", início"}>
      <span className={frameClassName}>
        {demo.logo.video && demo.logo.poster ? (
          <AnimatedLogo src={demo.logo.video} poster={demo.logo.poster} priority={priority} />
        ) : <Image
          className={styles.logo}
          src={demo.logo.src}
          alt={demo.name}
          width={demo.logo.width}
          height={demo.logo.height}
          sizes="(max-width: 650px) 134px, 180px"
          priority={priority}
        />}
      </span>
      <span className={styles.brandDescriptor}>{demo.descriptor}</span>
    </Link>
  );
}

export default async function ConceptPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const demo = DEMOS[slug];
  if (!demo) notFound();

  const theme = {
    "--demo-accent": demo.accent,
    "--demo-secondary": demo.secondary,
    "--demo-bg": demo.background,
    "--demo-paper": demo.paper,
    "--demo-ink": demo.ink,
    "--demo-muted": demo.muted,
    "--demo-section": demo.sectionBackground,
    "--demo-section-ink": demo.sectionInk,
    "--demo-story": demo.storyBackground,
    "--demo-story-ink": demo.storyInk,
    "--photo-radius": demo.photoRadius,
  } as CSSProperties;

  return (
    <div className={styles.page} style={theme}>
      <div className={styles.notice}>
        Estudo visual independente <span aria-hidden="true">✦</span> conceito não oficial
      </div>

      <header className={styles.header}>
        <BrandLogo demo={demo} priority />
        <nav className={styles.nav} aria-label="Navegação principal">
          <a href="#cardapio">Cardápio</a>
          <a href="#videos">Vídeos</a>
          <a href="#visite">A casa</a>
        </nav>
        <a className={styles.headerCta} href={demo.orderUrl} target="_blank" rel="noreferrer">
          {demo.orderLabel}<span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className={`${styles.hero} ${demo.heroVideo ? styles.heroWithVideo : ""}`} id="inicio">
          {demo.heroVideo && demo.heroPoster ? (
            <HeroAssemblyVideo
              src={demo.heroVideo}
              poster={demo.heroPoster}
              label={"Montagem do burger " + demo.name}
            />
          ) : null}
          <div className={styles.heroContent}>
            <p className={styles.kicker}><span aria-hidden="true" />{demo.kicker}</p>
            <h1>{demo.headline}</h1>
            <p className={styles.heroCopy}>{demo.subheadline}</p>
            <div className={styles.actions}>
              <a className={styles.primaryButton} href={demo.orderUrl} target="_blank" rel="noreferrer">
                {demo.orderLabel}<span aria-hidden="true">↗</span>
              </a>
              <a className={styles.secondaryButton} href="#cardapio">
                Conhecer o cardápio<span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className={styles.heroLocation}>{demo.address}</p>
          </div>

          {!demo.heroVideo ? <div className={styles.heroMedia}>
            <div
              className={styles.heroPhoto}
              style={{
                "--photo-crop-top": demo.photoCropTop + "px",
                "--photo-crop-height": demo.photoCropHeight + "px",
              } as CSSProperties}
            >
              <iframe
                className={styles.instagramFrame}
                src={demo.heroPost}
                title={"Foto de produto publicada por " + demo.name}
                loading="eager"
                scrolling="no"
                allow="encrypted-media; clipboard-write"
              />
            </div>
            <a className={styles.imageNote} href={demo.heroPostUrl} target="_blank" rel="noreferrer">
              Ver foto original publicada pela casa<span aria-hidden="true">↗</span>
            </a>
          </div> : (
            <a className={styles.heroVideoCredit} href={demo.heroPostUrl} target="_blank" rel="noreferrer">
              Foto oficial usada como referência<span aria-hidden="true">↗</span>
            </a>
          )}
        </section>

        <div className={styles.ticker} aria-hidden="true">
          <div className={styles.tickerTrack}>
            {demo.tickerItems.concat(demo.tickerItems).map((item, index) => (
              <span key={item + "-" + index}>{item}<b>✦</b></span>
            ))}
          </div>
        </div>

        <section className={styles.facts} aria-label={"Informações de " + demo.name}>
          {demo.facts.map((fact) => (
            <div className={styles.fact} key={fact.value}>
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
            </div>
          ))}
        </section>

        <section className={styles.menuSection} id="cardapio" aria-labelledby="menu-title">
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.sectionKicker}>Da cozinha da casa</p>
              <h2 id="menu-title">{demo.menuTitle}</h2>
            </div>
            <p>{demo.menuIntro}</p>
          </div>

          <div className={styles.menuGrid}>
            {demo.menu.map((item) => (
              <article className={`${styles.menuCard} ${item.image ? styles.menuCardWithImage : styles.menuCardCompact}`} key={item.name}>
                {item.image ? (
                  <div className={styles.menuImage}>
                    <Image src={item.image} alt={item.name} fill sizes="(max-width: 650px) 100vw, 33vw" />
                  </div>
                ) : null}
                <div className={styles.menuCardBody}>
                  <p className={styles.menuNote}>{item.note}</p>
                  <div className={styles.menuNameRow}>
                    <h3>{item.name}</h3>
                    {item.price ? <strong>{item.price}</strong> : null}
                  </div>
                  <p className={styles.menuDescription}>{item.description}</p>
                  {item.sourceUrl ? (
                    <a className={styles.cardSource} href={item.sourceUrl} target="_blank" rel="noreferrer">
                      Ver publicação da casa<span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <div className={styles.menuFoot}>
            <p>Cardápio e valores consultados no Google; confirme alterações no pedido.</p>
            <a className={styles.darkButton} href={demo.orderUrl} target="_blank" rel="noreferrer">
              {demo.orderLabel}<span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className={styles.storySection}>
          <div className={styles.storyLead}>
            <p className={styles.storyKicker}>A identidade da casa</p>
            <h2>{demo.storyTitle}</h2>
            <p>{demo.storyCopy}</p>
          </div>
          <div className={styles.specialties}>
            <p>O que você encontra</p>
            {demo.specialties.map((specialty) => (
              <div className={styles.specialty} key={specialty}>
                <span aria-hidden="true">✦</span>{specialty}
              </div>
            ))}
          </div>
        </section>

        <section className={`${styles.videoSection} ${demo.videoPoster ? styles.videoSectionPortrait : ""}`} id="videos" aria-labelledby="video-title">
          <div className={styles.videoCopy}>
            <p className={styles.sectionKicker}>Da tela para a cozinha</p>
            <h2 id="video-title">{demo.videoTitle}</h2>
            <p>{demo.videoCopy}</p>
            <a className={styles.videoLink} href={demo.instagram} target="_blank" rel="noreferrer">
              Acompanhar a casa no Instagram<span aria-hidden="true">↗</span>
            </a>
          </div>
          {demo.videoFile && demo.videoPoster ? (
            <figure className={styles.transitionFeature}>
              <FoodTransitionVideo
                src={demo.videoFile}
                poster={demo.videoPoster}
                label="Transição entre dois burgers: um com salada e outro com três carnes."
              />
              <figcaption>Animação criada a partir de fotos dos lanches.</figcaption>
            </figure>
          ) : demo.videoFile ? (
            <video
              className={styles.videoPlayer}
              src={demo.videoFile}
              controls
              playsInline
              preload="metadata"
              aria-label={"Vídeo de " + demo.name}
            />
          ) : (
            <a
              className={styles.videoStage}
              href={demo.videoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={"Assistir vídeo publicado por " + demo.name + " no Instagram"}
            >
              <span className={styles.videoOrbit} aria-hidden="true" />
              <span className={styles.playButton} aria-hidden="true">
                <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
                  <path d="M11 7.5 25 16l-14 8.5v-17Z" fill="currentColor" />
                </svg>
              </span>
              <span className={styles.videoBadge}>Vídeo oficial</span>
              <span className={styles.videoCaption}>Ver um reel da casa<span aria-hidden="true">↗</span></span>
            </a>
          )}
        </section>

        <section className={styles.visitSection} id="visite">
          <div className={styles.visitCopy}>
            <p className={styles.sectionKicker}>Encontre a casa</p>
            <h2>Seu próximo pedido começa aqui.</h2>
            <p>{demo.address}</p>
            <p className={styles.hours}>{demo.hours}</p>
            <div className={styles.actions}>
              <a
                className={styles.primaryButton}
                href={"https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(demo.address)}
                target="_blank"
                rel="noreferrer"
              >
                Abrir no mapa<span aria-hidden="true">↗</span>
              </a>
              <a className={styles.visitOrder} href={demo.orderUrl} target="_blank" rel="noreferrer">
                {demo.orderLabel}
              </a>
            </div>
          </div>
          {demo.venueImage ? (
            <figure className={styles.venuePhoto}>
              <Image
                src={demo.venueImage.src}
                alt={demo.venueImage.alt}
                width={demo.venueImage.width}
                height={demo.venueImage.height}
                sizes="(max-width: 650px) calc(100vw - 40px), (max-width: 1100px) 38vw, 460px"
              />
              <figcaption>A casa, por quem chega.</figcaption>
            </figure>
          ) : <div className={styles.visitCard}>
            <span className={styles.mapPin} aria-hidden="true">
              <svg viewBox="0 0 32 40" width="30" height="38" fill="none">
                <path d="M16 38S3 23.4 3 15.8a13 13 0 1 1 26 0C29 23.4 16 38 16 38Z" fill="currentColor" />
                <circle cx="16" cy="16" r="4.5" fill="var(--demo-bg)" />
              </svg>
            </span>
            <p>{demo.name}</p>
            <strong>Poços<br />de Caldas</strong>
            <span>{demo.address}</span>
          </div>}
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <BrandLogo demo={demo} />
          <div className={styles.footerLinks}>
            <a href={demo.instagram} target="_blank" rel="noreferrer">Instagram<span aria-hidden="true">↗</span></a>
            {demo.whatsapp ? (
              <a href={demo.whatsapp} target="_blank" rel="noreferrer">WhatsApp<span aria-hidden="true">↗</span></a>
            ) : null}
            <a href={demo.orderUrl} target="_blank" rel="noreferrer">Pedidos<span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <p className={styles.disclaimer}>{demo.sourceNote}</p>
        <p className={styles.copyright}>Poços de Caldas, MG <span>·</span> Conceito visual independente</p>
      </footer>
    </div>
  );
}
