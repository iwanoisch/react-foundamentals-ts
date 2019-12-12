import { ThunkDispatch } from "redux-thunk";
import {
    AdminPeopleGetAllAction, AdminPeopleLoadingAction,
    AdminPeoplesState,
    AdminPeoplesActionsTypes,
    GET_ALL_PEOPLE,
    LOADING_STATUS_DONE,
    People
} from "./AdminPeoplesTypes";
import {restapi} from "../restapi/restapi";

type AdminPeoplesDispatch = ThunkDispatch<AdminPeoplesState, undefined, AdminPeoplesActionsTypes>

export function getPeoples() {
    return async (dispatch: AdminPeoplesDispatch) => {
        dispatch(isLoading());
        const res = await restapi.get('/users');
        dispatch(getPeoplesDone(res.data))
    }
}

export function isLoading(): AdminPeopleLoadingAction {
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
