import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'; // Add this for global styles

const App: React.FC = () => {
  return (
    <div className="container">
      {/* Left Side: Fixed Image */}
      <div className="left-side">
        <img
          src="https://via.placeholder.com/800x1200" // Replace with your image
          alt="Fixed Background"
          className="fixed-image"
        />
      </div>

      {/* Right Side: Content */}
      <div className="right-side">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;