import { SITE_CONFIG } from "./site.config";

/*
 * Tudo que é texto e dado do site mora aqui. Trocar de casa, de lanche ou de
 * frase é mexer neste arquivo — os componentes só desenham.
 *
 * Regra que vale para o arquivo inteiro: nome de produto, ingrediente, preço,
 * endereço e horário só entram se vieram da casa (cardápio, posts, fotos). O
 * que é proposta de marca — manchete, chamada, piada — pode ser inventado, e
 * está marcado como tal onde importa.
 */

export type Ingrediente = {
  nome: string;
  /** Posição vertical do ingrediente no primeiro quadro do vídeo, em % da altura. */
  y: number;
  lado: "esquerda" | "direita";
};

export type Item = {
  nome: string;
  /** Número do cardápio. É a identidade da casa: "me vê um 7". */
  numero?: string;
  /** Composição, do jeito que está no cardápio impresso. Vazio quando o
   *  cardápio só traz o nome — melhor nada que um detalhe inventado. */
  descricao?: string;
  /** Preco opcional, ja formatado para exibicao (ex.: "R$ 29,90"). */
  preco?: string;
  /** Uma linha de chamada, para os itens com foto. */
  chamada?: string;
  foto?: string;
  alt?: string;
  /** Etiqueta pequena sobre o card: "do mês", "o da casa". */
  selo?: string;
};

export type Grupo = { titulo?: string; nota?: string; itens: Item[] };

export type Aba = {
  id: string;
  rotulo: string;
  titulo: string;
  intro: string;
  grupos: Grupo[];
};

/* ------------------------------------------------------------------ casa */

export const CASA = {
  nomeCompleto: SITE_CONFIG.marca.nome,
  assinaturaDaMarca: SITE_CONFIG.marca.assinatura,
  cidade: SITE_CONFIG.local.cidadeComEstado,
  endereco: SITE_CONFIG.local.endereco,
  horario: SITE_CONFIG.atendimento.textoCompleto,
  instagram: SITE_CONFIG.contato.instagram,
  arroba: SITE_CONFIG.contato.arroba,
  /** Link oficial de WhatsApp, passado pela casa. */
  whatsapp: SITE_CONFIG.contato.whatsapp,

  /**
   * PRECISA DE CONFIRMAÇÃO: a casa se apresenta assim na bio do Instagram, mas
   * não diz qual premiação nem em que anos.
   */
  selo: SITE_CONFIG.marca.selo,
};

/* ------------------------------------------------------------------ hero */

export const HERO = {
  etiqueta: "Burgers & Shakes · Poços de Caldas",
  /** A casa numera os lanches; a manchete sai daí. Proposta de marca. */
  manchete: "Aqui o lanche tem número.",
  pergunta: "Qual é o seu?",
  texto:
    "São 14 burguers numerados, mais o do Palhaço e o Kids. É só falar o número. E, se a fome for das grandes, tem rodízio todo dia.",
  botaoCardapio: "Ver o cardápio",
  botaoRodizio: "Rodízio R$ 79,90",
};

/**
 * Legendas do vídeo do hero. ATENÇÃO: o vídeo é um lanche genérico de
 * demonstração — tem tomate e uma carne só. Quando o vídeo real da casa for
 * gravado, estes rótulos mudam junto, e os `y` (medidos sobre o primeiro
 * quadro) precisam ser remedidos.
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

/** Bordas horizontais da pilha no primeiro quadro, em % da largura. */
export const PILHA = { esquerda: 37, direita: 64 };

/* -------------------------------------------------------------- letreiro */

/** "Contém amor" e "Obaaaa" estão impressos no papel de embrulho da casa. */
export const LETREIRO = [
  "Burgers & Shakes",
  "Rodízio todo dia",
  "Contém amor",
  "Smash na chapa",
  "Obaaaa",
  "Shake de 400 ml",
];

/* ------------------------------------------------------------- transição */

/**
 * PRECISA DE CONFIRMAÇÃO: o lanche do começo do vídeo foi lido como Burguer 14
 * pela montagem (gergelim, manjericão, tomate grelhado, duas carnes e empanado).
 */
export const TRANSICAO = {
  de: "14",
  para: "07",
  titulo: "Ficou entre os dois?",
  texto:
    "O 14 leva queijo canastra empanado no Doritos. O 7 leva anel de cebola empanado dentro do lanche. Ninguém aqui vai te julgar se pedir os dois.",
  video: "/transicao/14-e-7-loop.mp4",
  poster: "/transicao/poster.webp",
  alt: "O Burguer 14 desliza para fora do balcão enquanto o Burguer 7 entra no lugar, e depois o contrário",
};

/* --------------------------------------------------------------- rodízio */

export const RODIZIO = {
  titulo: "Rodízio todo dia",
  preco: "79,90",
  /** Do post da própria casa — que avisa que preço muda em feriado. */
  texto:
    "Era só no fim de semana. Agora é todo dia. Burger saindo da chapa até você pedir arrego.",
  regras: ["Criança até 5 anos não paga", "De 6 a 11 anos paga meia", "Valor pode mudar em feriados"],
  /** Confirmado: este mês o rodízio vale em todo dia de funcionamento. */
  quando: "Todo dia que a casa abre",
  botao: "Chamar no WhatsApp",
  foto: "/cardapio/rodizio.jpg",
  alt: "Vários mini burguers com cheddar no prato do rodízio",
};

/* -------------------------------------------------------------- cardápio */

/** Abertura da seção. É a pergunta de quem está no balcão. Proposta de marca. */
export const CHAMADA_CARDAPIO = {
  etiqueta: "O cardápio",
  titulo: ["Qual vai ser", "hoje?"],
};

/**
 * Transcrito do cardápio que a casa publicou nos destaques do Instagram.
 * PRECISA DE CONFIRMAÇÃO: o destaque é de outubro de 2023 — itens e
 * composições podem ter mudado. Nenhum preço, porque o cardápio não traz.
 */
export const CARDAPIO: Aba[] = [
  {
    id: "burguers",
    rotulo: "Burguers",
    titulo: "Escolhe o seu número",
    intro: "Do 1 ao 14, mais o do Palhaço e o Kids. Pede pelo número que a cozinha entende.",
    grupos: [
      {
        itens: [
          {
            numero: "14",
            nome: "Burguer 14",
            selo: "Burguer do mês",
            descricao: "Pão, 2 burgers smash, 100g de queijo canastra empanado no Doritos, tomate grelhado e manjericão",
            chamada: "Canastra empanado no Doritos. Sim, no Doritos.",
            foto: "/cardapio/burguer-14.jpg",
            alt: "Burguer 14 nas mãos: duas carnes, queijo canastra empanado, tomate grelhado e manjericão",
          },
          {
            numero: "07",
            nome: "Burguer 7",
            descricao: "Pão, burger, bacon, anéis de cebola empanados e cheddar fatiado",
            chamada: "O anel de cebola vai dentro. Aqui ele não é acompanhamento, é camada.",
            foto: "/cardapio/burguer-7.jpg",
            alt: "Burguer 7: pão escuro, anéis de cebola empanados, cheddar derretido e bacon",
          },
          {
            nome: "Burguer do Palhaço",
            selo: "O da casa",
            descricao: "2 burgers smash, alface, queijo cheddar, molho especial, cebola e picles no pão com gergelim",
          },
          { numero: "01", nome: "Burguer 1", descricao: "Pão, burger, picles e cheddar fatiado" },
          { numero: "02", nome: "Burguer 2", descricao: "Pão, burger, bacon, alface e requeijão cremoso" },
          { numero: "03", nome: "Burguer 3", descricao: "Pão, burger, bacon, alface e creme de gorgonzola" },
          { numero: "04", nome: "Burguer 4", descricao: "Pão, burger, bacon, cebola roxa, molho BBQ e queijo prato" },
          { numero: "05", nome: "Burguer 5", descricao: "Pão, burger, bacon, alface, tomate e queijo prato" },
          { numero: "06", nome: "Burguer 6", descricao: "Pão, burger, pepperoni, rúcula, tomate e requeijão cremoso" },
          { numero: "08", nome: "Burguer 8", descricao: "Pão, burger, bacon, molho de mostarda dijon e cheddar fatiado" },
          { numero: "09", nome: "Burguer 9", descricao: "Pão, burger, cebola caramelizada, bacon e queijo prato" },
          { numero: "10", nome: "Burguer 10", descricao: "Pão, burger, 2 ovos, cheddar fatiado e bacon" },
          { numero: "11", nome: "Burguer 11", descricao: "Pão, burger, tomate grelhado, bacon caramelizado e queijo brie" },
          { numero: "12", nome: "Burguer 12", descricao: "Pão, burger, alface, pepperoni, molho caesar e queijo minas" },
          { numero: "13", nome: "Burguer 13", descricao: "Pão, burger de linguiça, vinagrete de picles e queijo minas" },
          {
            nome: "Kids",
            selo: "Com fritas",
            descricao: "Pão, burger, cheddar fatiado, alface e tomate em tamanho menor",
          },
        ],
      },
    ],
  },
  {
    id: "hot-dogs",
    rotulo: "Hot dogs",
    titulo: "Hot dogs",
    intro: "Todos com salsicha defumada, bacon e requeijão. O resto você escolhe: milho, mostarda dijon ou coleslaw.",
    grupos: [
      {
        itens: [
          { nome: "Hot Corn", descricao: "Pão, salsicha defumada, bacon, milho e requeijão cremoso" },
          { nome: "Hot Mostarda", descricao: "Pão, salsicha defumada, bacon, requeijão cremoso e mostarda dijon" },
          { nome: "Hot Law", descricao: "Pão, salsicha defumada, bacon, requeijão cremoso e salada coleslaw" },
        ],
      },
    ],
  },
  {
    id: "porcoes",
    rotulo: "Porções",
    titulo: "Porções",
    intro: "Pra dividir. Ou não.",
    grupos: [
      {
        nota: "Extra de cheddar e bacon em qualquer porção.",
        itens: [
          {
            nome: "Anéis de cebola empanados",
            descricao: "Na cestinha, com maionese verde da casa",
            foto: "/cardapio/aneis.jpg",
            alt: "Cestinha de anéis de cebola empanados com um potinho de maionese verde",
          },
          { nome: "Fritas tradicionais" },
          { nome: "Dadinho de batata com provolone" },
          { nome: "Batata rústica" },
          { nome: "Meia porção", descricao: "Pra quem quer só beliscar" },
        ],
      },
    ],
  },
  {
    id: "shakes",
    rotulo: "Shakes",
    titulo: "Milkshakes",
    intro: "Nove sabores, todos de 400 ml. E sim, tem de bacon.",
    grupos: [
      {
        itens: [
          { nome: "Morango" },
          { nome: "Chocolate" },
          { nome: "Bacon" },
          { nome: "Cheesecake de frutas vermelhas" },
          { nome: "Caramelo salgado" },
          { nome: "Torta de limão" },
          { nome: "Ninho com Nutella" },
          { nome: "Ovomaltine" },
          { nome: "Paçoca" },
        ],
      },
    ],
  },
  {
    id: "bebidas",
    rotulo: "Drinks e bebidas",
    titulo: "Pra acompanhar",
    intro: "Drink com Jack e com gin, soda italiana, suco de fruta e longneck.",
    grupos: [
      {
        titulo: "Drinks",
        itens: [
          { nome: "It's Green", descricao: "Vodka, limão e açúcar" },
          { nome: "It's Purple", descricao: "Vodka, açaí e morango" },
          { nome: "Jack Lemonade", descricao: "Jack Daniel's, xarope de limão siciliano e citrus" },
          { nome: "Maracujack", descricao: "Jack Daniel's, xarope de maracujá com gengibre e citrus" },
          { nome: "Atômica", descricao: "Gin, tônica, xarope de maracujá com limão siciliano e pimenta rosa" },
          { nome: "Tan Tônica", descricao: "Gin, tônica e xarope de tangerina com grenadine" },
        ],
      },
      {
        titulo: "Soda italiana",
        itens: [
          { nome: "Maçã verde" },
          { nome: "Cranberry" },
          { nome: "Maracujá" },
          { nome: "Frutas vermelhas" },
          { nome: "Grenadine" },
          { nome: "Limão siciliano" },
          { nome: "Tangerina" },
        ],
      },
      {
        titulo: "Bebidas",
        itens: [
          { nome: "Água", descricao: "Com e sem gás" },
          { nome: "Energético" },
          {
            nome: "Refrigerante lata",
            descricao: "Pepsi, Coca-Cola, Coca-Cola Zero, Soda, Guaraná, Guaraná Zero, Fanta e água tônica",
          },
          { nome: "Itubaína" },
          {
            nome: "Suco",
            descricao: "1 ou 2 frutas: laranja, morango, caju, maracujá, acerola, abacaxi e abacaxi com hortelã",
          },
          { nome: "Suco com leite condensado", descricao: "Água, gelo, fruta e leite condensado" },
          { nome: "Longneck", descricao: "Budweiser e Eisenbahn" },
          { nome: "Heineken", descricao: "Longneck" },
          {
            nome: "Chá gelado",
            descricao: "Tradicional, pêssego, limão siciliano, cranberry, frutas vermelhas e grenadine",
          },
        ],
      },
    ],
  },
];

/** Atalho para quem precisa só dos burguers (dados estruturados, transição). */
export const BURGUERS = CARDAPIO[0].grupos[0].itens;
