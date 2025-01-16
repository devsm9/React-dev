import React from 'react';
import { useState ,useEffect } from 'react';
import { LOGO } from '../utils/ServiceURLs';


const Header = () => {
  const [loginBtn, setLoginBtn] = useState('login')
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src= {LOGO}
          />
        </div>
  
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="loginBtn" 
            onClick ={()=>{loginBtn === 'login' ?
              setLoginBtn('logout'):
              setLoginBtn('login')}}
              >
                {loginBtn}
            </button>
          </ul>
        </div>
      </div>
    );
  };

export default Header