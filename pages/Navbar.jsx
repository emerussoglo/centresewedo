import React, { useState } from 'react';
import "../src/style.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À propos', href: '#about' },
    { name: 'Domaines', href: '#services' },
    { name: 'Programmes', href: '#timeline' },
    { name: 'Impact', href: '#impact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* LOGO */}
        <a href="#hero" className="navbar-logo">
          <img src="/img/logo.jpeg" alt="Logo Centre Sèwèdo" className="logo-img" />
          <span>Sèwèdo</span>
        </a>

        {/* Liens du MILIEU (Desktop & Mobile Panel) */}
        <ul className={`nav-links-center ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
          
          <li className="mobile-only-contact">
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="nav-contact-btn">
              Contact
            </a>
          </li>
        </ul> 

        {/* Bouton CONTACT (Desktop) */}
        <div className="nav-right-desktop">
          <a href="#contact" className="nav-contact-btn">
            Contact
          </a>
        </div>

        {/* Menu Hamburger / Fermeture */}
        <button 
          className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle Navigation"
        >
          <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;