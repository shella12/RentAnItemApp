import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="header">
      <Navigation />

      <div className="header-content mt-5">
        <h1 className="header-content__title">Finding house anywhere</h1>
        <p className="header-content__desc">
          The best offers for you at any point of your journey.
          where ever you are, feel yourself like at your own home.
        </p>
        <p>
          <Link className="btn btn-oval" to="/register">Hire Now</Link>
        </p>
      </div>
    </header>
  );
}
