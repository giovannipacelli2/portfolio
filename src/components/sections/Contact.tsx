import { usePortfolio } from '../../hooks/usePortfolio'
import { Reveal } from '../ui/Reveal'
import { SectionTitle } from '../ui/SectionTitle'
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons'

const socialClass =
  'inline-flex min-h-11 cursor-pointer items-center gap-2 font-mono text-sm text-muted transition-colors duration-200 hover:text-accent'

export function Contact() {
  const { profile } = usePortfolio()

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-24">
      <SectionTitle index="03 // contact" title="Contatti" />
      <Reveal>
        <p className="max-w-xl text-lg text-muted">
          Hai un progetto o vuoi solo salutare? Scrivimi.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-flex min-h-11 cursor-pointer items-center rounded-md bg-accent px-6 font-mono text-sm font-bold text-bg transition-shadow duration-200 hover:shadow-glow"
        >
          {profile.email}
        </a>
        <ul className="mt-6 flex gap-6">
          <li>
            <a href={profile.links.github} target="_blank" rel="noreferrer" className={socialClass}>
              <GithubIcon className="h-5 w-5" />
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className={socialClass}>
              <LinkedinIcon className="h-5 w-5" />
              LinkedIn
            </a>
          </li>
        </ul>
      </Reveal>
    </section>
  )
}
