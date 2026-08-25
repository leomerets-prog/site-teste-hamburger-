/**
 * Marca SALADÃO. Serifa alta e fina, letras bem espaçadas.
 * O "Ã" é o único ponto de cor da marca — é ele que assina.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`titulo-vitrine tracking-[0.24em] select-none ${className}`}
      aria-label="Saladão"
    >
      <span aria-hidden>SALAD</span>
      <span aria-hidden className="text-[var(--color-brasa)]">
        Ã
      </span>
      <span aria-hidden>O</span>
    </span>
  );
}
