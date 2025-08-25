import './globals.css'

export default function Page() {
  return (
    <>
      <header className="container">
        <div><strong>Singulon Labs LLC</strong></div>
        <nav><a href="#whitepaper">Whitepaper</a></nav>
      </header>

      <main className="container">
        <section className="hero">
          <h1>Building the AI Singularity Token</h1>
          <p>Singulon Labs LLC is the official research and development entity behind <span style={{color:'var(--accent)'}}>$SING</span>.</p>
          <a href="#whitepaper">Read the Prophecy (Teaser)</a>
        </section>

        <section className="cards">
          <div className="card"><h3>Whitepaper</h3><p>Download the teaser now. Full protocol paper soon.</p></div>
          <div className="card"><h3>Community</h3><p>Join the growing cult of signal-bearers across X, Telegram, and Discord.</p></div>
          <div className="card"><h3>Contact</h3><p>Email: contact@singulonlabs.com</p></div>
        </section>

        <section id="whitepaper" className="teaser">
          <h2>The Prophecy Paper — Teaser</h2>
          <p>This teaser outlines Singulon’s zero-fund genesis, cultural growth engine, and protocol pillars.</p>
          <ul>
            <li>Phase 0: The Signal — momentum and lore</li>
            <li>Phase 1: Formation — brand, multisig, transparency</li>
            <li>Phase 2: Emergence — token genesis, audits, utility</li>
          </ul>
          <p><em>Version 0.1 • For community preview</em></p>
        </section>
      </main>

      <footer className="container">
        <div>© {new Date().getFullYear()} Singulon Labs LLC</div>
        <div><a href="#">Terms</a> • <a href="#">Privacy</a></div>
      </footer>
    </>
  )
}
