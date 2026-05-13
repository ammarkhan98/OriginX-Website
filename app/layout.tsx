import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OriginX - Professional Tech Solutions | Cloud, Security & AI',
  description:
    'OriginX delivers professional technology services including custom development, cloud solutions, security, data analytics, AI automation, and strategic consulting for enterprises.',
  keywords: [
    'technology consulting',
    'cloud solutions',
    'cybersecurity',
    'software development',
    'AI automation',
    'data analytics',
    'digital transformation',
    'enterprise IT',
  ],
  authors: [{ name: 'OriginX' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://originx.tech',
    title: 'OriginX - Professional Tech Solutions',
    description:
      'Transform your business with cutting-edge technology solutions from OriginX',
    siteName: 'OriginX',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OriginX - Professional Tech Solutions',
    description: 'Transform your business with cutting-edge technology',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="canonical" href="https://originx.tech" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'OriginX',
              url: 'https://originx.tech',
              logo: 'https://originx.tech/logo.png',
              description: 'Professional technology consulting and software solutions',
              sameAs: [
                'https://twitter.com/originx',
                'https://linkedin.com/company/originx',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                telephone: '+1-XXX-XXX-XXXX',
                email: 'info@originx.tech',
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Tech Street',
                addressLocality: 'San Francisco',
                addressRegion: 'CA',
                postalCode: '94102',
                addressCountry: 'US',
              },
              areaServed: 'US',
              knowsAbout: [
                'Cloud Computing',
                'Cybersecurity',
                'Software Development',
                'AI and Machine Learning',
                'Data Analytics',
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
