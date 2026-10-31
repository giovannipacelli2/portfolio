import { Reveal } from '../components/ui/Reveal'

// Screenshots are picked up by file name: drop lead.png, patient.png, visit.png,
// plan.png and recap.png (png, jpg, webp or avif) in src/assets/aureas/.
// A step without its image shows a placeholder, so the page works from day one.
const shots = import.meta.glob<string>('../assets/aureas/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const findShot = (name: string) =>
  Object.entries(shots).find(([path]) => new RegExp(`/${name}\\.[a-z]+$`).test(path))?.[1]

const steps = [
  {
    shot: 'lead',
    title: 'Lead ricevuto dal form',
    text: 'Il form della landing invia i dati al backend tramite un proxy che firma la richiesta. Il backend valida i campi, blocca doppi invii e bot (lock, controllo duplicati, rate limiting), registra ogni invio e assegna il lead al professionista giusto in base al ruolo scelto nel form.',
    caption: 'Un nuovo lead nel pannello, assegnato al professionista',
  },
  {
    shot: 'patient',
    title: 'Da lead a paziente',
    text: 'Il professionista trova nel pannello i lead che gli sono stati assegnati e li trasforma in pazienti. Il paziente resta collegato al lead di origine e può avere una o più pre-anamnesi: questionari versionati, diversi per ogni professione.',
    caption: 'La conversione di un lead in paziente',
  },
  {
    shot: 'visit',
    title: 'Visita',
    text: 'Ogni visita registra le misure del paziente (peso, altezza, circonferenze, plicometria, BIA) e i questionari compilati. I dati restano nel tempo, così si può seguire l\'andamento tra una visita e l\'altra.',
    caption: 'Il dettaglio di una visita',
  },
  {
    shot: 'plan',
    title: 'Piano alimentare',
    text: 'L\'editor compone il piano per pasti, con alimenti e ricette, anche partendo da template di giornata. Il piano può essere giornaliero, settimanale, mensile o personalizzato, passa da bozza ad attivo e si può stampare.',
    caption: 'L\'editor del piano alimentare',
  },
  {
    shot: 'recap',
    title: 'Recap dei piani',
    text: 'Una panoramica a card raggruppate per stato: in scadenza, attivi, programmati, da rinnovare e scaduti. Con ricerca, filtri e azioni rapide per aprire, duplicare, rinnovare o eliminare un piano.',
    caption: 'La sezione di riepilogo dei piani',
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
        {steps.map((step, i) => {
          const src = findShot(step.shot)
          return (
            <li key={step.shot} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[calc(2rem+1px)] top-0 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-accent bg-bg font-mono text-sm text-accent shadow-glow-sm"
              >
                {i + 1}
              </span>

              <Reveal>
                <h3 className="font-mono text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-muted">{step.text}</p>

                <figure className="mt-5">
                  {src ? (
                    <img
                      src={src}
                      alt={step.caption}
                      loading="lazy"
                      className="w-full rounded-lg border border-border"
                    />
                  ) : (
                    <div className="flex aspect-video w-full items-center justify-center rounded-lg border border-dashed border-border bg-surface font-mono text-sm text-muted">
                      Screenshot in arrivo
                    </div>
                  )}
                  <figcaption className="mt-2 font-mono text-xs text-muted">
                    {step.caption}
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
