import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.png';

const Footer = () => (
  <section className="footer">
    <Link className="logo-block" to="/">
      <img className="logo" src={logo} alt="Home" />
      {' '}
      Circle
    </Link>
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

export default Footer;
