import axios from "../../config/axios";

const fetchScrapItems = () => {
    return new Promise((resolve, reject) => {
        axios.get('/scrap-management')
            .then((response) => {
                console.log(response?.data, ": scrap materials")
                resolve(response?.data);
            })
            .catch((err) => {
                console.log(err, ":: AXIOS EROOR in fetching scrap");
                reject(err?.message);
                throw new Error('Error while fetching Data');
            });
    });
};

export default fetchScrapItems;
