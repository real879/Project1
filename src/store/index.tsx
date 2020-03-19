import { createStore, applyMiddleware, Store, combineReducers, Reducer } from 'redux';
import thunk from 'redux-thunk';
import { logger } from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';

import { AppState } from './types';
import { generalReducer } from './GeneralStore/reducers';

//REDUCER
const rootReducer : Reducer<AppState> = combineReducers<AppState>({
    general : generalReducer
});

//STATE
const preloadedState : AppState = {};

//MIDDLEWARE
const middleware = composeWithDevTools(applyMiddleware(
    logger, thunk
));

//STORE
export const rootStore : Store<AppState> =  createStore<AppState, any, any, any>(
    rootReducer,
    preloadedState,
    middleware
);