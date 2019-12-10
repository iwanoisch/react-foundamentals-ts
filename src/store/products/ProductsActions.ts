import {
    GET_ALL,
    GET_SINGLE,
    LOADING_DONE,
    ProductsActionsType,
    ProductsLoadingAction,
    ProductsState
} from "./ProductsTypes";
import { ThunkDispatch } from "redux-thunk";
import {getAllProducts, getSingleProduct} from "../../components/products/ProductsData";





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

export function getProduct(id: number) {
    return async (dispatch: ProductsDispatch) => {
        dispatch(load());
        const product = await getSingleProduct(id);
        return dispatch({
            payload: {
                product: product
            },
            type: GET_SINGLE,
        })
    }
}

// altro modo
export function load(): ProductsLoadingAction {
    return {
        type: LOADING_DONE
    }
}

// export const getPProduct: ActionCreator<ThunkAction<Promise<AnyAction>, ProductState, null, ProductsGetAllAction>> = () => {
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
