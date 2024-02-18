import { createSlice } from "@reduxjs/toolkit";
import { fetchCart } from "./thunks";
import { Cart } from "@/types/cart";

/* Instruments */
const initialState: CartSliceState = {
  status: "idle",
  cart: {
    id: -1,
    products: [],
    total: 0,
    totalProducts: 0,
    totalQuantity: 0
  }
};

export const cartSlice = createSlice({
  name: "campaigns",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cart = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

/* Types */
export interface CartSliceState {
  cart: Cart;
  status: "idle" | "loading" | "succeeded" | "failed";
}
