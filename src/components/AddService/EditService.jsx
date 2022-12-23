import './AddService.css'
import { useNavigate } from 'react-router-dom'
import GetRole from '../../functions/GetRole';
import { useEffect } from 'react';
import Header from "../Header/Header";

const AddService=()=>{
    const navigate = useNavigate();
    if(GetRole()==='MainManagerr')
        return(
            <h2>Access denied</h2>
        )
        


    return(
        <div className='addService'>
            <div className='customerInfo'>
                <span>Customer</span>
                <div className='fullName'>
                    <input type='text' placeholder='Name' value='Test'></input>
                    <input type='text' placeholder='Surname'></input>
                </div>
                            
                <input type='text' placeholder='Phone' value='+777'></input>
            </div>

            <div className='serviceInfo'>
                <span>Service</span>
                <input type='text' placeholder='Type' value='Matrix replacement'></input>
                <textarea className='serviceDescription' placeholder='Description' value='TestDescription'></textarea>
            </div>

            <div className='partInfo'>
            <span>Part models</span>
                <div className='part'>
                    <input type='text' placeholder='Name' value='Оценка за курс'></input>
                    <input className='addAmount' type='number' placeholder='Amount' value='4'></input>
                </div>
                <div className='part'>
                    <input type='text' placeholder='Name' value='GTX 1660'></input>
                    <input className='addAmount' type='number' placeholder='Amount' value='2'></input>

                </div>
                <button className='addLine'>Add</button> 
                
            </div>

            <div className='finalAddButtons'>
                <button className='cancelAdding' onClick={()=>navigate('/services')}>Cancel</button>
                <button className='saveAdding'>Save</button>
            </div>
            
        </div>
    )
}

export default AddService;