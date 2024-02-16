import axios from 'axios'

const TRAFFIC_BASE_REST_API_URL = 'http://localhost:8080/'

class DriverService{
    getAllDrivers(){
        return axios.get(TRAFFIC_BASE_REST_API_URL + '/getAllDrivers')
    }

    createDriver(driver){
        return axios.post(TRAFFIC_BASE_REST_API_URL + '/addDriver', driver)
    }

    getDriverById(driverId){
        return axios.get(TRAFFIC_BASE_REST_API_URL + driverId);
    }

    updateDriver(driverId, driver){
        return axios.put(TRAFFIC_BASE_REST_API_URL + "updateDriver" + driverId, driver)
    }

    deleteDriver(driverId){
        return axios.delete(TRAFFIC_BASE_REST_API_URL + "deleteDriverById" + driverId)
    }
}

export default new DriverService();