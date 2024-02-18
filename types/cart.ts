import { CartProduct } from "./cartProduct"
import { OrderItemModel } from "./orderItemModel"

export type Cart = {
    id: number,
    products: OrderItemModel[],
    total: number,
    totalProducts: number,
    totalQuantity: number
}