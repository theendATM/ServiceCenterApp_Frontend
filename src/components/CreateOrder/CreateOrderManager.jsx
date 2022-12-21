import './CreateOrderManager.css'

const CreateOrderManager=()=>{

    return(
        <div className="createOrder">
            <span>Missing</span>
            <div className='missingItem'>
                <div className='missingName'>
                    <span >GetMissingModel: </span>
                    <span >GetAmountMissingModel</span>
                </div>
                
                <table>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Warehouse</th>
                        <th>Amount</th>
                        <th>Order</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>GetModel</td>
                            <td>GetWarehouse</td>
                            <td className='textCenter'>GetAmount</td>
                            <td className='textCenter'><input type='number' defaultValue='0'/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='missingItem'>
                <div className='missingName'>
                    <span >GetMissingModel: </span>
                    <span>GetAmountMissingModel</span>
                </div>
                
                <span className='outOfStock'>Check if in stock? - : Out of stock</span>
            </div>
            
            <div className='finalAddButtons'>
                <button className='saveUpdate'>Save</button>
            </div>
            
        </div>



    )
}

export default CreateOrderManager;