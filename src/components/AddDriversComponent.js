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
    const[address, setAddress] = useState('')
    const navigate = useNavigate();
    const {driverId} = useParams();

    const saveOrUpdateDriver = (e) => {
        e.preventDefault();

        const driver = {id, firstName, middleName, lastName, phone, email, address}

        if(id){
            DriverService.updateDriver(id, driver).then((response) => {
                history.push('/drivers')   
            }).catch(error => {
                console.log(error)
            })
        } else {
            DriverService.createDriver(driver).then((response) => {
                console.log(response.data)
                navigate.push('/drivers')
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect (() => {
        DriverService.getDriverById(driverId).then((response) => {
            setFirstName(response.data.firstName)
            setMiddleName(response.data.middleName)
            setLastName(response.data.lastName)
            setPhone(response.data.phone)
            setEmail(response.data.email)
            setAddress(response.data.address)
        }).catch(error => {
            console.log(error)
        })
    }, [])
    

    const title = () => {
        if(id){
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
                                placeholder='Enter driver id'
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
                                <label className='form-label'>Address: </label>
                                <input
                                type='text'
                                placeholder='Enter driver address'
                                name = "address"
                                className='form-control'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}>
                                </input>
                            </div>
                            <button className='btn btn-success' onClick={(e) => saveOrUpdateDriver(e)}>submit</button>
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