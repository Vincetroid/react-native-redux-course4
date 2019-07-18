import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

// console.log('Index de reducers')

export default combineReducers({
    auth: AuthReducer
});