import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import moivesReducers from "./reducer/moivesReducer";
import detailsReducers from "./reducer/detailsReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

const rootReducer = combineReducers({
    moivesReducers,
    detailsReducers
});


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(store)

export { store, history, persistor }



