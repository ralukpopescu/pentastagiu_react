import { API_REQUEST } from "../Actions/api";

export const api = ({dispatch}) => next => action => {
    if(action.type === API_REQUEST) {
        const {method, url, onSuccess, onError} = action.meta;
        const body = action.payload ? JSON.stringify(action.payload) : null;
        fetch(url, { method, body} )
            .then(response => response.json())
            .then(data => dispatch({type: onSuccess, payload: data}))
            .catch(error => dispatch({type: onError, payload: error}));
    }
    return next(action);
}