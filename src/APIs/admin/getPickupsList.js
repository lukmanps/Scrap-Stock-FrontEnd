import axios, {setAccessToken} from '../../config/axios';


const getPickupList = () => {
    return new Promise((resolve, reject) => {
        setAccessToken('admin');
        axios.get('/admin/pickups')
        .then((response)=> {
            resolve(response.data);
        })
        .catch((err) => {
            console.log(err, " : Error in getPickupLIst");
        })
    })
}

export default getPickupList