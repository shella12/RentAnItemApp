import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
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
        }
      })
      .catch((error) => {
        console.log('login error', error);
      });
    event.preventDefault();
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  handleSuccessfulAuth: PropTypes.func.isRequired,
};
