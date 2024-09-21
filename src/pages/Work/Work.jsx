import React from 'react';
import Work from '../../components/Work/Work';
import Contact from '../../components/Contact/Contact';
import './Work.css';

function WorkPage() {
  return (
    <div className="workPage">
      <Work />
      <Contact />
    </div>
  );
}

export default WorkPage;