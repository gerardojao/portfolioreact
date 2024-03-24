import { useEffect } from "react";
import React from 'react';
import Me from "../assets/meagain.jpeg";
import Typed from 'typed.js';
import CV from "../assets/CV.pdf";
const Aboutme = ({data}) => {
    useEffect(() => {
        const typed = new Typed('.typed2', {
          strings: ['Frontend Developer.', 'Backend Developer.'],
          stringsElement: '#strings',
          typeSpeed: 75,
          startDelay: 300,
          backSpeed: 90,
          smartBackspace: true,
          shuffle: false,
          backDelay: 2500,
          loop: true,
          loopCount: false,
          contentType: 'html'
        });
    
        return () => {
          typed.destroy();
        };
      }, []);
   
  return (
    <section className="about" id="about">
      <div className="about__container">
        <h2 className="about__title">About me</h2>
        <div className="about__content">
          <article className="about__content about__content--1">
            <img src={Me} alt="Gerardo Arrieta" />
          </article>
          <article className="about__content about__content--2">
            <div>
              I am Gerardo and I am <br />
              <span className="typed2"></span>
            </div>
            <br />
            {data[0].text.map((paragraph, index) => (
              <p key={index}>{paragraph.text}<br /></p>
            ))}
        
            <a
              href={CV}
              download="Gerardo Arrieta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;