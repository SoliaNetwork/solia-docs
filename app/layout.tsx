import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/Navbar'

/* Using system fonts (Inter-like fallback) - avoids external Google Fonts fetch */

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
    <html lang="en" className="dark">
      <body className="font-['Inter',ui-sans-serif,system-ui,-apple-system,san-serif] bg-gray-900 text-gray-100 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}

