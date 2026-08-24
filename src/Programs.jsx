import React from 'react';

function Programs() {
  const programsData = [
    {
      id: 1,
      icon: "fas fa-book-open",
      title: "Bibliothèques & Ateliers Éducatifs",
      description: "Espaces de lecture, clubs de devoirs et ateliers créatifs pour stimuler la curiosité intellectuelle des enfants et des jeunes."
    },
    {
      id: 2,
      icon: "fas fa-hand-holding-heart",
      title: "Santé Communautaire & Nutrition",
      description: "Campagnes de sensibilisation, dépistages, ateliers de nutrition et programmes d'hygiène pour améliorer la santé au quotidien."
    },
    {
      id: 3,
      icon: "fas fa-seedling",
      title: "Agriculture Durable & Formation",
      description: "Initiation aux techniques agroécologiques, jardins communautaires et formations pratiques pour une production alimentaire responsable en bio."
    },
    {
      id: 4,
      icon: "fas fa-hands-helping",
      title: "Soutien Psychosocial & Familial",
      description: "Accompagnement individuel, groupes de parole et médiation familiale pour renforcer les liens et la résilience émotionnelle."
    },
    {
      id: 5,
      icon: "fas fa-users",
      title: "Autonomisation des Femmes & des Jeunes",
      description: "Formation à l'entrepreneuriat, micro-crédits et mentorat pour favoriser l'indépendance économique et sociale."
    },
    {
      id: 6,
      icon: "fas fa-globe-africa",
      title: "Culture, Sport & Vivre-Ensemble",
      description: "Rencontres interculturelles, activités sportives et événements communautaires pour promouvoir la paix et la cohésion."
    }
  ];

  return (
    <section id="timeline" className="programs-section">
      <div className="container">
        
        {/* En-tête de section */}
        <div className="section-header">
          <span className="section-subtitle">CE QUE NOUS FAISONS</span>
          <h2 className="section-title">Programmes & Activités</h2>
          <p className="section-description">
            Des actions concrètes et durables, pensées pour répondre aux besoins réels des communautés que nous servons.
          </p>
        </div>

        {/* Grille de 6 programmes */}
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