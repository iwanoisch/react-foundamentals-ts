import { ThunkDispatch } from "redux-thunk";
import {
    AdminPeopleGetAllAction, AdminPeopleLoadingAction,
    AdminPeoplesState,
    AdminPeoplesActionsTypes,
    GET_ALL_PEOPLE,
    People, LOADING_STATUS_DONE
} from "./AdminPeoplesTypes";
import {restapi} from "../restapi/restapi";
import {LOADING_DONE} from "../products/ProductsTypes";

type AdminPeoplesDispatch = ThunkDispatch<AdminPeoplesState, undefined, AdminPeoplesActionsTypes>

export function getPeoples() {
    return async (dispatch: AdminPeoplesDispatch) => {
        dispatch(loading());
        const res = await restapi.get('/users');
        dispatch(getPeoplesDone(res.data))
    }
}

export function loading(): AdminPeopleLoadingAction {
    return {
        type: LOADING_STATUS_DONE
    }
}

export function getPeoplesDone(peoples: People[] | null): AdminPeopleGetAllAction {
    return {
        type: GET_ALL_PEOPLE,
        payload: {
            peoples: peoples
        }
    }
}
