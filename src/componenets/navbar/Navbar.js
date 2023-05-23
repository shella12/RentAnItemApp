import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';
import { IoIosArrowBack } from 'react-icons/io';
import { BiSearch } from 'react-icons/bi';
import axios from 'axios';
import profilePhoto from '../../assets/profile-photo.jpeg';
import './navbar.css';

const Navbar = (props) => {
  const { title } = props;
  const [isOpen, setOpen] = useState(false);
  const isDetails = useParams().houseId !== undefined;
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.favorite.user);

  const handleLogout = useCallback(() => {
    axios
      .delete('http://localhost:3000/logout', { withCredentials: true })
      .then(() => {
        navigate('/'); // Redirect to the "Houses" page after successful logout
      });
  }, [navigate]);
  return (
    <div className="navbar">
      {isDetails ? (
        <NavLink to="/houses" className="back-link" aria-label="Back link">
          <IoIosArrowBack className="back-icon" />
        </NavLink>
      ) : (
        <div className="hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} size={20} rounded color="#7e7d7f" />
          <nav className={isOpen ? 'navlinks Open' : 'navlinks'}>
            <div className=" column mob-profile">
              <img src={profilePhoto} alt="profile" className="profile-photo mob-profile-photo" />
              <p className="username mob-username">Username</p>
              <p>{currentUser?.email}</p>
            </div>
            <NavLink to="/houses" activeclassname="active" onClick={() => setOpen(false)} aria-label="Houses link">Houses</NavLink>
            <NavLink to="/houses/favorites" activeclassname="active" onClick={() => setOpen(false)} aria-label="My Favorites link">My Favorites</NavLink>
            <NavLink to="/houses/add" activeclassname="active" onClick={() => setOpen(false)} aria-label="Add house link">Add house</NavLink>
            <NavLink to="/houses/delete" activeclassname="active" onClick={() => setOpen(false)} aria-label="Delete house link">Delete house</NavLink>
            <hr className="divider" />
            <NavLink activeclassname="active" onClick={handleLogout} aria-label="Log Out link">Log Out</NavLink>
          </nav>
        </div>
      )}

      <h1>{title}</h1>
      <BiSearch className="search-icon" />
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
