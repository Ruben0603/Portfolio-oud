import React from 'react';
import './Work.css';

function Work() {
  return (
    <div className="work">
      <div className="work-intro">
        <h1>Creating next level digital products</h1>
      </div>
      <div className="work-content">
      <div className="work-item">
          <div className="work-item-text">
            <h3>Transavia (Remake)</h3>
            <p>Me and a friend have recreated Transavia.nl for a school project in the 2nd year.</p>
          </div>
          <div className="work-item-content">
            <div className="work-item-content-langues">
              <p className="php">PHP</p>
              <p className="scss">SCSS</p>
              <p className="js">JS</p>
            </div>
            <div className="work-item-content-links">
              <a href="https://github.com/Ruben0603/Remake-Transavia">
                <p>Github</p>
              </a>
            </div>
          </div>
        </div>

        <div className="work-item">
          <div className="work-item-text">
            <h3>Personal Portfolio</h3>
            <p>Explore my projects to see my passion for development and innovative solutions. Feel free to reach out for inquiries or collaboration opportunities.</p>
          </div>
          <div className="work-item-content">
            <div className="work-item-content-langues">
              <p className="react">React</p>
              <p className="scss">SCSS</p>
              <p className="html">HTML</p>
            </div>
            <div className="work-item-content-links">
              <a href="https://github.com/Ruben0603/Portfolio">
                <p>Github</p>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>  
  );
}

export default Work;
