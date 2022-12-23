import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import AddService from "../../components/AddService/AddService";
import GetRole from "../../functions/GetRole";
import { useEffect, useState } from "react";

const AddServicePage = () => {
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
      {(role==='Manager')? //change into 'Manager' when GetRole works
        <AddService/>:<h2>Access denied!</h2>
  }
      
    </div>
    
  )
}

export default AddServicePage;