import Navigation from "../../components/Navigation/Navigation";
import HeaderOrder from "../../components/Header/HeaderOrder";
import OrderIncomingManager from "../../components/Orders/OrderIncomingManager";
import GetRole from "../../functions/GetRole";
import { useEffect, useState } from "react";

const OrdersIncomingPage = () => {
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
      <HeaderOrder/>
      {(role==='Manager')? //change into 'Manager' when GetRole works
        <OrderIncomingManager/>: <h2>Access denied!</h2>
      }
      
    </div>)
}

export default OrdersIncomingPage;
