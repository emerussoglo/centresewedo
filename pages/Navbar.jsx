// src/pages/Navbar.jsx
import React, { useState } from 'react';
import "../src/style.css"; // Importation directe du style depuis le dossier parent

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
        
        {/* LOGO avec Icône */}
        <a href="#hero" className="navbar-logo">
          <img 
            src="/img/logo.jpeg" 
            alt="Logo Centre Sèwèdo" 
            className="logo-img"
          />
          <span>Sèwèdo</span>
        </a>

        {/* Liens du MILIEU (Desktop) */}
        <ul className={`nav-links-center ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
          
          {/* Bouton Contact spécifique au menu Mobile */}
          <li className="mobile-only-contact">
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="nav-contact-btn">
           Contact
            </a>
          </li>
        </ul>

        {/* Bouton CONTACT à DROITE (Desktop) */}
        <div className="nav-right-desktop">
          <a href="#contact" className="nav-contact-btn">
             Contact
          </a>
        </div>

        {/* Menu Hamburger */}
        <div className="menu-toggle" onClick={toggleMobileMenu}>
          <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;