import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - Custom Solutions for Your Business',
  description:
    'Transparent, flexible pricing for consulting, development, and managed services. Custom engagement models tailored to your needs.',
  keywords: ['pricing', 'consulting', 'development services', 'managed services', 'engagement models'],
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
