export type Ingrediente = {
  nome: string;
  y: number;
  lado: "esquerda" | "direita";
};
// Labels describe the existing demonstration video, not a specific menu item.
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
export const PILHA = { esquerda: 37, direita: 64 };
export const DESTAQUE = "Burguer ilustrativo";
export const CASA = {
  nomeCompleto: "Me Poupa",
  cidade: "Poços de Caldas, MG",
  endereco: "Rua Santa Catarina, 271",
  horario: "De segunda a sábado, a partir das 18h",
  manchete: "Sabor de sobra.\nFrescura, zero.",
  instagram: "https://www.instagram.com/mepoupaoficial/",
  whatsapp: "https://wa.me/message/QE3NTBFHKBPTO1",
  maps: "https://www.google.com/maps/search/?api=1&query=Me+Poupa+Rua+Santa+Catarina+271+Po%C3%A7os+de+Caldas",
};
// Menu descriptions inherited from the user's original repository (dff1e20).
// The linked ordering platform is inactive. No prices or current availability
// are asserted; the presentation directs visitors to the official WhatsApp.
export const CARDAPIO = [
  { numero: "01", nome: "Burguer 1", ingredientes: "Picles e cheddar fatiado" },
  {
    numero: "02",
    nome: "Burguer 2",
    ingredientes: "Bacon, alface e requeijão cremoso",
  },
  {
    numero: "03",
    nome: "Burguer 3",
    ingredientes: "Bacon, alface e creme de gorgonzola",
  },
  {
    numero: "04",
    nome: "Burguer 4",
    ingredientes: "Bacon, cebola roxa, molho BBQ e queijo prato",
  },
  {
    numero: "05",
    nome: "Burguer 5",
    ingredientes: "Bacon, alface, tomate e queijo prato",
  },
  {
    numero: "06",
    nome: "Burguer 6",
    ingredientes: "Pepperoni, rúcula, tomate e requeijão cremoso",
  },
  {
    numero: "07",
    nome: "Burguer 7",
    ingredientes: "Bacon, anéis de cebola empanados e cheddar fatiado",
  },
  {
    numero: "08",
    nome: "Burguer 8",
    ingredientes: "Bacon, molho de mostarda dijon e cheddar fatiado",
  },
  {
    numero: "09",
    nome: "Burguer 9",
    ingredientes: "Cebola caramelizada, bacon e queijo prato",
  },
  {
    numero: "10",
    nome: "Burguer 10",
    ingredientes: "2 ovos, cheddar fatiado e bacon",
  },
  {
    numero: "11",
    nome: "Burguer 11",
    ingredientes: "Tomate grelhado, bacon caramelizado e queijo brie",
  },
  {
    numero: "12",
    nome: "Burguer 12",
    ingredientes: "Alface, pepperoni, molho caesar e queijo minas",
  },
  {
    numero: "13",
    nome: "Burguer 13",
    ingredientes: "Burguer de linguiça, vinagrete de picles e queijo minas",
  },
  {
    numero: "14",
    nome: "Burguer 14",
    ingredientes:
      "2 burguers smash, 100 g de queijo canastra empanado no Doritos, tomate grelhado e manjericão",
  },
  {
    numero: "K",
    nome: "Kids",
    ingredientes:
      "Cheddar fatiado, alface e tomate em tamanho menor, com fritas",
  },
];
