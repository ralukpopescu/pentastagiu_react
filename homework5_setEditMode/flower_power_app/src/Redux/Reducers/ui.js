import { SHOW_LOADER, HIDE_LOADER, START_EDIT, STOP_EDIT } from "../Actions/ui";

export function uiReducer(state = {
    showSpinner: false,
    isInEditMode: false
}, action) {

    switch(action.type) {
        case SHOW_LOADER:
            return {...state, showSpinner: true};
        case HIDE_LOADER:
            return {...state, showSpinner: false};  
        case START_EDIT:
            return {...state, isInEditMode: true};
        case STOP_EDIT:
            return {...state, isInEditMode: false};
        default: 
            return state;
    }
}