import HeaderOrder from "../../components/Header/HeaderOrder";
import Navigation from "../../components/Navigation/Navigation";
import CreateOrderManager from "../../components/CreateOrder/CreateOrderManager";
import CreateOrderMainManager from "../../components/CreateOrder/CreateOrderMainManager";
import { useEffect } from "react";
import GetRole from "../../functions/GetRole";

const OrderActionsPage = () => {

  return(

    
    <div>
      <Navigation/> 
      <HeaderOrder/>
      {(GetRole()==='Manager')&& //change into 'Manager' when GetRole works
        <CreateOrderManager/>
      }
      {(GetRole()==='MainManager')&& //change into 'MainManager' when GetRole works
        <CreateOrderMainManager/>
      }
                    
      
    </div>
    
  )
}
/**/
export default OrderActionsPage;