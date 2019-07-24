
import { Actions } from 'react-native-router-flux';

export const TestAction = (text) => {
    return {
        type: 'test',
        payload: text
    };
};