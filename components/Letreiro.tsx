import { LETREIRO } from "@/data/burgers";

/**
 * Faixa amarela que corre na horizontal, levemente torta, cortando a emenda
 * entre o hero escuro e o resto da página. É o "mais vida" com o menor custo:
 * nada de imagem, só texto e CSS.
 *
 * O conteúdo vem duplicado; a animação anda metade da largura e recomeça, e
 * como as duas metades são iguais a emenda some.
 */
export default function Letreiro() {
  const frases = [...LETREIRO, ...LETREIRO];
  return (
    <div className="relative z-10 -my-6 overflow-hidden py-6" aria-hidden>
      <div className="-rotate-2 border-y-4 border-[var(--color-preto)] bg-[var(--color-amarelo)] py-3">
        <div className="flex w-max animate-letreiro motion-reduce:animate-none">
          {frases.map((f, i) => (
            <span key={i} className="titulo flex items-center whitespace-nowrap px-6 text-3xl text-[var(--color-preto)] md:text-4xl">
              {f}
              <span className="ml-12 text-2xl">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
