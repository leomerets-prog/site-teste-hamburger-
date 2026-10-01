import Image from "next/image";
import { CASA } from "@/data/burgers";

/**
 * O logotipo real da casa. Antes isto era uma reconstrução em serifa — servia
 * enquanto não existia o original, e não serve mais.
 *
 * É `<Image>` e não `<img>` para o Next servir AVIF/WebP e o tamanho certo para
 * cada tela, e vem com `alt` de verdade: a versão anterior usava `aria-label`
 * num `<span>`, o que é proibido e falhava na auditoria de acessibilidade.
 */
export default function Logo({
  className = "",
  prioridade = false,
}: {
  className?: string;
  prioridade?: boolean;
}) {
  return (
    <Image
      src="/marca/me-poupa.png"
      alt={`${CASA.nomeCompleto} — ${CASA.assinaturaDaMarca}`}
      width={1570}
      height={845}
      priority={prioridade}
      sizes="(min-width: 768px) 220px, 160px"
      className={`select-none ${className}`}
    />
  );
}
