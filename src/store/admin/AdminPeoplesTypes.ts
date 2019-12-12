
export interface AdminPeoplesState {
    peoples: People[] | null;
    isLoading: boolean ;
}

// Actions
export const LOADING_STATUS_DONE = 'LOADING_STATUS_DONE';
export const GET_ALL_PEOPLE = 'GET_PEOPLE';
export const GET_SINGLE_PEOPLES = 'GET_SINGLE_PEOPLES';

export interface AdminPeopleGetAllAction {
    type: typeof GET_ALL_PEOPLE
    payload: {
        peoples: People[] | null
    }
}

export interface  AdminPeopleLoadingAction {
    type: typeof LOADING_STATUS_DONE
}

export type AdminPeoplesActionsTypes = AdminPeopleGetAllAction | AdminPeopleLoadingAction;

export interface People {
    id: number,
    name: string,
    nomeUtente: string,
    email: string,
    indirizzo: {
        street: string,
        suite: string,
        citta: string,
        codicePostale: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    telefono: string,
    website: string,
    azienda: {
        nome: string,
        catchPhrase: string,
        bs: string
    }
}
