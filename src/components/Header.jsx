// src/components/Header.jsx
import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-overlay">
        <p className="header-blessing-sub">
        El amor nunca se da por vencido, jamás pierde la fe, siempre tiene esperanzas y se mantiene firme en toda circunstancia.
        1 corintios 13:7
        </p>
        <h2 className="header-wedding">¡Nos Casamos!</h2>
      </div>
      <div className='header-Subtitulo'>
      
        <h1 className="header-names">Day & Oscar</h1>
        <p className="header-date">21-12-2024</p>
        <span className="header-decorator">❧</span>
      </div>
    </header>
  );
};

export default Header;
