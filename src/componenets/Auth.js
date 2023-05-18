import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/auth/authReducer';

const Auth = () => {
  const [emailRegister, setEmailRegister] = React.useState('dickoallassane1997@gmail.com');
  const [passwordRegister, setPasswordRegister] = React.useState('paspas123');
  const [emailLogin, setEmailLogin] = React.useState('dickoallassane1997@gmail.com');
  const [passwordLogin, setPasswordLogin] = React.useState('paspas123');

  const dispatch = useDispatch();
  const register = (e) => {
    e.preventDefault();
    dispatch(registerUser({ email: emailRegister, password: passwordRegister }));
  };
  const login = (e) => {
    e.preventDefault();
    // dispatch(login({email: emailLogin, password: passwordLogin}))
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={(e) => { login(e); }}>
        <input type="email" placeholder="Email" value={emailLogin} onChange={(e) => setEmailLogin(e.currentTarget.value)} />
        <input type="password" placeholder="Password" value={passwordLogin} onChange={(e) => setPasswordLogin(e.currentTarget.value)} />
        <button type="submit">Login</button>
      </form>
      <h2>Register</h2>
      <form onSubmit={(e) => { register(e); }}>
        <input type="email" placeholder="Email" value={emailRegister} onChange={(e) => setEmailRegister(e.currentTarget.value)} />
        <input type="password" placeholder="Password" value={passwordRegister} onChange={(e) => setPasswordRegister(e.currentTarget.value)} />
        <button type="submit">Register</button>
      </form>

    </div>
  );
};

export default Auth;
