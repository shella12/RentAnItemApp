import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import '../landing.css';

export default function Header() {
  return (
    <section className="top-section">
      <header className="header">
        <Navigation />
      </header>
      <div className="top-content">
        <h1 className="main-title">Find house anywhere</h1>
        <p>
          The best offers for you at any point of your journey.
          where ever you are, feel yourself like at your own home.
        </p>
        <Link className="btn btn-landing" to="/register">Rent a house</Link>
      </div>

    </section>
  );
}
