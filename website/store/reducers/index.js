import {combineReducers} from 'redux';
import { orderReducer } from './ordersReducer';

export default combineReducers({
    order: orderReducer
})