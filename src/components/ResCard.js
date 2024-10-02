import React from 'react';
import {CDN_IMAGE_URL} from '../utils/ServiceURLs'
const ResCard = (props) => {
    const {resData} = props;
    return (
      <div className="res-card">
        
          <img
            className="item-img"
            src={ CDN_IMAGE_URL + resData.data.cloudinaryImageId}
          />
        
        <div className="res-name"><h3>{resData.data.name}</h3></div>
        <div className="rating"><h4>{resData.data.avgRating}Rating</h4></div>
        <h4>{resData.data.cuisines.join(", ")}</h4>
        <h4>{resData.data.deliveryTime}minutes</h4>
      </div>
    );
  };

  export default ResCard;