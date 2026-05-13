'use client';

import { useState } from 'react';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={`hamburger ${isOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {isOpen && (
        <nav className="mobile-menu">
          <a href="#services" className="mobile-nav-link" onClick={handleNavClick}>
            Services
          </a>
          <a href="#features" className="mobile-nav-link" onClick={handleNavClick}>
            Why Us
          </a>
          <a href="#contact" className="mobile-nav-link" onClick={handleNavClick}>
            Contact
          </a>
          <button className="btn btn-primary" onClick={handleNavClick}>
            Get Started
          </button>
        </nav>
      )}
    </>
  );
}
