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
      const driverResponse = await DriverService.loginDriver(loginDriver);
      // Clear any previous error mesages
      setError('');
      if (driverResponse.status === 200) {
        const driverInfo = driverResponse.data;
        // Navigate to profile page with the driver object
        navigate('/profile', { state: { driverInfo } });
      }
    } catch (error) {
      console.error('Login failed!', error);
      setError('Invalid username or password. Please try again.');
    }
  };

  const handleCancel = () => {
    navigate('/');
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
              <br />
                Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
            <button className='btn btn-danger' onClick={handleCancel}>
                Cancel
            </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPageComponent;
