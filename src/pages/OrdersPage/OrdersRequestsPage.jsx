import Navigation from "../../components/Navigation/Navigation";
import HeaderOrder from "../../components/Header/HeaderOrder";
import OrderRequest from "../../components/Orders/OrderRequest";
import GetRole from "../../functions/GetRole";
const OrdersRequestsPage = () => {
    return(
        <div>
          <Navigation/> 
          <HeaderOrder/>
          {(GetRole()==='MainManager')? <OrderRequest/>:<h2>Access denied</h2>} 
              
          
        </div>)
}

export default OrdersRequestsPage;
