import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import combineReducers from './reducers/index'
import App from './App';


const store = createStore(combineReducers, composeWithDevTools(
    applyMiddleware(thunk, logger)
));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

