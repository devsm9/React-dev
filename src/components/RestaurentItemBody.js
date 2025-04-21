import { CDN_IMAGE_URL } from "../utils/ServiceURLs";
const RestaurentItemBody = ({ items }) => {
  console.log("itemCrds ::::", items);

  return (
    <>
      <div>
        <div>
          {items?.map((obj) => (
            <div key={obj.card.info.id} className="p-2 m-2 border-b-2 border-b-gray-300 text-left">
                <div className="p-1">
                    <span className="font-bold">{obj?.card?.info?.name}</span>
                    <span className="font-bold"> - ₹{obj?.card?.info?.finalPrice || obj?.card?.info?.price/100}</span>
                </div>
                <p className="text- s">{obj?.card?.info?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurentItemBody;
