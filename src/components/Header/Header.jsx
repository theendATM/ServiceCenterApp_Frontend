import search from '../img/search.svg'
import './Header.css'

const Header=()=>{
  return(
    <div>
      <input type='button'>Stock</input>
      <input type='button'>Transactions</input>
      <p className="address"> Откуда подгружаем адрес??</p>
      <div className="searchBox">
        <img src={search} alt=''></img>
        <input type='text'></input>
      </div>
      
    </div>
    )
}

export default Header;

