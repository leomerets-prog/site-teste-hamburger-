# Motor de sites para hamburguerias

Base reutilizavel em Next.js para criar sites independentes para hamburguerias.
O projeto atual vem preenchido com os dados da Me Poupa e funciona como a
primeira implementacao real do motor.

## Criando um novo cliente

1. Crie um novo repositorio a partir desta base.
2. Altere `data/site.config.ts` com marca, endereco, contatos, SEO, cores e
   caminhos das midias.
3. Altere `data/burgers.ts` com textos, ofertas e cardapio. O campo `preco` dos
   itens e opcional e aceita valores ja formatados, como `R$ 29,90`.
4. Substitua logo, fotos, videos, icones e imagem de compartilhamento.
5. Defina `NEXT_PUBLIC_SITE_URL` no ambiente de producao quando usar dominio
   proprio.
6. Execute `npm run build` antes da publicacao.

## Onde cada informacao vive

- `data/site.config.ts`: identidade, contatos, local, horario, SEO, tema e
  midias principais.
- `data/burgers.ts`: conteudo comercial, cardapio, rodizio e textos das secoes.
- `components/`: apresentacao reutilizavel.
- `app/globals.css`: estrutura visual e animacoes; as cores sao sobrescritas
  pela configuracao central.
- `public/`: arquivos da marca e fotos dos produtos.
- `.agents/skills/`: orientação local do projeto para qualidade React/Next.js,
  publicação na Vercel e prospecção de comércios locais.
- `docs/fontes-me-poupa.md`: fontes públicas consultadas e dados pendentes de
  confirmação antes de entregar a demonstração.
- `public/referencias-instagram/`: imagens públicas coletadas para revisão;
  ainda não associadas a produtos específicos do cardápio.

## Estrategia de repositorios

Cada hamburgueria publicada deve ter seu proprio repositorio e projeto de
deploy. Branches servem para desenvolver e testar mudancas dentro de um mesmo
site. Novos layouts podem ser adicionados ao motor sem remover os anteriores.
