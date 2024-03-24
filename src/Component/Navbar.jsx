import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Logo from '../assets/logo.svg';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav className={` ${isSticky ? 'sticky' : ''}`}>
      <div className="navbar__container">
        <Link to="main" className="logo" smooth={true} duration={2000}>
          <img src={Logo} alt="gerardojao" />
        </Link>
        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label htmlFor="menu-btn" className="menu-icon">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu" >
          <li className="navbar__link">
            {' '}
            <Link to="home" className= {`${isSticky ? 'navbar__link--white a' : 'navbar__link--a a'}`}>
              Home
            </Link>
          </li>
          <li className="navbar__link">
            {' '}
            <Link to="about" className={`${isSticky ? 'navbar__link--white a' : 'navbar__link--a a'}`} >
              About
            </Link>
          </li>
          <li className="navbar__link">
            {' '}
            <Link to="service" className={`${isSticky ? 'navbar__link--white a' : 'navbar__link--a a'}`} >
              Services
            </Link>
          </li>
         
          <li className="navbar__link">
            {' '}
            <Link to="portfolio" className={`${isSticky ? 'navbar__link--white a' : 'navbar__link--a a'}`} >
              Projects
            </Link>
          </li>

          <li className="navbar__link">
            {' '}
            <Link to="branding" className={`${isSticky ? 'navbar__link--white a' : 'navbar__link--a a'}`} >
              Branding
            </Link>
          </li>

          <li className="navbar__link">
            {' '}
            <Link to="contact" className={`${isSticky ? 'navbar__link--white a' : 'navbar__link--a a'}`} smooth={true} duration={1000}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
