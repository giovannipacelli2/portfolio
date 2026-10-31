import { useEffect, useRef } from 'react'
import { codeSnippets } from '../../data/codeSnippets'

interface Drop {
  /** A few drops use the shock color instead of the accent */
  shock: boolean
  lines: string[]
  x: number
  y: number
  speed: number
  alpha: number
}

const FONT_SIZE = 12
const LINE_HEIGHT = 16

const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)]

function createDrop(width: number, height: number, initial: boolean): Drop {
  const lines = pick(codeSnippets).code.split('\n')
  return {
    shock: Math.random() < 0.1,
    lines,
    x: Math.random() * width,
    // On start the blocks are spread over the full height, then they respawn from the top.
    y: initial ? Math.random() * height : -lines.length * LINE_HEIGHT,
    speed: 25 + Math.random() * 55, // px per second
    alpha: 0.08 + Math.random() * 0.22,
  }
}

/** Rain of small code blocks on a <canvas>, paused when off-screen. */
export function CodeRain({ density = 0.00004 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    // Color and font come from the theme (theme.css), they are not duplicated here.
    const css = getComputedStyle(document.documentElement)
    const color = css.getPropertyValue('--color-accent').trim()
    const shockColor = css.getPropertyValue('--color-shock').trim()
    const fontFamily = css.getPropertyValue('--font-mono').trim()

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let drops: Drop[] = []
    let raf = 0
    let last = 0
    let visible = true

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.max(6, Math.round(width * height * density))
      drops = Array.from({ length: count }, () => createDrop(width, height, true))
    }

    const draw = (dt: number) => {
      ctx.clearRect(0, 0, width, height)
      ctx.font = `${FONT_SIZE}px ${fontFamily}`
      ctx.textBaseline = 'top'
      for (const d of drops) {
        ctx.fillStyle = d.shock ? shockColor : color
        d.y += d.speed * dt
        if (d.y > height) Object.assign(d, createDrop(width, height, false))
        ctx.globalAlpha = d.alpha
        d.lines.forEach((line, i) => ctx.fillText(line, d.x, d.y + i * LINE_HEIGHT))
      }
      ctx.globalAlpha = 1
    }

    const frame = (t: number) => {
      const dt = Math.min((t - last) / 1000, 0.05)
      last = t
      if (visible) draw(dt)
      raf = requestAnimationFrame(frame)
    }

    resize()
    if (reduceMotion) {
      draw(0) // static frame
    } else {
      raf = requestAnimationFrame((t) => {
        last = t
        frame(t)
      })
    }

    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting))
    io.observe(canvas)
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      ro.disconnect()
    }
  }, [density])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  )
}
