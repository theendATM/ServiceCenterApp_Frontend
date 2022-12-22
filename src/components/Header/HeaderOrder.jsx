import search from '../img/search.svg'
import './Header.css'
import { useNavigate} from 'react-router-dom'
import { useEffect } from 'react'
import GetRole from '../../functions/GetRole'

const HeaderOrder=()=>{
  const navigate = useNavigate();
  useEffect(()=>{
    let usersOptions = document.querySelectorAll('.MMHide');
    usersOptions.forEach(usersOption => {
      (GetRole()==='MainManager')? //Change when adding actions for Manager
      usersOption.classList.add('hidden'):usersOption.classList.remove('hidden');

      var a =window.location.href;
    let button='';
    let buttons = document.querySelectorAll('.but');
      buttons.forEach(b => {
      b.classList.remove('highlight');
    });

    if(a.includes('create'))
      button = document.querySelector('.OC');
    else if(a.includes('incoming'))
      button = document.querySelector('.OI');
    else if(a.includes('outcoming'))
      button = document.querySelector('.OO');
    else if(a.includes('requests'))
      button = document.querySelector('.OR');
    if(button!=='')
      button.classList.add('highlight') ;
    });	
    
  });
  return(
    <div className='header'>
      <div className='buttons'>
      <input className='but OC' type='button' value="Create order" onClick={()=>navigate('/orders/create')}/>
      <input className='but MMHide OI' type='button' value="Incoming" onClick={()=>navigate('/orders/incoming')}/>
      <input className='but MMHide OO' type='button' value="Outcoming" onClick={()=>navigate('/orders/outcoming')}/>
      <input className='but MMHide OR' type='button' value="Requests" onClick={()=>navigate('/orders/requests')}/>

      </div>
      
      <div className='rightPart'>
        <span className="address"> Откуда подгружаем адрес??</span>
        <div className="searchBoxHeader">
          <img src={search} alt=''></img>
          <input type='text' placeholder='search'></input>
        </div>
      </div>
      
    </div>
    )
}

export default HeaderOrder;

