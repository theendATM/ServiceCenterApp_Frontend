import axios from "axios"

const fetchPartModelsForWarehouse = async () => {
    try
    {
        const result = await axios({
            method: "get",
            url: "https://localhost:7226/partmodels/current",
            withCredentials: 'include'
        })
        
        console.log(result);
        if(result.status === 200)
        {
            return result.data;
        }
        else
        {
            
        }     
    }
    catch (error)
    {
        console.log(error);
    }
}

export default fetchPartModelsForWarehouse;