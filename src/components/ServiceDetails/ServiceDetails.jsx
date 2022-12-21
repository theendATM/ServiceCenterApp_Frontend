import './ServiceDetails.css'

const ServiceDetails=()=>{


    return(
        <div className="serviceDetails">
            <div className="serviceDetailsBlock">
                <span className="blockHeader">Customer</span>
                <span>Full Name?</span>
                <span>Phone?</span>
            </div>

            <div className="serviceDetailsBlock">
                <span className="blockHeader">Service details</span>
                <span>Some service?</span>
                <span>Description?</span>
            </div>

            <div className="serviceDetailsBlock">
                <span className="blockHeader">Part models</span>
                <span className='partModel'>Function to get models</span>
                <span className='partModel'>Function to get models</span>
            </div>

            <div className="serviceDetailsBlock">
                <span className="blockHeader">Missing models</span>
                <span className='partModel'>Function to get models</span>
            </div>

            <button className='editService'>Edit service</button>

        </div>
    )
}

export default ServiceDetails;
  