export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>OriginX</h4>
            <p>Transforming businesses through innovative technology solutions.</p>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#services">Custom Development</a>
              </li>
              <li>
                <a href="#services">Cloud Solutions</a>
              </li>
              <li>
                <a href="#services">Consulting</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <p>© {year} OriginX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
