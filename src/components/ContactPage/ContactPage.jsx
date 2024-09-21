import React from 'react';
import ContactImage from '../../assets/Images/profilePicture.png';
import './ContactPage.css';

function Contact() {
  return (
    <div className="contactPage">
      <div className="contact-intro">
        <h2>Let's start a project together</h2>
        <img src={ContactImage} alt="Contact Page" />
      </div>

      <div className="contact-form">
        <div className="contact-info">
          <p>What's your name?</p>
          <input type="text" placeholder="John Doe *" />
        </div>
        <div className="contact-info">
          <p>What's your email?</p>
          <input type="text" placeholder="john@doe.com *"/>
        </div>
        <div className="contact-info">
          <p>What's the name of your organization?</p>
          <input type="text" placeholder="John & Doe ®" />
        </div>
        <div className="contact-info">
          <p>What services are you looking for?</p>
          <input type="text" placeholder="Web Design, Web Development ..." />
        </div>
        <div className="contact-info">
          <p>Your message</p>
          <textarea type="text" placeholder="Hello Ruben, can you help me with ... *" />
        </div>
        <button type="submit">Send</button>
      </div>
    </div>          
  );
}

export default Contact;
