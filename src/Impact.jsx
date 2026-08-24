import React from 'react';

function Impact() {
  const impactData = [
    {
      id: 1,
      number: "1 000+",
      label: "Enfants, jeunes et familles accompagnés",
      icon: "fas fa-users"
    },
    {
      id: 2,
      number: "150+",
      label: "Ateliers et formations organisés",
      icon: "fas fa-calendar-check"
    },
    {
      id: 3,
      number: "15",
      label: "Communautés locales touchées",
      icon: "fas fa-globe"
    },
    {
      id: 4,
      number: "50+",
      label: "Éducateurs et formateurs mobilisés",
      icon: "fas fa-chalkboard-teacher"
    }
  ];

  return (
    <section id="impact" className="impact-section">
      <div className="container">
        
        {/* En-tête de section */}
        <div className="section-header">
          <span className="section-subtitle">NOS RÉSULTATS CONCRETS</span>
          <h2 className="section-title">L'impact de nos actions</h2>
          <p className="section-description">
            Chaque chiffre représente des vies transformées, des compétences acquises et des communautés renforcées.
          </p>
        </div>

        {/* Grille des 4 chiffres clés */}
        <div className="impact-grid">
          {impactData.map((item) => (
            <div key={item.id} className="impact-card">
              <div className="impact-card-header">
                <span className="impact-badge">
                  <i className={item.icon}></i> Chiffre clé
                </span>
              </div>
              <h3 className="impact-number">{item.number}</h3>
              <p className="impact-label">{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Impact;