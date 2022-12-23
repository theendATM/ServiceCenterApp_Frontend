import search from '../img/search.svg'
import details from '../img/show_details_sign.svg'
import '../Warehouse/WarehouseModels.css'
import './Service.css'
import GetRole from '../../functions/GetRole'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import fetchServices from '../../functions/FetchServices'
import { useState } from 'react'

const Service=()=>{

    useEffect(()=>{
        let addButton = document.querySelector('#addServiceButton');	
        (GetRole()==='MainManager')?
        addButton.classList.add('hidden'):addButton.classList.remove('hidden');
    });

    const [services, setServices] = useState();
    const getServices = async () => 
    {
        try
        {
            const result = await fetchServices();

            setServices(result);
        }
        catch
        {
            
        }
    }

    useEffect(() => {
        getServices();
      }, []);
    


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
                <th>Status <img src={details} alt=''/></th>
            </tr>
            </thead>
            <tbody>
                {services ? services.map((part) => 
                <tr onClick={()=>navigate('/services/details')} key={part.id}>
                    <td>{part.id} </td>
                    <td>{part.notes}</td>
                    <td>{part.name} : {part.phone} </td>
                    <td className='textCenter'>
                    {part.servicestatus}
                    </td>
                </tr>) : <tr></tr>}
            </tbody>
            
        </table>
        


    </div>
    
    )
}

export default Service;