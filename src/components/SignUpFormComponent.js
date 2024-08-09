import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DriverService from '../services/DriverService';

function SignUpFormComponent({ onClose }) {
  const [driver, setDriver] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    username: '',
    password: ''
  });

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDriver({ ...driver, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const driverWithPassword = { ...driver, password };
      // Assuming your backend API is running on http://localhost:8080
      const response = await DriverService.signUpDriver(driverWithPassword)
      // Clear any previous error messages
      setError('');
      if (response.status === 200) {
        alert('Sign-up successful!');
        //onClose(); // Close the modal
        navigate('/login'); // Navigate to the login page
      }
    } catch (error) {
      console.error('There was an error signing up!', error);
      alert('Sign-up failed. Please try again.');
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form className = 'form-container' onSubmit={handleSubmit}>
        <div className='form-group'>
            <label>First Name:</label>
            <input type="text" name="firstName" value={driver.firstName} onChange={handleChange} required /><br/>
            <label>Middle Name:</label>
            <input type="text" name="middleName" value={driver.middleName} onChange={handleChange} required /><br/>
            <label>Last Name:</label>
            <input type="text" name="lastName" value={driver.lastName} onChange={handleChange} required /><br/>
            <label>Phone:</label>
            <input type="text"  name="phone" value={driver.phone} onChange={handleChange} required /><br/>
            <label>Email:</label>
            <input type="email"  name="email" value={driver.email} onChange={handleChange} required /><br/>
            <label>Address:</label>
            <input type="text" name="address" value={driver.address} onChange={handleChange} required /><br/>
            <label>username</label>
            <input type='text' placeholder='Enter prefered username' name='username' value={driver.username} onChange={handleChange} required /><br/>
            <label>password</label>
            <input type='password' name = 'password' value={password} onChange={handlePasswordChange} required /><br/>
            <label>Confirm Password:</label>
            <input type='password' value={confirmPassword} onChange={handleConfirmPasswordChange} required /><br/>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUpFormComponent;
