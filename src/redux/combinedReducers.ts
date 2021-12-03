import {combineReducers} from 'redux';
import controllerReducer from './controllerReducer';
import tableReducer from './tableReducer';

export default combineReducers({controllerReducer, tableReducer});