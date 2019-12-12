import {AdminPeoplesState, AdminPeoplesActionsTypes} from "./AdminPeoplesTypes";

const initialAdminPeopleState: AdminPeoplesState = {
    peoples: null,
    isLoading: false
};

export function adminPeopleReducer(
    state = initialAdminPeopleState,
    action: AdminPeoplesActionsTypes
): AdminPeoplesState {
    switch (action.type) {
        case "LOADING_STATUS_DONE":
            return {
                ...state,
                isLoading: true,
            };
        case "GET_PEOPLE":
            return {
                ...state,
                peoples: action.payload.peoples,
                isLoading: false
            };
        default:
            return state
    }
}
