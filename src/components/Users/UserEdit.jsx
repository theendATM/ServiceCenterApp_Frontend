import '../CatalogueUpdate/CatalogueUpdate.css'
import { useNavigate } from 'react-router-dom'

const UserEdit=()=>{
    const navigate = useNavigate();
    

    return(
        <div className='catalogueUpdate usersManage'>
            <span>User</span>
            <input type='text' placeholder='Name'></input>
            <input type='text' placeholder='Email'></input>
            <span>Permissions</span>
            <div className='chooseRole'>
                <label>
                    <input type='checkbox'></input>
                    <span>Engineer</span>
                </label>
                <label>
                    <input type='checkbox'></input>
                    <span>Manager</span>
                </label>
                <label>
                    <input type='checkbox'></input>
                    <span>Main manager</span>
                </label>
            </div>
            <span>Place</span>
            <select>
                <option defaultValue="true" disabled="disabled"> Warehouse</option>
                <option> Get options</option>
            </select>

            <div className='finalAddButtons '>
                <button className='cancelUpdate userEditButton' onClick={()=>navigate('/users')}>Cancel</button>
                <button className='saveUpdate'>Save</button>
            </div>
        </div>
    )
}

export default UserEdit;