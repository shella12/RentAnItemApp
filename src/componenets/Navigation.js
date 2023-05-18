import React from 'react';
import { useSelector } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_white.png';

export default function Navigation() {
  // const token = useSelector(state => state.user.token);
  // const email = useSelector(state => state.user.email

  return (
    <Navbar collapseOnSelect expand="sm">
      <Navbar.Brand href="/"><img className="logo" src={logo} alt="Car Rentals" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        <Nav>
       
                <>
                  <Link className="nav-link white" to="/login">SIGN IN</Link>
                  <Link className="nav-link" to="/register">
                    <span className="btn-menu">SIGN UP</span>
                  </Link>
                </>
          
              
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
