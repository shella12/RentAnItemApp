import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Registration from './auth/Registration';
import Login from './auth/Login';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    const { handleLogin, history } = this.props;
    handleLogin(data);
    history.push('/dashboard');
  }

  handleLogoutClick() {
    const { handleLogout } = this.props;
    axios
      .delete('http://localhost:3001/logout', { withCredentials: true })
      .then(() => {
        handleLogout();
      })
      .catch((error) => {
        console.log('logout error', error);
      });
  }

  render() {
    const { loggedInStatus } = this.props;
    return (
      <div>
        <h1>Home</h1>
        <h1>
          Status:
          {loggedInStatus}
        </h1>
        <button type="button" onClick={() => this.handleLogoutClick()}>
          Logout
        </button>
        <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>
    );
  }
}

Home.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  loggedInStatus: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
