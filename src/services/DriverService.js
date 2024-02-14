import axios from 'axios'

const TRAFFIC_BASE_REST_API_URL = 'http://localhost:8080/controlsystem/v2/getdriversjpa/all'

class DriverService{
    getAllDrivers(){
        return axios.get(TRAFFIC_BASE_REST_API_URL)
    }
}

export default new DriverService();