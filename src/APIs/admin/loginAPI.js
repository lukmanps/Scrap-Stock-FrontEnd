import axios from '../../config/axios';

const doAdminLogin = (data) => {
    return new Promise((resolve, reject) => {
        axios
            .post('/admin/login', data)
            .then((response) => {
                if (response?.data?.status === false) {
                    reject(response?.data?.message);
                } else {
                    localStorage.setItem('adminToken', response?.data?.adminAccessToken);
                    resolve({
                        token: response?.data?.adminAccessToken
                    });
                }
            })
            .catch((err) => {
                console.log('AXIOS ERROR: ', err);
                reject({ message: 'Something went wrong. Please try again later' })
            })
    })
}

export default doAdminLogin;