import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-fotor-bg-remover-2023051812511.png';
import './custom-navbar.css'; 

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="sm" className="custom-navbar">
      <Navbar.Brand href="/"><img className="logo" src={logo} alt="circle" /></Navbar.Brand>
      <Navbar.Toggle style={{ fontSize: '2rem', padding: '0.5rem' }} aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        <Nav>

          <>
            <Link className="nav-link white " style={{ fontSize: '1.3rem', fontWeight: '550' }} to="/login">SIGN IN</Link>
            <Link className="nav-link" style={{ fontSize: '1.3rem', fontWeight: '500' }} to="/register">
              <span className="btn-menu">SIGN UP</span>
            </Link>
          </>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
