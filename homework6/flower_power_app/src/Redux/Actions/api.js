export const API_REQUEST = '[api] Api Request';

export const apiRequest = (url, method, body, onSuccess, onError) => ({
    type: API_REQUEST,
    payload: body,
    meta: {
        url, method, onSuccess, onError
    }
})