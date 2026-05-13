import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OriginX - Professional Tech Solutions',
  description:
    'OriginX delivers professional technology services including cloud, security, software engineering, and AI transformation.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
