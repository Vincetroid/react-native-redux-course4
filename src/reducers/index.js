import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
// console.log('Index de reducers')

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer
});