import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Service from "../../components/Service/Service";
import GetRole from "../../functions/GetRole";
import { useEffect, useState } from "react";

const ServicesPage = () => {
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
      {(role==='Manager' || role==='MainManager' || role==='Engineer')?
            <Service/>:<h2>Access denied!</h2>
  }
      
    </div>
    
  )
}

export default ServicesPage;