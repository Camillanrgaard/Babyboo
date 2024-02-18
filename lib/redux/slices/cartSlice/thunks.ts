import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";
import { Cart } from "@/types/cart";
import { OrderItemModel } from "@/types/orderItemModel";
import axios, { AxiosResponse } from "axios";

export const fetchCart = createAppAsyncThunk(
  "cart/fetchCart",
  async (arg, { getState }) => {
    const state = getState();

    // Fetch cart from API
    const response: AxiosResponse<Cart> = await axios.get("https://dummyjson.com/carts/13", {
      method: "GET"
    });

    // Added product reference to the OrderItemModel if the product exists
    // Maybe not the best solution, but the API endpoint does not return all required data..
    let orderItems: OrderItemModel[] = [];
    response.data.products.forEach(product => {
      let p = state.products.products.find(p => p.id === product.id);
      if (p === undefined) return;
      orderItems.push({
        ...product,
        product: p
      });
    });

    // Return original cart data together with referenced products
    return {
      ...response.data,
      products: orderItems
    };
  },
);