import axios from '../../config/axios';

const fetchReviews = () => {
    return new Promise ((resolve, reject) => {
        axios.get('/get-reviews')
        .then((response)=> {
            resolve(response?.data);
        })
        .catch((err)=> {
            reject(err, " ::: Error from backend");
        })
    })
    
}

export default fetchReviews;