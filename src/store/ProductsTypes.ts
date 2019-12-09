import {IProduct} from "../components/products/ProductsData";

// export enum ProductActionTypes {
//     GET_ALL = 'GET_ALL',
//     LOADING = 'LOADING'
// }


export interface  ProductState {
    loading: boolean ;
    search: string | null;
    products: IProduct[] | null;
}

// Actions
export const LOADING = 'LOADING';
export const GET_ALL = 'GET_ALL';


export interface ProductsGetAllAction {
    type: typeof GET_ALL;
    products: IProduct[]
}

export interface ProductsLoadingAction {
    type: typeof LOADING;
}

export type ProductsActions = ProductsGetAllAction | ProductsLoadingAction

export interface ProductState {
    readonly products: IProduct[];
    readonly productsLoading: boolean;
}
