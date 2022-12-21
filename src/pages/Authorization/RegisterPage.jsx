import './SignInPage.css';
import user from '../../components/img/def_user.png'
import { useNavigate } from 'react-router-dom'

const RegisterPage=() =>{ 
    const navigate = useNavigate();
    return (
      <div className='signInPage'>
        <div className='logoAuth'>
            <img src={user} alt=''></img>
        </div>

        <div className='signIn'>
            <span>Sign in</span>
            <div className='userData'>
                <input type='text' placeholder='Name'></input>
                <input type='email' placeholder='Email'></input>
                <input type='password' placeholder='Password'></input>
                
            </div>
            <div className='buttons'>
                <button onClick={()=>navigate('/signin')}>Sign in</button>
                <button>Register</button>
            </div>
        </div>


      </div>
    )
}

export default RegisterPage;