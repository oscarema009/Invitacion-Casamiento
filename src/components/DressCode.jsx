// src/components/DressCode.jsx
import React, { useEffect, useRef } from 'react';
import { GiAmpleDress } from "react-icons/gi";
import './dressCode.css';

const DressCode = () => {
  const dressCodeRef = useRef(null);

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

    if (dressCodeRef.current) {
      observer.observe(dressCodeRef.current);
    }

    return () => {
      if (dressCodeRef.current) {
        observer.unobserve(dressCodeRef.current);
      }
    };
  }, []);

  return (
    <section className="dress-code-section" ref={dressCodeRef}>
      <h2 className="dress-code-title">Dress Code</h2>
      <div className="dress-code-icons">
      <GiAmpleDress  className="dress-icon" />
        <span className="dress-code-text">Formal</span>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAACqUlEQVR4nO2ZPWsVQRSGH2JnSGXEqBGsRIxgkT/hR0JsYilWtqYUG+8vSLDUJv0tVLwhVmkUJUVKUwt+BIyFGmzEmJGBWVjXmdk5M3v3Xu6dF06TnfPx7nnnnE0CGRkZGRnjg8vAE2DL8mwPUA7Tz6rYMrF0zKHDeeAxcGgIPLSc6XkIv7Cc75hnf4AucIEhwHFT2K8KgUseAjazvaCLlTO/gUfAFAPCIvDeUvw7x/kFD+EbDp9dy9lPwG1axk1htzRmPD6nHT4+VSzREiYdnfXJ2Te4PnvOV2Vdtg9tyXvNU4S2HeCuo5he4MCaMjF2anKt9pvsFTM8VIAdmMk9XyPR8hWYNz4HgTkOK/EbxQSwHVhI2dZrBld5YK1HxNcqONYPwisRxeyaO+8bXOWBNemYzHV2r2myZ4DvwiJ+AnM1g8s2sOaMrySXvgKzTRJ+FvHW7zhi9WoGFsZXmu9pU2SvRyTXtuyI1wnY2bcicy71e+cqj30FTlliLtR8YU0DXyJzJu/mtcjEhT23xJyp+cLqJuZcbWPnKqG09xwDK1bKybt5InLnhkq7ZxlYKVJO3s0rDSV2SbtjGVipUo7ezdOCnduNlPaisQLLgjihOTWHEyGEHwQG3AdOCgotzhcfMtowP9sXxJGcvx9C+K2wY0rYHRKlLFHEmxDCP4SFS4qtSlsi5TLh0Bf1LYTwkUCaMYQLf6mUq4RD/I9CCEs6FEO4UEjsVEaokFpIA6iWLbXe/5AJkzv8D7Kk8b+EDeCs+QvF5jjc4dmS77lMmNHr8Kbpsu7uy3HosEq0TJjcYbKkB3mH8x5mxIfW7LB9eLz2OL8awj0srTcZqmUbOFQmTO6wGmdJbzT8+3DrUANeS63jo/Af1k37t45rgUXrYq/2wT8jIyMjg1HBX3ukW8jomEpcAAAAAElFTkSuQmCC" alt="suit" className="dress-icon" />
      </div>
      <p className="dress-code-note">Lo más importante para nosotros es que estés cómodo. Pero nos gustaría que la vestimenta sea Formal.<br />Evitar Vestidos Blancos.</p>
    </section>
  );
};

export default DressCode;
