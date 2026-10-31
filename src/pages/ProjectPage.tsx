import { Link, Navigate, useParams } from 'react-router-dom'
import { Reveal } from '../components/ui/Reveal'
import { ArrowLeftIcon, CodeIcon, DemoIcon } from '../components/ui/SocialIcons'
import { usePortfolio } from '../hooks/usePortfolio'

const linkClass =
  'inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-md border border-accent/50 px-5 font-mono text-sm text-accent transition-colors duration-200 hover:bg-accent/10'

export default function ProjectPage() {
  const { slug } = useParams()
  const { projects } = usePortfolio()
  const project = projects.find((p) => p.slug === slug)

  if (!project?.details) return <Navigate to="/#projects" replace />

  const { title, stack, repo, demo, details } = project

  return (
    <article className="mx-auto max-w-3xl px-4 pb-24 pt-28">
      <Reveal>
        <Link
          to="/#projects"
          className="inline-flex min-h-11 cursor-pointer items-center gap-2 font-mono text-sm text-muted transition-colors duration-200 hover:text-accent"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Progetti
        </Link>
      </Reveal>

      <Reveal delay={0.1}>
        <h1 className="mt-4 font-mono text-3xl font-bold text-glow sm:text-5xl">{title}</h1>
        <ul className="mt-5 flex flex-wrap gap-2">
          {stack.map((s) => (
            <li
              key={s}
              className="rounded border border-border bg-surface-2 px-2 py-0.5 font-mono text-xs text-accent"
            >
              {s}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.15} className="mt-10">
        <h2 className="font-mono text-sm uppercase tracking-wider text-accent">Panoramica</h2>
        <p className="mt-3 text-lg text-muted">{details.overview}</p>
      </Reveal>

      <Reveal className="mt-10">
        <h2 className="font-mono text-sm uppercase tracking-wider text-accent">In evidenza</h2>
        <ul className="mt-3 space-y-3">
          {details.features.map((f) => (
            <li key={f} className="flex gap-3">
              <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-glow-sm" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      {(repo || demo) && (
        <Reveal className="mt-12 flex flex-wrap gap-4">
          {repo && (
            <a href={repo} target="_blank" rel="noreferrer" className={linkClass}>
              <CodeIcon className="h-4 w-4" />
              Codice
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer" className={linkClass}>
              <DemoIcon className="h-4 w-4" />
              Demo
            </a>
          )}
        </Reveal>
      )}
    </article>
  )
}
