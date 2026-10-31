import { Reveal } from '../components/ui/Reveal'
import sizes from '../assets/aureas/sizes.json'

// Screenshots are picked up by file name from src/assets/aureas/: lead, patient,
// patient-detail-1, patient-detail-2, visit, plan, recap. Put the originals in
// assets-src/aureas/ and run `npm run optimize:images`: it writes the WebP files
// and sizes.json (width/height, so the page doesn't shift while images load).
// A screenshot without its file shows a placeholder, so the page works from day one.
const shots = import.meta.glob<string>('../assets/aureas/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
})

const findShot = (name: string) =>
  Object.entries(shots).find(([path]) => new RegExp(`/${name}\\.[a-z]+$`).test(path))?.[1]

const steps = [
  {
    key: 'lead',
    title: 'Lead ricevuto dal form',
    text: 'Il form della landing invia i dati al backend tramite un proxy che firma la richiesta. Il backend valida i campi, blocca doppi invii e bot (lock, controllo duplicati, rate limiting), registra ogni invio e assegna il lead al professionista giusto in base al ruolo scelto nel form.',
    shots: [
      {
        file: 'lead',
        caption: 'Un lead ricevuto, con le risposte del questionario del form',
        alt: 'Elenco dei contatti ricevuti nel pannello di Auréas, con una finestra che mostra le risposte al questionario: obiettivo, intolleranze o allergie e note',
      },
    ],
  },
  {
    key: 'patient',
    title: 'Da lead a paziente',
    text: 'Il professionista trova nel pannello i lead che gli sono stati assegnati e li trasforma in pazienti. Il paziente resta collegato al lead di origine e può avere una o più pre-anamnesi: questionari versionati, diversi per ogni professione.',
    shots: [
      {
        file: 'patient',
        caption: 'La conversione di un lead in paziente',
        alt: 'Finestra "Converti in paziente" con i dati del contatto e i campi aggiuntivi richiesti: genere, data di nascita e codice fiscale',
      },
    ],
  },
  {
    key: 'patient-detail',
    title: 'Dettaglio paziente',
    text: 'La scheda del paziente mostra l\'anagrafica e il questionario compilato, e riassume in un colpo d\'occhio l\'ultima pre-anamnesi, l\'ultima visita e l\'ultimo piano alimentare. Da ogni riquadro si apre lo storico completo oppure se ne crea uno nuovo. Il professionista vede solo i propri pazienti, in base ai permessi del suo account.',
    shots: [
      {
        file: 'patient-detail-1',
        caption: 'La scheda del paziente',
        alt: 'Scheda paziente con i dati anagrafici in tabella (nome, genere, email, telefono, data di nascita, codice fiscale) e il questionario compilato',
      },
      {
        file: 'patient-detail-2',
        caption: 'Ultima pre-anamnesi, ultima visita e ultimo piano',
        alt: 'Scheda paziente con i riquadri Ultima Pre-Anamnesi, Ultima Visita (data, peso, altezza) e Ultimo Piano (tipologia, stato, giorno di inizio e fine), ciascuno con i pulsanti Vedi tutti e Nuovo',
      },
    ],
  },
  {
    key: 'visit',
    title: 'Visita',
    text: 'Ogni visita è un check, diviso in anamnesi e misurazioni: peso, altezza, circonferenze, plicometria e BIA. I dati restano nel tempo, così si può seguire l\'andamento tra una visita e l\'altra, e il piano alimentare si collega a una visita.',
    shots: [
      {
        file: 'visit',
        caption: 'Il dettaglio di una visita (check)',
        alt: 'Dettaglio di un check già registrato, con le schede Anamnesi e Misurazioni, il peso, l\'altezza e i campi delle circonferenze',
      },
    ],
  },
  {
    key: 'plan',
    title: 'Piano alimentare',
    text: 'L\'editor compone il piano per giorno e per pasto, con alimenti, grammature e sostituzioni, anche partendo da template di giornata. Il piano è legato a un paziente e a una visita, può essere giornaliero, settimanale, mensile o personalizzato, parte come bozza e si può stampare. A lato, il riepilogo dei nutrienti si aggiorna mentre si modifica.',
    shots: [
      {
        file: 'plan',
        caption: 'L\'editor del piano alimentare',
        alt: 'Editor di un nuovo piano settimanale con colazione e spuntino, alimenti con grammature e valori nutrizionali, e il riepilogo di calorie, glucidi, protidi e lipidi',
      },
    ],
  },
  {
    key: 'recap',
    title: 'Recap dei piani',
    text: 'Una panoramica a card raggruppate per stato: in scadenza, attivi, programmati, da rinnovare e scaduti. In alto un avviso con i piani in scadenza e i pazienti da rinnovare; poi ricerca, filtri e azioni rapide per aprire, duplicare, rinnovare o eliminare un piano.',
    shots: [
      {
        file: 'recap',
        caption: 'La sezione di riepilogo dei piani',
        alt: 'Pagina Piani Alimentari con ricerca e filtri, un avviso sui piani in scadenza e le card dei piani con stato, tipo e scadenza',
      },
    ],
  },
]

export default function AureasFlow() {
  return (
    <div>
      <h2 className="font-mono text-sm uppercase tracking-wider text-accent">Come funziona</h2>
      <p className="mt-3 text-muted">
        Il percorso di un contatto, dal form del sito fino al piano alimentare del paziente.
      </p>

      <ol className="relative mt-10 space-y-14 border-l border-border pl-8">
        {steps.map((step, i) => (
          <li key={step.key} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[calc(2rem+1px)] top-0 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-accent bg-bg font-mono text-sm text-accent shadow-glow-sm"
            >
              {i + 1}
            </span>

            <Reveal>
              <h3 className="font-mono text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-muted">{step.text}</p>

              <div className="mt-5 space-y-6">
                {step.shots.map(({ file, caption, alt }) => {
                  const src = findShot(file)
                  const size = sizes[file as keyof typeof sizes]
                  return (
                    <figure key={file}>
                      {src ? (
                        <img
                          src={src}
                          alt={alt}
                          width={size?.width}
                          height={size?.height}
                          loading="lazy"
                          decoding="async"
                          className="h-auto w-full rounded-lg border border-border"
                        />
                      ) : (
                        <div className="flex aspect-video w-full items-center justify-center rounded-lg border border-dashed border-border bg-surface font-mono text-sm text-muted">
                          Screenshot in arrivo
                        </div>
                      )}
                      <figcaption className="mt-2 font-mono text-xs text-muted">
                        {caption}
                      </figcaption>
                    </figure>
                  )
                })}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  )
}
