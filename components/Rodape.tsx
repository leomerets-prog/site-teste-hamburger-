import { CASA } from "@/data/burgers";
import Logo from "./Logo";

export default function Rodape() {
  return (
    <footer className="border-t border-[var(--color-carvao-claro)] px-6 py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-4">
          <Logo className="w-[180px]" />
          {/* O selo é a única prova que a casa tem, e prova vale mais que adjetivo. */}
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-brasa)]">
            {CASA.selo}
          </p>
        </div>

        <address className="text-sm not-italic leading-relaxed text-[var(--color-fumaca)] sm:text-right">
          <p className="text-[var(--color-creme)]">{CASA.endereco}</p>
          <p>{CASA.cidade}</p>
          <p className="mt-3">{CASA.horario}</p>
        </address>
      </div>
    </footer>
  );
}
