# Continuidade — sites de hamburguerias

Atualizado em 07/10/2026. Repositório local: `C:\Sites de hamburgers\site-teste-hamburger-`.

## Objetivo e preferências

Criar demonstrações comerciais para hamburguerias usando uma base reutilizável, com identidade própria, fotos oficiais e vídeos. O usuário quer acabamento visual próximo ao site Me Poupa: mais detalhes e presença visual, sem aparência de template básico. Prefere fotos dos burgers, não artes de posts. Não inventar preços, ingredientes ou informações comerciais. Conversar em português, com explicações simples.

## Estado do site

- `/`: site Me Poupa, referência visual, com vídeo de burger no hero. Preservar esse site.
- `/conceito/red-hot`: demonstração Red Hot, preto/vermelho e tons quentes.
- `/conceito/bigus`: demonstração Bigu’s, creme/laranja/verde.
- Implementação das demos: `app/conceito/[slug]/page.tsx`, `demo.module.css`, `AnimatedLogo.tsx`.
- Demos identificadas como conceitos independentes e com noindex/nofollow. Fontes comerciais em `docs/demos-comerciais.md`.
- Logos tratadas em `public/marca/red-hot.png` e `bigus.png`; originais em `public/marca/originais/`.
- Logo animada Red Hot já integrada localmente: `public/marca/red-hot-logo.mp4`, com poster WebP. Reproduz uma vez ao aparecer, mantém imagem final e oferece fallback para movimento reduzido/erro. Cabeçalho e rodapé verificados.
- Último `npm run build` passou. No Windows, subprocessos podem exigir execução aprovada fora do sandbox. Preview usado na porta 3001; confirmar se ainda está ativo.
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

Para a próxima transição no Google Flow, os dois quadros estão em `public/conceitos/red-hot/flow-transicao/`, ambos com 1080×1920. `frame-01-burger-cheddar.jpg` veio do reel público oficial `https://www.instagram.com/redhotstreetfood/reel/DOzBNDdElqN/`, em 00:00.55. Após rejeição do segundo enquadramento, `frame-02-burger-carne.jpg` foi substituído por um quadro mais limpo do reel oficial `https://www.instagram.com/redhotstreetfood/reel/DQh4yjrEk5I/`, em 00:06.20: há um único burger inteiro, sem lettering, em prato vermelho sobre madeira, com fundo desfocado azul/vermelho. O par preserva a linguagem visual necessária para a transição do Flow. Confirmar autorização de uso antes de publicação comercial. As artes Dodgers/Yankee continuam apenas como referências do cardápio, pois possuem textos e logos sobrepostos.

## Outros materiais

`docs/logos-e-animacao.md` registra logos. Bigu’s também terá animação; preferência mais recente é fundo limpo, sem manchas/pixelização, preservando a marca, com possível brilho laranja muito sutil no símbolo. O prompt antigo salvo pode não refletir essa última preferência.

Skills disponíveis: frontend-design para interface e imagegen para edição de imagem; ler a skill pertinente antes de usar. Não é necessário refazer pesquisa nem instalar novas skills para continuar esta etapa. Ler apenas os arquivos necessários e atualizar este resumo ao concluir uma etapa.
