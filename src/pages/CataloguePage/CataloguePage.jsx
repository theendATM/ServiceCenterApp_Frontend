import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Catalogue from "../../components/CatalogueUpdate/CatalogueUpdate";
import GetRole from "../../functions/GetRole";
import './CataloguePage.css';

const CataloguePage = () => {

  return(
    <div>
      <Navigation/> 
      <Header/>
      {(GetRole()==='MainManager')?
            <Catalogue/>:<h2>Access denied!</h2>
  }
    
    </div>
    
  )
}

export default CataloguePage;