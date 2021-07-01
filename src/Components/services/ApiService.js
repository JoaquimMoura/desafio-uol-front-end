import axios from 'axios';
import * as Constants from '../utils/Constants';

class ApiService {

    findPlantao() {
        return axios.get(Constants.CRIENTE_API_BASE_URL);
    }

    findUserById(userId) {
        return axios.get(Constants.CRIENTE_API_BASE_URL + '/' + userId);
    }

    savePlantao(user) {
        return axios.post(Constants.CRIENTE_API_BASE_URL, user);
    }

}

export default new ApiService();