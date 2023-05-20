import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home';
import Dashboard from './components/Dashboard';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
      user: null,
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  checkLoginStatus = () => {
    axios
      .get('http://localhost:3001/logged_in', { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in && this.state.loggedInStatus === 'NOT_LOGGED_IN') {
          this.setState({
            loggedInStatus: 'LOGGED_IN',
            user: response.data.user,
          });
        } else if (!response.data.logged_in && this.state.loggedInStatus === 'LOGGED_IN') {
          this.setState({
            loggedInStatus: 'NOT_LOGGED_IN',
            user: null,
          });
        }
      })
      .catch((error) => {
        console.log('check login error', error);
      });
  };

  handleLogout() {
    this.setState({
      loggedInStatus: 'NOT_LOGGED_IN',
      user: null,
    });
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: 'LOGGED_IN',
      user: data.user,
    });
  }

  render() {
    const { loggedInStatus, user } = this.state;

    return (
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Home handleLogin={this.handleLogin} handleLogout={this.handleLogout} loggedInStatus={loggedInStatus} />} />
            <Route path="/dashboard" element={<Dashboard loggedInStatus={loggedInStatus} />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
