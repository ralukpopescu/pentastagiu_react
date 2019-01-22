export const SHOW_LOADER = '[ui] Show spinner';
export const HIDE_LOADER = '[ui] Hide spinner';
export const START_EDIT = '[ui] Start edit';
export const STOP_EDIT = '[ui] Stop edit';

export const showLoader = () => ({
    type: SHOW_LOADER
});

export const hideLoader = () => ({
    type: HIDE_LOADER
});

export const startEdit = () => ({
    type: START_EDIT
});

export const stopEdit = () => ({
    type: STOP_EDIT
});
