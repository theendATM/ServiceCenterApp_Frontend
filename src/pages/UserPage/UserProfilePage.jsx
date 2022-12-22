import './UserProfilePage.css';
import user from '../../components/img/def_user.png'
import { useNavigate } from 'react-router-dom'
import GetRole from '../../functions/GetRole';

const UserProfilePage=() =>{ 

    const navigate = useNavigate();
    return (
       <div>
        {(GetRole()==='Manager' || GetRole()==='MainManager' || GetRole()==='Engineer')?
            
     <div className='signInPage'>
        <div className='logoAuth'>
            <img src={user} alt='' onClick={()=>navigate('/')}></img>
        </div>

        <div className='profile'>
            <span>Edit user info</span>
            <div className='userData'>
                <input type='text' defaultValue="Get user name"></input>
                <input type='email' defaultValue="Get user email"></input>  
                <button>Save</button>            
            </div>

            <span className='updatePassword'>Update password</span>
            <div className='userData'>
                <input type='password' placeholder='Old password'></input>
                <input type='password' placeholder='New password'></input>
                <input type='password' placeholder='Retype new password'></input>
                <button>Save</button>  
            </div>
        </div>


      </div>
      :<h2>Access denied!</h2>}  
       </div> 
      
    )
}

export default UserProfilePage;