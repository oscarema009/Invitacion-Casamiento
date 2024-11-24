import React, { useEffect, useState } from 'react';
import './eventdetails.css';

const EventDetails = () => {
  const targetDate = new Date('2024-12-21T00:00:00');

  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeRemaining({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Enlaces específicos de Google Maps
  const ceremonyLocation =
    'https://maps.app.goo.gl/gGsPWybe5acKq1YA9';
  const receptionLocation =
    'https://maps.app.goo.gl/RR5ZWS1rX8UwGJyW7';

  return (
    <section className="event-details">
      <h2 className="event-title">Llego el Gran Día</h2>
      <p className="event-subtitle">
        Después de viajar de norte a sur, de compartir experiencias y de descubrir mil cosas juntos,
        comenzamos una nueva aventura y no sería posible celebrar nuestra boda sin la compañía de
        nuestra familia y nuestros mejores amigos. ¡No podes faltar!
      </p>

      <h3 className="event-date">21 Diciembre 2024</h3>

      <div className="countdown">
        <div className="countdown-item">
          <span className="countdown-number">{timeRemaining.days}</span>
          <span className="countdown-label">D</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeRemaining.hours}</span>
          <span className="countdown-label">H</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeRemaining.minutes}</span>
          <span className="countdown-label">M</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeRemaining.seconds}</span>
          <span className="countdown-label">S</span>
        </div>
      </div>

      <div className="event-info">
        {/* Información de la ceremonia */}
        <div className="event-item ceremony">
          <span className="event-icon"><i className="fa-solid fa-church"></i></span>
          <h3>Ceremonia de Boda</h3>
          <p>22:00 hs en la Iglesia San Francisco, Corrientes.</p>
          <button
            className="map-button"
            onClick={() => window.open(ceremonyLocation, '_blank')}
          >
            Abrir Mapa
          </button>
        </div>

        {/* Información de la recepción */}
        <div className="event-item reception">
          <span className="event-icon"><i className="fas fa-glass-cheers"></i></span>
          <h3>Fiesta</h3>
          <p>22:45 hs en salón de Regatas, Corrientes.</p>
          <button
            className="map-button"
            onClick={() => window.open(receptionLocation, '_blank')}
          >
            Abrir Mapa
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
