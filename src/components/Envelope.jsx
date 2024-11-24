import React from 'react';
import './envelope.css';
import sealImage from '../assets/sello.PNG'; // Imagen del sello de cera
import musicFile from '../assets/song.mp3'; // Archivo de música de fondo

const Envelope = ({ onOpen }) => {
  const handleOpen = () => {
    // Reproducir la música
    const audio = new Audio(musicFile);
    audio.play();

    // Llamar a la función pasada como prop para "abrir" el sobre
    onOpen();
  };

  return (
    <div className="envelope">
      <div className="envelope-flap"></div>
      <div className="envelope-body">
        <div className="seal" onClick={handleOpen}>
          <img src={sealImage} alt="Sello de cera" />
        </div>
      </div>
    </div>
  );
};

export default Envelope;
