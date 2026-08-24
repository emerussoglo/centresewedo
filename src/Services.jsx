import React from 'react';

function Services() {
  const servicesData = [
    {
      id: 1,
      title: "Éducation & Apprentissage",
      description: "Bibliothèques communautaires, ateliers de lecture, formations numériques et linguistiques pour éveiller les savoirs.",
      image: "/img/service2.jpg",
      icon: "fas fa-user-graduate"
    },
    {
      id: 2,
      title: "Santé & Bien-être",
      description: "Sensibilisation sanitaire, conseils en nutrition, promotion de l'hygiène et activités sportives pour un corps sain.",
      image: "/img/service3.jpg",
      icon: "fas fa-heartbeat"
    },
    {
      id: 3,
      title: "Coaching & Accompagnement",
      description: "Développement personnel, suivi psychologique et encadrement familial pour aider chacun à révéler son potentiel.",
      image: "/img/service1.jpg",
      icon: "fas fa-hands-helping"
    },
    {
      id: 4,
      title: "Agronomie & Autonomisation",
      description: "Production agricole durable, formations professionnelles et activités génératrices de revenus pour une autonomie solide.",
      image: "/img/service4.jpg",
      icon: "fas fa-seedling"
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        
        {/* En-tête de section */}
        <div className="section-header">
          <span className="section-subtitle">NOS EXPERTISES</span>
          <h2 className="section-title">Domaines d'intervention</h2>
          <p className="section-description">
            Quatre piliers au service du développement intégral des communautés.
          </p>
        </div>

        {/* Grille des 4 pôles */}
        <div className="services-grid">
          {servicesData.map((item) => (
            <div key={item.id} className="service-card">
              <div 
                className="service-img" 
                style={{ backgroundImage: `url("${item.image}")` }}
              ></div>
              <div className="service-content">
                <div className="service-icon">
                  <i className={item.icon}></i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;