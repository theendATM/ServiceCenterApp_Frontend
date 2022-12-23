import axios from "axios"

const fetchServices = async () => {
    try
    {
        const result = await axios({
            method: "get",
            url: "https://localhost:7226//history",
            withCredentials: 'include'
        })
        
        console.log(result);
        if(result.status === 200)
        {
            return result.data;
        }
        else
        {
            return null;
        }     
    }
    catch (error)
    {
        console.log(error);
    }
}

export default fetchServices;