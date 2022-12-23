import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Users from "../../components/Users/Users";
import GetRole from "../../functions/GetRole";
import { useEffect, useState } from "react";

const UsersPage=()=>{
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
            {(role==='MainManager')?
            <Users/>:<h2>Access denied!</h2>
  }
            

        </div>
    )
}

export default UsersPage;