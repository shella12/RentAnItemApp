import React from 'react';
import '../Landing.scss';
import { Container } from 'react-bootstrap';
import Header from '../componenets/Header';
import FeatureSection from '../componenets/FeatureSection';
import Footer from '../componenets/Footer';
import '../landing.css';

function Landing() {
  return (
    <Container>
      <Header />
      <FeatureSection />
      <Footer />
    </Container>
  );
}

export default Landing;
