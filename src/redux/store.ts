import {combineReducers, createStore} from 'redux';
import controllerReducer from './controllerReducer';
import tableReducer from './tableReducer';

const rootReducer = combineReducers({controllerReducer, tableReducer});

const store = createStore(rootReducer);
export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch