import "./SignInPage.css";
import user from "../../components/img/def_user.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const SignInPage = () => {
  const [login, setLogin] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const navigate=useNavigate()

  const logIn = async () => {
    if (!password || !login) return;

    try {
      await axios({
        method: "post",
        url: "https://localhost:7226/auth/token",
        data: {
          Username: login,
          Password: password,
        },
        withCredentials: true,
      });

      navigate("/")
    } catch {
      alert("wrong");
    }
  };

  return (
    <div className="signInPage">
      <div className="logoAuth">
        <img src={user} alt=""></img>
      </div>

      <div className="signIn">
        <span>Sign in</span>
        <div className="userData">
          <input type="text" onChange={(event)=>setLogin(event.target.value)} placeholder="Login"></input>
          <input
            type="password"
            onChange={(event)=>setPassword(event.target.value)}
            placeholder="Password"
          ></input>
        </div>
        <div className="buttons">
          <button onClick={() => navigate("/register")}>Register</button>
          <button onClick={logIn}>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
