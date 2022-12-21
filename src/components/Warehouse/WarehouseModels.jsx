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
                    <option selected="true" disabled="disabled" >Name</option>
                    <option>opt</option>
                   
                </select>
            </div>

            <div className='checkboxes'>
                <label>
                    <input type='checkbox'></input>
                    <span>In stock</span>
                </label>
                <label>
                    <input type='checkbox'></input>
                    <span>Missing</span>
                </label>
                <label>
                    <input type='checkbox'></input>
                    <span>Not in stock</span>
                </label>
                
            </div>

        </div>
    
        <table>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Manufacturer</th>
                <th>Amount <img src={details}/></th>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td className='textCenter'>4</td>
            </tr>
        </table>
        


    </div>
    
    )
}

export default Warehouse;