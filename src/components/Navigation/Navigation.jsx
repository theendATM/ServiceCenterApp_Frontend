import './Navigation.css'
import user from '../img/def_user.png'
import { useNavigate } from 'react-router-dom'

const Navigation=()=>{

  const navigate = useNavigate()

  return(
    <div className='nav'>
      <img src={user} alt='' onClick={()=>navigate('/')}></img>
      <div className='act'>
        <button onClick={()=>navigate('/services')}>Services</button>
        <button onClick={()=>navigate('/warehouse')}>Local warehouse</button>
        <button onClick={()=>navigate('/catalogue')}>Catalogue</button>
        <button onClick={()=>navigate('/orders')}>Orders</button>
      </div>
    </div>
    )
}

export default Navigation;