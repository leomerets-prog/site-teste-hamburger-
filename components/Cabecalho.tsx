import Logo from "./Logo";

export default function Cabecalho() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Logo className="text-xl md:text-2xl" />
        <a
          href="#cardapio"
          className="group text-[11px] uppercase tracking-[0.18em] text-[var(--color-creme)]"
        >
          Cardápio
          <span className="mt-1 block h-px w-0 bg-[var(--color-creme)] transition-[width] duration-300 group-hover:w-full" />
        </a>
      </div>
    </header>
  );
}
