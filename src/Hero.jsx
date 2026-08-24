import React, { useState, useEffect } from 'react';

function Hero() {
  const slides = [
    {
      id: 1,
      badge: "ENSEMBLE POUR UN AVENIR MEILLEUR",
      title: "Centre Sèwèdo : pour le Bien-Être Humain",
      description: "Accompagner chaque enfant, chaque jeune et chaque famille vers un développement global, dans la paix, l'équilibre et la dignité.",
      btnText: "Découvrir notre mission",
      btnHref: "#about",
      bgImage: "/img/hero-bg-1.jpg"
    },
    {
      id: 2,
      badge: "NOS DOMAINES D'ACTION",
      title: "Éducation, Santé, Coaching & Agronomie",
      description: "Quatre piliers essentiels pour offrir des opportunités concrètes et transformer durablement nos communautés.",
      btnText: "Explorer nos domaines",
      btnHref: "#services",
      bgImage: "/img/hero-bg-2.jpg"
    },
    {
      id: 3,
      badge: "ENGAGEMENT ET IMPACT",
      title: "Des actions concrètes pour des vies transformées",
      description: "Des bibliothèques communautaires à l'agriculture durable, nous construisons un développement humain et inclusif.",
      btnText: "Voir nos programmes",
      btnHref: "#timeline",
      bgImage: "/img/hero-bg-3.jpeg"
    },
    {
      id: 4,
      badge: "REJOIGNEZ LE MOUVEMENT",
      title: "Ensemble, faisons grandir l'impact",
      description: "Que vous soyez un particulier, une association ou une entreprise, contribuez à nos projets sur le terrain.",
      btnText: "Nous contacter",
      btnHref: "#contact",
      bgImage: "/img/hero-bg.jpg"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Changement automatique de slide toutes les 6 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <section id="hero" className="hero-slider-section">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        >
          {/* Overlay sombre style capture d'écran */}
          <div className="hero-overlay"></div>

          <div className="hero-container">
            <div className="hero-content">
              {slide.badge && <span className="hero-badge">{slide.badge}</span>}
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-description">{slide.description}</p>
              
              <div className="hero-actions">
                <a href={slide.btnHref} className="hero-btn-pill">
                  {slide.btnText}
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Flèches de navigation gauche / droite */}
      <button className="hero-arrow arrow-left" onClick={prevSlide} aria-label="Précédent">
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="hero-arrow arrow-right" onClick={nextSlide} aria-label="Suivant">
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Indicateurs (dots) en pilule en bas */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;