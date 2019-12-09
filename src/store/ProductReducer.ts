import {GET_ALL, LOADING_DONE, ProductsActionsType, ProductsState,} from "./ProductsTypes";


const initialProductState: ProductsState = {
    products: null,
    loading: false
};

export function productsReducer(
    state = initialProductState,
    action: ProductsActionsType
): ProductsState {
    switch (action.type) {
        case LOADING_DONE:
            return {
                ...state,
                loading: true,
            };
        case GET_ALL:
            return {
                ...state,
                products: action.payload.products,
                loading: false,
            };
        default:
            return  state

    }
}
