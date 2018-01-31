import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import RealworldApp from './RealworldApp';
import realWorldStore from './reducers/rootReducer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'


var App = () => (
    <HashRouter>
        <RealworldApp />
    </HashRouter>
);

let store = createStore(realWorldStore)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#realworld-app')
);
