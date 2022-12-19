import search from '../../img/search.svg'
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
const Warehouse=()=>{
    return(
    <div>
        <Navigation/> 
        <Header/>
        <div className="searchBox">
            <img src={search} alt=''></img>
            <input type='text' placeholder='search'></input>
            <select>
                <option>1</option>
            </select>
        </div>
    </div>
    
    )
}

export default Warehouse;