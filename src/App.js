import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import { createBrowserRouter ,RouterProvider } from "react-router-dom";

const AppLayout = () => {
  
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([{
  path: "/",
  element : <AppLayout/>,
  errorElement: <Error/>
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
}

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
