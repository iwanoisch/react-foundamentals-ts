import {applyMiddleware, combineReducers, compose, createStore, Store} from "redux";
import {ProductsState} from "./ProductsTypes";
import {productsReducer} from "./ProductReducer";
import thunk from "redux-thunk";

export interface ApplicationState {
    products: ProductsState
}

const rootReducer = combineReducers<ApplicationState>({
    products: productsReducer,
});

export type AppState = ReturnType<typeof  rootReducer>

export function configureStore(): Store<ApplicationState> {
    const w: any = window as any;
    const composeEnhancers: any = w.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ ? w.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__: (f: any) => f || compose;
    return createStore(rootReducer, undefined, composeEnhancers(applyMiddleware(thunk)))
}
