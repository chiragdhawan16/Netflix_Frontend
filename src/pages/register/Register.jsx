import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [profile, setProfilePic] = useState("https://firebasestorage.googleapis.com/v0/b/netflix-f3af8.appspot.com/o/users%2Fno_image.png?alt=media&token=f8044609-d880-4171-b9fc-dc32e184a59c");
  const [temp, setTemp] = useState("");
  const usenavigate = useNavigate();

  const handleStart = () => {
    
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(temp==="")
      { 
        return(alert("Enter email"))
      }
      else if(temp.length<5){
        
        return(alert("Email should contain atleast 5 character"))
      }
      else if(!mailformat.test(temp)){
        return(alert("Email is not valid"))
      }
    setEmail(temp);

  };
  const handlesignin = async (e) => {
    e.preventDefault();

    usenavigate("/login");
  };

  const handleFinish = async (e) => {
    e.preventDefault();

    
      if(username==="")
      { 
        return(alert("Enter Username"))
      }
      else if(username.length<5){
        return(alert("Name should contain atleast 5 character"))
      }
      
      if(password==="")
      { 
        return(alert("Enter Password"))
      }
      else if(password.length<5){
        return(alert("Password should contain atleast 5 character"))
      }
      
      
      
    
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_API}/api/auth/register`,
        { email, username, password,profile }
      );

      if (result.data.success) {
        
        alert(result.data.message)
        usenavigate("/login");
      }
      else{
        
          alert(result.data.message)
          window.location.reload();
        
        
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />

          <button className="loginButton" onClick={(e) => handlesignin(e)}>
            Sign In
          </button>
        </div>
      </div>

      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
         
            <form className="input">
            <input
              type="email"
            
              placeholder="email address"
              value={temp}
              onChange={(e) => setTemp(e.target.value.toLocaleLowerCase())}
              required
            />
            <button type="submit" className="registerButton" onClick={handleStart}>
              Get Started
            </button>
            </form>
          
        ) : (
          <form className="input">
            <input
              type="username"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
               
               required
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minlength="5"
              required
            />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
