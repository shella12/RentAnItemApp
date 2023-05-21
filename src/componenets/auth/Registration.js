import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    const { email, password, passwordConfirmation } = this.state;
    const { handleSuccessfulAuth } = this.props;

    axios
      .post(
        'http://localhost:3000/registrations',
        {
          user: {
            email,
            password,
            password_confirmation: passwordConfirmation,
          },
        },
        { withCredentials: true },
      )
      .then((response) => {
        if (response.data.status === 'created') {
          handleSuccessfulAuth(response.data);
        }
      })
      .catch((error) => {
        console.log('registration error', error);
      });

    event.preventDefault();
  }

  render() {
    const { email, password, passwordConfirmation } = this.state;

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

          <input
            type="password"
            name="passwordConfirmation"
            placeholder="Password confirmation"
            value={passwordConfirmation}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

Registration.propTypes = {
  handleSuccessfulAuth: PropTypes.func.isRequired,
};

export default Registration;
