// Single data source of the site: edit here and the UI updates.

export type SkillCategory = 'frontend' | 'backend' | 'database' | 'devops'

export interface Skill {
  name: string
  category: SkillCategory
  /** From 1 to 5 */
  level: 1 | 2 | 3 | 4 | 5
}

export interface Project {
  title: string
  description: string
  stack: string[]
  repo?: string
  demo?: string
  featured?: boolean
}

export const profile = {
  name: 'Giovanni Pacelli',
  role: 'Fullstack Developer',
  tagline: 'Costruisco applicazioni web dal database all\'interfaccia.',
  email: 'giovanni.pacelli.dev@gmail.com',
  links: {
    github: 'https://github.com/giovannipacelli2',
    linkedin: 'https://www.linkedin.com/in/giovanni-pacelli-537398147',
  },
}

export const categoryLabels: Record<SkillCategory, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  devops: 'DevOps',
}

export const skills: Skill[] = [
  { name: 'React', category: 'frontend', level: 3 },
  { name: 'TypeScript', category: 'frontend', level: 3 },
  { name: 'Tailwind CSS', category: 'frontend', level: 3 },
  { name: 'Laravel', category: 'backend', level: 5 },
  { name: 'PHP', category: 'backend', level: 4 },
  { name: 'REST API', category: 'backend', level: 5 },
  { name: 'MySQL', category: 'database', level: 4 },
  { name: 'PostgreSQL', category: 'database', level: 4 },
  { name: 'Git', category: 'devops', level: 4 },
  { name: 'GitHub Actions', category: 'devops', level: 3 },
  { name: 'Docker', category: 'devops', level: 3 },
]

export const projects: Project[] = [
  {
    title: 'TeamFlow (frontend)',
    description:
      'Web app per la gestione dei task: account, modifica del profilo, creazione e modifica dei task e visualizzazione di quelli condivisi da altri utenti.',
    stack: ['React', 'TypeScript', 'SCSS'],
    repo: 'https://github.com/giovannipacelli2/teamflow_fe',
    featured: true,
  },
  {
    title: 'TeamFlow API (backend)',
    description:
      'API RESTful con CRUD per utenti e task, validazione delle richieste, policy di accesso e documentazione Swagger.',
    stack: ['Laravel', 'PHP', 'PostgreSQL', 'Swagger'],
    repo: 'https://github.com/giovannipacelli2/teamflow_be',
    featured: true,
  },
  {
    title: 'PhpGateKeeperProxy',
    description:
      'Micro-script PHP senza dipendenze che firma con HMAC le richieste verso il backend, tenendo il segreto lato server, e valida un token Cloudflare Turnstile prima di inoltrarle.',
    stack: ['PHP', 'Docker', 'Turnstile'],
    repo: 'https://github.com/giovannipacelli2/PhpGateKeeperProxy',
  },
  {
    title: 'PhpRedirectorPlus',
    description:
      'Redirect tracker in PHP puro, adatto a WordPress: registra la richiesta e la rimanda alla destinazione, estendibile con plugin interni o codice personalizzato.',
    stack: ['PHP', 'Docker'],
    repo: 'https://github.com/giovannipacelli2/PhpRedirectorPlus',
  },
]
