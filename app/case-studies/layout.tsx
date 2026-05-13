import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies - Real Results from Real Clients',
  description:
    'See how OriginX has helped 500+ companies achieve digital transformation. Real case studies with measurable results across industries.',
  keywords: ['case studies', 'portfolio', 'success stories', 'client results', 'project showcase'],
}

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
