import MobileNav from './MobileNav';

export default function Header() {
  return (
    <header className="header" role="banner">
      <div className="container">
        <div className="header-content">
          <div className="logo" aria-label="OriginX Home">
            OriginX
          </div>
          <nav className="nav" aria-label="Main navigation">
            <a href="#services" className="nav-link">
              Services
            </a>
            <a href="#features" className="nav-link">
              Why Us
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
            <button className="btn btn-primary" aria-label="Get Started">
              Get Started
            </button>
          </nav>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

