import { CASA } from "@/data/burgers";

/**
 * Marca em serifa alta, letras bem espaçadas. Uma letra sai na cor de brasa —
 * é o único ponto de cor da marca, e é ela que assina.
 */
export default function Logo({ className = "" }: { className?: string }) {
  const { antes, destaque, depois } = CASA.marca;

  return (
    <span
      className={`titulo-vitrine tracking-[0.24em] select-none ${className}`}
      aria-label={CASA.nomeCompleto}
    >
      <span aria-hidden>{antes}</span>
      <span aria-hidden className="text-[var(--color-brasa)]">
        {destaque}
      </span>
      <span aria-hidden>{depois}</span>
    </span>
  );
}
