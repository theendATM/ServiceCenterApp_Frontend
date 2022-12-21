import search from '../img/search.svg'
import './Header.css'

const Header=()=>{
  return(
    <div className='header'>
      <div className='buttons'>
        <input className='but' type='button' value="Stock"></input>
      <input className='but' type='button' value="Transactions"></input>
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

