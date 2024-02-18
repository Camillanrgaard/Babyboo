/* Instruments */
import type { ReduxState } from "@/lib/redux";

export const fetchUserStatusSelector = (state: ReduxState) => state.user.status
export const fetchUserSelector = (state: ReduxState) => state.user.user.company
export const fetchUserLikedProductsSelector = (state: ReduxState) => state.user.user.likedProducts;