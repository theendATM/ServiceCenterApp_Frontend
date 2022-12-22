import Navigation from "../../components/Navigation/Navigation";
import HeaderOrder from "../../components/Header/HeaderOrder";
import OrderRequestManager from "../../components/Orders/OrderRequestManager";
import GetRole from "../../functions/GetRole";
const OrdersRequestsPage = () => {
    return(
        <div>
          <Navigation/> 
          <HeaderOrder/>
          {(GetRole()==='MainManager')&& //change into 'Manager' when GetRole works
        <OrderRequestManager/>
      }
              
          
        </div>)
}

export default OrdersRequestsPage;
