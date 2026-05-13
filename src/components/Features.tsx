type FeatureMetric = {
  number: string
  label: string
}

const features: FeatureMetric[] = [
  {
    number: '500+',
    label: 'Projects Delivered',
  },
  {
    number: '50+',
    label: 'Expert Engineers',
  },
  {
    number: '98%',
    label: 'Client Satisfaction',
  },
  {
    number: '12+',
    label: 'Years of Excellence',
  },
]

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-intro">
          <h2>Why Choose OriginX</h2>
          <p className="subtitle">
            We combine technical expertise with business acumen to deliver
            exceptional results that matter.
          </p>
        </div>

        <div className="stats-grid">
          {features.map((feature) => {
            const numPart = feature.number.slice(0, -1);
            const symbolPart = feature.number.slice(-1);
            return (
              <div key={feature.label} className="stat-item">
                <div className="stat-number">
                  <span style={{ color: '#ffffff' }}>{numPart}</span>
                  <span style={{ color: '#ff8c00' }}>{symbolPart}</span>
                </div>
                <div className="stat-label">{feature.label}</div>
              </div>
            );
          })}
        </div>

        <div className="features-grid">
          <div className="feature-item">
            <h3>Proven Track Record</h3>
            <p>
              A decade+ of delivering enterprise-grade solutions across finance, 
              healthcare, retail, and tech sectors. Your success is our specialty.
            </p>
          </div>
          <div className="feature-item">
            <h3>Agile & Responsive</h3>
            <p>
              Rapid development cycles, frequent releases, and continuous collaboration. 
              Your feedback drives our roadmap every sprint.
            </p>
          </div>
          <div className="feature-item">
            <h3>Always Available</h3>
            <p>
              24/7 monitoring, on-call support, and SLA-backed uptime guarantees. 
              Your business never sleeps; neither do we.
            </p>
          </div>
          <div className="feature-item">
            <h3>Built to Scale</h3>
            <p>
              From startup to unicorn. Our architecture and team scale seamlessly 
              with your growth, from thousands to millions of users.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
