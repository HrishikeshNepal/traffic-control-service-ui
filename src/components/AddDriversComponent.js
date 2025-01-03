import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DriverService from '../services/DriverService'

function AddDriversComponent() {
    const [newDriverInfo, setNewDriverInfo] = useState({
        driverId: '',
        firstName: '',
        middleName: '',
        lastName: '',
        phone: '',
        email: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        province: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setNewDriverInfo({ ...newDriverInfo, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Assuming your backend API is running on http://localhost:8080
            const addNewDriverResponse = await DriverService.createDriver(newDriverInfo);
            // Clear any previous error mesages
            setError('');
            if(addNewDriverResponse.status === 200) {
                const driverInfo = addNewDriverResponse.data;
                // Navigate to profile page with the driver object
                navigate('/drivers', { state: { driverInfo } });
            }
        } catch (error) {
            console.error('Create driver info failed!', error);
            setError('Adding new driver record failed, please check your inputs again!');
        }
    }

    const handleCancel = () => {
        navigate('/drivers');
      };

    const title = () => {
        return <h2 className='text-center'>Add Driver</h2>
    }

  return (
    <div>
        <br/><br/>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                       title()
                    }
                    <div className='card-body'>
                        <form onSubmit={handleSubmit}>
                        <div className='form-group mb-2'>
                                <label className='form-label'>Driver Id: </label>
                                <input
                                type='text'
                                placeholder='Enter driver ID'
                                name = "driverId"
                                className='form-control'
                                onChange={handleChange}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name: </label>
                                <input
                                type='text'
                                placeholder='Enter first name'
                                name = "firstName"
                                className='form-control'
                                onChange={handleChange}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Middle Name: </label>
                                <input
                                type='text'
                                placeholder='Enter middle name'
                                name = "middleName"
                                className='form-control'
                                onChange={handleChange}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name: </label>
                                <input
                                type='text'
                                placeholder='Enter last name'
                                name = "lastName"
                                className='form-control'
                                onChange={handleChange}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Phone: </label>
                                <input
                                type='text'
                                placeholder='Enter driver phone'
                                name = "phone"
                                className='form-control'
                                onChange={handleChange}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Email: </label>
                                <input
                                type='text'
                                placeholder='Enter driver email'
                                name = "email"
                                className='form-control'
                                onChange={handleChange}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Address Line 1: </label>
                                <input
                                type='text'
                                placeholder='Address Line 1'
                                name = "addressLine1"
                                className='form-control'
                                onChange={handleChange}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Address Line 2: </label>
                                <input
                                type='text'
                                placeholder='Aaddress Line 2'
                                name = "addressLine2"
                                className='form-control'
                                onChange={handleChange}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>City: </label>
                                <input
                                type='text'
                                placeholder='Enter your city'
                                name = "city"
                                className='form-control'
                                onChange={handleChange}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Province: </label>
                                <input
                                type='text'
                                placeholder='Enter your province'
                                name = "province"
                                className='form-control'
                                onChange={handleChange}>
                                </input>
                            </div>
                            <button type='submit'>submit</button>
                            <br />
                            <br />
                            <button className='btn btn-danger' onClick={handleCancel}>
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default AddDriversComponent