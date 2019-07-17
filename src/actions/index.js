import { EMAIL_CHANGED, PASSWORD_CHANGE } from './types';

console.log('Index de actions')
export const emailChanged = (text) => {
    console.log('Index de actions, dentro de emailChanged')
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    console.log('Index de actions, dentro de passwordChanged')
    return {
        type: PASSWORD_CHANGE,
        payload: text
    };
};