import React from 'react'
import ResCard from './ResCard';
import { resList } from '../utils/RawData';


const Body = () => { 
    const [resList, setresList] = useState([resList]
        
    )

    return (
      <div className="body">
        <div className="search">
          Search Box
          <button
          onClick={
            ()=>{
                FilteredList = resList.filter((zzz) => zzz.data.avgRating>4);
                // console.log(resList2)
                console.log(resList)
            }
          }
          >Top rated</button>
        </div>
  
        <div className="res-container">
          {
            resList.map((restaurant)=>( <ResCard key={restaurant.data.id} resData ={restaurant}/>))
          }
          
          
       
        </div>
      </div>
    );
  };

  export default Body