export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="container">
        <div className="hero-content">
          <h1>Transform Your Business with Cutting-Edge Technology</h1>
          <p className="subtitle">
            We deliver innovative solutions that drive growth, improve efficiency,
            and accelerate your digital transformation journey.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" aria-label="Start Your Project">
              Start Your Project
            </button>
            <button className="btn btn-secondary" aria-label="Learn More">
              Learn More
            </button>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="gradient-box gradient-1"></div>
          <div className="gradient-box gradient-2"></div>
        </div>
      </div>
    </section>
  )
}
