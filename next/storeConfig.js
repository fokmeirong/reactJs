import { createStore, applyMiddleware, combineReducers } from 'redux';
import moivesReducers from "./reducer/moivesReducer";
import detailsReducers from "./reducer/detailsReducer";

import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'


const rootReducer = combineReducers({
    moivesReducers,
    detailsReducers
});


export function initializeStore() {
    return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}


