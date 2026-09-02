export type Ingrediente = {
  nome: string;
  /** Posição vertical do ingrediente no frame inicial do vídeo, em % da altura. */
  y: number;
  /** Lado onde a legenda se ancora. */
  lado: "esquerda" | "direita";
};

export type Burger = {
  slug: string;
  /** Numeral do cardápio, quando o lanche tem um. É ele que vira a tipografia gigante. */
  numero?: string;
  nome: string;
  chamada: string;
  ingredientes: string[];
};

/**
 * Ancoragem das legendas do hero.
 *
 * ATENÇÃO: estes rótulos descrevem o que aparece no VÍDEO, que hoje é um lanche
 * genérico de demonstração — não o Burguer do Palhaço de verdade. As diferenças
 * são o tomate (que o Palhaço não leva) e a quantidade de carne (o Palhaço leva
 * dois smash, o vídeo mostra um). Quando o vídeo real for gravado, estes rótulos
 * mudam junto.
 *
 * Os valores de `y` foram medidos sobre o primeiro frame de
 * `public/hero/hero-1080.mp4`. Trocar o vídeo exige remedi-los.
 */
export const CAMADAS: Ingrediente[] = [
  { nome: "Pão com gergelim", y: 15, lado: "direita" },
  { nome: "Alface", y: 30, lado: "esquerda" },
  { nome: "Tomate", y: 41, lado: "direita" },
  { nome: "Cheddar", y: 49, lado: "esquerda" },
  { nome: "Smash na chapa", y: 58, lado: "direita" },
  { nome: "Cebola", y: 68, lado: "esquerda" },
  { nome: "Picles", y: 76, lado: "direita" },
  { nome: "Pão base", y: 85, lado: "esquerda" },
];

/** Bordas horizontais da pilha no frame inicial, em % da largura. */
export const PILHA = { esquerda: 37, direita: 64 };

/**
 * Dados da casa. Para apresentar o site a outro estabelecimento, este bloco e a
 * lista BURGERS são as únicas coisas que precisam mudar.
 *
 * A marca sai em dois tons: "ME" em creme e "POUPA" em brasa — é o tratamento
 * que a própria casa usa nas peças do Instagram.
 */
export const CASA = {
  marca: { antes: "ME ", destaque: "POUPA", depois: "" },
  nomeCompleto: "Me Poupa",
  cidade: "Poços de Caldas, MG",
  assinatura: "Rodízio todo dia por R$ 99,99. Criança até 5 anos não paga.",
};

/** Lanche que abre o site, no vídeo do hero. */
export const DESTAQUE = "Burguer do Palhaço";

/**
 * Quatro dos dezoito itens do cardápio, escolhidos para a vitrine: o assinado
 * da casa, o do mês, e dois que a própria casa fotografa mais no Instagram.
 * O cardápio completo continua no balcão e no delivery.
 */
export const BURGERS: Burger[] = [
  {
    slug: "burguer-do-palhaco",
    nome: "Burguer do Palhaço",
    chamada:
      "Dois smash prensados na chapa, molho especial e picles pra cortar a gordura. No pão de gergelim.",
    ingredientes: [
      "2 burguers smash",
      "Alface",
      "Queijo cheddar",
      "Molho especial",
      "Cebola",
      "Picles",
      "Pão com gergelim",
    ],
  },
  {
    slug: "burguer-14",
    numero: "14",
    nome: "Burguer 14",
    chamada:
      "Cem gramas de queijo canastra empanado no Doritos. É o do mês — enquanto durar o mês.",
    ingredientes: [
      "2 burguers smash",
      "100g queijo canastra empanado no Doritos",
      "Tomate grelhado",
      "Manjericão",
      "Pão",
    ],
  },
  {
    slug: "burguer-7",
    numero: "07",
    nome: "Burguer 7",
    chamada:
      "Anéis de cebola empanados dentro do lanche, não na porção do lado.",
    ingredientes: [
      "Burguer",
      "Bacon",
      "Anéis de cebola empanados",
      "Cheddar fatiado",
      "Pão",
    ],
  },
  {
    slug: "burguer-11",
    numero: "11",
    nome: "Burguer 11",
    chamada:
      "Brie e bacon caramelizado no mesmo lanche. Doce e salgado, e funciona.",
    ingredientes: [
      "Burguer",
      "Tomate grelhado",
      "Bacon caramelizado",
      "Queijo brie",
      "Pão",
    ],
  },
];
