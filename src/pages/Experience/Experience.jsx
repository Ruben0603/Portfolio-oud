import React from 'react';
import Experience from '../../components/Experience/Experience';
import Contact from '../../components/Contact/Contact';
import './Experience.css';

function ExperiencePage() {
  return (
    <div className="experiencePage">
      <Experience />
      <Contact />
    </div>
  );
}

export default ExperiencePage;