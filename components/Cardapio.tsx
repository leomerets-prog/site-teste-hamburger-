import { DESTAQUES, RESTO } from "@/data/burgers";

/**
 * Cardápio em blocos: foto grande de um lado, texto do outro, colados.
 *
 * A versão anterior era só tipografia espalhada pela tela — cada elemento
 * respirava tanto que nada parecia pertencer a nada, e batia o olho sem
 * vontade de ler. Aqui a foto encosta no texto, os ingredientes viram etiquetas
 * em linha logo abaixo da descrição, e o bloco inteiro se lê de uma vez.
 */
export default function Cardapio() {
  return (
    <section id="cardapio" aria-label="Cardápio">
      {DESTAQUES.map((item, i) => {
        const fotoNaDireita = i % 2 === 1;

        return (
          <article
            key={item.slug}
            className="grid items-stretch border-t border-[var(--color-carvao-claro)] md:min-h-[85svh] md:grid-cols-2"
          >
            {/* Foto: sangra até a borda da tela e escurece do lado que encosta no texto. */}
            <figure
              className={`relative m-0 aspect-[4/3] md:aspect-auto ${
                fotoNaDireita ? "md:order-2" : ""
              }`}
            >
              <picture>
                <source srcSet={`${item.foto}.webp`} type="image/webp" />
                <img
                  src={`${item.foto}.jpg`}
                  alt={item.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
              <div
                aria-hidden
                className={`absolute inset-0 bg-gradient-to-t from-[var(--color-carvao)] via-transparent to-transparent md:bg-gradient-to-r ${
                  fotoNaDireita
                    ? "md:from-[var(--color-carvao)] md:to-transparent"
                    : "md:from-transparent md:to-[var(--color-carvao)]"
                }`}
              />
            </figure>

            {/* Texto: tudo agrupado, nada solto. */}
            <div className="flex flex-col justify-center px-6 py-14 md:px-14 lg:px-20">
              <div className="max-w-lg">
                <div className="flex items-baseline gap-4">
                  {item.numero && (
                    <span
                      aria-hidden
                      className="titulo-vitrine text-[clamp(3.5rem,7vw,6rem)] leading-none text-[var(--color-brasa)]"
                    >
                      {item.numero}
                    </span>
                  )}
                  {item.preco && (
                    <span
                      aria-hidden
                      className="titulo-vitrine text-[clamp(3.5rem,7vw,6rem)] leading-none text-[var(--color-brasa)]"
                    >
                      <span className="text-[0.35em] align-super">R$</span>
                      {item.preco}
                    </span>
                  )}
                  <h2 className="titulo-vitrine text-[clamp(1.75rem,3.2vw,2.75rem)]">
                    {item.nome}
                  </h2>
                </div>

                <p className="mt-5 text-lg leading-relaxed text-[var(--color-creme)]/85">
                  {item.chamada}
                </p>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {item.ingredientes.map((ingrediente) => (
                    <li
                      key={ingrediente}
                      className="rounded-full border border-[var(--color-creme)]/15 px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-[var(--color-fumaca)]"
                    >
                      {ingrediente}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        );
      })}

      <RestoDoCardapio />
    </section>
  );
}

/** Os outros itens, em lista densa — mostra o tamanho do cardápio sem foto inventada. */
function RestoDoCardapio() {
  return (
    <div className="border-t border-[var(--color-carvao-claro)] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="titulo-vitrine text-[clamp(1.75rem,3.2vw,2.75rem)]">
          E ainda tem treze
        </h2>

        <ul className="mt-10 grid gap-x-16 gap-y-0 md:grid-cols-2">
          {RESTO.map((item) => (
            <li
              key={item.nome}
              className="flex items-baseline justify-between gap-6 border-b border-[var(--color-carvao-claro)] py-4"
            >
              <span className="shrink-0 text-base text-[var(--color-creme)]">
                {item.nome}
              </span>
              <span className="text-right text-[11px] uppercase tracking-[0.12em] text-[var(--color-fumaca)]">
                {item.ingredientes}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-[var(--color-fumaca)]">
          Fora os hot dogs, as porções, os milkshakes e os drinks. O cardápio
          inteiro fica no balcão.
        </p>
      </div>
    </div>
  );
}
