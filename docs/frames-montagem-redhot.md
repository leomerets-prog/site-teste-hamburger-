# Frames para montagem do burger Red Hot

Reconstrução ilustrativa com GPT Image integrado, baseada na fotografia oficial já usada no conceito. A retirada da mão e a separação das camadas exigem reconstruir partes não visíveis na foto original.

- Frame inicial: `public/conceitos/red-hot/frame-inicial-camadas.png`.
- Frame final: `public/conceitos/red-hot/frame-final-montado.png`.
- Usar estes dois frames juntos no Flow para manter o mesmo fundo, eixo de montagem e ausência de mão/embalagem.

## Prompt inicial

```text
Edit the reference food photograph into a photorealistic exploded-view burger composition for the START FRAME of a food assembly animation. Wide horizontal 16:9 website background. Keep the warm near-black backdrop and quiet empty left 45 percent for future website text. Remove the hand and wrapping paper completely. Reconstruct only the obscured portions needed to show the burger without its hand support; use the real photographed burger as the strict visual reference, not a generic stock burger. Preserve the golden rustic bun texture with natural irregularities, the grilled beef texture, pale melted cheese with tiny dark pepper flecks, visible green lettuce and red tomato. Do not add sesame, cheddar, bacon, onion rings, eggs, pickles or extra patties. Arrange five separated food layers vertically along one axis at about 73 percent of canvas width: top bun at about 20 percent canvas height, grilled beef patty with the original pale melted cheese draped over it at 40 percent height, lettuce at 56 percent, tomato at 66 percent, bottom bun at 81 percent. Clearly visible clean dark air gaps between layers, modest gaps not exaggerated stretching. All layers share the same perspective and vertical axis so they can descend naturally into a finished burger. Keep each whole ingredient inside the image with comfortable margins. The beef and its draped cheese remain one natural unit, no floating sauce or cheese ribbons connecting the gaps. The lower bun sits on an almost invisible matte dark surface with a subtle contact shadow. Premium realistic food photography, warm soft key light, sharp food detail, same light direction as reference. No people, hands, packaging, props, labels, text, logos, sparks, smoke, flames, neon, particle effects or decorative backgrounds. Anatomically plausible food shapes, appetizing but natural, no plastic gloss. This is an illustrative reconstruction based on the real food reference.
```

## Prompt final

```text
Edit this exploded-view burger image to create the matching END FRAME of an assembly animation. Preserve the exact canvas size, camera, perspective, near-black warm background, warm lighting, dark surface, empty left half, and every food layer's horizontal size and appearance. Close ONLY the vertical air gaps by lowering the existing ingredients onto the bottom bun. Keep the bottom bun fixed at precisely its current coordinates near the bottom-right. On it rest the same tomato slices, same lettuce, same single grilled patty with pale pepper-speckled melted cheese, and finally the same rustic golden top bun. The assembled burger must remain on the same vertical axis on the right, lower in the frame than the original exploded stack; do not zoom, recenter, enlarge or reposition the base. All ingredients touch naturally with no air gaps. Preserve the exact bread shape, textures and irregularities, cheese color and draping, and food proportions from this image as faithfully as possible. No hands, wrapper, packaging, plate, additional ingredients, text, logos, steam, fire, lights or props. Retain the same contact shadow and untouched clean dark negative space. Photorealistic matching paired frame, not a redesign.
```

