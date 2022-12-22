import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Users from "../../components/Users/Users";
import GetRole from "../../functions/GetRole";

const UsersPage=()=>{

    return(
        <div>
            
            <Navigation/>
            <Header/>
            {(GetRole()==='MainManager')?
            <Users/>:<h2>Access denied!</h2>
  }
            

        </div>
    )
}

export default UsersPage;