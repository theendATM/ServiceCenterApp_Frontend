import './SignInPage.css';
import user from '../../components/img/def_user.png'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const SignInPage=() =>{ 
    const navigate = useNavigate();

    const logIn = async ({username,password})=>{
        // const result=await axios({
        //     method:"post",
        //     url:"https://localhost:7226/auth/token",
        //     data:{
        //         Username:"Denis Zmeev",
        //         Password:"123456"
        //     }
        //})

        const result=await axios({
                method:"get",
                url:"https://localhost:7226/auth/roles",
            })

        
        alert(result.data)
    }

    return (
      <div className='signInPage'>
        <div className='logoAuth'>
            <img src={user} alt=''></img>
        </div>

        <div className='signIn'>
            <span>Sign in</span>
            <div className='userData'>
                <input type='email' placeholder='Email'></input>
                <input type='password' placeholder='Password'></input>
            </div>
            <div className='buttons'>
                <button onClick={()=>navigate('/register')}>Register</button>
                <button>Sign in</button>
            </div>
        </div>


      </div>
    )
}

export default SignInPage;