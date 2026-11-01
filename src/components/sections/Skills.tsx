import { usePortfolio } from '../../hooks/usePortfolio'
import { Reveal } from '../ui/Reveal'
import { SectionTitle } from '../ui/SectionTitle'

export function Skills() {
  const { skillsByCategory } = usePortfolio()

  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-24">
      <SectionTitle index="// 01_skills" title="Competenze" />
      <div className="grid gap-6 sm:grid-cols-2">
        {skillsByCategory.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.08}>
            <div
              tabIndex={0}
              className="h-full rounded-lg border border-border bg-surface p-6 transition-colors duration-200 hover:border-accent/50 hover:cursor-pointer focus:border-accent/50 focus-within:border-accent/50"
            >
              <h3 className="mb-4 font-mono text-sm uppercase tracking-wider text-accent">
                {group.label}
              </h3>
              <ul className="space-y-3">
                {group.items.map((skill) => (
                  <li key={skill.name} className="flex items-center justify-between gap-4">
                    <span>{skill.name}</span>
                    <span
                      role="img"
                      aria-label={`Livello ${skill.level} su 5`}
                      className="flex gap-1"
                    >
                      {[1, 2, 3, 4, 5].map((n) => (
                        <span
                          key={n}
                          className={`h-2 w-2 rounded-full ${
                            n <= skill.level ? 'bg-accent shadow-glow-sm' : 'bg-border'
                          }`}
                        />
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
