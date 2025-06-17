import React from "react";
import { useState, useEffect } from "react";
import { LOGO } from "../utils/ServiceURLs";
import { Link, useNavigate } from "react-router-dom";
import OnlineStatus from "./OnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("login");
  const navigate = useNavigate();
  const isOnline = OnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  // useEffect(()=>{
  //   console.log(cartItems)

  // },[cartItems])

  const handleLogin = () => {
    loginBtn === "login" ? () => navigate("/login") : setLoginBtn("login");
  };
  return (
    <div className="flex p-2 m-1 justify-between shadow-lg hover:shadow-xl transition-shadow">
      <div className="logo-container">
        <img className="w-30" src={LOGO} onClick={() => navigate("/")} />
      </div>

      <div className="flex">
        <ul className="flex font-bold space-x-10 ">
          <li>
            <Link className="" to="/">
              {isOnline ? "🟢" : "🔴"}
            </Link>
          </li>
          <li>
            <Link className="" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="" to="/cart">
              Cart - ({cartItems?.length}Items)
            </Link>
          </li>
          <Link className="" to="/login">
            <button
              className="border-1 bg-red-300 p-1 rounded-2xl"
              onClick={() => {
                handleLogin;
              }}
            >
              {loginBtn}
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
