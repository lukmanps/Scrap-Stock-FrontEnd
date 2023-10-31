import axios from 'axios';
// "" https://scrapstock.online/ http://localhost:3000
const instance = axios.create({ baseURL: "https://scrapstock.online/" });

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
