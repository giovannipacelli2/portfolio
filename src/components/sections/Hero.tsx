import { useRef } from 'react'
import { usePortfolio } from '../../hooks/usePortfolio'
import { CodeRain } from '../ui/CodeRain'
import { ParallaxLayer } from '../ui/ParallaxLayer'
import { Reveal } from '../ui/Reveal'

export function Hero() {
  const { profile } = usePortfolio()
  const ref = useRef<HTMLElement>(null)

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-svh items-center overflow-hidden"
    >
      <ParallaxLayer target={ref} distance={15} className="absolute inset-0">
        <CodeRain />
      </ParallaxLayer>
      <ParallaxLayer target={ref} distance={-8} className="absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </ParallaxLayer>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />

      <div className="relative mx-auto w-full max-w-5xl px-4 pt-14">
        <Reveal>
          <p className="font-mono text-sm text-accent">$ whoami</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-3 font-mono text-4xl font-bold text-glow sm:text-6xl">
            {profile.name}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-2 font-mono text-xl text-accent sm:text-2xl">{profile.role}</p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-6 max-w-xl text-lg text-muted">{profile.tagline}</p>
        </Reveal>
        <Reveal delay={0.4} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex min-h-11 cursor-pointer items-center rounded-md bg-accent px-6 font-mono text-sm font-bold text-bg transition-shadow duration-200 hover:shadow-glow"
          >
            Vedi i progetti
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-11 cursor-pointer items-center rounded-md border border-accent/50 px-6 font-mono text-sm text-accent transition-colors duration-200 hover:bg-accent/10"
          >
            Contattami
          </a>
        </Reveal>
      </div>
    </section>
  )
}
