import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About OriginX - Our Story, Mission & Team',
  description:
    'Learn about OriginX, our mission to empower businesses through technology, our team of experts, and our 12+ years of delivering enterprise solutions.',
  keywords: ['about us', 'company culture', 'team', 'leadership', 'technology consulting'],
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
