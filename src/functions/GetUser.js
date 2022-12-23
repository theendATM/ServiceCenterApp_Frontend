import axios from "axios";

const getUser=async()=>
{
    try{
        const result=axios({
            method:"get",
            url:"https://localhost:7226/auth/roles",
            data:{

            },
        })
    }
    catch{

    }
}

export default getUser;