import React from 'react';

function ProfilePageComponent() {
  // You can fetch user data from an API or context if needed
  // For simplicity, we'll just use static data here

  const user = {
    username: 'JohnDoe',
    email: 'johndoe@example.com'
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        <h2>Welcome, {user.username}!</h2>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
}

export default ProfilePageComponent;
