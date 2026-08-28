import React from 'react';

function Programs() {
  const programsData = [
    {
      id: 1,
      icon: "fas fa-chart-line",
      title: "Sèwèdo Invest & Tontines",
      description: "Plateforme d'investissement communautaire et tontines entrepreneuriales orientées vers le financement direct de projets économiques locaux."
    },
    {
      id: 2,
      icon: "fas fa-graduation-cap",
      title: "Sèwèdo Business Academy",
      description: "Centre de formation en entrepreneuriat, gestion financière, marketing digital et leadership adapté au contexte africain."
    },
    {
      id: 3,
      icon: "fas fa-female",
      title: "Programme Femmes d'Impact",
      description: "Accompagnement spécifique dédié à l'entrepreneuriat féminin : formations métiers, microcrédit et accès au Marché Sèwèdo."
    },
    {
      id: 4,
      icon: "fas fa-flask",
      title: "Laboratoire Sèwèdo Nature",
      description: "Unité de recherche appliquée dédiée à l'étude, la valorisation scientifique et la transformation des plantes médicinales africaines."
    },
    {
      id: 5,
      icon: "fas fa-language",
      title: "Académie des Langues Locales",
      description: "Transmission, cours et valorisation du Fon, Yoruba, Bariba, Mina et autres langues béninoises comme vecteurs de savoirs."
    },
    {
      id: 6,
      icon: "fas fa-hotel",
      title: "Pôle Touristique, Culturel & Séjours",
      description: "Musée vivant des cultures africaines, restaurant bio, bungalows en cases traditionnelles, camping et espace de conférences de 300 places."
    }
  ];

  return (
    <section id="timeline" className="programs-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">NOS DISPOSITIFS DE TRANSFORMATION</span>
          <h2 className="section-title">Projets Phares Sèwèdo</h2>
          <p className="section-description">
            Des initiatives structurantes conçues pour créer une autosuffisance économique tout en finançant nos programmes sociaux.
          </p>
        </div>

        <div className="programs-grid">
          {programsData.map((item) => (
            <div key={item.id} className="program-card">
              <div className="card-icon-box">
                <i className={item.icon}></i>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Programs;