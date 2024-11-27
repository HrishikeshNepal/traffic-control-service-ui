import React, { useState } from 'react'
import { useLocation, useNavigate, useParams} from 'react-router-dom';
import DriverService from '../services/DriverService'

function UpdateDriversComponent() {
    const {driverId} = useParams();
    console.log("Driver ID:", driverId);
    const location = useLocation();
    const originalDriverInfo = useState(location.state?.driverInfo || {});
    const [updatingDriverInfo, setUpdatingDriverInfo] = useState(location.state?.driverInfo || {});
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUpdatingDriverInfo({ ...updatingDriverInfo, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Assuming your backend API is running on http://localhost:8080
            const updatedDriverResponse = await DriverService.updateDriver(driverId, updatingDriverInfo);
            // Clear any previous error mesages
            setError('');
            if(updatedDriverResponse.status === 200) {
                const driverInfo = updatedDriverResponse.data;
                // Navigate to profile page with the driver object
                navigate(`/profile?driver-id=${driverInfo.driverId}`, { state: { driverInfo } });
            }
        } catch (error) {
            console.error('Update failed!', error);
            setError('Update failed, please check your inputs again!');
        }
    }

    const handleCancel = () => {
        try {
            if (!driverId) {
                throw new Error("Driver ID is undefined or invalid.");
            }
            navigate(`/profile?driver-id=${driverId}`, { state: { originalDriverInfo } });
        } catch (error) {
            console.error("Navigation error:", error);
            // Optional: Display a user-friendly message or handle fallback logic
            //alert("Failed to navigate back to the profile page. Please try again.");
        }
    };

    const title = () => {
        return <h2 className='text-center'>Update Driver</h2>
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
                                <label className='form-label'>First Name: </label>
                                <input
                                type='text'
                                value={updatingDriverInfo.firstName} 
                                name = "firstName"
                                className='form-control'
                                onChange={handleChange}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Middle Name: </label>
                                <input
                                type='text'
                                value={updatingDriverInfo.middleName} 
                                name = "middleName"
                                className='form-control'
                                onChange={handleChange}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name: </label>
                                <input
                                type='text'
                                value={updatingDriverInfo.lastName}
                                name = "lastName"
                                className='form-control'
                                onChange={handleChange}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Phone: </label>
                                <input
                                type='text'
                                value={updatingDriverInfo.phone}
                                name = "phone"
                                className='form-control'
                                onChange={handleChange}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Email: </label>
                                <input
                                type='text'
                                value={updatingDriverInfo.email}
                                name = "email"
                                className='form-control'
                                onChange={handleChange}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Address Line 1: </label>
                                <input
                                type='text'
                                value={updatingDriverInfo.addressLine1}
                                name = "addressLine1"
                                className='form-control'
                                onChange={handleChange}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Address Line 2: </label>
                                <input
                                type='text'
                                value={updatingDriverInfo.addressLine2}
                                name = "addressLine2"
                                className='form-control'
                                onChange={handleChange}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>City: </label>
                                <input
                                type='text'
                                value={updatingDriverInfo.city}
                                name = "city"
                                className='form-control'
                                onChange={handleChange}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Province: </label>
                                <input
                                type='text'
                                value={updatingDriverInfo.province}
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


export default UpdateDriversComponent