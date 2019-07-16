import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

console.disableYellowBox = true;

class App extends Component {
    componentWillMount() {
        const firebaseConfig = {
            apiKey: 'AIzaSyAxZ0_LR6AdY8cfNAwaq09y6rzUmfHNB4I',
            authDomain: 'manager-e0d9b.firebaseapp.com',
            databaseURL: 'https://manager-e0d9b.firebaseio.com',
            projectId: 'manager-e0d9b',
            storageBucket: '',
            messagingSenderId: '190690262017',
            appId: '1:190690262017:web:0005ceb6f4fa7da3'
        };
        firebase.initializeApp(firebaseConfig);
    }

    render() {
        return(
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;