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

    var a =window.location.href;
    let button='';
    let buttons = document.querySelectorAll('.navButton');
      buttons.forEach(b => {
      b.classList.remove('highlight');
    });

    if(a.includes('warehouse'))
      button = document.querySelector('.warehouseNavButton');
    else if(a.includes('service'))
      button = document.querySelector('.serviceNavButton');
    else if(a.includes('catalogue'))
      button = document.querySelector('.catalogueNavButton');
    else if(a.includes('order'))
      button = document.querySelector('.orderNavButton');
    else if(a.includes('user'))
      button = document.querySelector('.userNavButton');
    if(button!=='')
      button.classList.add('highlight') ;
 
  });

  return(
    <div className='nav'>
      <div>
        <img className='logo' src={user} alt='' onClick={()=>navigate('/')}></img>
        <div className='act'>
          <button className='serviceNavButton navButton' onClick={()=>navigate('/services')}>Services</button>
          <button className='warehouseNavButton navButton' onClick={()=>navigate('/warehouse')}>Local Warehouse</button>
          <button className='catalogueNavButton navButton' onClick={()=>navigate('/catalogue')}>Catalogue Update</button>
          <button className='orderNavButton navButton' onClick={()=>navigate('/orders/create')}>Orders</button>
          <button className='userNavButton navButton' id='usersOption' onClick={()=>navigate('/users')}>Users</button>
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
