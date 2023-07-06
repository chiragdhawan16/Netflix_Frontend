import {  useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { useAuth } from '../../context/auth';

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const[auth,setAuth]=useAuth();

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const handleLogout=()=>{
    console.log("chirag")
    setAuth({
      ...auth,
      user:null,
      token:''
  })
  localStorage.removeItem('netflixauth')
  }
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">Movies</span>
          </Link>
          
        </div>
        <div className="right">
          
          <img
            src={auth.user.profilePic ? auth.user.profilePic:"https://i.pinimg.com/236x/85/30/ea/8530ea9014e1e8baf7857235a093eba5.jpg" }
            alt=""
          />
          <div className="profile">
            <KeyboardArrowDownOutlinedIcon className="icon" />
            <div className="options">
            
              <span  onClick={handleLogout}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
