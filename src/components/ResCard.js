import React from "react";
import { CDN_IMAGE_URL } from "../utils/ServiceURLs";
import { useContext } from "react";
import UserContextStore from '../utils/UserContextStore'

const ResCard = (props) => { 
  const { resData } = props;
  const UserName = useContext(UserContextStore)
  return (
    <div className="mt-6 h-90 w-70 mr-5  hover:bg-gray-100 border border-gray-200 rounded-lg shadow-sm">
      <div className="h-[46%]  w-[100%]">
        <img
          className="h-[100%] w-full p-1 rounded-t-lg rounded-lg object-cover"
          src={CDN_IMAGE_URL + resData.info.cloudinaryImageId}
        />
      </div>
      <div className="p-5">
        <div className="mb-2 text-xl tracking-tight font-semibold">
          <h3>{resData.info.name}</h3>
        </div>

        <div className="mb-1 flex justify-between pr-2 font-normal text-gray-500 ">
          <div className="flex justify-around">
          <h4>{resData.info.avgRating}</h4>
          <img className="h-5 w-5" src="https://www.iconpacks.net/icons/2/free-star-icon-2768.png"/>
          </div>
          
          <h4>{resData?.info.sla.deliveryTime} minutes</h4>
        </div>

        <h4 className="mb-1 font-normal text-gray-500 dark:text-gray-400">
          {resData?.info.cuisines.length > 4 ? resData?.info.cuisines.slice(0,5).join(', ') + '.....'
          :resData?.info.cuisines.join(", ")}
        </h4>
        <h4 className="mb-1 font-normal text-gray-500 dark:text-gray-400">
          {resData?.info.costForTwo}
        </h4>
        <h4 className="mb-1 font-normal text-gray-500 dark:text-gray-400">
          <UserContextStore.Consumer>
            {(data)=> data.userName1}
          </UserContextStore.Consumer>
          {/* {UserName.userName1} */}
        </h4>

        
      </div>
    </div>
  );
};

export default ResCard;
