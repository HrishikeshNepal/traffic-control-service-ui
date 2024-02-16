import axios from 'axios'

const TRAFFIC_BASE_REST_API_URL = 'http://localhost:8080/'

class DriverService{
    getAllDrivers(){
        return axios.get(TRAFFIC_BASE_REST_API_URL + '/getAllDrivers')
    }

    createDriver(driver){
        return axios.post(TRAFFIC_BASE_REST_API_URL + '/addDriver', driver)
    }
}

export default new DriverService();