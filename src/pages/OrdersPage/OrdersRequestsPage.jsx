import Navigation from "../../components/Navigation/Navigation";
import HeaderOrder from "../../components/Header/HeaderOrder";
import OrderRequestManager from "../../components/Orders/OrderRequestManager";
import GetRole from "../../functions/GetRole";
const OrdersRequestsPage = () => {
    return(
        <div>
          <Navigation/> 
          <HeaderOrder/>
          {(GetRole()==='Manager')? //change into 'Manager' when GetRole works
        <OrderRequestManager/>:<h2>Access denied!</h2>
      }
              
          
        </div>)
}

export default OrdersRequestsPage;
