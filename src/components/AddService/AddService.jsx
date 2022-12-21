import './AddService.css'
import { useNavigate } from 'react-router-dom'
import GetRole from '../../functions/GetRole';
import { useEffect } from 'react';
import Header from "../../components/Header/Header";

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
                    <input type='text' placeholder='Name'></input>
                    <input type='text' placeholder='Surname'></input>
                </div>
                            
                <input type='text' placeholder='Phone'></input>
            </div>

            <div className='serviceInfo'>
                <span>Service</span>
                <input type='text' placeholder='Type'></input>
                <textarea className='serviceDescription' placeholder='Description'></textarea>
            </div>

            <div className='partInfo'>
            <span>Part models</span>
                <div className='part'>
                    <input type='text' placeholder='Name'></input>
                    <input className='addAmount' type='number' placeholder='Amount'></input>
                    <span>In stock: </span>
                    <span className='dataStock'>?</span>
                </div>
                <div className='part'>
                    <input type='text' placeholder='Name'></input>
                    <input className='addAmount' type='number' placeholder='Amount'></input>
                    <span>In stock: </span>
                    <span className='dataStock'>?</span>
                </div>
                <div className='part'>
                    <input type='text' placeholder='Name'></input>
                    <input className='addAmount' type='number' placeholder='Amount'></input>
                    <span>In stock: </span>
                    <span className='dataStock'>?</span>
                </div>
                <button className='addLine'>Add</button> 
                
            </div>
            <button className='checkAv'>Check availability</button>

            <div className='finalAddButtons'>
                <button className='cancelAdding' onClick={()=>navigate('/services')}>Cancel</button>
                <button className='saveAdding'>Save</button>
            </div>
            
        </div>
    )
}

export default AddService;