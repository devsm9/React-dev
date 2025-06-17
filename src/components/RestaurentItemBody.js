import { useDispatch } from "react-redux";
import { CDN_IMAGE_URL } from "../utils/ServiceURLs";
import { addItem, removeItem ,emptyCart } from "../utils/Slices/CartSlice";
const RestaurentItemBody = ({ items }) => {
  const dispatch = useDispatch()
  // console.log("itemCrds ::::", items);

//   const handleExpand =()=>{
//     setShowIndex();
// }

const handleAddItem =(itemName)=>{
  console.log(itemName)
  dispatch(addItem(itemName))
}

  return (
    <>
      <div>
        <div>
          {items?.map((obj) => (
            <div key={obj.card.info.id} className="p-2 m-2 border-b-2 border-b-gray-300 text-left">
              {console.log(obj)}
                <div className="p-1 flex justify-between">
                  <div className="w-9/12">
                    <span className="font-bold">{obj?.card?.info?.name}</span>
                    <span className="font-bold"> - ₹{obj?.card?.info?.defaultPrice ? (obj?.card?.info?.defaultPrice/100): obj?.card?.info?.price/100}</span>
                    <p className="text- s">{obj?.card?.info?.description}</p>
                  </div>
                  <div className="w-3/12">
                  <div className=" m-auto absolute">
                  <button className="p-2 mx-15 my rounded-lg bg-black text-blue-50"
                  onClick={()=>handleAddItem(obj)}>Add +</button>
                  </div>
                   <img className="w-full h-full object-cover"  src={CDN_IMAGE_URL + obj?.card?.info?.imageId}></img>
                   
                  </div>
                </div>
                
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurentItemBody;