import Navigation from "../../components/Navigation/Navigation";
import HeaderOrder from "../../components/Header/HeaderOrder";
import OrderOutcomingManager from "../../components/Orders/OrderOutcomingManager";
import GetRole from "../../functions/GetRole";
const OrdersOutcomingPage = () => {
    return(
        <div>
          <Navigation/> 
          <HeaderOrder/>
          {(GetRole()==='Manager')? //change into 'Manager' when GetRole works
        <OrderOutcomingManager/>: <h2>Access denied!</h2>
      }
          
        </div>)
}

export default OrdersOutcomingPage;
