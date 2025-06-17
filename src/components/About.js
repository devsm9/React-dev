import React from "react";
import { useState, useEffect } from "react";

import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  const [Profile, setProfile] = useState(false);

  const handleProfile = () => {
    setProfile((prev) => !prev);
    console.log(Profile);
  };
  return (
    <>
      <div className=" justify-center flex">
        <button className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
        onClick={()=>handleProfile()}>
          {Profile ? "Hide Profile" : "Show profile"}
        </button>
      </div>
      <div className="justify-center flex">
      {Profile && <UserClass />}
      </div>
      {/* <UserClass/> */}
      {/* <User name={"Shirish function"} /> */}
      {/* <UserClass name={"Shirish class"}/> */}
    </>
  );
};

export default About;
