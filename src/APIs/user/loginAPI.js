import axios from '../../config/axios';

const handleLogin = (loginData) => {
    return new Promise((resolve, reject) => {
        axios
            .post('/login', loginData)
            .then((response) => {
                if (response?.data?.status === false) {  //Password Incorrect or User Blocked
                    reject(response?.data?.message);
                } else {
                    localStorage.setItem('userToken', response?.data?.token); //User found and Logged In
                    resolve({
                        status: true, 
                        token: response?.data?.token, 
                        userData: response?.data?.userData
                    });
                }
            })
            .catch((err) => {
                console.log('AXIOS ERROR: ', err);  
                reject({message: 'Something went wrong. Please try again later.'});
            })
    })
}

export default handleLogin;