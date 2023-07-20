import axios from '../../../../config/axios';


export const addMaterial = (formData) => {
    console.log('FORM DATA IN API', formData);
    axios.post('/admin/add-material', formData)
        .then((response) => {
            console.log(response.data);
            return true;
        })
        .catch((err) => {
            console.log(err, " :AXIOS Error");
            return false;
        })
}

export default {
    addMaterial
}