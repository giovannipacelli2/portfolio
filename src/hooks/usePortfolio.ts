import { useMemo } from 'react'
import {
  categoryLabels,
  profile,
  projects,
  skills,
  type Skill,
  type SkillCategory,
} from '../data/portfolio'

/** Centralized hook: collects all the data and helpers used by the UI. */
export function usePortfolio() {
  return useMemo(() => {
    const skillsByCategory = (Object.keys(categoryLabels) as SkillCategory[])
      .map((category) => ({
        category,
        label: categoryLabels[category],
        items: skills.filter((s: Skill) => s.category === category),
      }))
      .filter((group) => group.items.length > 0)

    return {
      profile,
      skills,
      skillsByCategory,
      projects,
      featuredProjects: projects.filter((p) => p.featured),
    }
  }, [])
}
