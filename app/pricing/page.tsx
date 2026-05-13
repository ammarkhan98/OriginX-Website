type PricingTier = {
  name: string
  subtitle: string
  price: string
  description: string
  features: string[]
  isPopular: boolean
  cta: string
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Consulting',
    subtitle: 'Strategy & Planning',
    price: 'Custom',
    description: 'Perfect for businesses starting their digital transformation journey',
    features: [
      'Technology Roadmap Development',
      'Architecture Review & Recommendations',
      'Cost Optimization Analysis',
      '4-week engagement',
      'Weekly strategy sessions',
      'Detailed implementation report',
    ],
    isPopular: false,
    cta: 'Get Quote',
  },
  {
    name: 'Development',
    subtitle: 'Build & Scale',
    price: 'Custom',
    description: 'Comprehensive development services for any project size',
    features: [
      'Dedicated development team',
      'Agile sprints & reporting',
      'Code review & testing',
      'Flexible engagement models',
      '24/7 technical support',
      'Performance optimization',
      'Infrastructure setup & maintenance',
    ],
    isPopular: true,
    cta: 'Start Project',
  },
  {
    name: 'Managed Services',
    subtitle: 'Operations & Support',
    price: 'Custom',
    description: 'Ongoing support to keep your systems running smoothly',
    features: [
      'Proactive monitoring 24/7',
      'Security & compliance management',
      'Performance optimization',
      'Regular updates & patches',
      'Disaster recovery planning',
      'SLA-backed uptime guarantee',
      'Dedicated support team',
    ],
    isPopular: false,
    cta: 'Learn More',
  },
]

export default function Pricing() {
  return (
    <main className="app">
      {/* Pricing Hero */}
      <section className="pricing-hero">
        <div className="container">
          <h1>Transparent, Flexible Pricing</h1>
          <p className="subtitle" style={{ fontSize: '20px', marginBottom: '0' }}>
            Whether you need consulting, development, or managed services—we have the right engagement model for you
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="pricing-section">
        <div className="container">
          <div className="pricing-grid">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`pricing-card ${tier.isPopular ? 'popular' : ''}`}
              >
                {tier.isPopular && <div className="popular-badge">Most Popular</div>}
                <h3>{tier.name}</h3>
                <div className="pricing-subtitle">{tier.subtitle}</div>
                <div className="pricing-price">{tier.price}</div>
                <p className="pricing-description">{tier.description}</p>
                <ul className="pricing-features">
                  {tier.features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
                <button className="btn btn-primary" style={{ width: '100%' }}>
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Custom Pricing */}
      <section className="pricing-section" style={{ background: '#0a0e27' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Why Custom Pricing?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
            <div className="pricing-reason">
              <h4>🎯 Tailored to Your Needs</h4>
              <p>
                Every business is unique. We design engagement models that align with your specific 
                goals, timeline, and budget.
              </p>
            </div>
            <div className="pricing-reason">
              <h4>💰 No Hidden Costs</h4>
              <p>
                Transparent pricing with clear deliverables. We'll give you a detailed quote before 
                any work begins.
              </p>
            </div>
            <div className="pricing-reason">
              <h4>🔄 Flexible Models</h4>
              <p>
                Fixed-price projects, time-and-materials, dedicated teams, or retainer models. 
                Choose what works best for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pricing-section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Do you offer discounts for long-term engagements?</h4>
              <p>
                Yes! We reward long-term partnerships with volume discounts and dedicated pricing. 
                Let's discuss your timeline to find the best rate.
              </p>
            </div>
            <div className="faq-item">
              <h4>What's included in Managed Services?</h4>
              <p>
                Proactive monitoring, security updates, performance optimization, disaster recovery planning, 
                and dedicated support with SLA guarantees.
              </p>
            </div>
            <div className="faq-item">
              <h4>Can I switch plans later?</h4>
              <p>
                Absolutely. Your needs may evolve, and we're flexible enough to scale up or adjust your 
                engagement as your business grows.
              </p>
            </div>
            <div className="faq-item">
              <h4>Do you offer payment plans?</h4>
              <p>
                Yes. We typically structure payments in milestone-based invoices for projects or monthly 
                billing for managed services. We'll discuss terms during the consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pricing-cta">
        <div className="container">
          <h2>Let's Find the Right Plan for You</h2>
          <p>Schedule a consultation to discuss your needs and get a custom quote.</p>
          <a href="/#contact" className="btn btn-primary">
            Get Started
          </a>
        </div>
      </section>
    </main>
  )
}
