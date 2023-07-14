import React, { useState } from 'react';
import './Login.css';
import { useLogin } from '../../hooks/useLogin';

const Login = () => {
  const { login } = useLogin();
  const [login_email, setLoginEmail] = useState('');
  const [login_password, setLoginPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    e.preventDefault();
    const email = login_email;
    const password = login_password;

    await login(email, password);
  };

  return (
    <div className="Login-Container">
      <form className="form" action="">
        <p className="form-title">Sign in to your account</p>
        <div className="input-container">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setLoginEmail(e.target.value)}
            value={login_email}
          />
          <span></span>
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setLoginPassword(e.target.value)}
            value={login_password}
          />
        </div>
        <button type="submit" className="submit" onClick={handleLogin}>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
