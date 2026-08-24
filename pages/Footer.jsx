import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Grille Principale du Footer */}
        <div className="footer-grid">
          
          {/* Colonne 1 : Présentation & Réseaux */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <img src="/img/logo.jpeg" alt="Logo Centre Sèwèdo" />
            </div>
            <p className="footer-description">
              Le Centre Sèwèdo est la preuve vivante de l'efficacité d'une initiative volontariste 
              et solidaire menée avec passion, intégrité et compétence. Un message porteur d'espoir pour l'avenir.
            </p>
            <div className="social-links">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link"><i className="fab fa-facebook-f"></i></a>
  <a href="https://wa.me/22952130218" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-link"><i className="fab fa-whatsapp"></i></a>
  <a href="https://t.me/+22952130218" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="social-link"><i className="fab fa-telegram-plane"></i></a>
  <a href="https://www.tiktok.com/@centresewedo" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="social-link"><i className="fab fa-tiktok"></i></a>
  <a href="mailto:centresewedo@gmail.com" aria-label="Email" className="social-link"><i className="fas fa-envelope"></i></a>
</div>
          </div>

          {/* Colonne 2 : Navigation */}
          <div className="footer-col">
            <h4 className="footer-title">NAVIGATION</h4>
            <ul className="footer-links">
              <li><a href="#hero">Accueil</a></li>
              <li><a href="#about">Qui sommes-nous</a></li>
              <li><a href="#timeline">Programmes</a></li>
              <li><a href="#services">Domaines d'action</a></li>
              <li><a href="#impact">Notre Impact</a></li>
            </ul>
          </div>

          {/* Colonne 3 : L'Organisation */}
          <div className="footer-col">
            <h4 className="footer-title">L'ORGANISATION</h4>
            <ul className="footer-links">
              <li><a href="#about">À propos du Centre</a></li>
              <li><a href="#contact">Rejoindre le Centre</a></li>
            </ul>
          </div>

          {/* Colonne 4 : Contact */}
          <div className="footer-col">
            <h4 className="footer-title">CONTACT</h4>
            <ul className="footer-contact">
              <li>
                <i className="far fa-envelope"></i>
                <span>centresewedo@gmail.com</span>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Cotonou, Bénin</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Ligne de Séparation */}
        <div className="footer-divider"></div>

        {/* Copyright & Crédit */}
        <div className="footer-bottom">
          <p className="copyright">
            © 2026 Centre Sèwèdo. Tous droits réservés. | Site conçu par{' '}
            <a 
              href="https://emerussoglo.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="developer-link"
            >
              Emérus SOGLO
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}