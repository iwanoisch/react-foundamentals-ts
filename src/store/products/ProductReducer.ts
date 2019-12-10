import {GET_ALL, GET_SINGLE, LOADING_DONE, ProductsActionsType, ProductsState,} from "./ProductsTypes";


const initialProductState: ProductsState = {
    product: null,
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
        case GET_SINGLE:
            return {
                ...state,
                product: action.payload.product,
                loading: false,
            };
        default:
            return  state

    }
}
