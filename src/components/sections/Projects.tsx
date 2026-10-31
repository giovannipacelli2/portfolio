import { usePortfolio } from '../../hooks/usePortfolio'
import { Reveal } from '../ui/Reveal'
import { SectionTitle } from '../ui/SectionTitle'

const linkClass =
  'inline-flex min-h-11 cursor-pointer items-center font-mono text-sm text-accent underline-offset-4 transition-colors duration-200 hover:underline'

export function Projects() {
  const { projects } = usePortfolio()

  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-24">
      <SectionTitle index="02 // projects" title="Progetti" />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.1} className="h-full">
            <article className="flex h-full flex-col rounded-lg border border-border bg-surface p-6 transition-all duration-200 hover:border-accent/50 hover:shadow-glow hover:cursor-pointer">
              <h3 className="font-mono text-xl font-bold">{p.title}</h3>
              <p className="mt-3 flex-1 text-muted">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded border border-border bg-surface-2 px-2 py-0.5 font-mono text-xs text-accent"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex gap-4">
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer" className={linkClass}>
                    Codice ↗
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className={linkClass}>
                    Demo ↗
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
