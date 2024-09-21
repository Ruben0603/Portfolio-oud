import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li>Email: Moorenruben@gmail.com</li>
            <li>Telefoon: +31 625276968</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Links</h3>
          <ul>
            <li><a href="/Home">Home</a></li>
            <li><a href="/Work">Work</a></li>
            <li><a href="/Experience">Experience</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Socials</h3>
          <ul>
            <li><a href="https://www.instagram.com/rubenmooren/">Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/ruben-mooren-4264081b6/">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Ruben Mooren. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
