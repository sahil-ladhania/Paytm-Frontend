import axios from 'axios';

const BASE_URL = `http://localhost:81/api/v1/users`;

export const getAllUsers = () => {
    return axios.get(BASE_URL)
        .then((response) => {
            console.log(response.data);
            console.log(response.status);
        })
        .catch((error) => {
            console.log(error);
        })
}