// src/components/PhotoGallery.jsx
import React, { useState, useEffect } from 'react';
import './photogallery.css'; // Asegúrate de que tienes el archivo de estilos CSS para los estilos
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
    { src: img7, alt: 'Foto 7' },
    { src: img8, alt: 'Foto 8' },
    { src: img9, alt: 'Foto 9' },
    { src: img10, alt: 'Foto 10' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Para controlar la imagen visible
  const [isPaused, setIsPaused] = useState(false);  // Para saber si el carrusel está pausado
  const [selectedImage, setSelectedImage] = useState(null);  // Para gestionar la imagen seleccionada y aumentada

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length); // Desplazamiento automático
      }, 2000); // Cambia la imagen cada 2 segundos
    }
    return () => clearInterval(interval); // Limpiar intervalo cuando el componente se desmonte
  }, [isPaused, photos.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  const handleImageClick = (src) => {
    setSelectedImage(src); // Establece la imagen seleccionada para ampliarla
  };

  const handleOverlayClick = () => {
    setSelectedImage(null); // Cierra la imagen seleccionada
  };

  return (
    <section className="photo-gallery">
      <h2 className="gallery-title">Galería de Fotos</h2>

      {/* Carrusel */}
      <div className="carousel-container">
        <div className="carousel">
          <button className="carousel-button prev" onClick={handlePrev}>
            &lt;
          </button>
          <div className="carousel-images">
            <img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              className="carousel-image"
              onClick={() => handleImageClick(photos[currentIndex].src)}
            />
          </div>
          <button className="carousel-button next" onClick={handleNext}>
            &gt;
          </button>
        </div>
        <div className="pagination">
          {photos.map((photo, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Imagen ampliada */}
      {selectedImage && (
        <div className="image-overlay" onClick={handleOverlayClick}>
          <img src={selectedImage} alt="Imagen seleccionada" className="selected-image" />
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
