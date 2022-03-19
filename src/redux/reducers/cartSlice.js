import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, payload) => {
      payload.id = nanoid();
      state.cart = [...state.cart, payload];
    },
    removeFromCart: (state, payload) => {
      state.cart = state.cart.filter((item) => item.id !== payload.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const showCart = (state) => {
  return state.cart.cart;
};

export default cartSlice.reducer;
