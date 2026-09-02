export type Ingrediente = {
  nome: string;
  /** Posição vertical do ingrediente no frame inicial do vídeo, em % da altura. */
  y: number;
  /** Lado onde a legenda se ancora. */
  lado: "esquerda" | "direita";
};

export type Destaque = {
  slug: string;
  /** Numeral do cardápio, quando o lanche tem um. */
  numero?: string;
  /** Valor em destaque, para itens que são oferta e não lanche. */
  preco?: string;
  nome: string;
  chamada: string;
  ingredientes: string[];
  foto: string;
  /** Texto alternativo da foto. */
  alt: string;
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
 * `public/hero/hero-1440.mp4`. Trocar o vídeo exige remedi-los.
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
 * A marca sai em dois tons: "ME" em creme e "POUPA" em brasa — é o tratamento
 * que a própria casa usa nas peças do Instagram.
 */
export const CASA = {
  marca: { antes: "ME ", destaque: "POUPA", depois: "" },
  nomeCompleto: "Me Poupa",
  cidade: "Poços de Caldas, MG",
  assinatura: "Rua Santa Catarina, 271 — de segunda a sábado, a partir das 18h.",
};

/** Lanche que abre o site, no vídeo do hero. */
export const DESTAQUE = "Burguer do Palhaço";

/**
 * Blocos grandes do cardápio. São só três porque só existem três fotos reais
 * da casa — inventar imagem para os outros quinze itens seria pior que
 * apresentá-los em lista. Quando a casa mandar mais fotos, cada item promovido
 * para cá é uma entrada nova nesta lista.
 *
 * PRECISA DE CONFIRMAÇÃO: a foto de `burguer-14.jpg` foi associada ao Burguer 14
 * pelo empanado visível, mas isso é leitura da imagem, não informação da casa.
 */
export const DESTAQUES: Destaque[] = [
  {
    slug: "burguer-7",
    numero: "07",
    nome: "Burguer 7",
    chamada:
      "Os anéis de cebola vêm empanados dentro do lanche, não na porção do lado.",
    ingredientes: [
      "Burguer",
      "Bacon",
      "Anéis de cebola empanados",
      "Cheddar fatiado",
    ],
    foto: "/cardapio/burguer-7",
    alt: "Burguer 7 com anéis de cebola empanados, cheddar derretido e bacon",
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
    ],
    foto: "/cardapio/burguer-14",
    alt: "Burguer 14 com queijo empanado, carne e bacon no pão de gergelim",
  },
  {
    slug: "rodizio",
    preco: "99,99",
    nome: "O Rodízio",
    chamada:
      "Todo dia, não só no fim de semana. Criança até 5 anos não paga, de 6 a 11 paga meia.",
    ingredientes: ["Rodízio de burguers", "Todos os dias", "Reserva pelo Direct"],
    foto: "/cardapio/rodizio",
    alt: "Vários mini burguers com cheddar servidos no prato do rodízio",
  },
];

/**
 * O resto do cardápio, em lista. Sem foto e sem invenção — o cliente vê a
 * extensão do menu, e a casa decide depois quais itens merecem foto.
 */
export const RESTO: { nome: string; ingredientes: string }[] = [
  { nome: "Burguer 1", ingredientes: "Picles e cheddar fatiado" },
  { nome: "Burguer 2", ingredientes: "Bacon, alface e requeijão cremoso" },
  { nome: "Burguer 3", ingredientes: "Bacon, alface e creme de gorgonzola" },
  {
    nome: "Burguer 4",
    ingredientes: "Bacon, cebola roxa, molho BBQ e queijo prato",
  },
  { nome: "Burguer 5", ingredientes: "Bacon, alface, tomate e queijo prato" },
  {
    nome: "Burguer 6",
    ingredientes: "Pepperoni, rúcula, tomate e requeijão cremoso",
  },
  {
    nome: "Burguer 8",
    ingredientes: "Bacon, molho de mostarda dijon e cheddar fatiado",
  },
  {
    nome: "Burguer 9",
    ingredientes: "Cebola caramelizada, bacon e queijo prato",
  },
  { nome: "Burguer 10", ingredientes: "2 ovos, cheddar fatiado e bacon" },
  {
    nome: "Burguer 11",
    ingredientes: "Tomate grelhado, bacon caramelizado e queijo brie",
  },
  {
    nome: "Burguer 12",
    ingredientes: "Alface, pepperoni, molho caesar e queijo minas",
  },
  {
    nome: "Burguer 13",
    ingredientes: "Burguer de linguiça, vinagrete de picles e queijo minas",
  },
  {
    nome: "Kids",
    ingredientes: "Cheddar fatiado, alface e tomate em tamanho menor, com fritas",
  },
];
