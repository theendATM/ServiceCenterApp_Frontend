import search from '../img/search.svg'
import './Header.css'
import { useNavigate} from 'react-router-dom'
import { useEffect } from 'react'
import GetRole from '../../functions/GetRole'

const Header=()=>{
  const navigate = useNavigate();

  useEffect(()=>{
    let options = document.querySelectorAll('.hideForMM');	
    options.forEach(option => {
      (GetRole()==='MainManager')?
    option.classList.add('hidden'):option.classList.remove('hidden');
    });
    
  });

  return(
    <div className='header'>
      <div className='buttons'>
      <input className='but hideForMM' type='button' value="Transactions" onClick={()=>navigate('/transactions')}></input>
      </div>
      
      <div className='rightPart'>
        <span className="address hideForMM"> Откуда подгружаем адрес??</span>
        <div className="searchBoxHeader">
          <img src={search} alt=''></img>
          <input type='text' placeholder='search'></input>
        </div>
      </div>
      
    </div>
    )
}

export default Header;

