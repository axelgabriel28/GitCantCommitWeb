import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ExternalLink, FileText, Menu, Play, Satellite, X } from 'lucide-react'
import { useState } from 'react'
import { siteContent } from './data/siteContent'
import DocumentationPage from './DocumentationPage'

function SpaceMark() {
  return <img className="brand-logo" src="/moonward-logo.png" alt="" />
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeMode, setActiveMode] = useState(0)

  if (new URLSearchParams(window.location.search).has('document')) return <DocumentationPage />

  return (
    <main className="site-shell">
      <div className="page-sheet">
        <div className="texture texture-top" aria-hidden="true" />
        <div className="texture texture-bottom" aria-hidden="true" />
        <header className="site-header">
          <a className="brand" href="#top" aria-label="Moonward home"><SpaceMark /><span>{siteContent.project.name}</span></a>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={17} /> : <Menu size={17} />}<span>{menuOpen ? 'Close' : 'Menu'}</span></button>
          <nav id="site-nav" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Primary navigation">{siteContent.navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}</nav>
        </header>

        <section id="top" className="hero moonward-hero" aria-labelledby="hero-title">
          <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-dot" /> {siteContent.project.challenge}</p><h1 id="hero-title">{siteContent.project.name}<br /><em>{siteContent.project.tagline}</em></h1><p className="hero-intro">{siteContent.project.intro}</p><div className="hero-actions"><a className="primary-button" href={siteContent.links.project} target="_blank" rel="noopener noreferrer"><Play size={15} /> Play Moonward</a><a className="text-link" href="?document=project-brief">Read the project brief <ArrowUpRight size={15} /></a></div><p className="hero-meta">{siteContent.project.meta}</p></div>
          <figure className="hero-preview"><img src="/header/moonward-home.png" alt="Moonward game home screen showing a large Moon, site markers, and mission controls" /><figcaption><span>Inside Moonward</span><span>Browser prototype / home screen</span></figcaption></figure>
        </section>

        <section id="challenge" className="challenge-band" aria-labelledby="challenge-title"><div className="challenge-heading"><p className="section-kicker">{siteContent.challenge.kicker}</p><h2 id="challenge-title">{siteContent.challenge.title}</h2></div><div className="challenge-copy"><p>{siteContent.challenge.body}</p><p>{siteContent.challenge.detail}</p></div><div className="challenge-stat"><strong>{siteContent.challenge.stat.value}</strong><span>{siteContent.challenge.stat.label}</span><small>{siteContent.challenge.stat.note}</small></div></section>

        <section id="solution" className="story-chapter solution-chapter" aria-labelledby="solution-title">
          <div className="chapter-copy"><p className="section-kicker">{siteContent.solution.kicker}</p><h2 id="solution-title">{siteContent.solution.title}</h2><p className="story-lede">{siteContent.solution.body}</p><a className="chapter-action" href="#how-it-works"><span>Follow the planning loop</span><ArrowRight size={15} /></a></div>
          <div id="demo" className="demo-panel" aria-label="Moonward browser experience preview"><div className="demo-panel-top"><span>{siteContent.solution.demoLabel}</span><span className="demo-status"><i /> horizon lens ready</span></div><div className="demo-screen"><img className="demo-image" src="/modes/navigator-v1.png" alt="Moonward Navigator planning view" /><div className="demo-caption"><span>Navigator / Lunar south pole</span><strong>Compare a site and time.</strong></div></div><div className="demo-panel-bottom"><span>{siteContent.solution.demoNote}</span><a href={siteContent.links.demonstration} target="_blank" rel="noopener noreferrer" aria-label="Watch Moonward project demonstration"><Play size={15} /></a></div></div>
        </section>

        <section id="how-it-works" className="how-section" aria-labelledby="how-title"><div className="section-heading"><div><p className="section-kicker">How it works</p><h2 id="how-title">Plan by light,<br />time, and horizon.</h2></div><p className="section-note">The experience keeps every input visible, so the reasoning stays as clear as the result.</p></div><div className="how-grid">{siteContent.howItWorks.map((step) => <article className="how-card" key={step.label}><span>{step.label}</span><h3>{step.title}</h3><p>{step.body}</p></article>)}</div></section>

        <section id="game-modes" className="modes-section" aria-labelledby="modes-title">
          <div className="modes-intro"><p className="section-kicker">Game structure</p><h2 id="modes-title">One question.<br />Four ways in.</h2><p>These modes share the same planning evidence while giving different audiences a different starting point.</p></div>
          <div className="mode-gallery">
            <div className="mode-stage" aria-live="polite" aria-atomic="true">
              <div key={activeMode} className={`mode-scene mode-scene-${activeMode + 1}`}>
                <img className="mode-scene-image" src={siteContent.gameModes[activeMode].image} alt={`${siteContent.gameModes[activeMode].label} in Moonward`} />
                <div className="mode-scene-caption"><span>0{activeMode + 1} / 0{siteContent.gameModes.length}</span><h3>{siteContent.gameModes[activeMode].label}</h3><p>{siteContent.gameModes[activeMode].body}</p></div>
              </div>
            </div>
            <div className="mode-controls"><span>Explore the modes</span><div><button type="button" onClick={() => setActiveMode((activeMode - 1 + siteContent.gameModes.length) % siteContent.gameModes.length)} aria-label="Previous game mode"><ArrowLeft size={18} /></button><button type="button" onClick={() => setActiveMode((activeMode + 1) % siteContent.gameModes.length)} aria-label="Next game mode"><ArrowRight size={18} /></button></div></div>
            <div className="mode-selector" aria-label="Choose a game mode">{siteContent.gameModes.map((mode, index) => <button key={mode.label} type="button" aria-pressed={activeMode === index} onClick={() => setActiveMode(index)}><span>0{index + 1}</span>{mode.label}</button>)}</div>
          </div>
        </section>

        <section className="missions-section" aria-labelledby="missions-title"><div className="section-heading"><div><p className="section-kicker">The missions</p><h2 id="missions-title">Three lessons<br />in lunar planning.</h2></div><p className="section-note">Educational scenarios turn a difficult planning question into a decision you can inspect, explain, and revisit.</p></div><div className="mission-grid">{siteContent.missions.map((mission, index) => <article className="mission-card" key={mission.title}><span className="card-index">0{index + 1}</span><div className="mission-visual"><img src={mission.image} alt={mission.imageAlt} /></div><p className="section-kicker">{mission.title}</p><h3>{mission.subtitle}</h3><p>{mission.body}</p></article>)}</div><p className="placeholder-note mission-note">These are educational scenarios. Their objectives are training rules inside the game, not requirements for real NASA hardware or mission certification.</p></section>

        <section id="evidence" className="evidence-section" aria-labelledby="evidence-title"><div className="evidence-header"><div><p className="section-kicker">{siteContent.evidence.kicker}</p><h2 id="evidence-title">{siteContent.evidence.title}</h2></div><Satellite size={42} strokeWidth={1.1} aria-hidden="true" /></div><div className="evidence-columns"><div><h3>What Moonward can show</h3><ul>{siteContent.evidence.canShow.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul></div><div className="limits-card"><span>Known limits</span><p>{siteContent.evidence.cannotClaim}</p><strong>Showing “unknown” is part of the design.</strong></div></div></section>

        <section id="documentation" className="documents-section" aria-labelledby="documents-title"><div className="section-heading"><div><p className="section-kicker">Documentation</p><h2 id="documents-title">See the plan<br />behind the play.</h2></div><p className="section-note">Start with the browser build, then inspect the brief, validation notes, game design, and supporting sources.</p></div><div className="document-grid">{siteContent.documents.map((document) => <article className="document-card" key={document.index} id={`document-${document.index}`}><span className="card-index">{document.index}</span><div className="card-art" aria-hidden="true"><span className="planet-dot" /><span className="card-line" /></div><h3>{document.title}</h3><p>{document.description}</p><div className="card-footer"><span>{document.format}</span><a className="download-button" href={document.href} target={document.href.startsWith('https://') ? '_blank' : undefined} rel={document.href.startsWith('https://') ? 'noopener noreferrer' : undefined} aria-label={`${document.action}: ${document.title}`}>{document.href.startsWith('https://') ? <ExternalLink size={14} /> : <ArrowUpRight size={14} />}</a></div><a className="card-action" href={document.href} target={document.href.startsWith('https://') ? '_blank' : undefined} rel={document.href.startsWith('https://') ? 'noopener noreferrer' : undefined}>{document.action} <ArrowUpRight size={13} /></a></article>)}</div></section>

        <section id="credits" className="credits-section" aria-labelledby="credits-title"><div className="credits-copy"><p className="section-kicker">Credits</p><h2 id="credits-title">Moonward</h2><p>{siteContent.credits.note}</p><p>{siteContent.credits.data}</p><p>{siteContent.credits.technology}</p></div><div className="credits-links">{siteContent.credits.links.map((link) => <a className="contact-link" href={link.href} key={link.label} target={link.href.startsWith('https://') ? '_blank' : undefined} rel={link.href.startsWith('https://') ? 'noopener noreferrer' : undefined}><FileText size={17} /><span>{link.label}</span><ExternalLink size={14} /></a>)}</div></section>

        <footer className="site-footer"><div><a className="brand" href="#top"><SpaceMark /><span>{siteContent.project.name}</span></a><p>{siteContent.footer.note}</p></div><div className="footer-meta"><span>{siteContent.project.challenge}</span><span>{siteContent.credits.teamName}</span></div><div className="footer-end"><span>© 2026</span><a href="#top">Back to top ↑</a></div></footer>
      </div>
    </main>
  )
}

export default App
