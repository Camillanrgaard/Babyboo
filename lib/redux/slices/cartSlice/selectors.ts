/* Instruments */
import type { ReduxState } from "@/lib/redux";

export const fetchCartSelector = (state: ReduxState) => state.cart.cart;
export const cartStatusSelector = (state: ReduxState) => state.cart.status;