import React from 'react';
// import profilePicture from '../../assets/Images/profilePicture2.png';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="intro">
        <div className="intro-content">
          <div className="animated-container">
            <div className="animated-title">
              <div className="text-top">
                <div>
                  <span>Hi, i am</span>
                  <span>Ruben Mooren</span>
                </div>
              </div>
              <div className="text-bottom">
                <div><p>Frontend Developer &amp; Designer</p></div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-left">
              <p className='location'>Located in Nijmegen,<br/> The Netherlands</p>
              <i className="fas fa-map-marker-alt"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;  