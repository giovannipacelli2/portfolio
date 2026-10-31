import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { ScrollManager } from './components/ScrollManager'
import { usePortfolio } from './hooks/usePortfolio'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'

export default function App() {
  const { profile } = usePortfolio()
  return (
    <>
      <ScrollManager />
      <Navbar name={profile.name} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="border-t border-border py-8 text-center font-mono text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  )
}
