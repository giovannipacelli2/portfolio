// Unica fonte dati del sito: modifica qui e la UI si aggiorna.

export type SkillCategory = 'frontend' | 'backend' | 'database' | 'devops'

export interface Skill {
  name: string
  category: SkillCategory
  /** Da 1 a 5 */
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
  role: 'Sviluppatore Fullstack',
  tagline: 'Costruisco applicazioni web dal database all\'interfaccia.',
  email: 'giovanni.pacelli@workpipe.it',
  links: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
  },
}

export const categoryLabels: Record<SkillCategory, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  devops: 'DevOps',
}

export const skills: Skill[] = [
  { name: 'React', category: 'frontend', level: 5 },
  { name: 'TypeScript', category: 'frontend', level: 4 },
  { name: 'Tailwind CSS', category: 'frontend', level: 4 },
  { name: 'Node.js', category: 'backend', level: 4 },
  { name: 'PHP', category: 'backend', level: 4 },
  { name: 'REST API', category: 'backend', level: 4 },
  { name: 'MySQL', category: 'database', level: 4 },
  { name: 'PostgreSQL', category: 'database', level: 3 },
  { name: 'Git', category: 'devops', level: 4 },
  { name: 'Docker', category: 'devops', level: 3 },
]

export const projects: Project[] = [
  {
    title: 'Progetto di esempio 1',
    description: 'Descrivi in una riga il problema che risolve e il tuo ruolo.',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    repo: 'https://github.com/',
    demo: 'https://example.com',
    featured: true,
  },
  {
    title: 'Progetto di esempio 2',
    description: 'Un secondo progetto: cosa fa e quale risultato ha ottenuto.',
    stack: ['PHP', 'MySQL', 'JavaScript'],
    repo: 'https://github.com/',
    featured: true,
  },
  {
    title: 'Progetto di esempio 3',
    description: 'Un terzo progetto, magari open source o un esperimento.',
    stack: ['TypeScript', 'Docker'],
    repo: 'https://github.com/',
  },
]
