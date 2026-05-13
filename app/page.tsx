import Header from '../src/components/Header.tsx'
import Hero from '../src/components/Hero.tsx'
import Services from '../src/components/Services.tsx'
import Features from '../src/components/Features.tsx'
import Testimonials from '../src/components/Testimonials.tsx'
import CaseStudies from '../src/components/CaseStudies.tsx'
import CTA from '../src/components/CTA.tsx'
import Footer from '../src/components/Footer.tsx'

export default function HomePage() {
  return (
    <main className="app">
      <Header />
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <CaseStudies />
      <CTA />
      <Footer />
    </main>
  )
}
