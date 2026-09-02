export type Ingrediente = {
  nome: string;
  /** Posição vertical do ingrediente no frame inicial do vídeo, em % da altura. */
  y: number;
  /** Lado onde a legenda se ancora. */
  lado: "esquerda" | "direita";
};

export type Burger = {
  slug: string;
  nome: string;
  chamada: string;
  ingredientes: string[];
};

/**
 * Ancoragem das legendas do hero. Os valores de `y` foram medidos sobre o
 * primeiro frame de `public/hero/hero-1080.mp4` — se o vídeo for trocado,
 * remeça antes de mexer nesses números.
 */
export const CAMADAS: Ingrediente[] = [
  { nome: "Pão brioche", y: 15, lado: "direita" },
  { nome: "Alface americana", y: 30, lado: "esquerda" },
  { nome: "Tomate em rodela", y: 41, lado: "direita" },
  { nome: "Cheddar derretido", y: 49, lado: "esquerda" },
  { nome: "Blend 180g", y: 58, lado: "direita" },
  { nome: "Cebola roxa", y: 68, lado: "esquerda" },
  { nome: "Picles", y: 76, lado: "direita" },
  { nome: "Pão base tostado", y: 85, lado: "esquerda" },
];

/** Bordas horizontais da pilha no frame inicial, em % da largura. */
export const PILHA = { esquerda: 37, direita: 64 };

/**
 * Dados da casa. Para apresentar o site a outro estabelecimento, este bloco e
 * a lista BURGERS abaixo são as únicas coisas que precisam mudar — o resto do
 * site lê tudo daqui.
 *
 * A marca é quebrada em três pedaços porque a letra do meio sai na cor de
 * brasa: é o único ponto de cor do logo.
 */
export const CASA = {
  marca: { antes: "SALAD", destaque: "Ã", depois: "O" },
  nomeCompleto: "Saladão",
  cidade: "Poços de Caldas, MG",
  assinatura: "Pão macio, carne grossa, queijo que escorre. A gente monta na hora.",
};

export const DESTAQUE = "X-SALADA";

export const BURGERS: Burger[] = [
  {
    slug: "x-salada",
    nome: "X-Salada",
    chamada: "O de sempre. Só que a alface entra crocante e o queijo escorre.",
    ingredientes: [
      "Pão brioche",
      "Alface americana",
      "Tomate",
      "Cheddar",
      "Blend 180g",
      "Cebola roxa",
      "Picles",
    ],
  },
  {
    slug: "x-bacon",
    nome: "X-Bacon",
    chamada: "Bacon frito na hora, na chapa, até quebrar quando você morde.",
    ingredientes: [
      "Pão brioche",
      "Bacon em tiras",
      "Cheddar",
      "Blend 180g",
      "Cebola caramelizada",
      "Maionese da casa",
    ],
  },
  {
    slug: "x-egg",
    nome: "X-Egg",
    chamada: "Ovo com a gema mole. Se sujar a mão, era pra ser assim.",
    ingredientes: [
      "Pão brioche",
      "Ovo frito",
      "Cheddar",
      "Blend 180g",
      "Alface",
      "Tomate",
    ],
  },
  {
    slug: "x-tudo",
    nome: "X-Tudo",
    chamada: "Tudo mesmo. Não pergunta, só segura com as duas mãos.",
    ingredientes: [
      "Pão brioche",
      "Bacon em tiras",
      "Ovo frito",
      "Cheddar",
      "Dois blends 180g",
      "Alface",
      "Tomate",
      "Cebola roxa",
      "Picles",
    ],
  },
];
