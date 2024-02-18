/* Instruments */
import type { ReduxState } from "@/lib/redux";

export const fetchProductsSelector = (state: ReduxState) => state.products.products;
export const productsStatusSelector = (state: ReduxState) => state.products.status;