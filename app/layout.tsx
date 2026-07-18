import type { Metadata } from 'next'
import { Archivo, Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-archivo',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
})

export const metadata: Metadata = {
  title: 'marginlift — The market sets your price. Operations set your profit.',
  description: 'AI agents that work behind your existing tools to improve margin — no new software, no new logins, no rip-and-replace.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable} ${ibmPlexMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
