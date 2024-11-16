// src/components/Header.jsx
import React from 'react';
import './header2.css';
//import fondo from '../assets/fondo.jpg'; // Tu imagen de fondo
import imagenAnimada from '../assets/imagenefecto.jpg'; // Imagen que aparece de izquierda a derecha

const Header = () => {
  return (
    <header className="header">
      <div className="header-overlay"></div>
      <div className="header-content">
        <div className="header-subtitle">
          <p className="maquina-escribir">!SAVE THE DATE!</p>
        </div>
        <img src={imagenAnimada} alt="Decoración" className="imagen-animada" />
        <h1 className="header-title">Day & Oscar</h1>
        <p className="header-message">21-12-2024</p>
        <p className="header-address">El amor nunca se da por vencido, jamás pierde la fe, siempre tiene esperanzas y se mantiene firme en toda circunstancia.
          1 corintios 13:7</p>
        <p className="header-reception">❧</p>
      </div>
    </header>
  );
};

export default Header;
