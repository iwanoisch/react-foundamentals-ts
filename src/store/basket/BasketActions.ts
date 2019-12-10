import { ThunkDispatch } from "redux-thunk";

import {IProduct} from "../../components/products/ProductsData";
import {BASKET_ADD, BasketActionsType, BasketAdd, BasketState} from "./BasketTypes";


type BasketDispatch = ThunkDispatch<BasketState, undefined, BasketActionsType>

export function addToBasket(product: IProduct | null): BasketAdd {
    return {
        type: BASKET_ADD,
        payload: {
            product: product,
        }
    }
}
