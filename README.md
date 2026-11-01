# Portfolio

Sito portfolio personale di Giovanni Pacelli, una SPA in italiano costruita con React 19, Vite, Tailwind v4, `react-router-dom` e `framer-motion`.

## Avvio rapido

```bash
npm install
cp .env.example .env   # VITE_BASE=/ in locale
npm run dev
```

## Script

| Comando | Descrizione |
| --- | --- |
| `npm run dev` | Dev server Vite (`npm run dev:host` per esporlo in rete) |
| `npm run build` | Type-check (`tsc -b`), build Vite e copia `dist/index.html` in `dist/404.html` (fallback SPA per GitHub Pages) |
| `npm run preview` | Serve la build di produzione in locale |
| `npm run optimize:images` | Converte gli screenshot in WebP (vedi [`scripts/`](scripts/README.md)) |

Non sono configurati test né linter.

## Struttura

```
src/
  data/portfolio.ts      Fonte dati unica: profilo, competenze, progetti
  hooks/usePortfolio.ts  Hook che espone i dati alla UI
  pages/                 Home e pagina di dettaglio progetto
  components/            Navbar, sezioni della home, componenti UI
  projects/              Sezioni custom delle pagine progetto (lazy)
  styles/theme.css       Colori, font e ombre (variabili @theme di Tailwind)
scripts/                 Script di utilità (ottimizzazione immagini)
assets-src/              Immagini originali, escluse da git
```

## Contenuti

Per cambiare testi, competenze o progetti si modifica solo `src/data/portfolio.ts`. Un progetto ha una pagina dedicata (`/projects/<slug>`) solo se definisce `details`; con `details.Section` si può aggiungere un componente React caricato in lazy-loading.

## Deploy

Il workflow `.github/workflows/deploy.yml` si avvia a mano (`workflow_dispatch`): builda con `VITE_BASE=/<nome-repo>/` e pubblica su GitHub Pages.
