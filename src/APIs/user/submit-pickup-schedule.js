import axios, {setAccessToken} from '../../config/axios';

const submitPickupSchedule = (data) =>{
    return new Promise((resolve, reject) => {
        setAccessToken('user');
        axios.post('/sell-scrap', data)
        .then((response) => {
            resolve(response?.data);
        })
        .catch((err) => {
            console.log(err, " :AXIOS Error")
        })
    })
}

export default submitPickupSchedule;