import axios from '../../config/axios';

const submitPickupSchedule = (data) =>{
    return new Promise((resolve, reject) => {
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