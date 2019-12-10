import {IProduct} from "../../components/products/ProductsData";

export const BASKET_ADD = "BASKET_ADD";

export interface BasketState {
    products: IProduct[] | null;
}

export interface BasketAdd {
    type: typeof BASKET_ADD;
    payload: {
        product: IProduct | null
    }
}

export type BasketActionsType = BasketAdd;
