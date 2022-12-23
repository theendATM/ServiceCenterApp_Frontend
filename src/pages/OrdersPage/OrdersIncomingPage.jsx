import Navigation from "../../components/Navigation/Navigation";
import HeaderOrder from "../../components/Header/HeaderOrder";
import OrderIncomingManager from "../../components/Orders/OrderIncomingManager";
import GetRole from "../../functions/GetRole";
const OrdersIncomingPage = () => {
    return(
    <div>
      <Navigation/> 
      <HeaderOrder/>
      {(GetRole()==='Manager')? //change into 'Manager' when GetRole works
        <OrderIncomingManager/>: <h2>Access denied!</h2>
      }
      
    </div>)
}

export default OrdersIncomingPage;
