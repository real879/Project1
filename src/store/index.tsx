import { createStore, applyMiddleware, Store, combineReducers, Reducer } from 'redux';
import thunk from 'redux-thunk';
import { logger } from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';
import{AppState} from './types';
const rootReducer: Reducer<AppState> = combineReducers<AppState>({});

export const rootStore : Store<AppState> = (
    createStore<AppState, any, any, any>(
        rootReducer,{},
        composeWithDevTools(applyMiddleware(logger, thunk))
    )
);