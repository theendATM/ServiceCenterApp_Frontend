import HeaderOrder from "../../components/Header/HeaderOrder";
import Navigation from "../../components/Navigation/Navigation";
import CreateOrderManager from "../../components/CreateOrder/CreateOrderManager";
import { useEffect } from "react";
import GetRole from "../../functions/GetRole";

const OrderActionsPage = () => {

  return(
    
    <div>
      <Navigation/> 
      <HeaderOrder/>
      {
        (GetRole()==='MainManager')? <CreateOrderManager/>:<h2>Access denied</h2>

      }
                    
      
    </div>
    
  )
}
/**/
export default OrderActionsPage;