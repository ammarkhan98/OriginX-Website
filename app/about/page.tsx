type TeamMember = {
  name: string
  title: string
  bio: string
  emoji: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alex Morgan',
    title: 'Founder & CTO',
    bio: 'Tech visionary with 15+ years building enterprise solutions. Stanford CS grad, AWS Solutions Architect.',
    emoji: '👨‍💼',
  },
  {
    name: 'Sarah Chen',
    title: 'VP of Engineering',
    bio: 'Led engineering at Fortune 500 tech companies. Expert in scaling teams and systems to serve millions of users.',
    emoji: '👩‍💻',
  },
  {
    name: 'Marcus Williams',
    title: 'VP of Client Success',
    bio: 'Dedicated to ensuring our clients achieve their goals. 12+ years in professional services and consulting.',
    emoji: '👨‍💼',
  },
  {
    name: 'Elena Rodriguez',
    title: 'Lead Security Engineer',
    bio: 'Security expert with CISSP certification. Architected security strategies for regulated industries.',
    emoji: '👩‍🔬',
  },
]

export default function About() {
  return (
    <main className="app">
      {/* About Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About OriginX</h1>
          <p className="subtitle" style={{ fontSize: '20px', marginBottom: '0' }}>
            Pioneering digital transformation for enterprises worldwide
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <h2>Our Story</h2>
            <p>
              Founded in 2012, OriginX emerged from a simple belief: technology should empower businesses, 
              not complicate them. What started as a small team of passionate engineers has grown into a 
              trusted partner for 500+ companies seeking digital transformation.
            </p>
            <p>
              We've navigated every technology wave—from cloud migration to AI adoption. Through our journey, 
              we've learned that successful transformation isn't about the latest tools; it's about 
              understanding your business, your challenges, and delivering solutions that drive real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="about-section" style={{ background: '#0a0e27' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
            <div className="value-card">
              <h3>🎯 Our Mission</h3>
              <p>
                Empower businesses with transformative technology solutions that drive growth, 
                improve efficiency, and unlock competitive advantage.
              </p>
            </div>
            <div className="value-card">
              <h3>💡 Our Vision</h3>
              <p>
                A world where technology is accessible, powerful, and aligned with business objectives. 
                Where innovation isn't a luxury—it's the standard.
              </p>
            </div>
            <div className="value-card">
              <h3>🤝 Our Values</h3>
              <p>
                Excellence, integrity, partnership, and continuous innovation. We measure success 
                by the impact we create for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>Meet Our Leadership</h2>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.name} className="team-card">
                <div className="team-avatar">{member.emoji}</div>
                <h3>{member.name}</h3>
                <div className="team-title">{member.title}</div>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-section" style={{ background: '#0a0e27' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', textAlign: 'center' }}>
            <div>
              <div className="stat-large">500+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div>
              <div className="stat-large">50+</div>
              <div className="stat-label">Team Members</div>
            </div>
            <div>
              <div className="stat-large">$500M+</div>
              <div className="stat-label">Client Revenue Generated</div>
            </div>
            <div>
              <div className="stat-large">98%</div>
              <div className="stat-label">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to Partner with OriginX?</h2>
          <p>Let's discuss how we can help accelerate your digital transformation.</p>
          <a href="/#contact" className="btn btn-primary">
            Schedule Consultation
          </a>
        </div>
      </section>
    </main>
  )
}
