import { CASA } from "@/data/burgers";
import Logo from "./Logo";

export default function Rodape() {
  return (
    <footer className="border-t border-[var(--color-carvao-claro)] px-6 py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-3">
          <Logo className="text-2xl" />
          {/* O selo é a única prova que a casa tem, e prova vale mais que adjetivo. */}
          <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-brasa)]">
            {CASA.selo}
          </p>
        </div>

        <div className="text-sm leading-relaxed text-[var(--color-fumaca)] sm:text-right">
          <p className="text-[var(--color-creme)]">{CASA.endereco}</p>
          <p>{CASA.cidade}</p>
          <p className="mt-3">{CASA.horario}</p>
        </div>
      </div>
    </footer>
  );
}
