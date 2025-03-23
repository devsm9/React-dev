import { useRouteError } from "react-router-dom";
import Header from "./Header";
const Error =()=>{
    const err = useRouteError();
    console.log(err)
    return(
       
       <div>
            {/* <Header/> */}
            <h1 className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"> Error !!! </h1>
            <h2 className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50">Something went wrong !</h2>
            <h3 className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50">{err.status} {err.statusText} - {err.data}</h3>
            {/* <p className="">{err.error.stack}</p> */}
        </div>
    )
}
export default Error;