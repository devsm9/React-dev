import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MENU_DATA } from "../utils/ServiceURLs";
import { useParams } from "react-router-dom";

const Restaurent = () => {
    const [restaurantList, SetRestaurentList] = useState([]);

    useEffect(() => {
        fetchRestaurent();
        console.log("UseEffect run");
    }, []);

    const fetchRestaurent = async () => {
        const data = await fetch(
            MENU_DATA + resId
    );
        const jsonData = await data.json();
        SetRestaurentList(jsonData);
    };
    const { cuisines = [], costForTwo = 0, name = "Unknown" } = restaurantList?.data?.cards[2]?.card?.card?.info || {};
    const data = restaurantList?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const itemCards = data?.itemCards || [];
    const {resId} = useParams()
    return (
        <div>
            <h2>{name} - {costForTwo}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <p>
               {itemCards.map(item=> <li>{item?.card?.info?.name} - Rs.
                    {item?.card.info.defaultPrice/100 || item.card.info.price/100}</li>)} 
            </p>
        </div>
    );
};

export default Restaurent;
