import React from 'react';
import {CDN_IMAGE_URL} from '../utils/ServiceURLs'
const ResCard = (props) => {
    const {resData} = props;
    return (
      
      <div className="res-card">
          <img
            className="item-img"
            src={ CDN_IMAGE_URL + (resData.info.cloudinaryImageId)  }
          />
        
        <div className="res-name"><h3>{resData.info.name}</h3></div>
        <div className="rating"><h4>{resData.info.avgRating}Rating</h4></div>
        <h4>{resData?.info.cuisines.join(", ")}</h4>
        <h4>{resData?.info.deliveryTime}minutes</h4>
      </div>
    );
  };

  export default ResCard;