import React from 'react';
import home from '../assets/houses.jpeg';

export default function FeatureSection() {
  return (
    <section className="about-section">
      <img src={home} className="img-fluid" alt="home" />
      <div className="about-section-details">
        <h4>Only best place for your rest</h4>
        <p>
          More than hundreds of house at your disposal. Only the best and checked with owners.
          We will find best place for you and conditions for a safe and comfortable place.
        </p>
        <button type="button" className="btn">
          Start free
        </button>
      </div>
    </section>
  );
}
