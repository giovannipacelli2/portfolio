import { Reveal } from './Reveal'

export function SectionTitle({ index, title }: { index: string; title: string }) {
  return (
    <Reveal className="mb-10">
      <p className="font-mono text-sm text-accent">{index}</p>
      <h2 className="font-mono text-3xl font-bold text-glow sm:text-4xl">{title}</h2>
    </Reveal>
  )
}
