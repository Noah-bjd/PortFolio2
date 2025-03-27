// src/components/Hero.tsx
import React from 'react';
import './../styles/hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="logo-container">
        <img src="/NB.svg" alt="NB Logo" className="logo" />
      </div>
      <h1>Bouljihad Nouhaila</h1>
      <h3>Junior Front End Developer</h3>
    </section>
  );
};

export default Hero;