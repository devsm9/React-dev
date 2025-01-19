import React from 'react';
import { useState ,useEffect } from 'react';
import { LOGO } from '../utils/ServiceURLs';
import { Link } from 'react-router-dom';

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
            <li><Link to='/' >Home</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
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