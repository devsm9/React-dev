import { useRouteError } from "react-router-dom";
import Header from "./Header";
const Error =()=>{
    const err = useRouteError();
    console.log(err)
    return(
       
       <div>
            <Header/>
            <h1 className="error-page"> Error !!! </h1>
            <h2>Something went wrong !</h2>
            <h3 className="error-page">{err.status} - {err.data}</h3>
        </div>
    )
}
export default Error;