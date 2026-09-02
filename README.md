# Torres Web & System

Site institucional estático em Next.js, TypeScript e CSS nativo.

## Requisitos
Node.js 18.17+.

## Instalação
```bash
npm install
npm run dev
```

## Build
`npm run build` gera a versão estática em `out/`.

## Variáveis
Copie `.env.example` para `.env.local` e configure `NEXT_PUBLIC_SITE_URL` e `NEXT_PUBLIC_WHATSAPP_NUMBER` quando os dados reais existirem. Sem número configurado, os CTAs usam a seção de contato.

## Cloudflare Pages
Framework preset: Next.js (Static HTML Export)  
Build command: `npx next build`  
Output directory: `out`

Projetos e dados comerciais exibidos são conceituais, prontos para receber conteúdo real posteriormente.
