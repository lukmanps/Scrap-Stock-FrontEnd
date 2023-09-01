import axios from '../../config/axios';

const getUserInfo = () =>{
    try{
        axios.get('/admin/view-user?id=' + userId.id)
    }
    catch{

    }
}

export default getUserInfo;