export const metadata = {
  title: 'Singulon Labs LLC — AI Singularity Token',
  description: 'Official R&D entity behind $SING.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
