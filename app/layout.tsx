import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/Navbar'

export const metadata: Metadata = {
  title: 'Solia Documentation',
  description: 'Non-custodial escrow and settlement infrastructure for global payments.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased [font-family:'Sora','Avenir_Next','Segoe_UI',ui-sans-serif,system-ui]">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(60rem_35rem_at_20%_-10%,rgba(34,211,238,0.15),transparent),radial-gradient(45rem_30rem_at_85%_10%,rgba(56,189,248,0.1),transparent)]" />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
