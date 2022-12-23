import './ServiceDetails.css'
import { useNavigate } from 'react-router-dom';

const ServiceDetails=()=>{
    const navigate = useNavigate();

    return(
        <div className="serviceDetails">
            <div className="serviceDetailsBlock">
                <span className="blockHeader">Customer</span>
                <span>Test</span>
                <span>+777</span>
            </div>

            <div className="serviceDetailsBlock">
                <span className="blockHeader">Service details</span>
                <span>TestName</span>
                <span>Test</span>
            </div>

            <div className="serviceDetailsBlock">
                <span className="blockHeader">Part models</span>
                <span className='partModel'>Оценка за курс</span>
            </div>

            <div className="serviceDetailsBlock">
                <span className="blockHeader">Missing models</span>
                <span className='partModel'>GTX 1660</span>
            </div>

            <button className='editService' onClick={()=>navigate('/services/edit')}>Edit service</button>

        </div>
    )
}

export default ServiceDetails;
  