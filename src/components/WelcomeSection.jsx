// src/components/WelcomeSection.jsx
import React from 'react';
import './welcomesection.css';
import day from "../assets/day.jpg"
import juntos from "../assets/00069.jpg"

const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <h2 className="welcome-title">¡NOS CASAMOS!</h2>
      <p className="welcome-message">
        Nos encantaría que nos acompañaran en este día tan especial. Su presencia es el mejor regalo que podríamos recibir.
      </p>
      <div className="couple-photos">
        <div className="photo-container">
          <img src={juntos} alt="Novio" className="photo" />
          
        </div>
        
      </div>
    </section>
  );
};

export default WelcomeSection;
