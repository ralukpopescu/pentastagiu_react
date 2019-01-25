import { SHOW_LOADER, HIDE_LOADER, PRODUCT_EDIT_STARTED, PRODUCT_EDIT_FINISHED } from "../Actions/ui";


export function uiReducer(state = {
    showSpinner: false,
    productEdit: false
}, action) {

    switch(action.type) {
        case SHOW_LOADER:
            return {...state, showSpinner: true};
        case HIDE_LOADER:
            return {...state, showSpinner: false};  
        case PRODUCT_EDIT_STARTED:
            return {...state, productEdit: true};     
        case PRODUCT_EDIT_FINISHED:
            return {...state, productEdit: false};     
        default: 
            return state;
    }
}