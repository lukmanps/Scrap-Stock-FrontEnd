import axios from '../../config/axios';

const getRecentPickups = async(userId) => {
    try{
        const pickups = await axios.get(`/get-recent-pickups?id=${userId}`);
        return pickups?.data;
    }
    catch(err){
        console.log(err, " :: Fetching Error in getRecentPickups");
        throw new Error(err);
    }
}

export default getRecentPickups;