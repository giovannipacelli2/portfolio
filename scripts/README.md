# scripts

## `optimize-images.mjs`

Ottimizza gli screenshot del progetto Aureas per il web.

```bash
npm run optimize:images
```

### Cosa fa

1. Legge tutti i file `.png`, `.jpg` e `.jpeg` in `assets-src/aureas/` (cartella esclusa da git, contiene gli originali).
2. Li ridimensiona a una larghezza massima di 1400 px, senza ingrandire le immagini più piccole. La pagina progetto li mostra a circa 704 px CSS, quindi 1400 px copre gli schermi retina 2x.
3. Li converte in WebP (qualità 82, effort 6) e li salva in `src/assets/aureas/<nome>.webp`.
4. Scrive `src/assets/aureas/sizes.json` con larghezza e altezza finali di ogni immagine, così i tag `<img>` riservano lo spazio e la pagina non si sposta durante il caricamento.
5. Stampa per ogni file le dimensioni e il peso prima/dopo, più il totale.

### Quando eseguirlo

Dopo aver aggiunto o sostituito un'immagine in `assets-src/aureas/`. Il nome del file diventa la chiave usata da `src/projects/AureasFlow.tsx`: `lead`, `patient`, `patient-detail-1`, `patient-detail-2`, `visit`, `plan`, `recap`.

### Note

- L'app importa solo i `.webp` generati, mai gli originali.
- `sizes.json` viene riscritto da zero a ogni esecuzione: contiene solo le immagini presenti in `assets-src/aureas/`.
- Gli `.webp` di immagini rimosse dalla sorgente non vengono cancellati.
- Se `assets-src/aureas/` non esiste (la cartella non è su git), lo script termina con errore.
- Richiede `sharp` (devDependency, installata con `npm install`).
