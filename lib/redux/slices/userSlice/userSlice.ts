import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "@/types/user";
import { fetchUser } from "./thunks";
import { Product } from "@/types/product";

/* Instruments */
const initialState: UserSliceState = {
  status: "idle",
  user: {
    company: {
        name: ""
    },
    likedProducts: []
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Product>) => {
      const index = state.user.likedProducts.findIndex(p => p.id == action.payload.id);
      if (index === -1) {
        state.user.likedProducts.push(action.payload);
      } else {
        state.user.likedProducts.splice(index, 1);
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

/* Types */
export interface UserSliceState {
  user: User;
  status: "idle" | "loading" | "succeeded" | "failed";
}
