import './Navigation.css'
import user from '../img/def_user.png'
import sign from '../img/show_details_sign.svg'
import { useNavigate } from 'react-router-dom'

const Navigation=()=>{

  const navigate = useNavigate()

  return(
    <div className='nav'>
      <div>
        <img className='logo' src={user} alt='' onClick={()=>navigate('/')}></img>
        <div className='act'>
          <button onClick={()=>navigate('/services')}>Services</button>
          <button onClick={()=>navigate('/warehouse')}>Local warehouse</button>
          <button onClick={()=>navigate('/catalogue')}>Catalogue</button>
          <button onClick={()=>navigate('/orders')}>Orders</button>
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