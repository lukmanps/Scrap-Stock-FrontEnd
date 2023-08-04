import axios from "../../config/axios";

const fetchScrapItems = () => {
    return new Promise((resolve, reject) => {
        axios.get('/scrap-management')
            .then((response) => {
                console.log(response.data, ": scrap materials")
                // setScrap(response.data);
                resolve(response?.data);
            })
            .catch((err) => {
                console.log(err, " : AXIOS Error");
                reject({message: 'Unexpected Error Occurs!'});
            });
    });
};

export default fetchScrapItems;
