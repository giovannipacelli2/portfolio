// Blocchi di codice che cadono nell'hero. Aggiungine quanti vuoi:
// ogni elemento è un blocco (righe separate da \n) estratto a caso.

export type SnippetLang = 'javascript' | 'php' | 'html'

export interface CodeSnippet {
  lang: SnippetLang
  code: string
}

export const codeSnippets: CodeSnippet[] = [
  { lang: 'javascript', code: 'const sum = (a, b) => a + b;\nconsole.log(sum(2, 3));' },
  { lang: 'javascript', code: 'fetch(url)\n  .then(r => r.json())\n  .then(console.log);' },
  { lang: 'javascript', code: 'items.map(i => i.id)\n     .filter(Boolean);' },
  { lang: 'javascript', code: 'async function load() {\n  return await api.get();\n}' },
  { lang: 'javascript', code: 'export default {\n  name: "dev",\n};' },
  { lang: 'php', code: '<?php\necho "Hello, world";' },
  { lang: 'php', code: 'foreach ($rows as $row) {\n  echo $row["id"];\n}' },
  { lang: 'php', code: '$pdo->prepare($sql)\n    ->execute($params);' },
  { lang: 'php', code: 'function get(int $id): array {\n  return $db->find($id);\n}' },
  { lang: 'html', code: '<div class="card">\n  <h1>Hello</h1>\n</div>' },
  { lang: 'html', code: '<ul>\n  <li>one</li>\n  <li>two</li>\n</ul>' },
  { lang: 'html', code: '<form method="post">\n  <input name="q">\n</form>' },
  { lang: 'html', code: '<a href="/">home</a>' },
]
