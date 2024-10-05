import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom';
import DriverService from '../services/DriverService'

const AddDriversComponent = () => {

    const[id, setId] = useState('')
    const[firstName, setFirstName] = useState('')
    const[middleName, setMiddleName] = useState('')
    const[lastName, setLastName] = useState('')
    const[phone, setPhone] = useState('')
    const[email, setEmail] = useState('')
    const[addressLine1, setAddressLine1] = useState('')
    const[addressLine2, setAddressLine2] = useState('')
    const[city, setCity] = useState('')
    const[province, setProvince] = useState('')
    const navigate = useNavigate();
    const {driverId} = useParams();

    const saveDriver = (e) => {
        e.preventDefault();
        const driver = {id, firstName, middleName, lastName, phone, email, addressLine1, addressLine2, city, province}

        if(driverId){
            DriverService.updateDriver(id, driver).then((response) => {
                navigate.push('/drivers')   
            }).catch(error => {
                console.log(error)
            })
        } else {
            DriverService.createDriver(driver).then((response) => {
                navigate.push('/drivers')
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect (() => {
        DriverService.getDriverById(driverId).then((response) => {
            setId(response.data.id)
            setFirstName(response.data.firstName)
            setMiddleName(response.data.middleName)
            setLastName(response.data.lastName)
            setPhone(response.data.phone)
            setEmail(response.data.email)
            setAddressLine1(response.data.addressLine1)
            setAddressLine2(response.data.setAddressLine2)
            setCity(response.data.city)
            setProvince(response.data.province)
        }).catch(error => {
            console.log(error)
        })
    }, [driverId])
    

    const title = () => {
        if(driverId){
            return <h2 className='text-center'>Update Driver</h2>
        } else {
            return <h2 className='text-center'>Add Driver</h2>
        }
    }

  return (
    <div>
        <br/><br/>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                       title()
                       //<h2 className='text-center'>Add Driver</h2>
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Driver Id: </label>
                                <input
                                type='text'
                                placeholder='Enter driver id'
                                name = "driverId"
                                className='form-control'
                                value={id}
                                onChange={(e) => setId(e.target.value)}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name: </label>
                                <input
                                type='text'
                                placeholder='Enter first name'
                                name = "firstName"
                                className='form-control'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Middle Name: </label>
                                <input
                                type='text'
                                placeholder='Enter middle name'
                                name = "middleName"
                                className='form-control'
                                value={middleName}
                                onChange={(e) => setMiddleName(e.target.value)}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name: </label>
                                <input
                                type='text'
                                placeholder='Enter last name'
                                name = "lastName"
                                className='form-control'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Phone: </label>
                                <input
                                type='text'
                                placeholder='Enter driver phone'
                                name = "phone"
                                className='form-control'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Email: </label>
                                <input
                                type='text'
                                placeholder='Enter driver email'
                                name = "email"
                                className='form-control'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Address Line 1: </label>
                                <input
                                type='text'
                                placeholder='Address Line 1'
                                name = "address line 1"
                                className='form-control'
                                value={addressLine1}
                                onChange={(e) => setAddressLine1(e.target.value)}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Address Line 2: </label>
                                <input
                                type='text'
                                placeholder='Aaddress Line 2'
                                name = "address line 2"
                                className='form-control'
                                value={addressLine2}
                                onChange={(e) => setAddressLine2(e.target.value)}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>City: </label>
                                <input
                                type='text'
                                placeholder='Enter your city'
                                name = "city"
                                className='form-control'
                                value={city}
                                onChange={(e) => setCity(e.target.value)}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Province: </label>
                                <input
                                type='text'
                                placeholder='Enter your province'
                                name = "province"
                                className='form-control'
                                value={province}
                                onChange={(e) => setProvince(e.target.value)}>
                                </input>
                            </div>
                            <button className='btn btn-success' onClick={(e) => saveDriver(e)}>submit</button>
                            <Link to = '/drivers' className='btn btn-danger'> Cancel </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default AddDriversComponent