import HeaderOrder from "../../components/Header/HeaderOrder";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import CreateOrderManager from "../../components/CreateOrder/CreateOrderManager";
import CreateOrderMainManager from "../../components/CreateOrder/CreateOrderMainManager";
import { useEffect } from "react";
import GetRole from "../../functions/GetRole";

const OrderActionsPage = () => {
  if(GetRole()==='Manager')
  return(
    <div>
      <Navigation/> 
      <HeaderOrder/>
      <CreateOrderManager/>
        <Header/> && <CreateOrderMainManager/>          
    </div>
    
  )
  else if(GetRole()==='MainManager')
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