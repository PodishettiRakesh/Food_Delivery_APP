import React, { useState } from 'react';
import './Login.css';
import axios from 'axios'; // Import axios for HTTP requests
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState(''); // State to store email input
  const [password, setPassword] = useState(''); // State to store password input
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages
  const [successMessage, setSuccessMessage] = useState(''); // State for success messages

  const navigate = useNavigate(); // Initialize useNavigate
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    setErrorMessage(''); // Clear any previous error messages
    setSuccessMessage(''); // Clear any previous success messages

    try {
      // Make POST request to login endpoint
      const response = await axios.post('http://localhost:5000/api/users/login', { email, password });


      // Store token in localStorage or handle success
      localStorage.setItem('token', response.data.token);
      setSuccessMessage('Login successful!');
      navigate('/restaurant');
    } catch (error) {
      // Handle errors (e.g., invalid credentials, server issues)
      if (error.response) {
        setErrorMessage(error.response.data.message); // Use server-provided message
      } else {
        setErrorMessage('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
