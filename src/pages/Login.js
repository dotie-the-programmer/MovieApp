// src/pages/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // import useNavigate
import './Login.css'; // Import the CSS file

function Login() {
  const navigate = useNavigate(); // initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');
    console.log('Login submitted:', { username, password });

    // Redirect to movies page after successful login
    navigate('/movies/popular');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Login</h2>

        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
