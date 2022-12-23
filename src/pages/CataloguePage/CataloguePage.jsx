import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Catalogue from "../../components/CatalogueUpdate/CatalogueUpdate";
import GetRole from "../../functions/GetRole";
import './CataloguePage.css';
import { useEffect, useState } from "react";

const CataloguePage = () => {
  const [role, setRole] = useState();

    useEffect(() => {
        const getRole = async () => 
        {
          const value = await GetRole();
          setRole(value);
        }
    
        getRole();
      }, [role]);
  return(
    <div>
      <Navigation/> 
      <Header/>
      {(role!=='MainManager')?
            <Catalogue/>:<h2>Access denied!</h2>
      }
    
    </div>
    
  )
}

export default CataloguePage;