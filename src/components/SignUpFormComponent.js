import React, { useState } from 'react';
import axios from 'axios';

function SignUpFormComponent({ closeModal }) {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [showPasswordWarning, setShowPasswordWarning] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [showPasswordInstructions, setShowPasswordInstructions] = useState(false);

  const passwordRequirements = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

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
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/signup', {
        firstName: formData.firstName,
        middleName: formData.middleName,
        lastName: formData.lastName,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        username: formData.username,
        password: formData.password,
      });
      
      if (response.status === 200) {
        closeModal(); // Close the modal on successful sign-up
      }
    } catch (error) {
      console.error('Error during sign up:', error);
      setError('Failed to sign up, please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </div>
      <div>
        <label>Middle Name</label>
        <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </div>
      <div>
        <label>Phone</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Address</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <div>
        <label>Username</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
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
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
      )}

      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUpFormComponent;
