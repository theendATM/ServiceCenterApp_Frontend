import './Navigation.css'
import user from '../img/def_user.png'
import sign from '../img/show_details_sign.svg'
import GetRole from '../../functions/GetRole'
import { useNavigate} from 'react-router-dom'
import { useEffect } from 'react'

const Navigation=()=>{

  const navigate = useNavigate();

  useEffect(()=>{
    let usersOption = document.querySelector('#usersOption');	
    (GetRole()!=='MainManager')?
    usersOption.classList.add('hidden'):usersOption.classList.remove('hidden');
  });

  return(
    <div className='nav'>
      <div>
        <img className='logo' src={user} alt='' onClick={()=>navigate('/')}></img>
        <div className='act'>
          <button onClick={()=>navigate('/services')}>Services</button>
          <button onClick={()=>navigate('/warehouse')}>Local Warehouse</button>
          <button onClick={()=>navigate('/catalogue')}>Catalogue Update</button>
          <button onClick={()=>navigate('/orders/create')}>Orders</button>
          <button id='usersOption' onClick={()=>navigate('/users')}>Users</button>
        </div>
      </div>
      
      <div className='userInfo'>
        <img className='user' src={user} alt='' onClick={()=>navigate('/profile')}></img>
        <div className='log'>
          <span onClick={()=>navigate('/profile')}>Name Surname</span>
          <img className='sign' src={sign} alt=''></img>
        </div>
        
      </div>
    </div>
    )
}

export default Navigation;