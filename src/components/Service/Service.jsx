import search from '../img/search.svg'
import details from '../img/show_details_sign.svg'
import '../Warehouse/WarehouseModels.css'
import './Service.css'
import GetRole from '../../functions/GetRole'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Service=()=>{

    useEffect(()=>{
        let addButton = document.querySelector('#addServiceButton');	
        (GetRole()==='MainManager')?
        addButton.classList.add('hidden'):addButton.classList.remove('hidden');
    });

    


    const navigate = useNavigate();

    return(
    <div className='service'>
        <div className='buttonPanel'>
            <div className='panel'>
                <div className="searchBox">
                    <img src={search} alt=''></img>
                    <input type='text' placeholder='search'></input>
                    <select> 
                        <option defaultValue="Name" >Name</option>
                        <option>opt</option>
                    
                    </select>
                </div>

                <div className='checkboxes'>
                    <label>
                        <input type='checkbox' defaultChecked='true'></input>
                        <span>Not completed</span>
                    </label>
                    <label>
                        <input type='checkbox'></input>
                        <span>Not in stock</span>
                    </label>
                </div>

            </div>
            
            <button id="addServiceButton" name="addServiceButton" 
            className='addButton' onClick={()=>navigate('/services/add')} >Add</button>
        </div>
    
        <table>
            <thead>
                <tr>
                <th>Number</th>
                <th>Description</th>
                <th>Client info</th>
                <th>Start date <img src={details} alt=''/></th>
                <th>Status <img src={details} alt=''/></th>
            </tr>
            </thead>
            <tbody>
                <tr onClick={()=>navigate('/services/details')}>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td className='textCenter'>4</td>
                    <td className='textCenter'>
                        5
                    </td>
                </tr>
            </tbody>
            
        </table>
        


    </div>
    
    )
}

export default Service;