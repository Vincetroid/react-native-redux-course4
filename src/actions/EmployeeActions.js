import firebase from 'firebase';
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS } from './types';
import { Actions } from 'react-native-router-flux';

export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({name, phone, shift}) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({name, phone, shift})
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                Actions.pop()
            });
    }
};

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();
    console.log('entro a employeesFetch')
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', snapshot => {
                console.log('entro a snapshot de employeesFetch y su val() es:')
                console.log(snapshot.val())
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};