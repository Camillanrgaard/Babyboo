import { Product } from "./product"

export type User = {
    company: {
        name: string
    },
    likedProducts: Product[]
}