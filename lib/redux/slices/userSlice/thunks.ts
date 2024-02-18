import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";
import { OrderItemModel } from "@/types/orderItemModel";
import { Product } from "@/types/product";
import { User } from "@/types/user";
import axios, { AxiosResponse } from "axios";

export const fetchUser = createAppAsyncThunk(
    "user/fetchUser",
    async (arg, { getState }) => {
      const state = getState();
  
      // Fetch cart from API
      const response: AxiosResponse<User> = await axios.get("https://dummyjson.com/users/1", {
        method: "GET"
      });
  
      let likedProducts: Product[] = [];
      state.products.products.forEach(product => {
        let liked = Math.random() < 0.1;
        if (!liked) return;
        likedProducts.push(product);
      });
      
      // Return original cart data together with referenced products
      return {
        ...response.data,
        likedProducts: likedProducts
      };
    },
  );