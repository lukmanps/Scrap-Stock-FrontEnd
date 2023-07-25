import axios from '../../config/axios';

const submitPickupSchedule = (data) =>{
    console.log(data, " :: Data in Post api");
    return new Promise((resolve, reject) => {
        axios.post('/sell-scrap', data)
        .then((response) => {
            resolve(response);
        })
        .catch((err) => {
            reject(err);
        })
    })
}

export default submitPickupSchedule;