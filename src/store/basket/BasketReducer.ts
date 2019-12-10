import {BASKET_ADD, BasketActionsType, BasketState} from "./BasketTypes";

const initialBasketState: BasketState  = {
    products: [],
};


export function basketReducer(
    state = initialBasketState,
    action: BasketActionsType
): BasketState {
    switch (action.type) {
        case BASKET_ADD:
            return(state.products && action.payload.product) ? {
                ...state,
                products: state.products.concat(action.payload.product)
            } : state;
        default:
            return state || initialBasketState;
    }
}
