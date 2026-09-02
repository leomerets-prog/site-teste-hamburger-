import { CASA } from "@/data/burgers";
import Logo from "./Logo";

export default function Rodape() {
  return (
    <footer className="border-t border-[var(--color-carvao-claro)] px-6 py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-2">
          <Logo className="text-2xl" />
          <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-fumaca)]">
            {CASA.cidade}
          </p>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-[var(--color-fumaca)]">
          {CASA.assinatura}
        </p>
      </div>
    </footer>
  );
}
