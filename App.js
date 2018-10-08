/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStore, applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import AppReducer from './src/reducers';
import rootSaga from './src/sagas';
import RootStack from './src/components/rootStack.component';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
    AppReducer,
    compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <RootStack />
            </Provider>

        );
    }
}