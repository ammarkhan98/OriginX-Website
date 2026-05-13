'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';

type CaseStudy = {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  icon: string;
};

const caseStudies: CaseStudy[] = [
  {
    title: 'E-Commerce Platform Migration',
    industry: 'Retail',
    challenge: 'Legacy monolith system causing scalability issues during peak seasons',
    solution:
      'Migrated to microservices architecture with cloud-native deployment on AWS',
    result: '300% increase in transaction capacity, 60% reduction in infrastructure costs',
    icon: '📦',
  },
  {
    title: 'AI-Powered Analytics Platform',
    industry: 'Financial Services',
    challenge: 'Manual data processing taking weeks to generate insights',
    solution:
      'Implemented machine learning pipeline with real-time data processing',
    result: 'Reduced analysis time from weeks to hours, enabling data-driven decisions',
    icon: '🤖',
  },
  {
    title: 'Security Infrastructure Overhaul',
    industry: 'Healthcare',
    challenge: 'Compliance gaps and security vulnerabilities',
    solution:
      'Comprehensive security audit and implementation of enterprise-grade security controls',
    result: 'Achieved HIPAA and SOC 2 compliance, zero security incidents',
    icon: '🔒',
  },
];

export default function CaseStudies() {
  const ref = useScrollAnimation();

  return (
    <section className="case-studies" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2>Case Studies</h2>
          <p className="subtitle">
            Real-world examples of transformation and success
          </p>
        </div>
        <div className="case-studies-grid">
          {caseStudies.map((study, index) => (
            <div key={index} className="case-study-card">
              <div className="case-study-icon">{study.icon}</div>
              <h3>{study.title}</h3>
              <p className="case-study-industry">Industry: {study.industry}</p>
              
              <div className="case-study-section">
                <h4>Challenge</h4>
                <p>{study.challenge}</p>
              </div>
              
              <div className="case-study-section">
                <h4>Solution</h4>
                <p>{study.solution}</p>
              </div>
              
              <div className="case-study-section highlight">
                <h4>Result</h4>
                <p>{study.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
