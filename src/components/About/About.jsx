import React from "react";
import profilePicture from "../../assets/Images/profilePicture.png";
import "./About.css";

function About() {
    return (
        <div className="about">
            <div className="triangle-top"></div>
            <div className="aboutMe-container">
                <section className="aboutMe-right">
                    <div className="photo-container slide-in">
                        <a href="/" className="photo">
                            <img src={profilePicture} alt="Profile" />
                        <div className="glow-wrap">
                            <i className="glow"></i>
                        </div>
                        </a>
                    </div>
                    <div className="aboutMe-right-content">
                        <h2>Digital Passion</h2>
                        <p>The passion for design and coding fuels my drive to create innovative solutions and captivating experiences in the digital realm.</p>
                    </div>
                </section>
                <section className="aboutMe-left">
                    <h2>About Me</h2>
                    <p> I'm a 21-year-old software development student at ROC Nijmegen, currently in my third year. My main focus is on frontend development, where I have experience with tools like React, Vue.js, and CSS frameworks like Tailwind and Bootstrap. Additionally, I also have some experience with backend technologies, including PHP with Laravel, Symfony, and a bit of C# with ASP.NET.

                    <br/><br/>I'm always looking for new opportunities to enhance my skills and grow as a developer. Let's talk tech and build something amazing together! 🚀</p>
                </section>
            </div>
            <div className="triangle-container">
                <div className="triangle-bottom"></div>
            </div>
        </div>
    );
}

export default About;