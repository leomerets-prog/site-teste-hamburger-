# Continuidade — sites de hamburguerias

Atualizado em 12/10/2026. Repositório local: `C:\Sites de hamburgers\site-teste-hamburger-`.

## Recuperação completa — 12/10/2026

Pedido atual: preservar todo o trabalho e enviar o estado completo para a nova branch `codex/bigus-recuperacao` no remoto `origin`, sem sobrescrever branches existentes e sem force push. Snapshot inclui código, testes, documentação, mídias e backups não ignorados em `.tmp-redhot/`; arquivos já ignorados (dependências, builds, caches e configurações locais) permanecem locais. Nenhuma alteração anterior foi descartada.

Validação: build do projeto principal aprovado com `/`, `/conceito/red-hot` e `/conceito/bigus` gerados. Oito testes de integração aprovados, incluindo manutenção do cardápio e da ordem das seções de Bigu’s. `/conceito/bigus` e `/marca/bigus.png` responderam HTTP 200 no preview de produção em `127.0.0.1:3014`. A foto/reel externa do Instagram depende da disponibilidade e das restrições do serviço; o teste local não garante essa integração externa.

Também está pronta a pasta independente `red-hot/`: homepage em `/`, assets e dependências próprios, Root Directory na Vercel = `red-hot`. Build final com Next 16.3.8 aprovado, quatro testes de deploy aprovados e auditoria npm sem vulnerabilidades no momento da preparação. Me Poupa continua na raiz do repositório; para Bigu’s usar o projeto principal e a rota `/conceito/bigus`, não a pasta independente `red-hot`. Dependências do projeto principal preservadas (Next 16.3.2); os alertas detectados anteriormente nessa versão não foram corrigidos no projeto principal, apenas no pacote independente Red Hot.

Nenhum deploy Vercel faz parte deste pedido. A branch de recuperação deve servir como ponto de continuidade; confira o SHA remoto antes de prosseguir. As seções antigas abaixo registram o histórico, não substituem este estado atual.

## Objetivo e preferências

Criar demonstrações comerciais para hamburguerias usando uma base reutilizável, com identidade própria, fotos oficiais e vídeos. O usuário quer acabamento visual próximo ao site Me Poupa: mais detalhes e presença visual, sem aparência de template básico. Prefere fotos dos burgers, não artes de posts. Não inventar preços, ingredientes ou informações comerciais. Conversar em português, com explicações simples.

## Estado do site

- `/`: site Me Poupa, referência visual, com vídeo de burger no hero. Preservar esse site.
- `/conceito/red-hot`: demonstração Red Hot, revisada em 08/10 para visual mais clean com preto, branco e vermelho da marca.
- `/conceito/bigus`: demonstração Bigu’s, creme/laranja/verde.
- Implementação das demos: `app/conceito/[slug]/page.tsx`, `demo.module.css`, `AnimatedLogo.tsx`.
- Demos identificadas como conceitos independentes e com noindex/nofollow. Fontes comerciais em `docs/demos-comerciais.md`.
- Logos tratadas em `public/marca/red-hot.png` e `bigus.png`; originais em `public/marca/originais/`.
- Logo animada Red Hot já integrada localmente: `public/marca/red-hot-logo.mp4`, com poster WebP. Reproduz uma vez ao aparecer, mantém imagem final e oferece fallback para movimento reduzido/erro. Cabeçalho e rodapé verificados.
- Último `npm run build` passou em 08/10/2026, após a revisão clean do Red Hot. O download das fontes Google exigiu execução aprovada fora do sandbox. Preview de produção iniciado em `http://127.0.0.1:3002/conceito/red-hot`; confirmar se ainda está ativo.
- Mudanças não foram publicadas nesta etapa. Verificar git status antes de editar; há trabalho local que deve ser preservado. Não presumir que a Vercel já contém essas alterações.

## Hero e cardápio Red Hot

Foto real oficial: `docs/referencias/red-hot/burger-oficial.jpg`, originária de https://www.instagram.com/redhotstreetfood/p/DeAXYcOjNkm/.

Geramos com GPT Image uma reconstrução ilustrativa baseada nessa foto, mantendo pão rústico, carne, queijo claro, alface e tomate. Partes ocultas foram reconstruídas. O usuário rejeitou uma animação que fazia apenas zoom; quer montagem real das camadas.

Dois frames prontos, com fundo escuro, burger à direita e espaço livre à esquerda:

1. `public/conceitos/red-hot/frame-inicial-camadas.png`: ingredientes separados, sem mão/embalagem.
2. `public/conceitos/red-hot/frame-final-montado.png`: burger montado, mesmo cenário.

Prompt de animação: `docs/prompt-flow-montagem-redhot.txt`. Prompts e registro de geração: `docs/frames-montagem-redhot.md`. Conceito anterior: `docs/fundo-redhot.md` e `public/conceitos/red-hot/fundo-burger-v1.png`.

O vídeo recebido do Google Flow foi inspecionado e integrado ao hero Red Hot. Arquivo web sem áudio: `public/conceitos/red-hot/hero-montagem.mp4` (aprox. 1,5 MB); poster: `hero-montagem-poster.webp`. Reproduz uma vez, respeita movimento reduzido e preserva o último quadro. No desktop ocupa o fundo do hero; no mobile aparece em faixa 16:9 abaixo do texto. Build e revisão visual desktop/mobile passaram.

O cardápio Red Hot foi ampliado com 12 lanches, descrições e valores da superfície “Mostrar o cardápio completo” do Google, marcada como fornecida pela empresa há 3 dias em 05/10/2026. O valor do BLT aparecia como R$ 7,90 e foi omitido por provável inconsistência. Fotos oficiais recentes do Instagram foram integradas aos destaques Dodgers, Yankee e Red Socks; arquivos em `public/conceitos/red-hot/cardapio/`. Confirmar autorização de uso antes de publicação comercial.

Os candidatos antigos em `public/conceitos/red-hot/flow-transicao/`, extraídos de reels, foram rejeitados pelo usuário. Não voltar a oferecer prints de vídeos como fotos para o Flow. Ele forneceu quatro fotos próprias de referência: transições 1→2 (burgers) e 3→4 (hot dog/sanduíche). A segunda transição havia alterado muito os produtos; não foi integrada.

## Transição em loop e foto da casa — 07/10/2026

- O usuário aprovou e enviou `C:\Users\leome\Downloads\Create_food_advertisement_video_1080p_20261007233611.mp4`: 8 s, 1080×1920, transição dos dois burgers (fotos 1→2). Original preservado. Versão web `public/conceitos/red-hot/transicao-burgers.mp4`: H.264, 720×1280, aproximadamente 2 MB; poster `transicao-burgers-poster.webp`.
- Preferência explícita: **efeito de GIF como no Me Poupa**, e não um player de vídeo. `FoodTransitionVideo.tsx` faz loop silencioso, sem controles nativos, começa quando visível e pausa fora da tela. Há somente um pequeno botão de pausa/reprodução. Movimento reduzido desativa início automático; imagem de fallback cobre bloqueio de reprodução/erro. O arquivo continua MP4 para eficiência, mas visualmente funciona como uma imagem animada.
- Moldura escura arredondada com linha e halo de neon vermelho, solicitada pelo usuário; brilho estático, sem piscar. Integrada na seção `#videos`, com título “Um close. Duas vontades.”. Não alterar o hero de montagem já existente.
- Foto da fachada enviada pelo usuário: `C:\Users\leome\AppData\Local\Temp\codex-clipboard-00b8d1dd-1212-426f-b01c-62fd09341b65.png`. Convertida sem recorte para `public/conceitos/red-hot/fachada.webp`, 597×717, aproximadamente 116 KB, na seção `#visite`. Preserva o letreiro “Redhotdog”; não inferir história de mudança de marca a partir da foto.
- Novos campos opcionais em `page.tsx` mantêm o fallback da demo Bigu’s. Me Poupa e cardápio existente não foram alterados. Build passou; revisão de código e checagem visual responsiva realizadas. Não publicado.
- Backups dos arquivos antes desta etapa e imagens de QA estão em `.tmp-redhot/integracao-20261007/`. Conteúdo anterior do projeto permanece local e não deve ser descartado.

## Outros materiais

### WhatsApp e identidade do cardápio — 09/10/2026

Usuário informou que pedidos são somente pelo WhatsApp, não iFood. Todos os CTAs do Red Hot agora apontam para `https://wa.me/message/47EH53KWH5EII1`, incluindo cards, hero, header, visita, footer e novo botão flutuante circular vermelho com hambúrguer SVG branco. Link apenas abre o contato; não envia mensagem automaticamente. Nenhum número foi inventado. Bigu’s permanece com Saipos.

Direção aprovada: Barlow Condensed 600/700 nos nomes dos produtos e categorias; texto dos ingredientes legível em Inter; linhas vermelhas ligando título, moldura da vitrine e cards, com versão lateral no celular. Fotos, nomes, preços e ingredientes preservados. Botão flutuante com título, nome acessível e foco visível. Build e oito testes passaram. Desktop e mobile 390px conferidos, fonte carregada e sem overflow. Screenshot `.tmp-redhot/anexos-20261009/vitrine-vermelha-whatsapp.jpg`. Não publicado. Esta seção substitui as referências anteriores ao iFood como canal de pedidos.

### Vitrine com fotos enviadas — 09/10/2026

Usuário não gostou do cardápio em lista e aprovou uma vitrine de oito produtos com fotos grandes, preços, ingredientes e botão iFood; demais itens ficam em “Ver cardápio completo”. Implementado em `RedHotShowcase.tsx` e CSS próprio, integrado somente ao Red Hot. Dados e fotos vieram de `C:\Users\leome\Downloads\anexos.zip`: 8 fotos e 9 prints de texto (Tiger duplicado). Originais extraídos em `.tmp-redhot/anexos-20261009/`; cópias sem geração/alteração de ingredientes em `public/conceitos/red-hot/vitrine/`, otimizadas na entrega pelo Next Image.

Destaques: Hawaii, Texas, Dodgers, Tiger, BLT Hot Dog, Yankee Hot Dog, Astros Dog e milkshake de paçoca 440 ml. Valores e ingredientes seguem os anexos; para o milkshake não inventar ingredientes além de sabor e volume informados. Texas é blend de pernil, não bovino. Os três itens sobrepostos não se repetem no expansível: restam nove itens antigos, total 17 produtos únicos. Fotos antigas preservadas no disco. Botões abrem a loja iFood, sem adicionar automaticamente o produto ao carrinho.

Build e sete testes de integração aprovados (`node --test --test-isolation=none tests/*.test.mjs`). Revisão independente sem bloqueios. Desktop e celular 390px conferidos, sem overflow e sem imagens quebradas; expansão mostrou nove itens. Screenshot em `.tmp-redhot/anexos-20261009/vitrine-desktop.jpg`. Vídeos, neon, fachada, Me Poupa e Bigu’s preservados. Não publicado.

### Organização com Superpowers — 08/10/2026

Direção aprovada pelo usuário e implementada: transição vertical com neon imediatamente após o hero, antes do cardápio; 12 lanches separados em Burgers (7), Hot dogs (2) e Sanduíches e defumados (3), com atalhos nativos e hierarquia de títulos acessível. Grade de duas colunas no desktop e uma no celular. Paleta e seção vermelha da fachada preservadas. Nenhum produto, descrição, preço, imagem ou vídeo foi substituído; dados comparados com o conteúdo anterior à edição. Me Poupa intacto; Bigu’s mantém ordem original das seções.

Superpowers aplicado com design aprovado, testes primeiro e revisão independente de código. Build de produção aprovado; seis testes de integração passam com `node --test --test-isolation=none tests/redhot-layout.test.mjs`, usando preview em `http://127.0.0.1:3002`. Não publicado.

### Direção visual clean — 08/10/2026

Pedido mais recente: site mais clean e fiel à identidade Red Hot Street Food. Referências usadas: logo original de `public/marca/originais/red-hot-ifood.jpg`, materiais oficiais já salvos e foto da fachada. Paleta: preto `#111111`, branco `#ffffff`, papel neutro `#fafafa`, vermelho `#ef2027`, cinza `#b0b0b0`; preços em vermelho escuro para contraste. Anton continua nos títulos, em escala menor; Inter nos textos e nomes dos lanches. Alinhamento à esquerda, imagens como foco e mais espaço entre conteúdo.

Alterações restritas à classe `.redHot` e condicionais de slug: cabeçalho compacto; aviso de conceito discreto; retirada da faixa rolante, dos indicadores repetidos e da seção vermelha de história; cardápio com três destaques e lista em duas colunas (uma no celular), sem caixas pesadas; textos reduzidos. Os 12 itens, descrições, preços, fontes, vídeos e fachada foram preservados. Moldura neon permanece, com brilho mais contido. Menu, animação e visita mantêm a identidade preta/branca/vermelha, sem creme/laranja. Me Poupa e Bigu’s não foram redesenhados.

Build passou; desktop 1280px e celular 390px verificados sem overflow horizontal. Backups da versão anterior e screenshots em `.tmp-redhot/clean-20261008/`. Nenhuma publicação feita.

Refinamento aprovado em seguida: o usuário sentiu falta de vermelho. Reforçados três pontos mantendo o visual clean: linha vermelha de 3px sob o cabeçalho, título/divisórias do cardápio em vermelho e seção final junto à fachada com fundo vermelho `#c91820`, texto branco e botão preto. O neon continua preservado. Ajustes exclusivos de `.redHot`.

Em 08/10, a pedido do usuário, a abertura do Red Hot foi substituída pelo arquivo correto `C:\Users\leome\Downloads\Criar_animação_publicitária_de_h…_20261007235507.mp4` (8 s, 1920×1080). Assets atuais: `public/conceitos/red-hot/hero-montagem-v2.mp4` e `hero-montagem-v2-poster.webp`. O poster mostra o burger montado; o vídeo mantém reprodução única da montagem. A versão anterior foi preservada no disco, mas não é mais referenciada na página. A transição vertical em loop com neon, a fachada e o site Me Poupa foram mantidos.

`docs/logos-e-animacao.md` registra logos. Bigu’s também terá animação; preferência mais recente é fundo limpo, sem manchas/pixelização, preservando a marca, com possível brilho laranja muito sutil no símbolo. O prompt antigo salvo pode não refletir essa última preferência.

Skills disponíveis: frontend-design para interface e imagegen para edição de imagem; ler a skill pertinente antes de usar. Não é necessário refazer pesquisa nem instalar novas skills para continuar esta etapa. Ler apenas os arquivos necessários e atualizar este resumo ao concluir uma etapa.
