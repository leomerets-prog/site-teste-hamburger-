import { CAMADAS, DESTAQUE } from "@/data/burgers";

/**
 * No celular não sobra espaço lateral para as linhas de anotação do hero.
 * Em vez de espremer, a mesma informação vira uma lista de camadas — de cima
 * para baixo, na ordem em que o lanche é montado.
 */
export default function CamadasMobile() {
  return (
    <section
      aria-label={`Camadas do ${DESTAQUE}`}
      className="border-t border-[var(--color-carvao-claro)] px-6 py-16 md:hidden"
    >
      <h2 className="titulo-vitrine mb-8 text-sm tracking-[0.3em] text-[var(--color-fumaca)]">
        O QUE VAI DENTRO
      </h2>
      <ol className="space-y-0">
        {CAMADAS.map((camada, i) => (
          <li
            key={camada.nome}
            className="flex items-baseline gap-4 border-b border-[var(--color-carvao-claro)] py-4 last:border-b-0"
          >
            <span className="w-6 shrink-0 text-[11px] tracking-[0.18em] text-[var(--color-brasa)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-base text-[var(--color-creme)]">
              {camada.nome}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
