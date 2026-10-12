# Logos e animação Red Hot

## Arquivos para uso

- Red Hot: `public/marca/red-hot.png` — PNG transparente, 1774 × 887 px.
- Bigu’s: `public/marca/bigus.png` — PNG transparente, 1854 × 848 px.
- Originais e referências: `public/marca/originais/`.
- Fontes oficiais e uso nas demos: `docs/demos-comerciais.md`.

As duas versões foram tratadas com o GPT Image integrado, preservando a identidade visual como referência. São restaurações geradas, não arquivos vetoriais originais fornecidos pelas marcas.

## Prompt para Google Flow — Red Hot

Use a logo como frame inicial. Se a opção estiver disponível no modelo selecionado, use a mesma imagem no frame final. Escolha 8 segundos e composição horizontal. A repetição deve ser conferida depois da geração; o mesmo frame inicial/final não garante um loop perfeito.

```text
Crie uma vinheta de marca de 8 segundos a partir da imagem fornecida. A logo Red Hot Street Food é o elemento principal e deve permanecer centralizada, inteira, nítida e legível durante todo o vídeo. Preserve sua grafia, tipografia, proporções, cores vermelha e branca, contornos pretos, símbolo de marca registrada e pimenta original.

Fundo preto quente uniforme, cor aproximada #17110F, combinando com um site de hamburgueria. Câmera totalmente fixa, composição horizontal, com espaço livre ao redor da marca.

0–1 segundo: mantenha a composição inicial estável, com a logo visível.
1–3 segundos: uma luz vermelha suave percorre lentamente os contornos da marca da esquerda para a direita. Pequenas brasas surgem discretamente atrás da borda inferior, sugerindo o calor de uma chapa.
3–5 segundos: um único brilho delicado desliza pelas letras. Fumaça fina e realista sobe ao fundo; pequenas chamas baixas aparecem por um instante atrás da pimenta. Todos os efeitos permanecem atrás da logo e deixam as palavras livres.
5–7 segundos: as brasas, as chamas e a fumaça desaparecem suavemente; a iluminação retorna à aparência original.
7–8 segundos: mantenha a logo imóvel e limpa, na mesma posição, tamanho e iluminação do primeiro frame, preparando uma repetição contínua.

Estética de publicidade gastronômica, elegante e realista. Movimento sutil, com a energia do fogo e da comida de rua. A animação acontece na luz e no ambiente: a geometria da logo permanece fixa. Sem fala, música ou narração.

Não alterar letras ou palavras. Não redesenhar a marca. Não separar, girar ou derreter as letras. Não adicionar slogans, hambúrgueres, pessoas, objetos, marcas-d’água ou textos. Sem explosões, câmera em movimento, zoom, flashes fortes ou efeitos cobrindo a marca.
```

Guia oficial: https://support.google.com/flow/answer/16353334?co=GENIE.Platform%3DDesktop&hl=pt-BR

Não depender de transparência no vídeo gerado: o prompt pede um fundo sólido compatível com a página.

## Prompts de tratamento das logos

Modo: ferramenta integrada GPT Image, edição com referências locais e `transparent_background: true`.

### Red Hot

```text
Use case: background-extraction. Edit the supplied official Red Hot Street Food logo artwork into a clean transparent PNG for a website header. Extract only the central complete wordmark 'RedHot' above 'StreetFood', with its black stroke, red outside stroke, registered mark, and the small red chili pepper attached at lower-left directly under the R. Remove the dark rectangular photographic backdrop and the two unrelated isolated peppers in the far top-left and bottom-right corners. Preserve the precise original cursive lettering, letter proportions, spacing, position, red and white colors, black strokes, spelling, and attached pepper. This is an exact faithful cleanup/extraction, not a logo redesign. Smooth anti-aliased edges, transparent outside, tightly cropped wide landscape composition with 4 percent padding around the complete wordmark. No added letters, no extra graphics, no mockup, no checkerboard drawn into the artwork.
```

### Bigu’s

```text
Use case: background-extraction. Edit Image 1, the official Bigu's Burger logo on a black square, into a high-resolution clean transparent PNG. Image 2 is supporting reference only for the precise lettering and texture details at a larger scale. Extract ONLY the entire logo from Image 1: the tall condensed distressed cream uppercase word BIGU’S and the orange handwritten lowercase burger overlapping below, including its orange underline flourish. Preserve the original B I G U apostrophe S letterforms, cream color, subtle distressed texture, script shapes, spacing, relative positions and proportions exactly. Remove solid black background and empty padding. This is faithful restoration/upscaling and background extraction, not a new logo. Do not bring any hamburger photo, banner background, small promotional text or other elements from image 2. Tightly cropped landscape logo with 4 percent transparent padding on all sides, actual alpha transparency, smooth clean edges, no border, no added text, no checkerboard pattern.
```
