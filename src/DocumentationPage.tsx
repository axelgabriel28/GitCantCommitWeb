import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'
import brief from './documentation/project-brief.md?raw'
import science from './documentation/science-and-validation.md?raw'
import design from './documentation/game-design.md?raw'
import sources from './documentation/data-sources-and-credits.md?raw'
import walkthrough from './documentation/walkthrough.md?raw'
import { siteContent } from './data/siteContent'

const documents = [
  { id: 'project-brief', label: 'Project brief', text: brief },
  { id: 'science-and-validation', label: 'Science and validation', text: science },
  { id: 'game-design', label: 'Game design', text: design },
  { id: 'data-sources-and-credits', label: 'Data sources and credits', text: sources },
  { id: 'walkthrough', label: 'Walkthrough', text: walkthrough },
]

function inline(text: string): ReactNode[] {
  const pattern = /\[([^\]]+)\]\(([^)]+)\)|(https?:\/\/[^\s]+)/g
  const result: ReactNode[] = []
  let last = 0
  for (const match of text.matchAll(pattern)) {
    const index = match.index
    result.push(text.slice(last, index))
    const target = match[2] || match[3]
    const doc = documents.find((item) => target.includes(item.id))
    const href = doc ? `?document=${doc.id}` : target
    const external = href.startsWith('https://') || href.startsWith('http://')
    result.push(<a key={index} href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{match[1] || target}</a>)
    last = index + match[0].length
  }
  result.push(text.slice(last))
  return result
}

function Markdown({ text }: { text: string }) {
  const lines = text.replace(/\r/g, '').split('\n')
  const blocks: ReactNode[] = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i].trim()
    if (!line) { i++; continue }
    if (/^#{1,3} /.test(line)) {
      const level = line.match(/^#+/)![0].length
      const content = inline(line.slice(level + 1))
      blocks.push(level === 1 ? <h1 key={i}>{content}</h1> : level === 2 ? <h2 key={i}>{content}</h2> : <h3 key={i}>{content}</h3>)
      i++; continue
    }
    if (line.startsWith('|')) {
      const start = i
      const rows: string[][] = []
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        rows.push(lines[i].trim().slice(1, -1).split('|').map((cell) => cell.trim()))
        i++
      }
      blocks.push(<div className="docs-table-wrap" key={start}><table><thead><tr>{rows[0].map((cell, j) => <th key={j} scope="col">{inline(cell)}</th>)}</tr></thead><tbody>{rows.slice(2).map((row, j) => <tr key={j}>{row.map((cell, k) => <td key={k}>{inline(cell)}</td>)}</tr>)}</tbody></table></div>)
      continue
    }
    const ordered = /^\d+\. /.test(line)
    if (ordered || /^- /.test(line)) {
      const start = i
      const items: ReactNode[] = []
      while (i < lines.length && (ordered ? /^\d+\. /.test(lines[i].trim()) : /^- /.test(lines[i].trim()))) {
        items.push(<li key={i}>{inline(lines[i].trim().replace(ordered ? /^\d+\. / : /^- /, ''))}</li>)
        i++
      }
      blocks.push(ordered ? <ol key={start}>{items}</ol> : <ul key={start}>{items}</ul>)
      continue
    }
    const start = i
    const paragraph: string[] = []
    while (i < lines.length && lines[i].trim() && !/^(#{1,3} |\||- |\d+\. )/.test(lines[i].trim())) paragraph.push(lines[i++].trim())
    blocks.push(<p key={start}>{inline(paragraph.join(' '))}</p>)
  }
  return <>{blocks}</>
}

export default function DocumentationPage() {
  const selected = documents.find((item) => item.id === new URLSearchParams(window.location.search).get('document')) || documents[0]
  return <main className="site-shell"><div className="page-sheet docs-page">
    <header className="site-header"><a className="brand" href="./" aria-label="Moonward home"><img className="brand-logo" src="/moonward-logo.png" alt="" /><span>Moonward</span></a><a className="docs-home-link" href="./#documentation"><ArrowLeft size={16} /> Back to site</a></header>
    <div className="docs-hero"><div><p className="section-kicker">Moonward / Documentation</p><h1>Behind the<br /><em>mission.</em></h1></div><p>Explore the project brief, scientific approach, game design, sources, and intended player journey.</p></div>
    <div className="docs-layout"><aside className="docs-sidebar"><p className="section-kicker">Explore the documents</p><nav aria-label="Documentation">{documents.map((item, index) => <a href={`?document=${item.id}`} key={item.id} aria-current={item.id === selected.id ? 'page' : undefined}><span>0{index + 1}</span>{item.label}<ArrowUpRight size={14} /></a>)}</nav></aside>
      <article className="docs-article"><Markdown text={selected.text} />{selected.id === 'walkthrough' && <a className="docs-demo" href={siteContent.links.demonstration} target="_blank" rel="noopener noreferrer">Watch the project demonstration <ArrowUpRight size={16} /></a>}</article></div>
    <footer className="docs-footer"><span>Moonward</span><a href="./#documentation">Return to the main site <ArrowUpRight size={14} /></a></footer>
  </div></main>
}
