# Me Poupa — proposta de site

Personalização do projeto existente para apresentação ao dono da hamburgueria. Mantém o vídeo original com montagem do hambúrguer pela rolagem e adiciona identidade amarela e preta, logo, cardápio pesquisável, localização e acesso ao WhatsApp oficial.

## Executar

```sh
npm ci
npm run dev
```

Para produção: `npm run build` e `npm start`. Em ambientes Windows que restringem processos filhos, o build pode usar workers em threads sem desativar a checagem de tipos:

```powershell
$env:LOCAL_BUILD_WORKERS='1'
npm run build
```

## Origem do conteúdo e limites da proposta

- Base: branch `claude/hamburger-catalog-nextjs-pqtoox`, commit `dff1e20` de `leomerets-prog/site-teste-hamburger-`.
- [Instagram @mepoupaoficial](https://www.instagram.com/mepoupaoficial/): logo amarelo e preto, nome, endereço, horário informado na bio e link oficial de WhatsApp. Conferidos em 30/09/2026.
- [Foto do ambiente](https://www.instagram.com/mepoupaoficial/p/DY-iOpdjV97/): publicação da casa de 30/05/2026. Salva localmente em `public/marca/ambiente.jpg` para não depender de URLs temporárias do Instagram.
- Descrições dos burguers 1–14 e Kids e fotos dos burguers: reaproveitadas do repositório original. Não foi possível reconfirmar o cardápio completo no destaque do Instagram, que exigiu login. Mantidas como seleção da proposta, com aviso visível de consulta à casa.
- O [link de pedidos na bio](https://pedido.brendi.com.br/me-poupa-ou-carlota-joaquina) informa que a loja não utiliza mais a plataforma. Por isso os botões usam o [WhatsApp da bio](https://wa.me/message/QE3NTBFHKBPTO1).
- O perfil anuncia uma nova fase. Foram removidos o preço de R$ 99,99, as regras infantis, a promessa de rodízio diário e a oferta de “lanche do mês”, pois não há confirmação atual.
- A foto antes associada por inferência ao Burguer 14 não é utilizada na apresentação. O vídeo do hero é ilustrativo e está identificado assim na tela.
- O selo “4x melhor” foi omitido por falta de identificação da premiação e dos anos.
- A página contém indicação de versão de apresentação no rodapé e metadados `noindex`. Antes de torná-la oficial, validar com o dono cardápio, horários e uso das imagens.

## Conferências

- Build de produção com TypeScript, sem ignorar erros.
- Navegação para cardápio e localização.
- Busca por ingrediente, ausência de resultados e retorno aos 15 itens.
- Layout em computador e celular, carregamento das imagens e console do navegador.
- Preferência por movimento reduzido apresenta imagem estática, sem baixar o vídeo.

Conteúdo centralizado em `data/burgers.ts`; identidade e layout em `app/globals.css`.
