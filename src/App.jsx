import React from 'react';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';
import './style.css';
import Counter from '../pages/Counter';
import Hero from './Hero';
import About from './About';
import Programs from './Programs';
import Services from './Services';
import Impact from './Impact';
import Contact from './Contact';

export default function App() {
  return (
    <div className="app-container">
      {/* Affichage de la Navigation */}
      <Navbar />

      <main>

       <Hero />
       <About />
<Services />
<Programs />
<Impact />
<Contact />










 <a href="#top" className="back-to-top" aria-label="Retour en haut">
        <i className="fa-solid fa-circle-arrow-up"></i>
      </a>

    
      </main>

      {/* Affichage du Pied de page */}
      <Footer />
    </div>
  );
}