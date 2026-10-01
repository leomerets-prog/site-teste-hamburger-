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
 * A marca agora é o logotipo real da casa, em `public/marca/me-poupa.png`,
 * extraído do perfil deles. Antes era uma reconstrução em serifa — boa como
 * provisório, errada agora que existe o original.
 *
 * O amarelo #FDC403 foi medido no próprio arquivo e virou a cor de destaque do
 * site inteiro, no lugar do âmbar que eu tinha escolhido no escuro.
 */
export const CASA = {
  nomeCompleto: "Me Poupa",
  assinaturaDaMarca: "Burgers & Shakes",
  cidade: "Poços de Caldas, MG",
  endereco: "Rua Santa Catarina, 271",
  horario: "De segunda a sábado, a partir das 18h",

  /**
   * A manchete sai do que a casa tem de mais próprio: o cardápio é numerado,
   * de 1 a 14. Nenhum concorrente poderia usar essa frase — que é justamente o
   * teste de uma boa manchete.
   */
  manchete: "Aqui o lanche tem número. Todo mundo tem o seu.",

  /**
   * PRECISA DE CONFIRMAÇÃO: a casa se apresenta assim na bio do Instagram, mas
   * não diz qual premiação nem em que anos. Vale perguntar antes de mostrar.
   */
  selo: "Quatro vezes a melhor hamburgueria da cidade",
};

/** Lanche que abre o site, no vídeo do hero. */
export const DESTAQUE = "Burguer do Palhaço";

/**
 * Blocos grandes do cardápio. São só três porque só existem três fotos reais
 * da casa — inventar imagem para os outros quinze itens seria pior que
 * apresentá-los em lista. Quando a casa mandar mais fotos, cada item promovido
 * para cá é uma entrada nova nesta lista.
 *
 * As fotos são as que a própria casa mandou. A do Burguer 14 confirma a leitura
 * que antes era só palpite: aparecem o tomate grelhado e o manjericão que o
 * cardápio lista, além do empanado.
 */
export const DESTAQUES: Destaque[] = [
  {
    slug: "burguer-7",
    numero: "07",
    nome: "Burguer 7",
    chamada:
      "Anel de cebola empanado vai dentro do lanche. Aqui não é acompanhamento, é camada.",
    ingredientes: [
      "Burguer",
      "Bacon",
      "Anéis de cebola empanados",
      "Cheddar fatiado",
    ],
    foto: "/cardapio/burguer-7.jpg",
    alt: "Burguer 7 com anéis de cebola empanados, cheddar derretido e bacon no pão escuro",
  },
  {
    slug: "burguer-14",
    numero: "14",
    nome: "Burguer 14",
    chamada:
      "Cem gramas de queijo canastra empanado no Doritos. Sim, no Doritos. É o do mês — some quando o mês acabar.",
    ingredientes: [
      "2 burguers smash",
      "100g queijo canastra empanado no Doritos",
      "Tomate grelhado",
      "Manjericão",
    ],
    foto: "/cardapio/burguer-14.jpg",
    alt: "Burguer 14 segurado com as duas mãos: queijo canastra empanado, tomate grelhado e manjericão",
  },
  {
    slug: "rodizio",
    preco: "99,99",
    nome: "O Rodízio",
    chamada:
      "Era só no fim de semana. Agora é todo dia. Criança até 5 anos não paga, de 6 a 11 paga meia.",
    ingredientes: ["Rodízio de burguers", "Todos os dias", "Reserva pelo Direct"],
    foto: "/cardapio/rodizio.jpg",
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
