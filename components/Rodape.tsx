import { CASA } from "@/data/burgers";
import { SITE_CONFIG } from "@/data/site.config";
import Logo from "./Logo";

/**
 * Rodapé amarelo: o logo original tem fundo amarelo, então aqui ele se funde
 * com a página em vez de virar um retângulo colado. Fecha o site com a mesma
 * cor da cortina que o abriu.
 */
export default function Rodape() {
  return (
    <footer className="bg-[var(--color-amarelo)] px-5 pb-10 pt-16 text-[var(--color-preto)] md:px-6 md:pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <Logo className="h-auto w-[240px] md:w-[300px]" />
            {/* O selo é a única prova que a casa tem, e prova vale mais que adjetivo. */}
            <p className="mt-4 inline-block -rotate-2 rounded-md bg-[var(--color-preto)] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-amarelo)]">
              {CASA.selo}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:gap-14">
            <address className="not-italic">
              <p className="text-xs font-bold uppercase tracking-[0.14em] opacity-70">Onde</p>
              <p className="titulo mt-2 text-2xl">{CASA.endereco}</p>
              <p className="mt-1 font-medium">{CASA.cidade}</p>
            </address>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] opacity-70">Quando</p>
              <p className="titulo mt-2 text-2xl">{SITE_CONFIG.atendimento.resumo}</p>
              <p className="mt-1 font-medium">{SITE_CONFIG.atendimento.detalhe}</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t-[3px] border-[var(--color-preto)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={CASA.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="titulo text-3xl underline decoration-[3px] underline-offset-4 hover:no-underline"
          >
            {CASA.arroba}
          </a>
          <a
            href={CASA.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="titulo text-3xl underline decoration-[3px] underline-offset-4 hover:no-underline"
          >
            WhatsApp
          </a>
          <p className="text-sm font-medium">Contém amor. E cheddar.</p>
        </div>
      </div>
    </footer>
  );
}
