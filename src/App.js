// src/App.js
import React from 'react';
import Header from './components/Header2';
import WelcomeSection from './components/WelcomeSection';
import EventDetails from './components/EventDetails';
import PhotoGallery from './components/PhotoGallery';
import GiftSection from './components/GiftSection';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import DressCode from './components/DressCode';
import SharePhotos from './components/SharePhotos';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <WelcomeSection />
      <EventDetails />
      <PhotoGallery />
      <SharePhotos/>
      <RSVP />
      <DressCode />
      <GiftSection />
      <Footer />

      {/* Otros componentes irán aquí */}
    </div>
  );
}

export default App;
