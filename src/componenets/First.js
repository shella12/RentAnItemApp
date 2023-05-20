import React, { useCallback } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import Registration from './auth/Registration';
import Login from './auth/Login';

const Home = ({ handleLogin, handleLogout, loggedInStatus }) => {
  const navigate = useNavigate();

  const handleSuccessfulAuth = useCallback((data) => {
    handleLogin(data);
    navigate('/houses');
  }, [handleLogin, navigate]);

  const handleLogoutClick = useCallback(() => {
    axios
      .delete('http://localhost:3000/logout', { withCredentials: true })
      .then(() => {
        handleLogout();
      })
      .catch((error) => {
        console.log('logout error', error);
      });
  }, [handleLogout]);

  return (
    <div>
      <h1>Home</h1>
      <h1>
        Status:
        {loggedInStatus}
      </h1>
      <button type="button" onClick={handleLogoutClick}>
        Logout
      </button>
      <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
      <Login handleSuccessfulAuth={handleSuccessfulAuth} />
    </div>
  );
};

Home.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  loggedInStatus: PropTypes.string.isRequired,
};

export default Home;
