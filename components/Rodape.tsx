import Logo from "./Logo";

export default function Rodape() {
  return (
    <footer className="border-t border-[var(--color-carvao-claro)] px-6 py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <Logo className="text-2xl" />
        <p className="max-w-xs text-sm leading-relaxed text-[var(--color-fumaca)]">
          Pão macio, carne grossa, queijo que escorre. A gente monta na hora.
        </p>
      </div>
    </footer>
  );
}
