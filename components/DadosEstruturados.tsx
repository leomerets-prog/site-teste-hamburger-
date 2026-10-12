import { CARDAPIO, CASA } from "@/data/burgers";
import { SITE_CONFIG } from "@/data/site.config";
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
    description: SITE_CONFIG.seo.descricaoEstruturada,
    url: SITE,
    image: [`${SITE}${SITE_CONFIG.midia.imagemCompartilhamento}`],
    logo: `${SITE}${SITE_CONFIG.midia.logo}`,
    servesCuisine: [...SITE_CONFIG.seo.culinaria],
    address: {
      "@type": "PostalAddress",
      streetAddress: CASA.endereco,
      addressLocality: SITE_CONFIG.local.cidade,
      addressRegion: SITE_CONFIG.local.estado,
      addressCountry: SITE_CONFIG.local.pais,
    },
    // A casa divulga o horário de abertura, mas não o de fechamento — por isso
    // só `opens`. Com o horário de fechar confirmado, isto fica completo.
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...SITE_CONFIG.atendimento.diasSchema],
        opens: SITE_CONFIG.atendimento.abreAs,
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
            ...(item.preco && {
              offers: { "@type": "Offer", priceCurrency: "BRL", price: item.preco.replace(/[^0-9,]/g, "").replace(",", ".") },
            }),
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
