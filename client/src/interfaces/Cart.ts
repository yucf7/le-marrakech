import { Meal } from "./Meal";

export interface Cart {
    _id: string,
    meals: [Meal],
    quantities: [number]
}