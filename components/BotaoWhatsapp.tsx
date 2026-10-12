import { CASA } from "@/data/burgers";

/**
 * Bolinha fixa no canto, no lugar do botão verde de WhatsApp de sempre:
 * amarela, com um hambúrguer dentro, para parecer da casa. Leva direto para
 * o WhatsApp. Entra depois que a cortina da abertura sobe.
 */
export default function BotaoWhatsapp() {
  return (
    <a
      href={CASA.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir no WhatsApp"
      title="Pedir no WhatsApp"
      className="group isolate fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-[var(--color-preto)] bg-[var(--color-amarelo)] shadow-[4px_4px_0_var(--color-preto)] transition-transform hover:-translate-y-1 md:bottom-7 md:right-7 md:h-[72px] md:w-[72px]"
      style={{ animation: "bolinha-entra 500ms 2s both cubic-bezier(.3,1.6,.5,1)" }}
    >
      {/* Anel que pulsa de leve, chamando o olho sem piscar. */}
      <span
        aria-hidden
        className="absolute -inset-[3px] -z-10 rounded-full bg-[var(--color-amarelo)] motion-reduce:hidden"
        style={{ animation: "bolinha-pulsa 2.4s 3s ease-out infinite" }}
      />
      <svg viewBox="0 0 48 48" className="relative h-9 w-9 md:h-10 md:w-10" aria-hidden>
        {/* pão de cima */}
        <path d="M6 21c0-8.5 8-14 18-14s18 5.5 18 14z" fill="var(--color-preto)" />
        <g fill="var(--color-amarelo)">
          <ellipse cx="17" cy="13" rx="1.4" ry="0.9" />
          <ellipse cx="25" cy="11" rx="1.4" ry="0.9" />
          <ellipse cx="32" cy="14.5" rx="1.4" ry="0.9" />
          <ellipse cx="22" cy="16.5" rx="1.4" ry="0.9" />
        </g>
        {/* queijo escorrendo */}
        <path d="M5 24h38l-4 3.5-3-2.5-4 4-4-4-4 4-4-4-4 4-4-4-3 2.5z" fill="var(--color-preto)" />
        {/* carne */}
        <rect x="6" y="30" width="36" height="5" rx="2.5" fill="var(--color-preto)" />
        {/* pão de baixo */}
        <path d="M7 37.5h34c0 2.8-2.2 4.5-5 4.5H12c-2.8 0-5-1.7-5-4.5z" fill="var(--color-preto)" />
      </svg>
    </a>
  );
}
