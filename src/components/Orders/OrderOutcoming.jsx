import '../CreateOrder/CreateOrderManager.css'

const OrderOutcoming=()=>{

    return(
        <div className="createOrder outcomingOrder">
            <div className='missingItem no-line'>
                 <span className='orderAct'>Missing</span>
                
                <div className='finalAddButtons incoming'>
                    <button className='cancelUpdate'>View</button>
                    <button className='cancelUpdate'>Edit</button>
                    <button className='saveUpdate'>Send</button>
                </div>
            </div>
            <div className='orderInfo'>
                <span>From: getDate</span>
                <span>Status: getStatus</span>
            </div>
        </div>



    )
}

export default OrderOutcoming;