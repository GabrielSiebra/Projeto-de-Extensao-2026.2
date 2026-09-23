# Meu Campo — Landing Page

Pasta com o código-fonte completo da landing page **Meu Campo**, plataforma de agendamento de areninhas de futebol.

## O que está incluído

- `src/components/` — componentes das seções (Navbar, Hero, Features, HowItWorks, BookingPreview, CTA, Footer)
- `src/data/landing.ts` — dados demonstrativos centralizados, prontos para troca futura por API Java/Spring Boot
- `src/styles.css` — tokens de cor, tipografia e estilos globais
- `src/routes/` — página principal (`index.tsx`) e raiz com fontes/PrimeReact (`__root.tsx`)
- `public/` — favicon e `robots.txt`
- Arquivos de configuração do Vite + TypeScript + TanStack Start

## Sobre as imagens/fotos

A landing page não utiliza fotografias de banco de imagens. Todos os visuais são construídos com:

- CSS puro (gradients, sombras, bordas, orb abstrato)
- Ícones vetoriais (`lucide-react`)
- Mockups de interface do próprio produto (calendário, cards, mini campo)

Por isso não há pasta `assets/` com fotos — o visual é 100% interface e código.

## Tecnologias

- React 19
- Vite 8
- TypeScript
- TanStack Start
- PrimeReact 10.9.7 (versão aberta, sem aviso de licença)
- PrimeFlex 4
- Tailwind CSS 4
- Lucide React (ícones)

## Como rodar localmente

Requisitos: Node.js 20+ ou Bun.

```bash
# 1. Entre na pasta
cd meu-campo-landing-page

# 2. Instale as dependências
npm install
# ou
bun install

# 3. Inicie o servidor de desenvolvimento
npm run dev
# ou
bun run dev
```

A aplicação estará disponível em `http://localhost:8080` (ou na porta indicada no terminal).

## Build de produção

```bash
npm run build
# ou
bun run build
```

## Próximos passos (preparado para API Java/Spring Boot)

A estrutura de dados em `src/data/landing.ts` foi planejada para ser facilmente substituída por chamadas a uma API REST:

- `features` → futuro endpoint `/api/funcionalidades`
- `steps` → futuro endpoint `/api/jornada`
- `venue` / `schedule` → futuro endpoint `/api/arenas/{id}/horarios`
- Futura autenticação, usuários, jogadores, times e agendamentos já estão previstos na organização do projeto, sem chamadas HTTP fictícias no front.

## Notas de design

- Cor de ação única: **Electric Sprout #68ef3f**
- Paleta fixa definida em `src/styles.css`
- Tipografia: substitutos próximos às fontes Ozik/Aeonik/Instrument Serif (Boldonse, Geist, Instrument Serif)
- Landing page pura, sem dashboard, sem autenticação real, sem banco de dados e sem chamadas HTTP simuladas.
