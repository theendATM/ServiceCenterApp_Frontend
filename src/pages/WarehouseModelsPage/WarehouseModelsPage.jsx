import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Warehouse from "../../components/Warehouse/WarehouseModels";
import './WarehouseModelsPage.css';

const WarehouseModelsPage = () => {

  return(
    <div>
      <Navigation/> 
      <Header/>
      <Warehouse/>
    </div>
    
  )
}

export default WarehouseModelsPage;