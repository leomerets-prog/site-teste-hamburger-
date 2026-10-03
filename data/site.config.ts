/**
 * Configuracao central da hamburgueria.
 *
 * Para criar outro site, este deve ser o primeiro arquivo alterado. Componentes
 * nao devem repetir nome, endereco, contatos, identidade visual ou caminhos de
 * midia da marca.
 */
export const SITE_CONFIG = {
  marca: {
    nome: "Me Poupa",
    assinatura: "Burgers & Shakes",
    selo: "4x melhor hamburgueria da cidade",
  },
  local: {
    cidade: "Poços de Caldas",
    cidadeComEstado: "Poços de Caldas, MG",
    estado: "MG",
    pais: "BR",
    endereco: "Rua Santa Catarina, 271",
  },
  atendimento: {
    resumo: "Segunda a sábado",
    detalhe: "A partir das 18h",
    textoCompleto: "Segunda a sábado, a partir das 18h",
    diasSchema: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abreAs: "18:00",
  },
  contato: {
    instagram: "https://www.instagram.com/mepoupaoficial/",
    arroba: "@mepoupaoficial",
    whatsapp: "https://wa.me/message/QE3NTBFHKBPTO1",
  },
  seo: {
    descricao:
      "Catorze burguers numerados, o do Palhaço e rodízio todo dia por R$ 79,90. Rua Santa Catarina, 271, Poços de Caldas.",
    descricaoEstruturada:
      "Hamburgueria em Poços de Caldas com catorze burguers numerados, o Burguer do Palhaço, shakes de 400 ml e rodízio todos os dias.",
    palavrasChave: [
      "hamburgueria Poços de Caldas",
      "rodízio de hambúrguer Poços de Caldas",
      "Me Poupa Burgers",
      "melhor hambúrguer Poços de Caldas",
      "delivery hambúrguer Poços de Caldas",
    ],
    culinaria: ["Hambúrguer", "Hot dog", "Milkshake"],
  },
  tema: {
    primaria: "#fdc403",
    primariaEscura: "#e8b000",
    escura: "#0e0e0e",
    grafite: "#1c1c1c",
    fundo: "#fff7e2",
    papel: "#fffdf6",
    texto: "#161412",
    textoSuave: "#6b6660",
    destaque: "#d9321a",
  },
  midia: {
    logo: "/marca/me-poupa.png",
    imagemCompartilhamento: "/opengraph-image.jpg",
    hero: {
      videoDesktop: "/hero/hero-loop-1080.mp4",
      videoMobile: "/hero/hero-loop-720.mp4",
      poster: "/hero/poster-start.webp",
    },
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
