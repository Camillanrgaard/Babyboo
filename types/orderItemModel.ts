import { Product } from "./product";

export type OrderItemModel = {
  id: number,
  product: Product;
  quantity: number;
  discountPercentage: number;
  price: string | number;
};
