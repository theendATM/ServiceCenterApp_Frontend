import Navigation from "../../components/Navigation/Navigation";
import HeaderOrder from "../../components/Header/HeaderOrder";
import OrderOutcoming from "../../components/Orders/OrderOutcoming";
import GetRole from "../../functions/GetRole";
const OrdersOutcomingPage = () => {
    return(
        <div>
          <Navigation/> 
          <HeaderOrder/>
          {(GetRole()==='MainManager')? <OrderOutcoming/>:<h2>Access denied</h2>}   
          
        </div>)
}

export default OrdersOutcomingPage;
