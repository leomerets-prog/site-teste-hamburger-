import { CARDAPIO, CASA } from "@/data/burgers";
import { SITE } from "@/lib/site";

/**
 * Dados estruturados de restaurante (schema.org). É o que faz o Google montar
 * o cartão lateral com endereço, horário e fotos, em vez de só um link azul.
 *
 * Regra que segui aqui: só entra o que foi verificado. Por isso NÃO há telefone
 * (o número que achei veio de agregador, não da casa), nem faixa de preço (só
 * conheço o valor do rodízio), nem coordenadas. Cada um desses é um ganho real
 * de SEO local esperando confirmação na reunião.
 */
export default function DadosEstruturados() {
  const dados = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: `${CASA.nomeCompleto} ${CASA.assinaturaDaMarca}`,
    description:
      "Hamburgueria em Poços de Caldas com catorze burguers numerados, o Burguer do Palhaço, shakes de 400 ml e rodízio todos os dias.",
    url: SITE,
    image: [`${SITE}/opengraph-image.jpg`],
    logo: `${SITE}/marca/me-poupa.png`,
    servesCuisine: ["Hambúrguer", "Hot dog", "Milkshake"],
    address: {
      "@type": "PostalAddress",
      streetAddress: CASA.endereco,
      addressLocality: "Poços de Caldas",
      addressRegion: "MG",
      addressCountry: "BR",
    },
    // A casa divulga o horário de abertura, mas não o de fechamento — por isso
    // só `opens`. Com o horário de fechar confirmado, isto fica completo.
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "18:00",
      },
    ],
    hasMenu: {
      "@type": "Menu",
      name: "Cardápio",
      // O cardápio inteiro, aba por aba, sem preço: a casa não publica.
      hasMenuSection: CARDAPIO.map((aba) => ({
        "@type": "MenuSection",
        name: aba.rotulo,
        hasMenuItem: aba.grupos.flatMap((g) =>
          g.itens.map((item) => ({
            "@type": "MenuItem",
            name: item.nome,
            ...(item.descricao && { description: item.descricao }),
            ...(item.foto && { image: `${SITE}${item.foto}` }),
          })),
        ),
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      // O conteúdo é nosso e estático; não vem de entrada de usuário.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dados) }}
    />
  );
}
