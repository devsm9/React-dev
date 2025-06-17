import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    emptyCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, emptyCart } = CartSlice.actions;

export default CartSlice.reducer;
