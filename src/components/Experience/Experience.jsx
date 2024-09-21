import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <div className="experience">
      <div className="experience-intro">
        <h1>My past work experiences</h1>
      </div>
      <div className="experience-content">
        <div className="experience-item">
          <div className="experience-item-date">
            <h2>Jumbo</h2>
            <p>Jan 2020 - Heden</p>
          </div>
          <div className="experience-item-divider"></div>
          <div className="experience-item-description">
            <p>As a member of the produce department team, my role encompasses stocking fresh fruits and vegetables, 
              assisting customers, training colleagues, and managing inventory levels to ensure a diverse and high-quality selection.</p>
          </div>	
        </div>
        <div className="experience-item">
          <div className="experience-item-date">
            <h2>Slot Doddendael</h2>
            <p>may 2018 - jan 2020</p>
          </div>
          <div className="experience-item-divider"></div>
          <div className="experience-item-description">
            <p>Having served as a dedicated member of our hospitality team, I've taken on responsibilities including serving drinks, food, and managing the bar. 
              I pride myself on providing excellent service and crafting beverages with care to create memorable experiences for our guests.</p>
          </div>	
        </div>
      </div>
      <div className="experience-intro">
        <h1>My past internship experiences</h1>
      </div>
      <div className="experience-content">
        <div className="experience-item">
          <div className="experience-item-date">
            <h2>Travel Nerds</h2>
            <p>Feb 2024 - July 2024</p>
          </div>
          <div className="experience-item-divider"></div>
          <div className="experience-item-description">
            <p>As a member of the produce department team, my role encompasses stocking fresh fruits and vegetables, 
              assisting customers, training colleagues, and managing inventory levels to ensure a diverse and high-quality selection.</p>
          </div>	
        </div>
        <div className="experience-item">
          <div className="experience-item-date">
            <h2>ChemRade</h2>
            <p>Aug 2022 - Feb 2023</p>
          </div>
          <div className="experience-item-divider"></div>
          <div className="experience-item-description">
            <p>Having served as a dedicated member of our hospitality team, I've taken on responsibilities including serving drinks, food, and managing the bar. 
              I pride myself on providing excellent service and crafting beverages with care to create memorable experiences for our guests.</p>
          </div>	
        </div>
      </div>
    </div>  
  );
}

export default Experience;
