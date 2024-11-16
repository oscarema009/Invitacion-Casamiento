// src/components/GiftSection.jsx
import React from 'react';
import { FiGift } from "react-icons/fi"
import './giftsection.css';

const GiftSection = () => {
  const accounts = [
    {
      name: 'Daiana Vallejos',
      bank: 'Mercado Pago',
      accountNumber: '009-0222 2444 21',
    },
    {
      name: 'Oscar Velazquez',
      bank: 'Mercado Pago',
      accountNumber: '009-0222 2444 21',
    },
  ];

  const copyToClipboard = (accountNumber) => {
    navigator.clipboard.writeText(accountNumber);
    alert('Número de cuenta copiado!');
  };

  return (
    <section className="gift-section">
      <h1 className="header-title">
          <FiGift  className="header-icon" /> {/* Icono decorativo */}

        </h1>
      <p className="gift-description">
      Tres cosas no pueden faltar en nuestras vidas: SALUD, DINERO y AMOR... Por suerte estamos sanos y muy enamorados, asi que podes ayudarnos con lo que nos falta! CBU bla bla..      </p>
      <div className="gift-container">
        <h3>Datos Bancarios</h3>
        <p className="gift-note">Nota: Haga clic para copiar el número de cuenta</p>
        {accounts.map((account, index) => (
          <div key={index} className="account-item">
            <span className="account-name">{account.name}</span>
            <span className="account-bank">{account.bank}</span>
            <div className="account-number-container">
              <span className="account-number">{account.accountNumber}</span>
              <button
                className="copy-button"
                onClick={() => copyToClipboard(account.accountNumber)}
              >
                📋
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GiftSection;
