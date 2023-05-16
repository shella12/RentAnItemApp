import React from 'react';
import { useSelector } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/red-circle-effect-png-transparent-5Kdj5f.png';
import '../App.scss';

export default function Navigation() {
//   const token = useSelector(state => state.user.token);
//   const email = useSelector(state => state.users.email);

  return (
    <Navbar collapseOnSelect expand="sm" className="custom-navbar">
      <Navbar.Brand href="/"><img className="logo" src={logo} alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        <Nav className='auth_links'>
         
                <>
                  <Link className="nav-link " to="/login">SIGN IN</Link>
                  <span className="nav-link-space"></span>
                  <Link className="nav-link" to="/register">
                    <span className="btn-menu">SIGN UP</span>
                  </Link>
                </>
              
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
