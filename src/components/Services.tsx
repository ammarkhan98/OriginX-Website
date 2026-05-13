type Service = {
  icon: string
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: '🚀',
    title: 'Custom Development',
    description:
      'Full-stack applications built to scale. From MVP to enterprise systems, we build software that drives your competitive advantage.',
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    description:
      'AWS, Azure, GCP expertise. Cost-optimized infrastructure, seamless migrations, and 24/7 managed services.',
  },
  {
    icon: '🔒',
    title: 'Security & Compliance',
    description:
      'HIPAA, SOC2, GDPR compliant. Proactive threat detection, security audits, and regulatory compliance frameworks.',
  },
  {
    icon: '📊',
    title: 'Data & Analytics',
    description:
      'Turn data into competitive advantage. BI dashboards, predictive analytics, and data-driven decision systems.',
  },
  {
    icon: '🤖',
    title: 'AI & Automation',
    description:
      'Intelligent automation. ML models, process automation, and AI-powered customer experiences tailored to your business.',
  },
  {
    icon: '🛠️',
    title: 'Strategic Consulting',
    description:
      'Expert guidance on technology roadmaps, digital transformation strategies, and technical architecture decisions.',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p className="subtitle">
            Purpose-built solutions that solve real business problems and accelerate growth
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="/pricing" className="service-link">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
