import {applyMiddleware, combineReducers, compose, createStore, Store} from "redux";
import {productsReducer} from "./products/ProductReducer";
import thunk from "redux-thunk";
import {basketReducer} from "./basket/BasketReducer";
import {adminPeopleReducer} from "./admin/AdminPeoplesReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    basket: basketReducer,
    adminPeople: adminPeopleReducer,
});

export type AppState = ReturnType<typeof  rootReducer>

export function configureStore(): Store<AppState> {
    const w: any = window as any;
    const composeEnhancers: any = w.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ ? w.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__: (f: any) => f || compose;
    return createStore(rootReducer, undefined, composeEnhancers(applyMiddleware(thunk)))
}
