import React from 'react';

function Services() {
  const servicesData = [
    {
      id: 1,
      title: "Éducation & Apprentissage",
      description: "Bibliothèque, médiathèque, soutien scolaire, ateliers artisanaux/culinaires, formations numériques et Sèwèdo Business Academy.",
      image: "/img/service2.jpg",
      icon: "fas fa-book-reader"
    },
    {
      id: 2,
      title: "Santé, Bien-être & Phytothérapie",
      description: "Jardin ethnobotanique, consultation de tradipraticiens, gamme Sèwèdo Nature, clinique mobile et Restaurant Bio Sèwèdo.",
      image: "/img/service3.jpg",
      icon: "fas fa-notes-medical"
    },
    {
      id: 3,
      title: "Coaching & Accompagnement Familial",
      description: "Médiation familiale, programme «Père Présent», cercles de sagesse Ubuntu, suivi psychologique et développement personnel.",
      image: "/img/service1.jpg",
      icon: "fas fa-users-cog"
    },
    {
      id: 4,
      title: "Agronomie & Ferme Éducative",
      description: "Ferme de 10 ha, maraîchage bio, transformation agroalimentaire, programme Jeunesse Verte et marché mensuel.",
      image: "/img/service4.jpg",
      icon: "fas fa-seedling"
    },
    {
      id: 5,
      title: "5. Solidarité Productive & Investissement",
      description: "Sèwèdo Invest, tontines entrepreneuriales, Fonds d’Autonomisation et programmes Femmes d’Impact et Jeunes Leaders Productifs.",
      image: "/img/hero-bg-3.jpeg",
      icon: "fas fa-hand-holding-usd"
    },
    {
      id: 6,
      title: "6. Espaces Multifonctionnels & Hébergement",
      description: "Salles de conférence (200-300 places), bungalows et cases africaines, camping, Centre Commercial Tradimoderne et pôle touristique.",
      image: "/img/hero-bg.jpg",
      icon: "fas fa-building"
    },
    {
      id: 7,
      title: "7. Culture Africaine & Langues Locales",
      description: "Académie des langues locales (Fon, Yoruba, Bariba, Dendi, Mina, Goun), préservation du patrimoine immatériel et Festival Sèwèdo.",
      image: "/img/hero-bg-2.jpg",
      icon: "fas fa-globe-africa"
    }

  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">L'ÉCOSYSTÈME INTEGRÉ</span>
          <h2 className="section-title">Nos Domaines d'Intervention</h2>
          <p className="section-description">
            Des piliers interconnectés qui agissent en synergie pour une transformation humaine et économique globale.
          </p>
        </div>

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