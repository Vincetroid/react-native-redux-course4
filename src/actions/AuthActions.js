import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from './types';
import { Actions } from 'react-native-router-flux';

// console.log('Index de actions')
export const emailChanged = (text) => {
    // console.log('Index de actions, dentro de emailChanged')
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            // .catch(() => {
            //     firebase.auth().createUserWithEmailAndPassword(email, password)
            //         .then(user => loginUserSuccess(dispatch, user))
            //         .catch(() => loginUserFail(dispatch));
            // });
           
            .catch(() => loginUserFail(dispatch));
    }
};

const loginUserFail = (dispatch) => {
    console.log('loginUserFail')
    dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
    console.log('loginUserSuccess')
    dispatch({
        type: LOGIN_USER_SUCCESS, 
        payload: user
    });

    Actions.main();
};