import React from 'react';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        
        <div className="about-header">
          <span className="section-subtitle">À PROPOS DE NOUS</span>
          <h2 className="section-title">Le Centre Sèwèdo pour le Bien-Être Humain</h2>
          <p className="about-text">
            Implanté au Bénin sur un site de 10 hectares, le Centre Sèwèdo est une initiative intégrée et innovante qui vise à améliorer durablement les conditions de vie des enfants, des jeunes, des femmes et des familles. Notre conviction fondamentale : le développement humain authentique naît de l'intérieur, par l'éducation, la santé, l'équilibre psychologique et la reconnexion aux valeurs africaines.
          </p>
        </div>

        <div className="about-image-container">
          <img 
            src="/img/about-img.jpg" 
            alt="Écosystème du Centre Sèwèdo" 
            className="about-img"
          />
        </div>

        <div className="about-cards">
          
          <div className="about-card">
            <div className="card-icon-box">
              <i className="fas fa-eye"></i>
            </div>
            <h3>Notre Vision</h3>
            <p>
              Construire une société de paix, d'équilibre et de dignité où chaque individu vit en harmonie avec lui-même, avec les autres et avec son environnement naturel.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon-box">
              <i className="fas fa-bullseye"></i>
            </div>
            <h3>Notre Mission</h3>
            <p>
              Accompagner les populations à travers des services intégrés valorisant les savoirs traditionnels africains, en créant un espace de ressourcement, de formation et d'activité économique durable.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon-box">
              <i className="fas fa-heart"></i>
            </div>
            <h3>Slogan & Valeurs</h3>
            <p>
              <strong>"Bâtir l'humain, cultiver l'avenir."</strong> Ancré dans la philosophie Ubuntu ("Je suis parce que nous sommes"), le respect de la dignité, l'enracinement culturel, le retour à la terre et l'excellence.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;