/**
 * Renders plain text where `**segments**` are highlighted with the accent color.
 * Text is rendered as React children (never as HTML), so it stays XSS-safe.
 */
export function Highlight({ text }: { text: string }) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    // split with a capture group: odd indexes are the highlighted segments
    i % 2 === 1 ? (
      <span key={i} className="text-accent">
        {part}
      </span>
    ) : (
      part
    ),
  )
}
