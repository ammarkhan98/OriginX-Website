'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';

type FeatureMetric = {
  number: string
  label: string
}

const features: FeatureMetric[] = [
  {
    number: '500+',
    label: 'Successful Projects',
  },
  {
    number: '50+',
    label: 'Expert Team Members',
  },
  {
    number: '98%',
    label: 'Client Satisfaction',
  },
  {
    number: '12+',
    label: 'Years in Industry',
  },
]

export default function Features() {
  const ref = useScrollAnimation();

  return (
    <section className="features" id="features" ref={ref}>
      <div className="container">
        <div className="features-intro">
          <h2>Why Choose OriginX</h2>
          <p className="subtitle">
            We combine technical expertise with business acumen to deliver
            exceptional results.
          </p>
        </div>

        <div className="stats-grid">
          {features.map((feature) => (
            <div key={feature.label} className="stat-item">
              <div className="stat-number">{feature.number}</div>
              <div className="stat-label">{feature.label}</div>
            </div>
          ))}
        </div>

        <div className="features-grid">
          <div className="feature-item">
            <h3>Proven Expertise</h3>
            <p>
              Decades of combined experience delivering enterprise-grade solutions
              across industries.
            </p>
          </div>
          <div className="feature-item">
            <h3>Agile Methodology</h3>
            <p>
              Flexible approach ensuring rapid development cycles and continuous
              improvement.
            </p>
          </div>
          <div className="feature-item">
            <h3>24/7 Support</h3>
            <p>
              Dedicated support team available round-the-clock for all your
              technical needs.
            </p>
          </div>
          <div className="feature-item">
            <h3>Scalable Solutions</h3>
            <p>
              Infrastructure and services designed to grow with your business
              needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
