import React, { useState } from 'react';
import './rsvp.css';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    attendance: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    const { name, message, attendance } = formData;
    const phoneNumber = '+5403794881936';

    if (!name || !attendance) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    // Mensaje de confirmación que será enviado a WhatsApp
    const whatsappMessage = `Hola! Mi nombre es ${name}. ${message ? ` ${message}` : ''} ,asistiré: ${attendance}.`;

    // Enlace de WhatsApp con el mensaje
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirige al usuario a WhatsApp
    window.open(whatsappLink, '_blank');
  };

  return (
    <section className="rsvp-wrapper">
      <div className="rsvp-header">
        <h2 className="rsvp-title">Confirmación de Asistencia</h2>
        <p className="rsvp-subtitle">
          Esperamos que seas parte de esta gran celebración.<br />
          ¡Confírmanos tu asistencia!
        </p>
      </div>

      <div className="rsvp-section">
        <form className="rsvp-form" onSubmit={handleSubmit}>
          <label>
            *Nombre:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Mensaje:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <label className="attendance-label">*Asistencia:</label>
          <div className="attendance-options">
            <label>
              <input
                type="radio"
                name="attendance"
                value="SI"
                checked={formData.attendance === 'SI'}
                onChange={handleChange}
                required
              />
              SI
            </label>
            <label>
              <input
                type="radio"
                name="attendance"
                value="NO"
                checked={formData.attendance === 'NO'}
                onChange={handleChange}
                required
              />
              NO
            </label>
          </div>
          <button type="submit" className="rsvp-button">
            ENVIAR!
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVP;

