import search from '../img/search.svg'
import './Users.css'
const Users=()=>{

    return(
        <div className="usersList">
            <div className="searchBox">
                <img src={search} alt=''></img>
                <input type='text' placeholder='search'></input>
                <select> 
                    <option defaultValue="Name" >Name</option>
                    <option>opt</option>
                </select>
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
                                <div className='finalAddButtons'>
                                    <button className='cancelUpdate'>Edit</button>
                                    </div>
                            </td>
                            <td> 
                                <div className='finalAddButtons tableButtons'>
                                    <button className='cancelUpdate'>Delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
        </div>


    )
}

export default Users;