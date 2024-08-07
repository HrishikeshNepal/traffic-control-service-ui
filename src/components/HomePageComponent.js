import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePageComponent = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className='homepage'>
      <h1 className='h1-text'>Kathmandu Traffic Control System</h1>
      <nav className="navbar">
        <div className="navbar-left">
          <a href="#home">Home</a>
          <a href="#contacts">Contacts</a>
          <a href="#about">About</a>
        </div>
        <div className="navbar-right">
          <button onClick={handleLoginClick}>Login</button>
          <button onClick={handleSignUpClick}>Sign Up</button>
        </div>
      </nav>
      <main>
        <section>
          <h1>Welcome to the Home Page</h1>
          {/* Other content of your homepage */}
        </section>
        <section id="contacts">
          <h2>Contact Information</h2>
          <p>Email: contact@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </section>
      </main>
    </div>
  );
};

export default HomePageComponent;
