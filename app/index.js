import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'

import RealWorldAppContainer from './components/RealWorldApp/RealWorldAppContainer';
import realWorldStore from './reducers/rootReducer'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';


var App = () => (
    <HashRouter>
        <RealWorldAppContainer />
    </HashRouter>
);

let store = createStore(realWorldStore, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter><App/></BrowserRouter>
    </Provider>,
    document.querySelector('#realworld-app')
);
