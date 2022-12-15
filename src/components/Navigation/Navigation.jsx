import './Navigation.css'
import user from '../img/def_user.png'

const Navigation=()=>{
  return(
    <div className='nav'>
      <img src={user} alt=''></img>
      <div className='act'>
        <button>Services</button>
        <button>Local warehouse</button>
        <button>Catalogue</button>
        <button>Orders</button>
      </div>
    </div>
    )
}

export default Navigation;