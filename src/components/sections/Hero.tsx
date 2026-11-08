import { useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { usePortfolio } from '../../hooks/usePortfolio'
import { CodeRain } from '../ui/CodeRain'
import { ParallaxLayer } from '../ui/ParallaxLayer'
import { Highlight } from '../ui/Highlight'
import { Reveal } from '../ui/Reveal'

/** Bio paragraphs shown before "...altro": fewer on phones to keep the hero short. */
const BIO_PREVIEW_COUNT = { mobile: 2, desktop: 3 }
/** Tailwind `md` breakpoint */
const DESKTOP_QUERY = '(min-width: 768px)'

export function Hero() {
  const { profile } = usePortfolio()
  const ref = useRef<HTMLElement>(null)
  const [bioOpen, setBioOpen] = useState(false)
  const bioId = useId()
  const isDesktop = useMediaQuery(DESKTOP_QUERY)
  const previewCount = isDesktop ? BIO_PREVIEW_COUNT.desktop : BIO_PREVIEW_COUNT.mobile
  const bioLead = profile.bio.slice(0, previewCount)
  const bioRest = profile.bio.slice(previewCount)

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
        <div className="absolute right-[10%] top-1/2 h-72 w-72 rounded-full bg-shock/10 blur-[120px]" />
      </ParallaxLayer>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />

      <div className="relative mx-auto w-full max-w-5xl px-4 pt-14">
        {/* <Reveal>
          <p className="font-mono text-sm text-accent">$ whoami</p>
        </Reveal> */}
        <Reveal delay={0.1}>
          <h1 className="mt-3 font-mono text-4xl font-bold text-glow sm:text-6xl">
            {profile.name}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-2 font-mono text-xl text-accent sm:text-2xl">{profile.role}</p>
        </Reveal>
        {
          profile.tagline && (
            <Reveal delay={0.3}>
              <p className="mt-6 max-w-xl text-lg text-muted">{profile.tagline}</p>
            </Reveal>
          )
        }
        <Reveal delay={0.35}>
          <div className="mt-6 max-w-2xl space-y-3 text-base leading-relaxed text-glow">
            {bioLead.map((paragraph, i) => (
              <p key={paragraph}>
                <Highlight text={paragraph} />
                {i === bioLead.length - 1 && bioRest.length > 0 && !bioOpen && (
                  <>
                    {' '}
                    <button
                      type="button"
                      onClick={() => setBioOpen(true)}
                      aria-expanded={false}
                      aria-controls={bioId}
                      className="cursor-pointer font-mono text-sm text-accent underline-offset-4 hover:underline focus-visible:underline"
                    >
                      ...altro
                    </button>
                  </>
                )}
              </p>
            ))}
            <AnimatePresence initial={false}>
              {bioOpen && (
                <motion.div
                  id={bioId}
                  key="bio-rest"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="space-y-3 overflow-hidden"
                >
                  {bioRest.map((paragraph) => (
                    <p key={paragraph}>
                      <Highlight text={paragraph} />
                    </p>
                  ))}
                  <button
                    type="button"
                    onClick={() => setBioOpen(false)}
                    aria-expanded={true}
                    aria-controls={bioId}
                    className="cursor-pointer font-mono text-sm text-accent underline-offset-4 hover:underline focus-visible:underline"
                  >
                    meno
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <p className="mt-5 font-mono text-sm text-accent">{'// '}{profile.motto}</p>
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
