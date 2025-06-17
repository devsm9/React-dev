import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurentItemBody from "./RestaurentItemBody";
import { emptyCart, removeItem } from "../utils/Slices/CartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((store) => store.cart.items);
  useEffect(() => {
    console.log(cartData);
  }, [cartData]);

  const handleClearCart = () => {
    dispatch(emptyCart());
  };

  return (
    <>
      {cartData?.length > 0 ? (
        <div className="text-center m-10 p-10">
          <button
            className="cursor-pointer bg-black text-white p-2 m-2 rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          <div className="w-6/12 m-auto">
            <RestaurentItemBody items={cartData} />
          </div>
        </div>
      ) : (
        <div className="text-center m-10 p-10">Cart is empty</div>
      )}
    </>
  );
};
export default Cart;
