import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const links = [
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Progetti' },
  { href: '/#contact', label: 'Contatti' },
]

const linkClass =
  'inline-flex min-h-11 cursor-pointer items-center px-3 font-mono text-sm text-muted transition-colors duration-200 hover:text-accent'

export function Navbar({ name }: { name: string }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <nav
        aria-label="Principale"
        className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4"
      >
        <Link to="/#top" className="font-mono text-sm font-bold text-accent">
          &gt; {name.split(' ')[0].toLowerCase()}_
        </Link>

        {/* From sm up: inline links */}
        <ul className="hidden gap-1 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link to={l.href} className={linkClass}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Below sm: menu button */}
        <button
          type="button"
          aria-label={open ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
          className="-mr-2 inline-flex h-11 w-11 cursor-pointer items-center justify-center text-accent sm:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border bg-bg px-4 py-2 sm:hidden"
          >
            {links.map((l) => (
              <li key={l.href}>
                <Link to={l.href} onClick={() => setOpen(false)} className={`${linkClass} w-full`}>
                  {l.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
