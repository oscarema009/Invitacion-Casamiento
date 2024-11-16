// src/components/PhotoGallery.jsx
import React from 'react';
import './photogallery.css';
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";
import img6 from "../assets/6.jpeg";

const PhotoGallery = () => {
  const photos = [
    { src: img1, alt: 'Foto 1' },
    { src: img2, alt: 'Foto 2' },
    { src: img3, alt: 'Foto 3' },
    { src: img4, alt: 'Foto 4' },
    { src: img5, alt: 'Foto 5' },
    { src: img6, alt: 'Foto 6' },
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
