import { DiscountOffers } from "./discount-offers";

export interface IProduct {
    id: number;
    name: string;
    price: number;
    quantity: number;
    categoryID: number;
    image: string;
    // discount: DiscountOffers
}
