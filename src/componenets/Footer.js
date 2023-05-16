import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/red-circle-effect-png-transparent-5Kdj5f.png';

export default function Footer() {
  return (
    <section className="about-section footer">
      <h2 className="about-section__primary">
        <Link className="nav-link white" to="/">
          <img className="logo" src={logo} alt="Home" />
        </Link>
        <span className="circle">Circle</span>
      </h2>

      <p>
        Plot 1 Unit F, Ewet Housing Estate
        <br />
        +2348035336234
      </p>
      <p>
        Car Rentals
        { ' ' }
        {new Date().getFullYear()}
        . All rights reserved
      </p>
      <div className="social-icons">
        <a href="https://facebook.com" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://twitter.com" aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://instagram.com" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </section>
  );
}
