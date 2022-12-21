import search from '../img/search.svg'
import './Header.css'
import { useNavigate} from 'react-router-dom'

const Header=()=>{
  const navigate = useNavigate();
  return(
    <div className='header'>
      <div className='buttons'>
      <input className='but' type='button' value="Transactions" onClick={()=>navigate('/transactions')}></input>
      </div>
      
      <div className='rightPart'>
        <span className="address"> Откуда подгружаем адрес??</span>
        <div className="searchBoxHeader">
          <img src={search} alt=''></img>
          <input type='text' placeholder='search'></input>
        </div>
      </div>
      
    </div>
    )
}

export default Header;

