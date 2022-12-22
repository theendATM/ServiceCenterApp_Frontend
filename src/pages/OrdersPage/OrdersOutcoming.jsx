import Navigation from "../../components/Navigation/Navigation";
import HeaderOrder from "../../components/Header/HeaderOrder";
import OrderOutcomingManager from "../../components/Orders/OrderOutcomingManager";
import GetRole from "../../functions/GetRole";
const OrdersOutcomingPage = () => {
    return(
        <div>
          <Navigation/> 
          <HeaderOrder/>
          {(GetRole()==='MainManager')&& //change into 'Manager' when GetRole works
        <OrderOutcomingManager/>
      }
          
        </div>)
}

export default OrdersOutcomingPage;
