import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    const { email, password } = this.state;
    const { handleSuccessfulAuth } = this.props;

    axios
      .post(
        'http://localhost:3000/sessions',
        {
          user: {
            email,
            password,
          },
        },
        { withCredentials: true },
      )
      .then((response) => {
        if (response.data.logged_in) {
          handleSuccessfulAuth(response.data);
        } else {
          this.setState({ error: 'error happened: please check email and password' });
        }
      });
    event.preventDefault();
  }

  render() {
    const { email, password, error } = this.state;
    return (
      <div className="add-house-section">
        <div className="backdrop column flex-center">
          <h1>Sign in</h1>
          <p>
            Hello there! Sign in and start managing your system
          </p>
          <form onSubmit={this.handleSubmit} className="column">
            <input
              className="input-text"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
              required
            />

            <input
              className="input-text"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
              required
            />
            <p>{error}</p>
            <button type="submit" className="btn">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  handleSuccessfulAuth: PropTypes.func.isRequired,
};
