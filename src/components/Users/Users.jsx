import search from '../img/search.svg'
import './Users.css'
import { useNavigate } from 'react-router-dom'
const Users=()=>{
    const navigate = useNavigate();
    return(
        <div className="usersList">
            <div className='userListPanel'>
                <div className="searchBox">
                <img src={search} alt=''></img>
                <input type='text' placeholder='search'></input>
                <select> 
                    <option defaultValue="Name" >Name</option>
                    <option>opt</option>
                </select>
                
                
                </div>
                <button className='cancelUpdate addUser' onClick={()=>navigate('/user/add')}>Add</button>

            </div>
            

                <table>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Warehouse</th>
                        <th>Role</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>GetName</td>
                            <td>GetWarehouse</td>
                            <td>GetRole</td>
                            <td> 
                                <div className='finalAddButtons managerUserButtons'>
                                    <button className='cancelUpdate managerUserButton' 
                                    onClick={()=>navigate('/user/edit')}>Edit</button>
                                    </div>
                            </td>
                            <td> 
                                <div className='finalAddButtons managerUserButtons'>
                                    <button className='cancelUpdate managerUserButton'>Delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
        </div>


    )
}

export default Users;