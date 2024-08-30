import React, { useEffect, useState , useContext } from "react";
import "../styles/Header.css";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
</style>;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { Avatar, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/authContext";


function Header() {
  // i need a state for the user to check whether its signin or not

  const {isAuthenticated , setIsAuthenticated , user} = useContext(AuthContext);


  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handelLogOut = ()=>{
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  }

  return (
    <nav>
      <div id="title">
        <FontAwesomeIcon icon={faBookOpen} style={{ height: "1.3em" }} />
        <h1>
          EDU<span id="care">Care</span>
        </h1>
      </div>
      <div>
        <ul className="mid-list">
         <Link to={'/'}>Home</Link>
         <Link to={'/courses'}>All Courses</Link>
         <Link to={'/pages'}>Pages</Link>
         <Link to={'/blog'}>Blog</Link>
         <Link to={'/contact'}>Contact</Link>
        </ul>
      </div>
      {!isAuthenticated && (
        <div className="userHandel">
          <Link to={"/signin"} id="signIn">
            {" "}
            Sign In
          </Link>
          <Link to={"/signup"} id="signUp">
            {" "}
            Sign Up
          </Link>
        </div>
      )}

      {isAuthenticated && (
        <div className="userLoggedHandel">
          <Avatar
          sx={{cursor:'pointer'}}
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
            alt="this is the profile"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          />
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/profile">Profile</Link>
            </MenuItem>
            <MenuItem onClick={handelLogOut}>Logout</MenuItem>
          </Menu>
        </div>
      )}
    </nav>
  );
}

export default Header;
