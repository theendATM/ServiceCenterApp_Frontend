import Navigation from "../../components/Navigation/Navigation";
import HeaderOrder from "../../components/Header/HeaderOrder";
import OrderRequestManager from "../../components/Orders/OrderRequestManager";
import GetRole from "../../functions/GetRole";
import { useEffect, useState } from "react";

const OrdersRequestsPage = () => {
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
        <OrderRequestManager/>:<h2>Access denied!</h2>
      }
              
          
        </div>)
}

export default OrdersRequestsPage;
