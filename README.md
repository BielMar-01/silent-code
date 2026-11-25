# SilentCode site

Site em React + Vite.

## Rodar localmente

    npm install
    npm run dev

`npm run build` gera a versão de produção em `dist/`.

## Onde editar

- Posts, materiais, projetos, links e e-mail: `src/data/content.js`
- Visual: `src/styles.css`
- PDFs e imagens: `public/`

## Deploy

Importe o repositório na Vercel com o preset Vite. Não há variáveis de ambiente.

Depois de ter o endereço final, substitua `SEU_DOMINIO` (sem https://) em `index.html`, `public/robots.txt` e `public/sitemap.xml`, e `SEU_EMAIL_AQUI` em `src/data/content.js`.
