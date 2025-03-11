import React from "react";
import { useState, useEffect } from "react";

import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  const [Profile, setProfile] = useState(false)

  handleProfile=()=>{
    setProfile(prev => !prev)
    console.log(Profile)
  }
  return (
    <>
    <div className="about-profile">
      <button className="button-3" onClick={handleProfile}>{Profile ? "Hide Profile" :"Show profile"}</button>
      
      </div>
      {Profile && <UserClass/>}
      {/* <UserClass/> */}
      {/* <User name={"Shirish function"} /> */}
      {/* <UserClass name={"Shirish class"}/> */}
    </>
  );
};

export default About;