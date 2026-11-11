# Hettwer Mármores e Granitos

Site institucional da Hettwer Mármores e Granitos (Santa Rosa, RS). HTML, CSS e JavaScript puros, sem etapa de build.

## Estrutura

- `index.html`: página única
- `assets/css/style.css`: estilos e variáveis de cor, fonte e espaçamento
- `assets/js/main.js`: contatos (`CONTATO`), redes sociais (`REDES`), formulário e animações
- `assets/img/`: fotos, logo e texturas de mármore
- Ícones de aba: `favicon.ico`, `favicon-32.png`, `favicon-192.png`, `apple-touch-icon.png`

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie estes arquivos para a raiz da branch `main`.
2. Em **Settings > Pages**, escolha **Deploy from a branch**, branch `main` e pasta `/ (root)`.
3. O site fica em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

Para usar um domínio próprio, configure-o em **Settings > Pages > Custom domain**.

## Editar

Telefone, e-mail, endereço e links de Instagram e Facebook ficam no começo de `assets/js/main.js`. O `.htaccess` só vale em servidores Apache e é ignorado pelo GitHub Pages.

## Publicar na Vercel

1. Envie o projeto para um repositório no GitHub e, na Vercel, use **Add New > Project** e importe o repositório.
2. Em **Framework Preset**, deixe **Other**. Não há comando de build nem pasta de saída: deixe esses campos vazios.
3. Clique em **Deploy**. O arquivo `vercel.json` já define o cache das imagens, do CSS e do JavaScript.

Para publicar direto da pasta, sem GitHub, rode `npx vercel` dentro dela.
