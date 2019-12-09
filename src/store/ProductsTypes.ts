import {IProduct} from "../components/products/ProductsData";

// export enum ProductActionTypes {
//     GET_ALL = 'GET_ALL',
//     LOADING = 'LOADING'
// }


export interface ProductsState {
    loading: boolean ;
    products: IProduct[] | null;
}

// Actions
export const LOADING_DONE = 'LOADING_DONE';
export const GET_ALL = 'GET_ALL';


export interface ProductsGetAllAction {
    type: typeof GET_ALL;
    payload: {
        products: IProduct[] | null;
    }
}

export interface ProductsLoadingAction {
    type: typeof LOADING_DONE;
}

export type ProductsActionsType = ProductsGetAllAction | ProductsLoadingAction

// export interface ProductState {
//     readonly products: IProduct[];
//     readonly productsLoading: boolean;
// }
