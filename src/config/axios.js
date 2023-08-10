import axios from 'axios';

const instance = axios.create({ baseURL: "http://localhost:8000" });

export const setAccessToken = (roll) => {
    let token; // Declare the token variable here
    if (roll === 'admin') {
       token = localStorage.getItem('adminToken');
    } else {
        token = localStorage.getItem('userToken');
    }
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
}

setAccessToken('user');


export default instance;
