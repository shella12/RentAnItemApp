import { NavLink } from 'react-router-dom';


const Navbar = ()=> {
  return (
    <nav className="navbar">
      <NavLink to="/" activeclassname="active">Houses</NavLink>
      <NavLink to="/MyFavourites" activeclassname="active">My Favorites</NavLink>
      <NavLink to="/AddHouse" activeclassname="active">Add house</NavLink>
      <NavLink to="/DeleteHouse" activeclassname="active">Delete house</NavLink>
    </nav>
  );
}

export default Navbar;