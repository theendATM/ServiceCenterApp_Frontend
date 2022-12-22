import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import ServiceDetails from "../../components/ServiceDetails/ServiceDetails";
import GetRole from "../../functions/GetRole";

const ServiceDetailsPage=()=>{

    return(
        <div>
            
            <Navigation/>
            <Header/>
            {(GetRole()==='Manager' || GetRole()==='MainManager' || GetRole()==='Engineer')?
            <ServiceDetails/>:<h2>Access denied!</h2>
  }

        </div>
    )
}

export default ServiceDetailsPage;