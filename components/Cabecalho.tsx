import Logo from "./Logo";

export default function Cabecalho() {
  return (
    // O véu existe porque o cabeçalho passa por cima das fotos do cardápio, e
    // sobre um pão dourado a marca simplesmente sumia.
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-[var(--color-carvao)]/85 via-[var(--color-carvao)]/45 to-transparent pb-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-6">
        <Logo className="w-[132px] md:w-[164px]" prioridade />
        <a
          href="#cardapio"
          className="group text-xs uppercase tracking-[0.18em] text-[var(--color-creme)]"
        >
          Cardápio
          <span className="mt-1 block h-px w-0 bg-[var(--color-creme)] transition-[width] duration-300 group-hover:w-full" />
        </a>
      </div>
    </header>
  );
}
