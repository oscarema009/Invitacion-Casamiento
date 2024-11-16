// src/components/PhotoGallery.jsx
import React from 'react';
import './photogallery.css';
import img1 from "../assets/00004.jpg";
import img2 from "../assets/00020.jpg";
import img3 from "../assets/00038.jpg";
import img4 from "../assets/00043.jpg";
import img5 from "../assets/00035.jpg";
import img6 from "../assets/00060.jpg";
import img7 from "../assets/00047.jpg";
import img8 from "../assets/00065.jpg";
import img9 from "../assets/00002.jpg";
import img10 from "../assets/00009.jpg";

const PhotoGallery = () => {
  const photos = [
    { src: img1, alt: 'Foto 1' },
    { src: img2, alt: 'Foto 2' },
    { src: img3, alt: 'Foto 3' },
    { src: img4, alt: 'Foto 4' },
    { src: img5, alt: 'Foto 5' },
    { src: img6, alt: 'Foto 6' },
    { src: img7, alt: 'Foto 6' },
    { src: img8, alt: 'Foto 6' },
    { src: img9, alt: 'Foto 6' },
    { src: img10, alt: 'Foto 6' },
    // Agrega más fotos aquí si es necesario
  ];

  return (
    <section className="photo-gallery">
      <h2 className="gallery-title">Galería Fotos</h2>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <div key={index} className="gallery-item">
            <img src={photo.src} alt={photo.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
