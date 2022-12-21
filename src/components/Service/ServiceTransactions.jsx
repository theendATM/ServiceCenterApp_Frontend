import search from '../img/search.svg'
import details from '../img/show_details_sign.svg'
const ServiceTransactions=()=>{

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
                    <label className='oneLine'>
                        <input type='checkbox' defaultChecked='true'></input>
                        <span >Incoming</span>
                    </label>
                </div>

            </div>
        </div>
    
        <table>
            <thead>
                <tr>
                <th>Date</th>
                <th>Model</th>
                <th>Amount</th>
                <th>Source<img src={details} alt=''/></th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td className='textCenter'>4</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    )
}

export default ServiceTransactions;