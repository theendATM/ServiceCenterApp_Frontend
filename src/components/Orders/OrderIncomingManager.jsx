import '../CreateOrder/CreateOrderManager.css'

const OrderIncoming=()=>{

    return(
        <div className="createOrder">
            <div className='missingItem'>
                 <span className='orderAct'>Missing</span>
                <table>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Requested</th>
                        <th>In stock</th>
                        <th>Approve</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>GetName</td>
                            <td className='textCenter'>GetAmount</td>
                            <td className='textCenter'>GetAmount</td>
                            <td className='textCenter'><input type='number' defaultValue='0'/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
           
            
            <div className='finalAddButtons incoming'>
                <button className='cancelUpdate'>Reject</button>
                <button className='saveUpdate'>Save</button>
                <button className='saveUpdate acceptAll'>Accept all</button>
            </div>
            
        </div>



    )
}

export default OrderIncoming;