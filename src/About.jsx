import React from 'react';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        
        {/* En-tête */}
        <div className="about-header">
          <span className="section-subtitle">QUI SOMMES-NOUS</span>
          <h2 className="section-title">À propos du Centre Sèwèdo</h2>
          <p className="about-text">
            Le Centre Sèwèdo est un espace dédié au développement global et holistique des 
            enfants, des jeunes et des familles. Nous œuvrons au quotidien pour renforcer les 
            compétences, favoriser l’autonomie économique et promouvoir le bien-être dans 
            toutes ses dimensions.
          </p>
        </div>

        {/* Image Principale */}
        <div className="about-image-container">
          <img 
            src="/img/about-img.jpg" 
            alt="Équipe et bénéficiaires du centre" 
            className="about-img"
          />
        </div>

        {/* Grille des Cartes (Vision, Mission, Valeurs) */}
        <div className="about-cards">
          
          {/* Carte Vision */}
          <div className="about-card">
            <div className="card-icon-box">
              <i className="fas fa-eye"></i>
            </div>
            <h3>Notre Vision</h3>
            <p>
              Un monde où chaque individu — enfant, jeune ou adulte — accède à un bien-être physique, 
              mental et social, dans un environnement de paix et de dignité.
            </p>
          </div>

          {/* Carte Mission */}
          <div className="about-card">
            <div className="card-icon-box">
              <i className="fas fa-bullseye"></i>
            </div>
            <h3>Notre Mission</h3>
            <p>
              Accompagner les communautés à travers des programmes concrets en éducation, santé, 
              coaching et agronomie pour bâtir un développement humain durable et inclusif.
            </p>
          </div>

          {/* Carte Valeurs */}
          <div className="about-card">
            <div className="card-icon-box">
              <i className="fas fa-star"></i>
            </div>
            <h3>Nos Valeurs</h3>
            <p>
              Intégrité, solidarité, excellence et respect de la dignité humaine guident chacune de nos 
              actions. Nous croyons en la force des valeurs culturelles et spirituelles pour transformer les vies.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;