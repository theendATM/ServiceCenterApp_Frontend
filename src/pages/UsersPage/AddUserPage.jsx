import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import UserAdd from "../../components/Users/UserAdd";
import GetRole from "../../functions/GetRole";

const AddUserPage=()=>{

    return(
        <div>
            
            <Navigation/>
            <Header/>
            {(GetRole()==='MainManager')?
            <UserAdd/>:<h2>Access denied!</h2>
  }
            

        </div>
    )
}

export default AddUserPage;