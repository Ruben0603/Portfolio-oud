import React from 'react';
import Home from '../../components/Home/Home';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import './Home.css';

function HomePage() {
  return (
    <div className="homePage">
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default HomePage;