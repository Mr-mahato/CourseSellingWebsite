import React from "react";
import '../styles/Header.css'
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
</style>
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

import {Link} from 'react-router-dom'
function Header() {
  return (
    <nav>
      <div id="title">
        <FontAwesomeIcon icon={faBookOpen} style={{height:'1.3em' }}/>
        <h1>EDU<span id="care">Care</span></h1>
      </div>
      <div>
        <ul className="mid-list">
          <li>Home</li>
          <li>All Course</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="userHandel">
        <button id="signUp"> Sign In</button>
        <Link to={'/signup'}> <button id="signIn">  Sign Up </button></Link>
      </div>
    </nav>
  );
}

export default Header;
