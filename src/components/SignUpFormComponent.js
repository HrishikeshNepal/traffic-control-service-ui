import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DriverService from '../services/DriverService';

function SignUpFormComponent({ closeModal }) {
  const [newDriverInfo, setNewDriverInfo] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    phone: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    province: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [showPasswordInstructions, setShowPasswordInstructions] = useState(false);

  const navigate = useNavigate();

  const passwordRequirements = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDriverInfo({ ...newDriverInfo, [e.target.name]: e.target.value });

    if (name === 'password') {
      if (passwordRequirements.test(value)) {
        setPasswordValid(true);
        setError('');
      } else {
        setPasswordValid(false);
        setError('Password must be at least 12 characters long, contain one uppercase letter, one number, and one special character.');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newDriverInfo.password !== newDriverInfo.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      console.log("New signing in driver Info: ", JSON.stringify(newDriverInfo)); // need to update the message to not include passwords
      const response = await DriverService.signUpDriver(newDriverInfo);
      setError('');
      if (response.status === 200) {
        navigate('/login');
      }
    } catch (error) {
      console.error('Error during sign up:', error);
      setError('Failed to sign up, please try again.');
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input type="text" name="firstName" value={newDriverInfo.firstName} onChange={handleChange} required />
      </div>
      <div>
        <label>Middle Name</label>
        <input type="text" name="middleName" value={newDriverInfo.middleName} onChange={handleChange} />
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" name="lastName" value={newDriverInfo.lastName} onChange={handleChange} required />
      </div>
      <div>
        <label>Phone</label>
        <input type="text" name="phone" value={newDriverInfo.phone} onChange={handleChange} required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={newDriverInfo.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Address Line 1</label>
        <input type="text" name="addressLine1" value={newDriverInfo.addressLine1} onChange={handleChange} required />
      </div>
      <div>
        <label>Address Line 2</label>
        <input type="text" name="addressLine2" value={newDriverInfo.addressLine2} onChange={handleChange} required />
      </div>
      <div>
        <label>City</label>
        <input type="text" name="city" value={newDriverInfo.city} onChange={handleChange} required />
      </div>
      <div>
        <label>Province</label>
        <input type="text" name="province" value={newDriverInfo.province} onChange={handleChange} required />
      </div>
      <div>
        <label>Username</label>
        <input type="text" name="username" value={newDriverInfo.username} onChange={handleChange} required />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={newDriverInfo.password}
          placeholder="Enter a strong password"
          onChange={handleChange}
          required
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <a
          href="#"
          onMouseEnter={() => setShowPasswordInstructions(true)}
          onMouseLeave={() => setShowPasswordInstructions(false)}
          onClick={(e) => {
            e.preventDefault();
            setShowPasswordInstructions((prev) => !prev);
          }}
          style={{ color: 'blue', cursor: 'pointer' }}
        >
          Password Requirements
        </a>

        {showPasswordInstructions && (
          <div style={{ color: 'gray', fontSize: '0.85rem', marginTop: '10px' }}>
            <ul>
              <li>At least 12 characters long</li>
              <li>Contains one uppercase letter</li>
              <li>Contains one number</li>
              <li>Contains one special character (@$!%*?&)</li>
            </ul>
          </div>
        )}
      </div>

      {/* Confirm password only visible when password is valid */}
      {passwordValid && (
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-enter password"
            value={newDriverInfo.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
      )}

      <br />
      <button type="submit">Sign Up</button>

      <br />
        <br />
        <button className='btn btn-danger' onClick={handleCancel}>
            Cancel
        </button>
    </form>
  );
}

export default SignUpFormComponent;
