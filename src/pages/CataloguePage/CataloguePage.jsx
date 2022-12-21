import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Catalogue from "../../components/CatalogueUpdate/CatalogueUpdate";
import './CataloguePage.css';

const CataloguePage = () => {

  return(
    <div>
      <Navigation/> 
      <Header/>
      <Catalogue/>
    </div>
    
  )
}

export default CataloguePage;