import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';
import { AiOutlineBell } from 'react-icons/ai';
import { RiArrowDownSLine } from 'react-icons/ri';
import { BiSearch } from 'react-icons/bi';
import profilePhoto from '../assets/profile-photo.jpeg';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="hamburger">
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} rounded color="#7e7d7f" />
        <nav className={isOpen ? 'navlinks Open' : 'navlinks'}>
          <NavLink to="/" activeclassname="active" onClick={() => setOpen(false)}>Houses</NavLink>
          <NavLink to="/MyFavourites" activeclassname="active" onClick={() => setOpen(false)}>My Favorites</NavLink>
          <NavLink to="/AddHouse" activeclassname="active" onClick={() => setOpen(false)}>Add house</NavLink>
          <NavLink to="/DeleteHouse" activeclassname="active" onClick={() => setOpen(false)}>Delete house</NavLink>
        </nav>
      </div>
      <div className="seacrh-bar">
        <input type="search" placeholder="search" />
        <BiSearch className="search-icon" />
      </div>
      <div className="profile-details">
        <AiOutlineBell className="notification-bell" />
        <p>Username</p>
        <RiArrowDownSLine />
        <img src={profilePhoto} alt="profile" className="profile-photo" />
      </div>
    </div>
  );
};

export default Navbar;
