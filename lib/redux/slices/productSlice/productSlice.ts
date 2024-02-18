import { Product } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./thunks";

/* Instruments */
const initialState: ProductSliceState = {
  products: [],
  status: "idle"
};

export const productSlice = createSlice({
  name: "campaigns",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

/* Types */
export interface ProductSliceState {
  products: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
}
