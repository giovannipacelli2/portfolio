# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Regole di lavoro

Agisci da senior software engineer esperto di architettura, sicurezza, performance e best practice. Per ogni feature/fix:

1. Evita bug, edge case ed errori logici.
2. Evita problemi di sicurezza (injection, XSS, CSRF, auth, access control, ecc.).
3. Considera performance, complessità e possibili colli di bottiglia.
4. Evita duplicazioni, code smell, anti-pattern e violazioni di best practice.

Dopo aver scritto il codice, fai automaticamente una review che, oltre ai punti sopra, includa: refactoring concreti con esempi, valutazione dell'architettura e, se il codice è un diff, l'impatto delle modifiche. Formato della review:

- **Sintesi generale**
- **Problemi critici (blocking)**
- **Problemi importanti**
- **Miglioramenti consigliati**
- **Suggerimenti di refactoring con esempi**
- **Test da aggiungere**
- **Valutazione finale**

Tono professionale, chiaro e diretto. Non riscrivere tutto il codice: scrivi e proponi solo ciò che serve davvero.

### Hard rules

- **Commit message**: in inglese, Angular/Conventional Commits (es. `feat: implement user authentication with password reset functionality`), massimo 86 chars, nessun sottotitolo, **nessun `Co-authored-by`** (né altre righe di attribuzione).

## Comandi

- `npm run dev` — dev server Vite (`npm run dev:host` per esporlo in rete)
- `npm run build` — `tsc -b && vite build`, poi copia `dist/index.html` in `dist/404.html` (fallback SPA per GitHub Pages)
- `npm run preview` — serve la build
- `npm run optimize:images` — converte gli screenshot di `assets-src/aureas/` in WebP in `src/assets/aureas/` e rigenera `sizes.json`

Non ci sono test né linter configurati.

## Architettura

SPA React 19 + Vite + Tailwind v4 (plugin `@tailwindcss/vite`), routing con `react-router-dom`, animazioni con `framer-motion`. Sito in italiano.

- **Fonte dati unica**: `src/data/portfolio.ts` contiene `profile`, `skills`, `categoryLabels` e `projects`. La UI legge tutto tramite `usePortfolio()` (`src/hooks/usePortfolio.ts`); per cambiare contenuti si modifica solo quel file.
- **Routing** (`src/App.tsx`): `/` (`pages/Home.tsx`, composta dalle sezioni in `components/sections/`) e `/projects/:slug` (`pages/ProjectPage.tsx`). Qualsiasi altra rotta fa redirect a `/`. Un progetto ha una pagina dedicata solo se ha `details`; altrimenti si viene reindirizzati a `/#projects`.
- **Pagine progetto custom**: `ProjectDetails.Section` è un componente React opzionale, caricato con `lazy(() => import('../projects/...'))` per il code-splitting (es. `src/projects/AureasFlow.tsx`).
- **Flag progetto**: `featured` (mostrato in evidenza), `isTop` (bordo/tab con il colore `shock`), `hidden`; `repo` assente = repo privato, nessun link "Codice".
- **Screenshot Aureas**: `AureasFlow.tsx` li carica per nome file con `import.meta.glob` da `src/assets/aureas/*.webp` (`lead`, `patient`, `patient-detail-1`, `patient-detail-2`, `visit`, `plan`, `recap`) e usa `sizes.json` per riservare lo spazio (niente layout shift). Gli originali in `assets-src/` restano fuori da git: importare solo i `.webp` generati.
- **Tema**: colori, font e ombre sono variabili `@theme` in `src/styles/theme.css`; con Tailwind v4 ogni `--color-*` diventa utility (`bg-bg`, `text-accent`, `border-border`...). Il colore `shock` va usato con parsimonia.

## Deploy

`.github/workflows/deploy.yml` (solo `workflow_dispatch`) builda con `VITE_BASE=/<nome-repo>/` e pubblica su GitHub Pages. `vite.config.ts` legge `VITE_BASE` da `.env` (in locale `/`, vedi `.env.example`).
