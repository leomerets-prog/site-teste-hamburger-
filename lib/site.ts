/**
 * Endereço público do site. A Vercel expõe o domínio de produção em
 * VERCEL_PROJECT_PRODUCTION_URL; antes do primeiro deploy cai no localhost, que
 * é o bastante para o build não quebrar.
 *
 * Isso importa porque Open Graph e sitemap exigem URL absoluta: link relativo
 * não aparece na prévia do WhatsApp nem é aceito pelo Google.
 */
export const SITE =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
