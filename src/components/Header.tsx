import MobileNav from './MobileNav';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">OriginX</div>
          <nav className="nav">
            <a href="#services" className="nav-link">
              Services
            </a>
            <a href="#features" className="nav-link">
              Why Us
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
            <button className="btn btn-primary">Get Started</button>
          </nav>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

