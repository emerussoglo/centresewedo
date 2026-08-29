import React from 'react';

function Impact() {
  const impactData = [
    {
      id: 1,
      number: "6 000+",
      label: "Bénéficiaires annuels directs et indirects",
      icon: "fas fa-users"
    },
    {
      id: 2,
      number: "10 Ha",
      label: "D'écosystème agricole et touristique aménagé",
      icon: "fas fa-leaf"
    },
    {
      id: 3,
      number: "100+",
      label: "Emplois directs et indirects créés à terme",
      icon: "fas fa-briefcase"
    },
    {
      id: 4,
      number: "200+",
      label: "Entrepreneurs formés par la Business Academy",
      icon: "fas fa-user-tie"
    }
  ];

  return (
    <section id="impact" className="impact-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">NOTRE IMPACT VISÉ À 3 ANS</span>
          <h2 className="section-title">Objectifs & Résultats attendus</h2>
          <p className="section-description">
            Chaque objectif concrétise notre engagement pour l'autonomisation économique, la préservation de la santé naturelle et le développement communautaire au Bénin en s'appuyant sur la culture africaine.
          </p>
        </div>

        <div className="impact-grid">
          {impactData.map((item) => (
            <div key={item.id} className="impact-card">
              <div className="impact-card-header">
                <span className="impact-badge">
                  <i className={item.icon}></i> Cible stratégique
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