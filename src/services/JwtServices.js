import axios from "../axios";

export const JwtServices = {
    getToken: function (username, password) {
        return axios.post('/api/authenticate', {
            username,
            password
        });
    }
}