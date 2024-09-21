import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <section className="contact-content">
        <h2>Let's get in touch</h2>
        <div className="contact-channels">
          <div className="contact-channel">
            <a href="mailto: moorenruben@gmail.com">	
              <i className="fas fa-envelope"></i>
              <p>
                Moorenruben@gmail.com
              </p>
            </a>
          </div>
          <div className="contact-channel">
            <a href="https://www.linkedin.com/in/ruben-mooren-4264081b6/">
              <i className="fab fa-linkedin"></i>
              <p>
                LinkedIn
              </p>
            </a>
          </div>
          <div className="contact-channel">
            <a href="../../assets/Files/CV_RubenMooren.pdf" download="CV_RubenMooren.pdf">
              <i className="far fa-file"></i>
              <p>
                Resume
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>          
  );
}

export default Contact;
