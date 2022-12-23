import './CatalogueUpdate.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Catalogue=()=>{
    const [name, setName] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try
        {
            const postModel = await fetch("https://localhost:7226/PartModel/Add", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
              },
            body: JSON.stringify({
                name: name,
                manufacturer: manufacturer,
                description: description,
                parts: []
            })
            });

            if (postModel.status === 200)
            {
                alert("Part model created successfully");
            }
            else
            {
                alert("Something went wrong. Please, try again");
            }
        }
        catch(error)
        {
            alert("Something went wrong. Please, try again.");
        }
        
    } 

    return(
        <form className='catalogueUpdate' onSubmit={handleSubmit} method="POST" action='Add'>

            <input type='text' value={name} placeholder='Name' onChange={(event) => setName(event.target.value)}></input>
            <input type='text' value={manufacturer} placeholder='Manufacturer' onChange={(event) => setManufacturer(event.target.value)}></input>

            <textarea className='serviceDescription' value={description} placeholder='Description' onChange={(event) => setDescription(event.target.value)}></textarea>

            <div className='finalAddButtons'>
                <button className='cancelUpdate' onClick={()=>navigate('/')}>Cancel</button>
                <button className='saveUpdate' type='submit'>Save</button>
            </div>
        </form>
    )
}

export default Catalogue;