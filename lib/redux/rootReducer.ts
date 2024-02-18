/* Instruments */
import { cartSlice, campaignsSlice, productSlice, userSlice } from "./slices";

export const reducer = {
  campaigns: campaignsSlice.reducer,
  products: productSlice.reducer,
  cart: cartSlice.reducer,
  user: userSlice.reducer
};
