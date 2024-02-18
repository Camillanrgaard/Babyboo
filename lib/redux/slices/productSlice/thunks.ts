import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";
import axios, { AxiosResponse } from "axios";
import { Product } from "@/types/product";

export const fetchProducts = createAppAsyncThunk(
  "product/fetchProducts",
  async () => {
    // Fetch products from API
    const response: AxiosResponse<{ products: Product[] }> = await axios.get("https://dummyjson.com/products?limit=0", {
      method: "GET"
    });

    return response.data.products;
  },
);