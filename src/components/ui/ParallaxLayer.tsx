import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import type { ReactNode, RefObject } from 'react'

interface ParallaxLayerProps {
  /** Contenitore di cui seguire lo scroll */
  target: RefObject<HTMLElement | null>
  /** Spostamento totale in percentuale (consigliato 5-15, negativo = sale) */
  distance?: number
  children: ReactNode
  className?: string
}

/** Livello decorativo che scorre a velocità diversa dal resto. Non usarlo sul testo. */
export function ParallaxLayer({ target, distance = 12, children, className }: ParallaxLayerProps) {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${distance}%`])
  return (
    <motion.div style={reduce ? undefined : { y }} className={className} aria-hidden="true">
      {children}
    </motion.div>
  )
}
