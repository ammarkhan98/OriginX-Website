import Image from 'next/image'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
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
          <div className="header-logo">
            <Image
              src="/logo.png"
              alt="OriginX Logo"
              width={100}
              height={60}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
