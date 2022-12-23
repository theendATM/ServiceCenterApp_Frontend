import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import UserEdit from "../../components/Users/UserEdit";
import GetRole from "../../functions/GetRole";
import { useEffect, useState } from "react";

const EditUserPage=()=>{
    const [role, setRole] = useState();

    useEffect(() => {
        const getRole = async () => 
        {
          const value = await GetRole();
          setRole(value);
        }
    
        getRole();
      }, [role]);
    return(
        <div>
            
            <Navigation/>
            <Header/>
            {(GetRole()==='MainManager')?
            <UserEdit/>:<h2>Access denied!</h2>
  }
            

        </div>
    )
}

export default EditUserPage;