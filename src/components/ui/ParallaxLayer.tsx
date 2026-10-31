import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import type { ReactNode, RefObject } from 'react'

interface ParallaxLayerProps {
  /** Container whose scroll progress drives the effect */
  target: RefObject<HTMLElement | null>
  /** Total shift in percent (5-15 recommended, negative = moves up) */
  distance?: number
  children: ReactNode
  className?: string
}

/** Decorative layer that scrolls at a different speed. Don't use it on text. */
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
