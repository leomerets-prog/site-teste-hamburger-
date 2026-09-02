import { BURGERS } from "@/data/burgers";

/**
 * Vitrine: uma tela inteira por lanche. Sem grid, sem card — se quiser ver o
 * próximo, rola.
 *
 * A casa numera os lanches (Burguer 1 a 14), e é isso que dá a identidade
 * gráfica: o numeral entra gigante como imagem, e o nome fica pequeno em cima.
 * Nos lanches batizados — o do Palhaço — o nome ocupa esse lugar.
 */
export default function Cardapio() {
  return (
    <section id="cardapio" aria-label="Cardápio">
      {BURGERS.map((burger) => (
        <article
          key={burger.slug}
          className="relative flex min-h-svh flex-col justify-center border-t border-[var(--color-carvao-claro)] px-6 py-24"
        >
          <div className="mx-auto w-full max-w-6xl">
            <h2>
              {burger.numero ? (
                <span aria-label={burger.nome}>
                  <span
                    aria-hidden
                    className="block text-[11px] uppercase tracking-[0.3em] text-[var(--color-fumaca)]"
                  >
                    Burguer
                  </span>
                  <span
                    aria-hidden
                    className="titulo-vitrine -mt-2 block text-[clamp(10rem,26vw,22rem)] leading-none"
                  >
                    {burger.numero}
                  </span>
                </span>
              ) : (
                <span className="titulo-vitrine block text-[clamp(3rem,11vw,9rem)]">
                  {burger.nome}
                </span>
              )}
            </h2>

            <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-[1fr_auto] md:items-end md:gap-20">
              <p className="max-w-md text-lg leading-relaxed text-[var(--color-creme)]/80">
                {burger.chamada}
              </p>

              <ul className="space-y-2 md:text-right">
                {burger.ingredientes.map((ingrediente) => (
                  <li
                    key={ingrediente}
                    className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-fumaca)]"
                  >
                    {ingrediente}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
