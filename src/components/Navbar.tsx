const links = [
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Progetti' },
  { href: '#contact', label: 'Contatti' },
]

export function Navbar({ name }: { name: string }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <nav
        aria-label="Principale"
        className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4"
      >
        <a href="#top" className="font-mono text-sm font-bold text-accent">
          &gt; {name.split(' ')[0].toLowerCase()}_
        </a>
        <ul className="flex gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="inline-flex min-h-11 cursor-pointer items-center px-3 font-mono text-sm text-muted transition-colors duration-200 hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
