import { useEffect, useState } from 'react';
import './CreateOrderManager.css'
import fetchMissingPartModels from '../../functions/FetchMissingParts';

const CreateOrderMainManager=()=>{
    const[missingParts, setMissningParts] = useState();

    
    const getMissingParts = async () => 
    {
        try
        {
            const partList = await fetchMissingPartModels();

            setMissningParts(partList);
        }
        catch
        {

        }
    }

    useEffect(() => 
    { 
         getMissingParts();
    }, [])

    return(
        <form className="createOrder">
            <div className='missingItem'>
                 <span className='orderAct'>Tyumen warehouse</span>
                 <br></br>
                 <span className='orderAct'>Total: Getamount</span>
                <table>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                    </tr>
                    </thead>
                    <tbody>
                            {
                                missingParts ? 
                                missingParts.map((part) => 
                                <tr key={part.id}>
                                    <th>{part.name}</th>
                                    <th>{part.quantity}</th>
                                </tr>) 
                                : <tr></tr>
                            }
                    </tbody>
                </table>
            </div>
           
            
            <div className='finalAddButtons incoming'>
                <button className='cancelUpdate'>Reject</button>
                <button className='saveUpdate acceptAll' type='submit'>Create order</button>
            </div>
            
        </form>


    )
}

export default CreateOrderMainManager;