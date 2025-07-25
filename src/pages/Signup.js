// src/pages/Signup.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // import useNavigate
import './Signup.css';

function Signup() {
  const navigate = useNavigate(); // initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Signup submitted:', { fullName, email, password });

    // Redirect to login page after successful signup
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Create Account</h2>

        <label htmlFor="fullName">Full Name</label>
        <input type="text" id="fullName" name="fullName" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
        />

        <button type="submit">Sign Up</button>

        <div className="form-footer">
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
