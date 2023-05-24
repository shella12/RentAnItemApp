import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../components/Header';
import FeatureSection from '../../components/FeatureSection';
import Footer from '../../components/Footer';
import './landing.css';

const Landing = () => (
  <Container>
    <Header />
    <FeatureSection />
    <Footer />
  </Container>
);

export default Landing;
