import React from 'react';
import { useLocation } from 'react-router-dom';


function ProfilePageComponent() {

  const location = useLocation();
  const { driverInfo } = location.state || {}; // Get the driver object from state

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
          <a href= "/">Home</a>
          <a href="#contacts">Contacts</a>
          <a href="#about">About</a>
        </div>
      </nav>
      </div>
      <h1>Profile Page</h1>
      <div>
        <h2><strong>Welcome, {driverInfo.firstName+ ' ' + driverInfo.middleName + ' ' + driverInfo.lastName}!</strong></h2>
        <p><strong>Email: {driverInfo.email}</strong></p>
      <div>
      {driverInfo ? (
        <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', marginTop: '20px' }}>
          <thead>
            <tr>
              <th>Driver ID</th>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
              {/* <th>Violations</th>
              <th>Pay Penalty</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{driverInfo.driverId}</td>
              <td>{driverInfo.firstName}</td>
              <td>{driverInfo.middleName}</td>
              <td>{driverInfo.lastName}</td>
              <td>{driverInfo.phone}</td>
              <td>{driverInfo.email}</td>
              <td>{driverInfo.addressLine1 + ', ' + driverInfo.addressLine2 + ', ' + 
                driverInfo.city + ', ' + driverInfo.province}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No driver data available.</p>
      )}
    </div>
      </div>
    </div>
  );
}

export default ProfilePageComponent;
