import React from 'react';
import './footer.css';
import logo from '../assets/Logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <img src={logo} alt="logo" className="logo" />
        
      </div>
    </footer>
  );
};

export default Footer;
