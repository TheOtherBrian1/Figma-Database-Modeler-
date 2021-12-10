import {combineReducers, createStore, applyMiddleware } from 'redux';
import controllerReducer from './controllerReducer';
import tableReducer from './tableReducer';
import sendFigmaMessage from './middleware';

const rootReducer = combineReducers({controllerReducer, tableReducer});

const store = createStore(rootReducer, applyMiddleware(sendFigmaMessage));
export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch