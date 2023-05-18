import React from 'react';
import { Row, Col } from 'react-bootstrap';
import home from '../assets/WhatsApp Image 2023-05-16 at 3.38.19 PM.jpeg';

export default function FeatureSection() {
  return (
    <section className="about-section feature-section">
      <Row className="mt-2">
        <Col sm={6}>
          <img src={home} className="img-fluid" alt="home" />
        </Col>
        <Col sm={6} className="pt-5">
          <h4 className="about-section__left-title pt-5">
            Best rides for your trips
          </h4>
          <p className="about-section__desc">
            More than hundreds of rides at your disposal. Only the best and checked with owners.
            We will find best place for you and conditions for a safe parking.
          </p>
          <p>
            <a href="#register" className="btn btn-oval">
              Learn more
            </a>
          </p>
        </Col>
      </Row>
    </section>
  );
}
