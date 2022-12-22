import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Service from "../../components/Service/Service";
import GetRole from "../../functions/GetRole";

const ServicesPage = () => {

  return(
    <div>
      <Navigation/> 
      <Header/>
      {(GetRole()==='Manager' || GetRole()==='MainManager' || GetRole()==='Engineer')?
            <Service/>:<h2>Access denied!</h2>
  }
      
    </div>
    
  )
}

export default ServicesPage;