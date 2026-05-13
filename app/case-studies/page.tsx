type CaseStudy = {
  id: string
  title: string
  company: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  technologies: string[]
  emoji: string
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Cloud Migration & 40% Cost Reduction',
    company: 'Global Finance Corp',
    industry: 'Financial Services',
    challenge:
      'Legacy on-premises infrastructure was costly, inflexible, and difficult to scale. Monthly bills exceeded $500K.',
    solution:
      'Comprehensive AWS migration with database optimization, containerization, and automated scaling. We implemented cost monitoring and rightsizing strategies.',
    results: ['40% reduction in infrastructure costs', 'Improved application performance by 3x', 'Reduced deployment time from weeks to hours', 'Global redundancy & 99.99% uptime achieved'],
    technologies: ['AWS', 'Kubernetes', 'Docker', 'RDS', 'Lambda'],
    emoji: '💰',
  },
  {
    id: '2',
    title: 'AI-Powered Customer Experience Platform',
    company: 'E-Commerce Innovator',
    industry: 'Retail/E-Commerce',
    challenge:
      'High cart abandonment rate (32%) and inability to personalize customer journeys at scale. Competitors were gaining market share.',
    solution:
      'Built ML-powered recommendation engine and predictive analytics dashboard. Integrated with existing systems to provide real-time personalization.',
    results: ['Reduced cart abandonment by 28%', 'Increased average order value by 18%', '15% uplift in customer retention', 'ROI achieved in 6 months'],
    technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'BigQuery'],
    emoji: '🤖',
  },
  {
    id: '3',
    title: 'Enterprise Security & Compliance Framework',
    company: 'HealthTech Solutions',
    industry: 'Healthcare',
    challenge:
      'HIPAA compliance gaps, security vulnerabilities, and complex audit processes. Regulatory risk was threatening business growth.',
    solution:
      'Implemented comprehensive security framework, automated compliance monitoring, and security awareness program. Built audit-ready infrastructure.',
    results: ['Achieved HIPAA compliance certification', 'Reduced security incidents by 95%', 'Automated audit process (previously 3 months → 1 week)', 'Zero compliance violations in 3 years'],
    technologies: ['AWS', 'Terraform', 'Vault', 'Prometheus', 'Falco'],
    emoji: '🔒',
  },
  {
    id: '4',
    title: 'Custom Platform for 10M+ Daily Users',
    company: 'Social Media Platform',
    industry: 'Technology/Social',
    challenge:
      'Rapid growth led to scaling challenges. System couldn\'t handle peak loads, causing outages and poor user experience.',
    solution:
      'Redesigned architecture for horizontal scaling. Implemented real-time data processing, caching strategies, and global CDN.',
    results: ['Handled 50x traffic growth without outages', '99.95% uptime during peak usage', '50% reduction in latency', 'Supported $50M Series B fundraising'],
    technologies: ['Go', 'Kafka', 'Cassandra', 'Nginx', 'Redis'],
    emoji: '📈',
  },
]

export default function CaseStudies() {
  return (
    <main className="app">
      {/* Hero Section */}
      <section className="case-studies-hero">
        <div className="container">
          <h1>Our Work Speaks</h1>
          <p className="subtitle" style={{ fontSize: '20px', marginBottom: '0' }}>
            Real results from real clients across industries
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="case-studies-section">
        <div className="container">
          <div className="case-studies-grid">
            {caseStudies.map((study) => (
              <div key={study.id} className="case-study-card">
                <div className="case-study-header">
                  <div className="case-study-emoji">{study.emoji}</div>
                  <div>
                    <h3>{study.title}</h3>
                    <div className="case-study-meta">
                      <span className="company">{study.company}</span>
                      <span className="industry">{study.industry}</span>
                    </div>
                  </div>
                </div>

                <div className="case-study-content">
                  <div className="case-study-section-box">
                    <h4>Challenge</h4>
                    <p>{study.challenge}</p>
                  </div>

                  <div className="case-study-section-box">
                    <h4>Solution</h4>
                    <p>{study.solution}</p>
                  </div>

                  <div className="case-study-section-box">
                    <h4>Results</h4>
                    <ul className="results-list">
                      {study.results.map((result, idx) => (
                        <li key={idx}>✓ {result}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="case-study-technologies">
                    <h4>Technologies Used</h4>
                    <div className="tech-tags">
                      {study.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <a href="/#contact" className="btn btn-secondary" style={{ width: '100%' }}>
                  Learn How We Can Help You
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="case-studies-section" style={{ background: '#0a0e27' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>Industries We Serve</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', textAlign: 'center' }}>
            {['Financial Services', 'Healthcare', 'E-Commerce', 'Technology', 'Manufacturing', 'Education'].map(
              (industry) => (
                <div key={industry}>
                  <div style={{ fontSize: '40px', marginBottom: '12px' }}>📊</div>
                  <div style={{ color: '#e2e8f0', fontWeight: '600' }}>{industry}</div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="case-studies-cta">
        <div className="container">
          <h2>Ready to Create Your Success Story?</h2>
          <p>Let's discuss how OriginX can help you achieve breakthrough results.</p>
          <a href="/#contact" className="btn btn-primary">
            Schedule Consultation
          </a>
        </div>
      </section>
    </main>
  )
}
