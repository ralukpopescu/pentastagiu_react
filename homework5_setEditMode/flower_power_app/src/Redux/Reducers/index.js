import { combineReducers } from 'redux';
import { uiReducer } from './ui';

export const reducers = combineReducers({
    ui: uiReducer
});