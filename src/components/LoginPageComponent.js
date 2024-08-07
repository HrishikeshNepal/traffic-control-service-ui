import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function LoginPageComponent() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your login logic here
    // For example: send data to your API

    // Simulate successful login
    navigate('/profile');
  };

  return (
    <div>
      <h1>Login</h1>
      <form className = 'form-container' onSubmit={handleSubmit}>
        <div className='form-group'>
            <label>Username:</label>
            <input type="text" name="username" onChange={handleChange} />
            <label>Password:</label>
            <input type="password" name="password" onChange={handleChange} />
            <button type="submit">Login</button>
            <p>
                Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
        </div>
      </form>
    </div>
  );
}

export default LoginPageComponent;
