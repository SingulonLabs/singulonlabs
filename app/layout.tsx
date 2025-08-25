export const metadata = {
  title: 'Singulon Labs LLC — AI Singularity Token',
  description: 'Official R&D entity behind $SING.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="container">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/orb-logo.png" alt="Singulon Logo" width="40" height="40" />
            <strong style={{ marginLeft: '10px' }}>Singulon Labs LLC</strong>
          </div>
          <nav>
            <a href="#whitepaper">Whitepaper</a>
          </nav>
        </header>

        <main className="container">{children}</main>

        <footer className="container">
          <div>© {new Date().getFullYear()} Singulon Labs LLC</div>
          <div>
            <a href="#">Terms</a> • <a href="#">Privacy</a>
          </div>
        </footer>
      </body>
    </html>
  )
}


