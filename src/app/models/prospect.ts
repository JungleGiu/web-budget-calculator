import { Product } from "./product";

export interface Prospect {
    id: number
    date: Date
    name: string
    email: string
    phoneNumber: number
    total: number
    items: Product[]
}
 export const Prospects: Prospect[] = []