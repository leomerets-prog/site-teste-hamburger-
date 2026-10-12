import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import styles from "./demo.module.css";
import AnimatedLogo from "./AnimatedLogo";
import HeroAssemblyVideo from "./HeroAssemblyVideo";
import FoodTransitionVideo from "./FoodTransitionVideo";
import { Barlow_Condensed } from "next/font/google";
import RedHotShowcase, { showcasedNames } from "./RedHotShowcase";

const redHotType = Barlow_Condensed({ subsets: ["latin"], weight: ["600", "700"], variable: "--redhot-display", display: "swap" });

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
      icon: "/marca/red-hot.png",
      video: "/marca/red-hot-logo.mp4",
      poster: "/marca/red-hot-logo-poster.webp",
    },
    kicker: "Red Hot Street Food",
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
    accent: "#ef2027",
    secondary: "#ffffff",
    background: "#111111",
    paper: "#fafafa",
    ink: "#ffffff",
    muted: "#b0b0b0",
    sectionBackground: "#fafafa",
    sectionInk: "#171717",
    storyBackground: "#111111",
    storyInk: "#ffffff",
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
      "https://wa.me/message/47EH53KWH5EII1",
    orderLabel: "Pedir pelo WhatsApp",
    address: "Rua Santa Catarina, 273 · Centro · Poços de Caldas, MG",
    hours: "Todos os dias · das 18h às 23h45",
    facts: [
      { value: "Há 10 anos", label: "vendendo qualidade" },
      { value: "18h–23h45", label: "todos os dias" },
      { value: "Centro", label: "Poços de Caldas" },
    ],
    tickerItems: ["Burgers", "Smash", "Hot dogs", "Defumados"],
    menuTitle: "O cardápio.",
    menuIntro:
      "Burgers, hot dogs e sanduíches defumados. Encontre o seu favorito.",
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
    videoTitle: "Seu próximo favorito.",
    videoCopy:
      "Pão dourado, carne na chapa e camadas de sabor. Escolha seu favorito e encontre seu próximo pedido no cardápio.",
    sourceNote:
      "Conceito independente para avaliação. Fotos e informações foram consultadas nos canais públicos do Red Hot; confirmar autorização de uso, cardápio, preços e dados operacionais antes de publicar.",
  },
};

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

const RED_HOT_GROUPS = [
  { id: "burgers", title: "Burgers", names: ["Dodgers Burger", "Yankee Burger", "Tiger Burger", "Smash Bacon", "Smash Salada", "Indians", "BLT"] },
  { id: "hot-dogs", title: "Hot dogs", names: ["Red Socks Hot Dog", "BLT Hot Dog"] },
  { id: "sanduiches", title: "Sanduíches e defumados", names: ["Orleans", "Potland", "Chicken Pesto"] },
];

function MenuCard({ item, grouped = false }: { item: MenuItem; grouped?: boolean }) {
  const Heading = grouped ? "h4" : "h3";
  return (
              <article className={`${styles.menuCard} ${item.image ? styles.menuCardWithImage : styles.menuCardCompact}`} key={item.name}>
                {item.image ? (
                  <div className={styles.menuImage}>
                    <Image src={item.image} alt={item.name} fill sizes="(max-width: 650px) 100vw, 50vw" />
                  </div>
                ) : null}
                <div className={styles.menuCardBody}>
                  {(!grouped || !item.price) && <p className={styles.menuNote}>{item.note}</p>}
                  <div className={styles.menuNameRow}>
                    <Heading>{item.name}</Heading>
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
  );
}

function VideoSection({ demo }: { demo: Demo }) {
  return (
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
  );
}

export default function ConceptPage() {
  const slug = "red-hot";
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
    <div className={`${styles.page} ${slug === "red-hot" ? styles.redHot + " " + redHotType.variable : ""}`} style={theme}>
      <div className={styles.notice}>
        Estudo visual independente <span aria-hidden="true">✦</span> conceito não oficial
      </div>

      <header className={styles.header}>
        <BrandLogo demo={demo} priority />
        <nav className={styles.nav} aria-label="Navegação principal">
          <a href="#cardapio">Cardápio</a>
          {slug !== "red-hot" && <a href="#videos">Vídeos</a>}
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

        {slug !== "red-hot" && <><div className={styles.ticker} aria-hidden="true">
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
        </section></>}

        {slug === "red-hot" && <VideoSection demo={demo} />}

        <section className={styles.menuSection} id="cardapio" aria-labelledby="menu-title">
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.sectionKicker}>Da cozinha da casa</p>
              <h2 id="menu-title">{demo.menuTitle}</h2>
            </div>
            <p>{demo.menuIntro}</p>
          </div>

          {slug === "red-hot" ? <>
            <RedHotShowcase orderUrl={demo.orderUrl} />
            <details className={styles.fullMenu}>
            <summary>Ver cardápio completo</summary>
            <nav className={styles.menuCategoryNav} aria-label="Categorias do cardápio">
              {RED_HOT_GROUPS.map(group => <a href={"#" + group.id} key={group.id}>{group.title}<span aria-hidden="true">↓</span></a>)}
            </nav>
            {RED_HOT_GROUPS.map(group => (
              <section className={styles.menuGroup} id={group.id} aria-labelledby={group.id + "-title"} key={group.id}>
                <h3 id={group.id + "-title"}>{group.title}</h3>
                <div className={styles.categoryGrid}>
                  {demo.menu.filter(item => group.names.includes(item.name) && !showcasedNames.has(item.name)).map(item => <MenuCard item={item} grouped key={item.name} />)}
                </div>
              </section>
            ))}
            </details>
          </> : <div className={styles.menuGrid}>
            {demo.menu.map(item => <MenuCard item={item} key={item.name} />)}
          </div>}

          <div className={styles.menuFoot}>
            <p>{slug === "red-hot" ? "Confirme disponibilidade, valores e adicionais pelo WhatsApp antes de pedir." : "Cardápio e valores consultados no Google; confirme alterações no pedido."}</p>
            <a className={styles.darkButton} href={demo.orderUrl} target="_blank" rel="noreferrer">
              {demo.orderLabel}<span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        {slug !== "red-hot" && <section className={styles.storySection}>
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
        </section>}

        {slug !== "red-hot" && <VideoSection demo={demo} />}

        <section className={styles.visitSection} id="visite">
          <div className={styles.visitCopy}>
            <p className={styles.sectionKicker}>Encontre a casa</p>
            <h2>{slug === "red-hot" ? "A casa é sua." : "Seu próximo pedido começa aqui."}</h2>
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
      {slug === "red-hot" && demo.whatsapp && (
        <a className={styles.whatsappFloat} href={demo.whatsapp} target="_blank" rel="noreferrer"
          aria-label="Fazer pedido pelo WhatsApp" title="Fazer pedido pelo WhatsApp">
          <svg viewBox="0 0 48 48" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 21C8 6 40 6 41 21H7Z" />
            <path d="M7 27l8 3 9-4 9 4 8-3M6 34h36M8 39h32c0 4-4 5-8 5H16c-4 0-8-1-8-5Z" />
            <path d="M17 15h.1M25 12h.1M32 16h.1" />
          </svg>
          <span className={styles.whatsappHint}>Pedir pelo WhatsApp</span>
        </a>
      )}
    </div>
  );
}
