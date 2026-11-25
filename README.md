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

O site está em https://silent-code-br.vercel.app/. Se o domínio mudar, atualize `index.html`, `public/robots.txt` e `public/sitemap.xml`. O e-mail de contato fica em `src/data/content.js`.
