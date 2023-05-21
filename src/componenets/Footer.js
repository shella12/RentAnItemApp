import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logoC.jpeg';

export default function Footer() {
  return (
    <section className="about-section footer">
      <h2 className="about-section__primary">
        <Link className="nav-link white" to="/">
          <img className="logo" src={logo} alt="Home" />
        </Link>
      </h2>

      <p>
        Lafayette Ave 156, Brooklyn,NY,USA
        <br />
        35 Sl Andrews St, Cambridge CB2 3AR, Great Britain
      </p>
      +347 863106 681

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
      <p>
        Circle
        { ' ' }
        {new Date().getFullYear()}
        . All rights reserved
      </p>

    </section>
  );
}
