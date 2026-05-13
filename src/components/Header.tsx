export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-origin">Origin</span>
            <span className="logo-x">X</span>
          </div>
          <nav className="nav">
            <a href="#services" className="nav-link">
              Services
            </a>
            <a href="#features" className="nav-link">
              Why Us
            </a>
            <a href="#testimonials" className="nav-link">
              Testimonials
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
            <a href="#contact" className="btn btn-primary">
              Get Started
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
