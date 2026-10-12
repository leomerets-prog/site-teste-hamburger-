# Red Hot — deploy independente

Na Vercel, importe este repositório e selecione a branch que contém esta pasta.
Defina **Root Directory: red-hot**. Framework: Next.js; comandos de instalação, build e saída automáticos.
Não precisa de variáveis de ambiente nem acesso a arquivos fora desta pasta.

A página abre diretamente em `/`. Me Poupa continua no projeto da raiz do repositório.
Não altere o Root Directory do projeto de produção Me Poupa: crie outro projeto Vercel para o Red Hot.

## Desenvolvimento
```sh
npm ci
npm run dev
```

## Validação de produção
```sh
npm run build
npm run start -- --hostname 127.0.0.1 --port 3003
npm test
```
Os testes consultam a prévia HTTP. Use TEST_BASE_URL para outra porta.

Esta pasta é independente e contém uma cópia do Red Hot aprovado em 11/10/2026.
Edite esta pasta para futuras alterações do deploy; a demo antiga em app/conceito não sincroniza automaticamente.
Imagens originais preservadas; o Next otimiza sua entrega. Vídeos já em versão web.
Next.js 16.3.8 e PostCSS 8.5.29, com lockfile atualizado; auditoria npm sem vulnerabilidades na preparação deste pacote.
Avisos de conceito independente e noindex mantidos. Confirmar autorização de uso e dados da casa antes de lançamento comercial.
