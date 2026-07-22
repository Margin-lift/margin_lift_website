import type { Metadata } from 'next'
import { Poppins, Inter, Roboto_Mono } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'marginlift — The market sets your price. Operations set your profit.',
  description:
    'AI agents for margin performance. Vertical agents that find, measure, and automate out the hidden coordination cost inside low-margin, high-volume businesses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${robotoMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
