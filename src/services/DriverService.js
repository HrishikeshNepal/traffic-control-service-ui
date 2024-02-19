import axios from 'axios'

const TRAFFIC_BASE_REST_API_URL = 'http://localhost:8080/v2/tcs/'

class DriverService{
    getAllDrivers(){
        return axios.get(TRAFFIC_BASE_REST_API_URL + 'getAllDrivers')
    }

    createDriver(driver){
        return axios.post(TRAFFIC_BASE_REST_API_URL + 'addDriver', driver)
    }

    getDriverById(id){
        return axios.get(TRAFFIC_BASE_REST_API_URL + 'getdriver/' + id, id);
    }

    updateDriver(driverId, driver){
        return axios.put(TRAFFIC_BASE_REST_API_URL + "updateDriver/" + driverId, driverId, driver)
    }

    deleteDriver(driverId){
        return axios.delete(TRAFFIC_BASE_REST_API_URL + "deleteDriverById/" + driverId, driverId)
    }
}

export default new DriverService();