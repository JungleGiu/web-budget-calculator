import { Product } from "./product";

export interface Prospect {
    id: number
    date: string
    name: string
    email: string
    total: number
    items: Product[]
}
 export const Prospects: Prospect[] = []