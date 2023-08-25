import axios from 'axios';

const instance = axios.create({ baseURL: "https://scrapstock.online/" });

export const setAccessToken = (roll) => {
    let token; // Declare the token variable here
    if (roll === 'admin') {
       token = localStorage.getItem('adminToken');
    } else {
        token = localStorage.getItem('userToken');
        console.log(token, 'User Token in client side');
    }
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
}

setAccessToken('user');


export default instance;
