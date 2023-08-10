import axios from "../../config/axios";

const fetchScrapItems = () => {
    return new Promise((resolve, reject) => {
        axios.get('/scrap-management')
            .then((response) => {
                console.log(response?.data, ": scrap materials")
                resolve(response?.data);
            })
            .catch((err) => {
                reject(err?.response.data.message);
            });
    });
};

export default fetchScrapItems;
