import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Home = () => {
  useEffect(() => {
    const typed = new Typed('.typed', {
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
    <section className="home" id="home">
      <div className="home__container">
        <div className="home__content">
          <div className="home__content home__content--1">Hello, my name is</div>
          <div className="home__content home__content--2">Gerardo Arrieta</div>
          <div className="home__content home__content--3">And I am <span className="home__content--span typed"></span></div>
          <div className="n-hide" id="strings">
            <p className="home__content--span">Frontend Developer.</p>
            <p className="home__content--span">Backend Developer.</p>
          </div>
          <a href="#contact" className="home__content home__content--link">Hire me</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
