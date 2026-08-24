import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        {/* En-tête */}
        <div className="section-header">
          <span className="section-subtitle">PARLONS ENSEMBLE</span>
          <h2 className="section-title">Contactez-nous</h2>
          <p className="section-description">
            Une question, une idée de partenariat ou envie de contribuer ? Notre équipe est à votre écoute.
          </p>
        </div>

        <div className="contact-wrapper">
          {/* Colonne Gauche : Carte visuelle avec image */}
          <div className="contact-info-left">
            <div className="contact-image-box">
              <img src="/img/contact-office.jpg" alt="Bureau Centre Sèwèdo" />
              <div className="contact-image-badge">
                <i className="fas fa-heart"></i>
                <span>À votre service</span>
              </div>
            </div>
            <p className="contact-intro-text">
              Que vous soyez un particulier, une association ou une organisation, nous serions ravis d'échanger avec vous. Ensemble, nous pouvons avoir un impact plus fort et plus durable.
            </p>
          </div>

          {/* Colonne Droite : Coordonnées modernes */}
          <div className="contact-details-list">
            
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-item-icon"><i className="fas fa-map-marker-alt"></i></div>
              <div className="contact-item-text">
                <label>ADRESSE</label>
                <span>05 BP 1151 Cotonou, Bénin</span>
              </div>
            </a>

            <a href="tel:+22952130218" className="contact-item">
              <div className="contact-item-icon"><i className="fas fa-phone-alt"></i></div>
              <div className="contact-item-text">
                <label>TÉLÉPHONE</label>
                <span>+229 52 13 02 18 / +229 42 82 02 18</span>
              </div>
            </a>

            <a href="mailto:centresewedo@gmail.com" className="contact-item">
              <div className="contact-item-icon"><i className="fas fa-envelope"></i></div>
              <div className="contact-item-text">
                <label>EMAIL</label>
                <span>centresewedo@gmail.com</span>
              </div>
            </a>

            {/* Bouton WhatsApp CTA */}
            <a href="https://wa.me/22952130218" target="_blank" rel="noopener noreferrer" className="contact-item whatsapp-cta">
              <div className="contact-item-icon"><i className="fab fa-whatsapp"></i></div>
              <div className="contact-item-text">
                <label>DISCUSSION DIRECTE</label>
                <span>Écrivez-nous sur WhatsApp</span>
              </div>
              <i className="fas fa-arrow-right cta-arrow"></i>
            </a>

            {/* Réseaux Sociaux */}
            <div className="contact-socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link"><i className="fab fa-facebook-f"></i></a>
              <a href="https://wa.me/22952130218" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-link"><i className="fab fa-whatsapp"></i></a>
              <a href="https://t.me/+22952130218" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="social-link"><i className="fab fa-telegram-plane"></i></a>
              <a href="https://www.tiktok.com/@centresewedo" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="social-link"><i className="fab fa-tiktok"></i></a>
              <a href="mailto:centresewedo@gmail.com" aria-label="Email" className="social-link"><i className="fas fa-envelope"></i></a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;