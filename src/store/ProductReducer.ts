import {GET_ALL, LOADING, ProductsActions, ProductState} from "./ProductsTypes";

const initialProductState: ProductState = {
    products: [],
    productsLoading: false
};

export function productsReducer(
    state = initialProductState,
    action: ProductsActions
): ProductState {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                productsLoading: true,
            };
        case GET_ALL:
            return {
                ...state,
                products: action.products,
                productsLoading: false,
            };
        default:
            return  state

    }
}
