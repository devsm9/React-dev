import React from "react";
import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RESTAURENT_LIST_URL } from "../utils/ServiceURLs";
import Shimmer from "./Shimmer";
import OnlineStatus from "./OnlineStatus";

const Body = () => {
  const [restaurentList, setrestaurentList] = useState([]);
const onlineStatus =OnlineStatus()
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try{
    const response = await fetch(
      RESTAURENT_LIST_URL
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const rawData = await response.text();
    const data = JSON.parse(rawData);
    setrestaurentList(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log("restro list4", data?.data?.cards[4]?.card?.card.gridElements?.infoWithStyle?.restaurants);

    console.log("restro list5", data?.data?.cards[5]?.card?.card);

  } catch (error) {
    console.error("Fetch error: ", error);
  }


};
if(onlineStatus === false)
  return(<p> You are offline</p>)
  return (<>
    {restaurentList?.length === 0 ?
        <Shimmer/> :<></>
    }
    <div className="margin-top: 20px;">
      {/* <div className="search">
        Search Box    
        <button
          onClick={() => {
            FilteredList = restaurentList.filter(
              (list) => list.info.avgRating > 4
            );
            setrestaurentList(FilteredList);
          }}
        >
          Top rated 
        </button>
      </div> */}
{/* {console.log(restaurentList)} */}
      <div className=" flex flex-wrap justify-center">
        {restaurentList?.map((restaurant) => (
         <Link className="" to={"/restaurent/" + restaurant.info.id } key={restaurant.info.id}> <ResCard resData={restaurant}  /> </Link>
        ))}
      </div>
    </div>
    </>
  );
};

export default Body;
