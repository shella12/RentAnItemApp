import React from 'react';
import { Row, Col } from 'react-bootstrap';
import home from '../assets/WhatsApp Image 2023-05-16 at 3.38.19 PM.jpeg';

export default function FeatureSection() {
  const isMobile = window.innerWidth <= 767;

  return (
    <section className="about-section feature-section">
      <Row className="mt-2">
        <Col xs={12} sm={6}>
          <img src={home} className="img-fluid" alt="ride" />
        </Col>
        <Col xs={12} sm={6} className="pt-5">
          <h4 className="about-section__left-title pt-5">
            Only the best for your rest
          </h4>
          <p className="about-section__desc">
            More than hundreds of rides at your disposal. Only the best and checked with owners.
            We will find the best place for you and ensure safe parking conditions.
          </p>
          <p>
            <a href="#register" className="btn btn-oval_feature ">
              Learn more
            </a>
          </p>
        </Col>
        {isMobile && (
          <>
            <Col xs={12} className="pt-5">
              <img src={home} className="img-fluid" alt="ride" />
              <h4 className="about-section__left-title pt-5">
                Only the best for your rest
              </h4>
              <p className="about-section__desc">
                More than hundreds of rides at your disposal. Only the best and checked with owners.
                We will find the best place for you and ensure safe parking conditions.
              </p>
              <p>
                <a href="#register" className="btn btn-oval">
                  Learn more
                </a>
              </p>
            </Col>
          </>
        )}
      </Row>
    </section>
  );
}
