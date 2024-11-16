// src/components/SharePhotos.jsx
import React, { useEffect, useRef } from 'react';
import { AiFillInstagram } from "react-icons/ai";
import './sharePhotos.css';

const SharePhotos = () => {
  const sharePhotosRef = useRef(null);

  // Efecto de aparición al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (sharePhotosRef.current) {
      observer.observe(sharePhotosRef.current);
    }

    return () => {
      if (sharePhotosRef.current) {
        observer.unobserve(sharePhotosRef.current);
      }
    };
  }, []);

  return (
    <section className="share-photos-section" ref={sharePhotosRef}>
      <h2 className="share-photos-title">¡Comparte tus mejores momentos!</h2>
      <p className="share-photos-text">Sube tus fotos con el hashtag <strong>#BodaDyO</strong> o etiquétanos en Instagram.</p>
      <a 
        href="https://www.instagram.com/tu_cuenta_de_instagram_de_boda" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="instagram-link"
      >
        <AiFillInstagram  
          className="instagram-icon"
        />
      </a>
    </section>
  );
};

export default SharePhotos;
