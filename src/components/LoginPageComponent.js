import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import DriverService from '../services/DriverService';

function LoginPageComponent() {
  const [loginDriver, setLoginDriver] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  
  //const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginDriver({ ...loginDriver, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Assuming your backend API is running on http://localhost:8080
      const response = await DriverService.loginDriver(loginDriver);
      // Clear any previous error mesages
      setError('');
      if (response.status === 200) {
        //alert('Login successful!');
        navigate('/profile'); 
      }
    } catch (error) {
      console.error('Login failed!', error);
      setError('Invalid username or password. Please try again.');
    }
    
  };

  return (
    <div>
      <h1>Login</h1>
      <form className = 'form-container' onSubmit={handleSubmit}>
        <div className='form-group'>
            <label>Username:</label>
            <input type="text" name="username" onChange={handleChange} />
            <label>Password:</label>
            <input type="password" name="password" onChange={handleChange} /> <br />
            {error && <p style={{ color: 'red' }}>{error}</p>}
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
