import {ActionCreator, AnyAction, Dispatch} from "redux";
import {GET_ALL, LOADING, ProductsGetAllAction, ProductsLoadingAction, ProductState} from "./ProductsTypes";
import { ThunkAction } from "redux-thunk";

const loading: ActionCreator<ProductsLoadingAction> = ()  => ({
        type: LOADING
});

// altro modo
export function load(): ProductsLoadingAction {
    return {
        type: LOADING
    }
}

export const getProducts: ActionCreator<ThunkAction<Promise<AnyAction>, ProductState, null, ProductsGetAllAction>> = () => {
    return async (dispatch: Dispatch) => {
        dispatch(loading());
        const products = await getProducts();
        return dispatch({
            products,
            type: GET_ALL
        })
    };
};
