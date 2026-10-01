import Image from "next/image";
import { CASA, RODIZIO } from "@/data/burgers";

/**
 * O rodízio é a oferta mais forte da casa e o único preço confirmado. Ganha
 * seção própria, a única preta depois do hero: no meio de tanto amarelo, é o
 * contraste que faz o preço saltar.
 */
export default function Rodizio() {
  return (
    <section
      id="rodizio"
      aria-labelledby="rodizio-titulo"
      className="relative overflow-hidden bg-[var(--color-preto)] px-5 py-20 text-white md:px-6 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="relative order-2 md:order-1">
          <div className="relative aspect-[4/3] -rotate-2 overflow-hidden rounded-3xl border-[5px] border-[var(--color-amarelo)]">
            <Image
              src={RODIZIO.foto}
              alt={RODIZIO.alt}
              fill
              sizes="(min-width: 768px) 540px, 100vw"
              className="object-cover"
            />
          </div>
          {/* O preço como etiqueta colada na foto — é o que o olho procura. */}
          <div className="absolute -bottom-8 -right-2 rotate-3 rounded-2xl border-[4px] border-[var(--color-preto)] bg-[var(--color-amarelo)] px-5 py-3 text-[var(--color-preto)] shadow-[6px_6px_0_var(--color-ketchup)] md:-right-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em]">Por pessoa</p>
            <p className="titulo text-5xl md:text-6xl">
              <span className="align-top text-2xl md:text-3xl">R$ </span>
              {RODIZIO.preco}
            </p>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <p className="inline-block -rotate-2 rounded-md bg-[var(--color-ketchup)] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">
            Segunda a sábado
          </p>
          <h2 id="rodizio-titulo" className="titulo mt-4 text-[clamp(3rem,8vw,6rem)] text-[var(--color-amarelo)]">
            {RODIZIO.titulo}
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/85">{RODIZIO.texto}</p>

          <ul className="mt-8 space-y-3">
            {RODIZIO.regras.map((r) => (
              <li key={r} className="flex items-center gap-3 text-base font-medium">
                <span aria-hidden className="h-2.5 w-2.5 shrink-0 rotate-45 bg-[var(--color-amarelo)]" />
                {r}
              </li>
            ))}
          </ul>

          <a
            href={CASA.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center rounded-full bg-[var(--color-amarelo)] px-7 py-4 text-base font-bold text-[var(--color-preto)] transition-transform hover:-translate-y-0.5"
          >
            {RODIZIO.botao}
          </a>
        </div>
      </div>
    </section>
  );
}
