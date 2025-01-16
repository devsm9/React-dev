import React from "react";
import ResCard from "./ResCard";
import { useState, useEffect } from "react";

const Body = () => {
  const [restaurentList, setrestaurentList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try{
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const rawData = await response.text();
  const data = JSON.parse(rawData);
    // const data = await response.json();
    // const restroList = data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setrestaurentList(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log("restro list", restaurentList);
  } catch (error) {
    console.error("Fetch error: ", error);
  }


};
  if (restaurentList?.length === 0) {
    return (
      <>
        <div style={{ justifyContent: "space-evenly", display: "flex" }}>
          {" "}
          <div className="res-card"></div>
          <div className="res-card"></div>
          <div className="res-card"></div>
          <div className="res-card"></div>
          <div className="res-card"></div>
        </div>
      </>
    );
  }
  return (
    <div className="body">
      <div className="search">
        Search Box
        <button
          onClick={() => {
            FilteredList = restaurentList.filter(
              (zzz) => zzz.info.avgRating > 4
            );
            console.log("filtered res", FilteredList);
            setrestaurentList(FilteredList);
          }}
        >
          Top rated
        </button>
      </div>

      <div className="res-container">
        {restaurentList?.map((restaurant) => (
          <ResCard resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
