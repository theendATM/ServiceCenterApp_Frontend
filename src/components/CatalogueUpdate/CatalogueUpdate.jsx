import './CatalogueUpdate.css'
import { useNavigate } from 'react-router-dom'

const Catalogue=()=>{
    const navigate = useNavigate();
    

    return(
        <div className='catalogueUpdate'>

            <input type='text' placeholder='Name'></input>
            <input type='text' placeholder='Manufacturer'></input>

            <textarea className='serviceDescription' placeholder='Description'></textarea>

            <div className='finalAddButtons'>
                <button className='cancelUpdate' onClick={()=>navigate('/')}>Cancel</button>
                <button className='saveUpdate'>Save</button>
            </div>
        </div>
    )
}

export default Catalogue;