import Navigation from "../../components/Navigation/Navigation";
import HeaderOrder from "../../components/Header/HeaderOrder";
import OrderIncoming from "../../components/Orders/OrderIncoming";
import GetRole from "../../functions/GetRole";
const OrdersIncomingPage = () => {
    return(
    <div>
      <Navigation/> 
      <HeaderOrder/>
      {(GetRole()==='MainManager')? <OrderIncoming/>:<h2>Access denied</h2>}
      
    </div>)
}

export default OrdersIncomingPage;
