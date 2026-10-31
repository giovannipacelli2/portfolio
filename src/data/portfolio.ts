// Single data source of the site: edit here and the UI updates.

import type { ComponentType } from 'react'
// import { lazy } from 'react'

export type SkillCategory = 'frontend' | 'backend' | 'database' | 'devops'

export interface Skill {
  name: string
  category: SkillCategory
  /** From 1 to 5 */
  level: 1 | 2 | 3 | 4 | 5
}

export interface ProjectDetails {
  /** Longer description shown on the project page */
  overview: string
  /** Bullet list of highlights (features, architecture, results...) */
  features: string[]
  /**
   * Optional React component rendered on the project page, below the description.
   * Keep it lazy so each one is code-split and only loaded on its own page:
   *   Section: lazy(() => import('../projects/MyProject'))
   */
  Section?: ComponentType
}

export interface Project {
  /** Used in the URL: /projects/<slug> */
  slug: string
  title: string
  description: string
  stack: string[]
  /** Leave it out for private repos: no "Codice" link is shown */
  repo?: string
  demo?: string
  featured?: boolean
  /** When present, the card shows a "More" button leading to the project page */
  details?: ProjectDetails
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
    slug: 'teamflow-fe',
    title: 'TeamFlow (frontend)',
    description:
      'Web app per la gestione dei task: account, modifica del profilo, creazione e modifica dei task e visualizzazione di quelli condivisi da altri utenti.',
    stack: ['React', 'TypeScript', 'SCSS'],
    repo: 'https://github.com/giovannipacelli2/teamflow_fe',
    featured: true,
    details: {
      overview:
        'Interfaccia web di TeamFlow, pensata per organizzare il lavoro in team attraverso i task. Dialoga con le API del backend tramite un client generato a partire dal file Swagger.',
      features: [
        'Creazione ed eliminazione dell\'account e modifica dei dati personali',
        'Creazione, modifica ed eliminazione dei task',
        'Visualizzazione dei task condivisi da altri utenti',
        'Client API generato dal file Swagger del backend',
      ],
      // Section: lazy(() => import('../projects/TeamflowArchitecture')),
    },
  },
  {
    slug: 'teamflow-be',
    title: 'TeamFlow API (backend)',
    description:
      'API RESTful con CRUD per utenti e task, validazione delle richieste, policy di accesso e documentazione Swagger.',
    stack: ['Laravel', 'PHP', 'PostgreSQL', 'Swagger'],
    repo: 'https://github.com/giovannipacelli2/teamflow_be',
    featured: true,
    details: {
      overview:
        'Backend RESTful di TeamFlow: modelli, rotte e controller espongono le operazioni CRUD su utenti e task, con accesso regolato da policy e dati validati prima di arrivare al database.',
      features: [
        'CRUD per utenti e task con ordinamento e filtri sulle query',
        'Policy per gestire i permessi dei controller',
        'Regole di validazione e messaggi di errore dedicati per ogni modello',
        'Servizi iniettabili nei controller e risposte di errore in JSON',
        'Migrazioni e seeder per installare il database con dati di prova',
        'Documentazione Swagger delle API',
      ],
    },
  },
  {
    slug: 'php-gatekeeper-proxy',
    title: 'PhpGateKeeperProxy',
    description:
      'Micro-script PHP senza dipendenze che firma con HMAC le richieste verso il backend, tenendo il segreto lato server, e valida un token Cloudflare Turnstile prima di inoltrarle.',
    stack: ['PHP', 'Docker', 'Turnstile'],
    repo: 'https://github.com/giovannipacelli2/PhpGateKeeperProxy',
    details: {
      overview:
        'Un frontend con la apiKey nel bundle espone di fatto un segreto pubblico. Questo script tiene il segreto solo lato server e firma le richieste per conto del visitatore, così il controllo di firma del backend verifica davvero qualcosa.',
      features: [
        'Un solo entry point, nessun framework e nessuna dipendenza Composer',
        'Accetta solo richieste POST, le altre ricevono 405',
        'Controllo di Origin e Referer contro l\'abuso da browser',
        'Validazione obbligatoria del token Cloudflare Turnstile prima dell\'inoltro',
        'Limite di 64 KiB sul body della richiesta',
      ],
    },
  },
  {
    slug: 'php-redirector-plus',
    title: 'PhpRedirectorPlus',
    description:
      'Redirect tracker in PHP puro, adatto a WordPress: registra la richiesta e la rimanda alla destinazione, estendibile con plugin interni o codice personalizzato.',
    stack: ['PHP', 'Docker'],
    repo: 'https://github.com/giovannipacelli2/PhpRedirectorPlus',
    details: {
      overview:
        'Redirect tracker minimale in PHP puro: ogni richiesta viene registrata e poi rimandata a una URL di destinazione. Pensato per campagne con link e QR code, anche su hosting WordPress.',
      features: [
        'Un solo file da esporre, senza dipendenze né framework',
        'Configurazione tramite file .env (HOME_URL obbligatoria)',
        'Plugin attivabili da configurazione',
        'callback.php per eseguire logica prima del redirect',
        'messages.php per personalizzare le risposte JSON',
      ],
    },
  },
]
