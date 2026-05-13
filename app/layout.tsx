import type { Metadata, Viewport } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'OriginX - Enterprise Tech Solutions | Digital Transformation',
  description:
    'OriginX delivers cutting-edge technology solutions for enterprise transformation. Expert services in cloud, AI, security, and custom development. 500+ successful projects.',
  keywords: [
    'technology consulting',
    'cloud solutions',
    'AI transformation',
    'software development',
    'enterprise digital transformation',
    'tech services',
  ],
  authors: [{ name: 'OriginX Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://originx.tech',
    title: 'OriginX - Enterprise Tech Solutions',
    description:
      'Transform your business with cutting-edge technology solutions.',
    images: [
      {
        url: 'https://originx.tech/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OriginX - Enterprise Technology Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OriginX - Enterprise Tech Solutions',
    description: 'Transform your business with cutting-edge technology.',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://originx.tech',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'OriginX',
    description: 'Enterprise technology solutions and digital transformation services',
    url: 'https://originx.tech',
    logo: 'https://originx.tech/logo.png',
    contact: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'info@originx.tech',
    },
    sameAs: [
      'https://linkedin.com/company/originx',
      'https://twitter.com/originxtech',
    ],
  }

  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
