import React, { useEffect, useState } from 'react'
import DriverService from '../services/DriverService';
import { Link } from 'react-router-dom';

const ListDriversComponent = () => {
    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        DriverService.getAllDrivers().then(response => {
            setDrivers(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, [])

  return (
    <div className='container'>
      <h2 className='text-centre'>List Of Drivers</h2>
      <Link to = '/add-driver' className='btn btn-primary mb-2'>Add Drivers</Link>
      <table className='table table-bordered table-striped'>
        <thead>
            <th>Id</th>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
        </thead>
        <tbody>
            {
                drivers.map(
                    driver => 
                    <tr key={driver.id}>
                        <td>{driver.id}</td>
                        <td>{driver.firstName}</td>
                        <td>{driver.middleName}</td>
                        <td>{driver.lastName}</td>
                        <td>{driver.phone}</td>
                        <td>{driver.email}</td>
                        <td>{driver.Address}</td>
                </tr>
                )
            }
        </tbody>
      </table>

    </div>
  )
}

export default ListDriversComponent
