import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MENU_DATA } from "../utils/ServiceURLs";
import { useParams } from "react-router-dom";
import { DataShimmer } from "./Shimmer";
import RestCategory from './RestCategory';

const Restaurent = () => {
  const [restaurantList, SetRestaurentList] = useState([]);
  const [showIndex , setShowIndex] = useState(0);

  useEffect(() => {
    fetchRestaurent();
    console.log("UseEffect run");
  }, []);

  const fetchRestaurent = async () => {
    const data = await fetch(MENU_DATA + resId);
    const jsonData = await data.json();
    SetRestaurentList(jsonData);
  };
  const {
    cuisines = [],
    costForTwo = 0,
    name = "Unknown",
  } = restaurantList?.data?.cards[2]?.card?.card?.info || {};
  const data =
    restaurantList?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;
  const itemCards = data?.itemCards || [];

  const RestaurentRegularCards =
    restaurantList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c?.card?.card?.['@type']==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');

  const { resId } = useParams();
  return (
    <>
      {restaurantList.length == 0 ? (
        
        <DataShimmer />
      ) : (<>
        <div className="text-center">
          <h1 className="font-bold mt-5 text-xl">{name}</h1>
          <p className="text-lg">{cuisines.join(", ")} - {costForTwo / 100}</p>

          {/* {******CATEGORIES********} */}
          
            {RestaurentRegularCards?.map((category, index) => (
            <RestCategory key={data?.title} data={category?.card?.card} showItems={index === showIndex ? true : false} setShowIndex={()=>setShowIndex(index)}/>
              ))} 
          
        </div>

        
        
      </>)}
    </>
  );
};

export default Restaurent;
