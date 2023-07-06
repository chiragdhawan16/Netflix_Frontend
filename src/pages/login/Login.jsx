import {  useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
 import axios from 'axios'
 import { useAuth } from '../../context/auth';



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const usenavigate = useNavigate();
  const[auth,setAuth]=useAuth();

  const handleLogin = async(e) => {
    
    e.preventDefault()

    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(email==="")
      { 
        return(alert("Enter Email"))
      }
      
      
      if(password==="")
      { 
        return(alert("Enter Password"))
      }
      
      
      
    
    try {
      
       const res = await axios.post(`${process.env.REACT_APP_API}/api/auth/login`, {email,password});
      
        if(res.data.success){
          
            
            setAuth({
                ...auth,
                user:res.data.user,
                token:res.data.token,
            })
            
             localStorage.setItem('netflixauth',JSON.stringify(res.data));
             
             usenavigate("/");
        }
        else{
          alert(res.data.message)  
        }
        
    } catch (error) {
      
        
    }
     };
  return (
    
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
        
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value.toLocaleLowerCase())}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Sign In
          </button>
          <span>
            <Link to="/register" style={{textDecoration:"none"}}> New to Netflix? <b>Sign up now.</b></Link>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
