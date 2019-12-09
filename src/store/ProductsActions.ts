import {ActionCreator, AnyAction, Dispatch} from "redux";
import {
    GET_ALL, LOADING_DONE, ProductsActionsType,
    ProductsGetAllAction,
    ProductsLoadingAction,
    ProductsState,
} from "./ProductsTypes";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import {getAllProducts} from "../components/products/ProductsData";




type ProductsDispatch = ThunkDispatch<ProductsState, undefined, ProductsActionsType>


export function getProducts() {
    return async (dispatch: ProductsDispatch) => {
        dispatch(load());
        const products = await getAllProducts();
        return dispatch({
            payload: {
                products: products,
            },
            type: GET_ALL,
        })
    }
}

// export const getProduct: ActionCreator<ThunkAction<Promise<AnyAction>, ProductState, null, ProductsGetAllAction>> = () => {
//     return async (dispatch: Dispatch) => {
//         dispatch(loading());
//         const products = await getProducts();
//         return dispatch({
//             products,
//             type: GET_ALL
//         })
//     };
// };



// const loading: ActionCreator<ProductsLoadingAction> = ()  => ({
//         type: LOADING
// });

// altro modo
export function load(): ProductsLoadingAction {
    return {
        type: LOADING_DONE
    }
}


