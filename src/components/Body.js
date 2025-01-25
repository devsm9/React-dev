import React from "react";
import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RESTAURENT_LIST } from "../utils/ServiceURLs";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurentList, setrestaurentList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try{
    const response = await fetch(
      RESTAURENT_LIST
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const rawData = await response.text();
    const data = JSON.parse(rawData);
    setrestaurentList(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log("restro list", data?.data?.cards[2]?.card?.card);
  } catch (error) {
    console.error("Fetch error: ", error);
  }


};
  if (restaurentList?.length === 0) {
    return (
      <Shimmer/>
    );
  }
  return (
    <div className="body">
      <div className="search">
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
      </div>

      <div className="res-container">
        {restaurentList?.map((restaurant) => (
         <Link className="res-card-text" to={"/restaurent/" + restaurant.info.id } key={restaurant.info.id}> <ResCard resData={restaurant}  /> </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
