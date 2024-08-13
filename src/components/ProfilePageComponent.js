import React from 'react';

function ProfilePageComponent() {
  // You can fetch user data from an API or context if needed
  // For simplicity, we'll just use static data here

  const user = {
    username: 'Hrishikesh Nepal',
    email: 'nepal.hrishikesh@gmail.com'
  };

  return (
    <div>
      <div className='homepage'>
      <h1 className='h1-text'>Kathmandu Traffic Control System</h1>
      <nav className="navbar">
        <div className="navbar-left">
          <a href="#home">Home</a>
          <a href="#contacts">Contacts</a>
          <a href="#about">About</a>
        </div>
      </nav>
      </div>
      <h1>Profile Page</h1>
      <div>
        <h2>Welcome, {user.username}!</h2>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
}

export default ProfilePageComponent;
