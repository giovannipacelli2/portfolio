import { Navbar } from './components/Navbar'
import { Contact } from './components/sections/Contact'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { usePortfolio } from './hooks/usePortfolio'

export default function App() {
  const { profile } = usePortfolio()
  return (
    <>
      <Navbar name={profile.name} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-border py-8 text-center font-mono text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  )
}
