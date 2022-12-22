import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import AddService from "../../components/AddService/AddService";
import GetRole from "../../functions/GetRole";

const AddServicePage = () => {

  return(
    <div>
      
      <Navigation/> 
      <Header/>
      {(GetRole()==='Manager')? //change into 'Manager' when GetRole works
        <AddService/>:<h2>Access denied!</h2>
  }
      
    </div>
    
  )
}

export default AddServicePage;