import './CreateOrderManager.css'

const CreateOrderMainManager=()=>{

    return(
        <div className="createOrder">
            <div className='missingItem'>
                 <span className='orderAct'>MissingName</span>
                 <br></br>
                 <span className='orderAct'>Total: Getamount</span>
                <table>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Requested</th>
                        <th>Warehouse</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>GetName</td>
                            <td className='textCenter'>GetAmount</td>
                            <td className='textCenter'>GetWarehouse</td>
                        </tr>
                    </tbody>
                </table>
            </div>
           
            
            <div className='finalAddButtons incoming'>
                <button className='cancelUpdate'>Reject</button>
                <button className='saveUpdate acceptAll'>Create order</button>
            </div>
            
        </div>


    )
}

export default CreateOrderMainManager;