import {AdminPeoplesActionsTypes, AdminPeoplesState, GET_ALL_PEOPLE, LOADING_STATUS_DONE} from "./AdminPeoplesTypes";

const initialAdminPeopleState: AdminPeoplesState = {
    peoples: null,
    loading: false
};

export function adminPeopleReducer(
    state = initialAdminPeopleState,
    action: AdminPeoplesActionsTypes
): AdminPeoplesState {
    switch (action.type) {
        case LOADING_STATUS_DONE:
            return {
                ...state,
                loading: true,
            };
        case GET_ALL_PEOPLE:
            return {
                ...state,
                peoples: action.payload.peoples,
                loading: false
            };
        default:
            return state
    }
}
