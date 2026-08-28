import React, { useState, useEffect } from 'react';

function Hero() {
  const slides = [
    {
      id: 1,
      badge: "ÉCOSYSTÈME INTÉGRÉ DE DÉVELOPPEMENT HUMAIN",
      title: "Centre Sèwèdo : Bâtir l'humain, cultiver l'avenir",
      description: "Un écosystème unique sur 10 hectares combinant éducation, santé naturelle, culture africaine et autonomisation économique.",
      btnText: "Découvrir notre écosystème",
      btnHref: "#about",
      bgImage: "/img/hero-bg-1.jpg"
    },
    {
      id: 2,
      badge: "NOS DOMAINES D'INTERVENTION",
      title: "Éducation, Santé Naturelle, Culture & Agronomie",
      description: "Des pôles interconnectés valorisant la phytothérapie, les langues locales et l'entrepreneuriat communautaire.",
      btnText: "Explorer les 7 pôles",
      btnHref: "#services",
      bgImage: "/img/hero-bg-2.jpg"
    },
    {
      id: 3,
      badge: "SOLIDARITÉ PRODUCTIVE",
      title: "Transformons la solidarité des crises en investissement",
      description: "Grâce à Sèwèdo Invest et nos tontines entrepreneuriales, nous bâtissons l'autonomie financière durable de nos communautés.",
      btnText: "Voir les projets phares",
      btnHref: "#timeline",
      bgImage: "/img/hero-bg-3.jpeg"
    },
    {
      id: 4,
      badge: "DESTINATION UNIQUE AU BÉNIN",
      title: "Séjours, Conférences & Tourisme Tradimoderne",
      description: "Restaurant bio, bungalows africains, laboratoire de plantes médicinales et espaces événementiels en pleine nature.",
      btnText: "Nous contacter",
      btnHref: "#contact",
      bgImage: "/img/hero-bg.jpg"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

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

      <button className="hero-arrow arrow-left" onClick={prevSlide} aria-label="Précédent">
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="hero-arrow arrow-right" onClick={nextSlide} aria-label="Suivant">
        <i className="fas fa-chevron-right"></i>
      </button>

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