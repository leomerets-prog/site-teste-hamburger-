import { CASA } from "@/data/burgers";
import Logo from "./Logo";

const LINKS = [
  { href: "#cardapio", rotulo: "Cardápio" },
  { href: "#rodizio", rotulo: "Rodízio" },
];

/**
 * Barra flutuante e escura. O site agora alterna seções escuras e amarelas, e
 * um cabeçalho transparente sumiria em metade delas; a pílula preta funciona
 * sobre qualquer fundo e segura o logo amarelo como um selo.
 */
export default function Cabecalho() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full bg-[var(--color-preto)]/85 py-2 pl-2 pr-2 shadow-lg shadow-black/20 backdrop-blur-md md:pl-3"
      >
        <a href="#topo" className="block overflow-hidden rounded-[14px]" aria-label={`${CASA.nomeCompleto} — início`}>
          <Logo className="h-10 w-auto md:h-11" prioridade />
        </a>

        <div className="flex items-center gap-1 md:gap-2">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden rounded-full px-4 py-2.5 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-white sm:block"
            >
              {l.rotulo}
            </a>
          ))}
          <a
            href={CASA.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--color-amarelo)] px-4 py-2.5 text-sm font-bold text-[var(--color-preto)] transition-transform hover:-translate-y-0.5"
          >
            {CASA.arroba}
          </a>
        </div>
      </nav>
    </header>
  );
}
