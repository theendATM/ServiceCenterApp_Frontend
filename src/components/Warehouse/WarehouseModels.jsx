import { useState, useEffect} from 'react'
import search from '../img/search.svg'
import details from '../img/show_details_sign.svg'
import './WarehouseModels.css'
import fetchPartModelsForWarehouse from '../../functions/FetchPartModels'


const Warehouse=()=>{
    const [partModels, setPartModels] = useState();

    const getParts = async () => 
    {
        try
        {
            const result = await fetchPartModelsForWarehouse();

            setPartModels(result);
        }
        catch
        {
            
        }
    }

    useEffect(() => {
        getParts();
      }, []);

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
                {partModels ? partModels.map((part) => 
                <tr key={part.id}>
                    <th>{part.name}</th>
                    <th>{part.description}</th>
                    <th>{part.manufacturer}</th>
                    <th>{part.quantity}</th>
                </tr>) : <tr></tr>}
            </tbody>
            
        </table>
        


    </div>
    
    )
}

export default Warehouse;