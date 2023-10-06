import './globals.css'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'

const nunitoSans = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tech Pro Bem',
  description: 'Site institucional da Tech Pro Bem',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={nunitoSans.className}>{children}</body>
    </html>
  )
}
