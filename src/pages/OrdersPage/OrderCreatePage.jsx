import HeaderOrder from "../../components/Header/HeaderOrder";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import CreateOrderManager from "../../components/CreateOrder/CreateOrderManager";
import CreateOrderMainManager from "../../components/CreateOrder/CreateOrderMainManager";
import { useEffect, useState } from "react";

import GetRole from "../../functions/GetRole";

const OrderActionsPage = () => {
  const [role, setRole] = useState();

    useEffect(() => {
        const getRole = async () => 
        {
          const value = await GetRole();
          setRole(value);
        }
    
        getRole();
      }, [role]);
  if(role==='Manager')
  return(
    <div>
      <Navigation/> 
      <HeaderOrder/>
      <CreateOrderManager/>         
    </div>
    
  )
  else if(role==='MainManager')
  return(
    <div>
      <Navigation/> 
      <Header/>
      <CreateOrderMainManager/>          
    </div>
  )
    else
      return(
        <div>
      <Navigation/> 
      <Header/>
      <h2>Access denied</h2>          
    </div>
      )

}
/**/
export default OrderActionsPage;