import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background_banner from '../../assets/background_banner.jpg';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

   
    localStorage.setItem('email', email);
    console.log('Login successful with email:', email);

   
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-spinner">
        <img src={background_banner} alt="Background Banner" />
      </div>
      <form onSubmit={handleLogin} className="login-form">
        <h1>Login to Netflix</h1>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
