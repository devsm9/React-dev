import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import { createBrowserRouter ,RouterProvider,Outlet } from "react-router-dom";
import Restaurent from "./components/Restaurent";
import Login from "./components/Login";
import UserContextStore from "./utils/UserContextStore";

const AppLayout = () => {

  const [userName, setUserName] = useState('default')
  
  return (
    <UserContextStore.Provider value={{userName1:userName, setUserName}}>
    <div className="App">
      <Header />
      <Outlet/>
    </div>
    </UserContextStore.Provider>
  );
};

const router = createBrowserRouter([{
  path: "/",
  element : <AppLayout/>,
  children:[
    {
      path:'/',
      element:<Body/>,
      errorElement:<Error/>
    },
    {
      path : "/about",
      element: <About/>,
      errorElement: <Error/>
      },
      {
      path: "/contact",
      element: <ContactUs/>,
      errorElement:<Error/>
      },
      {
        path: "/restaurent/:resId",
        element:<Restaurent/>,
        errorElement:<Error/>
      },
      {
        path:"/login",
        element:<Login/>,
        errorElement:<Error/>
      }
  ],
  errorElement:<Error/>
  
},


]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
