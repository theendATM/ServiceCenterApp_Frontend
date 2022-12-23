import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import ServiceTransactions from "../../components/Service/ServiceTransactions";
import GetRole from "../../functions/GetRole";
import { useEffect, useState } from "react";

const ServiceTransactionsPage = () => {
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
      {(role==='Manager' || role==='Engineer')?
            <ServiceTransactions/>:<h2>Access denied!</h2>
  }
      
    </div>
    
  )
}

export default ServiceTransactionsPage;