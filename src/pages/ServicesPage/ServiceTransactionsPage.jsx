import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import ServiceTransactions from "../../components/Service/ServiceTransactions";
import GetRole from "../../functions/GetRole";

const ServiceTransactionsPage = () => {

  return(
    <div>
      <Navigation/> 
      <Header/>
      {(GetRole()==='Manager' || GetRole()==='Engineer')?
            <ServiceTransactions/>:<h2>Access denied!</h2>
  }
      
    </div>
    
  )
}

export default ServiceTransactionsPage;