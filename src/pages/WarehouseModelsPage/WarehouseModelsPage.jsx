import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Warehouse from "../../components/Warehouse/WarehouseModels";
import './WarehouseModelsPage.css';
import GetRole from "../../functions/GetRole";

const WarehouseModelsPage = () => {

  return(
    <div>
      <Navigation/> 
      <Header/>
      {(GetRole()==='Manager' || GetRole()==='MainManager' || GetRole()==='Engineer')?
            <Warehouse/>:<h2>Access denied!</h2>
  }
      
    </div>
    
  )
}

export default WarehouseModelsPage;