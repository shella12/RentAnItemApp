import React, { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navigation() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="navbar-landing">
      <NavLink to="/" className="logo-block">
        <img className="logo" src={logo} alt="Logo" />
        Circle
      </NavLink>
      <div className="hamburger-landing">
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} rounded color="#ffffff" />
        <nav className={isOpen ? 'navlinks-landing Open' : 'navlinks-landing'}>
          <NavLink activeclassname="active" onClick={() => setOpen(false)} aria-label="Login link" to="/login">SIGN IN</NavLink>
          <NavLink activeclassname="active" onClick={() => setOpen(false)} aria-label="Sign up link" to="/register">SIGN UP</NavLink>
        </nav>
      </div>
      <div className="desktop-links">
        <NavLink activeclassname="active" onClick={() => setOpen(false)} aria-label="Login link" to="/login">SIGN IN</NavLink>
        <NavLink activeclassname="active" onClick={() => setOpen(false)} aria-label="Sign up link" to="/register">SIGN UP</NavLink>
      </div>
    </div>
  );
}
