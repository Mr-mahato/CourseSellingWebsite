import React, { useEffect, useState, useContext } from "react";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import { AuthContext } from "../context/authContext";
import UserLoginModel from "./Login/UserLoginModel";

function Header() {
  const [userLoginModel, setUserLoginModel] = useState(false);
  const [sideBarModel, setSideBarModel] = useState(false);
  const [scrolly, setScrolly] = useState(0);

  const {setUser , isAuth , setIsAuth} = useContext(AuthContext)

  

  useEffect(() => {
    const handelScroll = () => {
      setScrolly(window.scrollY);
    };

    window.addEventListener("scroll", handelScroll);
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handelLogOut = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
  };

  return (
    <div>
      <nav
        className={`fixed w-full z-20 top-0 left-0 right-0 ${
          scrolly < 500 && "border-b-2 border-blue-600"
        }`}
      >
        <div id="title">
          <FontAwesomeIcon icon={faBookOpen} style={{ height: "1.3em" }} />
          <h1>
            EDU<span id="care">Care</span>
          </h1>
        </div>

        {/* different navigation here */}
        <div className="md:block hidden">
          <ul className="mid-list">
            <Link to={"/"} className="focus:text-blue-600">
              Home
            </Link>
            <Link to={"/courses"} className="focus:text-blue-600">
              All Courses
            </Link>
            <Link to={"/contact"} className="focus:text-blue-600">
              Contact
            </Link>
          </ul>
        </div>

        {/* hamburger section */}
        <div className="md:hidden block">
          <FontAwesomeIcon
            onClick={() => setSideBarModel(!sideBarModel)}
            className="cursor-pointer"
            icon={faBars}
            style={{ height: "1.3em" }}
          />

          {sideBarModel && (
            <aside className="absolute  right-0 top-0 flex flex-col bg-neutral-200 min-h-screen w-[13rem]">
              <FontAwesomeIcon
                onClick={() => setSideBarModel(!sideBarModel)}
                className="cursor-pointer self-end  "
                icon={faXmark}
                style={{ height: "2rem" }}
              />
              <div className="w-[80%] flex flex-col justify-between min-h-[90vh] mx-auto pt-10">
                <div className="flex flex-col">
                  <Link to={"/"} className="hover:bg-neutral-300 px-2 py-1">
                    Home
                  </Link>
                  <Link
                    to={"/courses"}
                    className="hover:bg-neutral-300 px-2 py-1"
                  >
                    All Courses
                  </Link>
                  <Link
                    to={"/contact"}
                    className="hover:bg-neutral-300 px-2 py-1"
                  >
                    Contact
                  </Link>
                </div>

                <div className=" flex justify-between">
                  <button
                    onClick={() => setIsLogin(true)}
                    className=" p-2 font-semibold text-neutral-600"
                  >
                    Log In
                  </button>
                  <button
                    onClick={() => setIsSignup(true)}
                    className="bg-blue-500 px-2  ml-2 ring-2 ring-blue-800 text-white font-semibold hover:bg-blue-600/90"
                  >
                    {" "}
                    Sign Up
                  </button>
                </div>
              </div>
            </aside>
          )}
        </div>
       {!isAuth && <div className="md:block hidden">
          <button
            onClick={() => setUserLoginModel(!userLoginModel)}
            className="bg-blue-600 px-3 py-2 rounded-md text-white font-semibold"
          >
            Login
          </button>
        </div>}
        {/* login signup */}

        {isAuth && (
        <div className="userLoggedHandel">
          <Avatar
            sx={{ cursor: "pointer" }}
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
      {userLoginModel && <UserLoginModel setUserLoginModel={setUserLoginModel}/>}
    </div>
  );
}

export default Header;
