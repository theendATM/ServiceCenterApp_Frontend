import search from '../img/search.svg'
import details from '../img/show_details_sign.svg'
import './WarehouseModels.css'
const Warehouse=()=>{


    return(
    <div className='warehouseModels'>
        <div className='panel'>
            
            <div className="searchBox">
                <img src={search} alt=''></img>
                <input type='text' placeholder='search'></input>
                <select> 
                    <option defaultValue="Name" >Name</option>
                    <option>opt</option>
                   
                </select>
            </div>

            <div id='checkboxes' className='checkboxes'>
                <label>
                    <input type='checkbox' defaultChecked='true'></input>
                    <span>In stock</span>
                </label>
                <label>
                    <input type='checkbox' ></input>
                    <span>Missing</span>
                </label>
                <label>
                    <input type='checkbox'></input>
                    <span>Not in stock</span>
                </label>
                
            </div>

        </div>
    
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Manufacturer</th>
                    <th>Amount <img src={details} alt=''/></th>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td className='textCenter'>4</td>
                </tr>
            </tbody>
            
        </table>
        


    </div>
    
    )
}

export default Warehouse;