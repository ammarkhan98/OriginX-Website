'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';

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
      'Tailored solutions designed to meet your unique business requirements and objectives.',
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    description:
      'Scalable cloud infrastructure and migration services for modern enterprises.',
  },
  {
    icon: '🔒',
    title: 'Security & Compliance',
    description:
      'Enterprise-grade security solutions ensuring data protection and regulatory compliance.',
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    description:
      'Transform raw data into actionable insights with advanced analytics platforms.',
  },
  {
    icon: '🤖',
    title: 'AI & Automation',
    description:
      'Leverage artificial intelligence to automate processes and drive innovation.',
  },
  {
    icon: '🛠️',
    title: 'Consulting',
    description:
      'Strategic technology consulting to guide your digital transformation strategy.',
  },
]

export default function Services() {
  const ref = useScrollAnimation();

  return (
    <section className="services" id="services" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p className="subtitle">
            Comprehensive solutions to accelerate your business growth
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#" className="service-link">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

