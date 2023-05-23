import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      error: '',
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
        'https://renthousebackend.onrender.com/registrations',
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
        } else {
          this.setState({ error: 'error happened: please check email and password' });
        }
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        });
      });

    event.preventDefault();
  }

  render() {
    const {
      email, password, passwordConfirmation, error,
    } = this.state;

    return (
      <div className="add-house-section">
        <Link to="/">
          <div className="flex-center btn-back">
            <IoIosArrowBack className="back-icon" />
            <span>Back</span>
          </div>
        </Link>
        <div className="backdrop column flex-center">
          <h1>Sign Up</h1>
          <p>
            Hello there! Sign up and start managing your system
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

            <input
              className="input-text"
              type="password"
              name="passwordConfirmation"
              placeholder="Password confirmation"
              value={passwordConfirmation}
              onChange={this.handleChange}
              required
            />
            <p>{error}</p>

            <button type="submit" className="btn">Register</button>
          </form>
        </div>
      </div>
    );
  }
}

Registration.propTypes = {
  handleSuccessfulAuth: PropTypes.func.isRequired,
};

export default Registration;
