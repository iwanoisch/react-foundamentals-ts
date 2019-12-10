import {IProduct} from "../../components/products/ProductsData";

export interface ProductsState {
    product: IProduct | null;
    products: IProduct[] | null;
    loading: boolean ;
}

// Actions
export const LOADING_DONE = 'LOADING_DONE';
export const GET_ALL = 'GET_ALL';
export const GET_SINGLE = 'GET_SINGLE';


export interface ProductsGetAllAction {
    type: typeof GET_ALL;
    payload: {
        products: IProduct[] | null;
    }
}

export interface ProductsLoadingAction {
    type: typeof LOADING_DONE;
}

export interface ProductSingleAction {
    type: typeof GET_SINGLE;
    payload: {
        product: IProduct | null;
    }
}

export type ProductsActionsType = ProductsGetAllAction | ProductsLoadingAction | ProductSingleAction

// export interface ProductState {
//     readonly products: IProduct[];
//     readonly productsLoading: boolean;
// }
