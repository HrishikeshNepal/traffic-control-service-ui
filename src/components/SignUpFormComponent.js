import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpFormComponent() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your sign-up logic here
    // For example: send data to your API

    // Navigate to the login page after sign-up
    navigate('/login');
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form className = 'form-container' onSubmit={handleSubmit}>
        <div className='form-group'>
            <label>First Name:</label>
            <input type="text" name="your first name" onChange={handleChange} /><br/>
            <label>Middle Name:</label>
            <input type="text" name="password"  onChange={handleChange} /><br/>
            <label>Last Name:</label>
            <input type="password" name="password"  onChange={handleChange} /><br/>
            <label>Phone:</label>
            <input type="password" name="password"  onChange={handleChange} /><br/>
            <label>Email:</label>
            <input type="password" name="password"  onChange={handleChange} /><br/>
            <label>Address:</label>
            <input type="password" name="password"  onChange={handleChange} /><br/>
            <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUpFormComponent;
