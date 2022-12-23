import '../CatalogueUpdate/CatalogueUpdate.css'
import { useNavigate } from 'react-router-dom'

const UserAdd=()=>{
    const navigate = useNavigate();

    return(
        <div className='catalogueUpdate usersManage'>
            <span>User</span>
            <select>
                <option defaultValue="true" disabled="disabled" selected> User</option>
                <option> Get user</option>
            </select>
            <span>Permissions</span>
            <div className='chooseRole'>
                <label>
                    <input type='radio'></input>
                    <span>Engineer</span>
                </label>
                <label>
                    <input type='radio' ></input>
                    <span>Manager</span>
                </label>
            </div>
            <span>Place</span>
            <select>
                <option defaultValue="true" disabled="disabled" selected> Warehouse</option>
                <option> Get options</option>
            </select>

            <div className='finalAddButtons '>
                <button className='cancelUpdate userEditButton' onClick={()=>navigate('/users')}>Cancel</button>
                <button className='saveUpdate'>Save</button>
            </div>
        </div>
    )
}

export default UserAdd;