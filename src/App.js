import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return(
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;