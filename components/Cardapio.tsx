import { BURGERS } from "@/data/burgers";

/**
 * Vitrine: uma tela inteira por lanche. Sem grid, sem card — se quiser ver o
 * próximo, rola. O nome é a imagem.
 */
export default function Cardapio() {
  return (
    <section id="cardapio" aria-label="Cardápio">
      {BURGERS.map((burger, i) => (
        <article
          key={burger.slug}
          className="relative flex min-h-svh flex-col justify-center border-t border-[var(--color-carvao-claro)] px-6 py-24"
        >
          <div className="mx-auto w-full max-w-6xl">
            <p className="titulo-vitrine mb-6 text-sm tracking-[0.3em] text-[var(--color-fumaca)]">
              {String(i + 1).padStart(2, "0")} / {String(BURGERS.length).padStart(2, "0")}
            </p>

            <h2 className="titulo-vitrine text-[clamp(3.5rem,13vw,11rem)]">
              {burger.nome}
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
